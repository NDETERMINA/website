import { productRoutes } from "../content";
import { ProductBridgeInstrument } from "./product-bridge-instrument";
import { ProductRouteCard } from "./product-route-card";

export function ProductRouteBridge() {
  return (
    <section className="home-product-bridge" id="product-systems" aria-labelledby="product-systems-title">
      <div className="home-product-bridge-copy">
        <p className="home-label">product systems</p>
        <h2 id="product-systems-title">Three behavior surfaces. One release question.</h2>
        <p>
          Determina starts from the kind of AI system you are shipping, then builds the
          rehearsal world, evidence packet, and release decision around that behavior.
        </p>
      </div>
      <div className="home-product-board">
        <ProductBridgeInstrument />
        <div className="home-product-routes" aria-label="Determina product routes">
          {productRoutes.map((route) => (
            <ProductRouteCard key={route.href} route={route} />
          ))}
        </div>
      </div>
    </section>
  );
}
