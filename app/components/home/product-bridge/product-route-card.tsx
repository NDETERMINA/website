import Link from "next/link";

import { ArrowMark } from "@/app/components/system/system-page";
import { productRoutes } from "../content";
import { ProductRouteGlyph } from "./product-route-glyph";

type ProductRoute = (typeof productRoutes)[number];

export function ProductRouteCard({ route }: { route: ProductRoute }) {
  return (
    <Link className="home-product-route" href={route.href}>
      <span className="home-product-route-number">{route.number}</span>
      <span className="home-product-route-main">
        <strong>{route.label}</strong>
        <em>{route.detail}</em>
      </span>
      <ProductRouteGlyph type={route.type} />
      <span className="home-product-route-question">{route.question}</span>
      <span className="home-product-route-proof">
        <small>{route.incident}</small>
        <small>{route.returns}</small>
      </span>
      <span className="home-product-route-action">
        View product
        <ArrowMark />
      </span>
    </Link>
  );
}
