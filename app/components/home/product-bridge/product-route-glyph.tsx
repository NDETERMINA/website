import { ReactElement } from "react";
import { ActGlyph } from "./glyphs/act-glyph";
import { RankGlyph } from "./glyphs/rank-glyph";
import { RetrieveGlyph } from "./glyphs/retrieve-glyph";
import { ProductRouteType } from "./glyphs/product-route-type";

export function ProductRouteGlyph({ type }: { type: ProductRouteType }) {
  const glyphs = {
    rank: <RankGlyph />,
    retrieve: <RetrieveGlyph />,
    act: <ActGlyph />
  } satisfies Record<ProductRouteType, ReactElement>;

  return glyphs[type];
}
