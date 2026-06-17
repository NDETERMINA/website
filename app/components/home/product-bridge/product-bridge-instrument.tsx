import { ProductBridgeCore } from "./product-bridge-core";
import { ProductInstrumentDefs } from "./product-instrument-defs";
import { ProductIntakeField } from "./product-intake-field";
import { ProductLanes } from "./product-lanes";
import { ProductReviewStates } from "./product-review-states";

export function ProductBridgeInstrument() {
  return (
    <svg className="home-product-instrument" viewBox="0 0 980 430" aria-hidden="true">
      <ProductInstrumentDefs />
      <g className="product-instrument-rules">
        <path d="M42 52 H930" />
        <path d="M42 374 H930" />
        <path d="M118 30 V394" />
        <path d="M804 30 V394" />
        <path d="M512 36 V392" />
      </g>
      <ProductIntakeField />
      <ProductBridgeCore />
      <ProductLanes />
      <ProductReviewStates />
    </svg>
  );
}
