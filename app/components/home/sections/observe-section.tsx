import { productRoutes } from "../content";
import { HeroDiagram as ObserveParityDiagram } from "../hero/hero-diagram/observe-parity-diagram";
import { ProductRouteCard } from "../product-bridge/product-route-card";
import { ObserveFeatureStrip } from "../visuals/observe/observe-feature-strip";

export function ObserveSection() {
  return (
    <section className="home-section observe-section observe-parity-section" id="observe" aria-labelledby="observe-title">
      <div className="observe-parity-copy">
        <p className="home-label">03 / Observe Behavior</p>
        <h2 id="observe-title">
          <span>Observe what</span>
          <span>the system</span>
          <span>actually does.</span>
        </h2>
        <p>
          We watch ranking shifts, source paths,
          <br />
          and tool effects as behavior unfolds
          <br />
          in a rehearsal world.
          <br />
          <br />
          Final answers aren&rsquo;t enough.
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
              Live traces from rehearsal
              <br />
              world conditions.
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
          <p className="home-label">Product Systems</p>
          <h3 id="observe-product-systems-title">Rank, retrieve, or act.</h3>
          <p>The same observation layer adapts to the behavior your release can change.</p>
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
