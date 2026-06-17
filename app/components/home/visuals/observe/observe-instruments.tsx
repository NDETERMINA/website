import { ActInstrument } from "./instruments/act-instrument";
import { RankInstrument } from "./instruments/rank-instrument";
import { RetrieveInstrument } from "./instruments/retrieve-instrument";

export function ObserveInstruments() {
  return (
    <>
      <RankInstrument />
      <RetrieveInstrument />
      <ActInstrument />
    </>
  );
}
