import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient, { FetchResponse } from "../services/apiClient";
import useGameStore from "../store";
import { Game } from "../entities/Game";

const gameService = new ApiClient<Game>("/games");
const useGames = () => {
  const gameQuery = useGameStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    staleTime: ms("24h"),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
