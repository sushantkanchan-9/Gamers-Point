import APIClient from "../services/apiClient";
import { ScreenShot } from "../entities/ScreenShots";
import { useQuery } from "@tanstack/react-query";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
