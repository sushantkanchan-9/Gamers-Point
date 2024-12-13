import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailers = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (error) throw error;

  if (isLoading) return <Spinner />;

  const first = data?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls></video>
  ) : null;
};

export default GameTrailers;
