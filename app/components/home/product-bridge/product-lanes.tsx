import { ActLane } from "./lanes/act-lane";
import { RankLane } from "./lanes/rank-lane";
import { SearchLane } from "./lanes/search-lane";

export function ProductLanes() {
  return (
    <>
      <RankLane />
      <SearchLane />
      <ActLane />
    </>
  );
}
