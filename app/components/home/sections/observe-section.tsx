import { productRoutes } from "../content";
import { HeroDiagram as ObserveParityDiagram } from "../hero/hero-diagram/observe-parity-diagram";
import { ProductRouteCard } from "../product-bridge/product-route-card";
import { ObserveFeatureStrip } from "../visuals/observe/observe-feature-strip";

export function ObserveSection() {
  return (
    <section className="home-section observe-section observe-parity-section" id="observe" aria-labelledby="observe-title">
      <div className="observe-parity-copy">
        <p className="home-label section-eyebrow">03 / Observe Behavior</p>
        <h2 id="observe-title" className="section-title-serif">
          <span>Watch behavior</span>
          <span>change in the</span>
          <span>rehearsal.</span>
        </h2>
        <p className="section-copy">
          Final answers are not enough. Determina records rank movement,
          retrieval paths, and tool effects while the release runs.
        </p>
        <div className="observe-observed-note" aria-label="Behavior observed">
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M16 4 V9 M16 23 V28 M4 16 H9 M23 16 H28" />
            <circle cx="16" cy="16" r="2.4" />
            <circle cx="9.5" cy="9.5" r="1.4" />
            <circle cx="22.5" cy="9.5" r="1.4" />
            <circle cx="9.5" cy="22.5" r="1.4" />
            <circle cx="22.5" cy="22.5" r="1.4" />
          </svg>
          <div>
            <span>Behavior observed</span>
            <p>
              Live traces from rank,
              <br />
              retrieve, and act runs.
            </p>
          </div>
        </div>
      </div>
      <div className="observe-parity-layout">
        <ObserveParityDiagram />
      </div>
      <ObserveFeatureStrip />
      <div className="observe-product-routes" id="product-systems" aria-labelledby="observe-product-systems-title">
        <div className="observe-product-routes-copy">
          <p className="home-label section-eyebrow">Product routes</p>
          <h3 id="observe-product-systems-title" className="card-title">Choose the system behavior to inspect.</h3>
          <p className="section-copy">
            Each product route opens the evidence pattern for recommender,
            search, or agent releases.
          </p>
        </div>
        <div className="home-product-routes" aria-label="Determina product routes">
          {productRoutes.map((route) => (
            <ProductRouteCard key={route.href} route={route} />
          ))}
        </div>
      </div>
    </section>
  );
}
