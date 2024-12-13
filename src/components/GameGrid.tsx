import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { BiError } from "react-icons/bi";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    setIsSpinning(true); // Start spinning
    setTimeout(() => setIsSpinning(false), 2000);
  };

  if (error)
    return (
      <Box margin={10}>
        <Text
          display="flex"
          alignItems="center"
          fontSize={"4xl"}
          color={"red.300"}
        >
          :( Oops! {error.message}{" "}
          <BiError
            size={40}
            style={{
              marginLeft: "8px",
              animation: isSpinning ? "spin 1s linear infinite" : "none",
              color: isSpinning ? "orange" : "",
            }}
            onClick={handleClick}
          />
          {/* <Image /> */}
        </Text>
        <Text>
          For API-key contact - <i>sushant</i>.k aka riddler..
        </Text>
      </Box>
    );
  // console.log(games);
  const fetchedGameTillNow =
    data?.pages.reduce((acc, game) => game.results.length + acc, 0) || 0;
  return (
    <InfiniteScroll
      dataLength={fetchedGameTillNow}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner marginLeft={"50%"} marginTop={20} />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game}></GameCard>
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {/* {hasNextPage && (
        <Button marginBottom={10} marginTop={2} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )} */}
    </InfiniteScroll>
  );
};

const style = document.createElement("style");
style.innerHTML = `
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;
document.head.appendChild(style);

export default GameGrid;
