export function PacketDocument() {
  return (
    <g className="packet">
      <path className="packet-shadow-page" d="M438 118 H626 L690 180 V436 H438 Z" />
      <path className="packet-back-page" d="M418 96 H606 L674 162 V416 H418 Z" />
      <path className="packet-front-page" d="M398 76 H588 L656 144 V398 H398 Z" />
      <path d="M588 76 V144 H656" />
      <path className="packet-fold" d="M618 340 L656 398 H600 Z" />
      <path d="M436 150 H570" />
      <path d="M436 260 H612" />
      <path d="M436 314 H590" />
      <path d="M436 358 H620" />
      <text x="436" y="124">evidence packet</text>
      <text className="packet-id" x="436" y="186">det-9183</text>
      <text className="packet-meta" x="436" y="216">assembled 05 / 14 / 25</text>
      <text className="packet-meta" x="436" y="240">cohort: enterprise</text>
      <text className="packet-meta" x="436" y="408">43 artifacts / 7 findings</text>
      <path className="packet-barcode" d="M438 430 V462 M444 430 V462 M452 430 V462 M462 430 V462 M468 430 V462 M482 430 V462 M490 430 V462 M502 430 V462 M508 430 V462 M520 430 V462 M532 430 V462 M538 430 V462" />
    </g>
  );
}
