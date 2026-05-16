import { DocsCopyButton } from "./copy-button";

export function DocsCodeBlock({
  code,
  language,
  wrap = false
}: {
  code: string;
  language?: string;
  wrap?: boolean;
}) {
  return (
    <div className="docs-code">
      <div className="docs-code-head">
        <span className="docs-code-lang">{language ?? "shell"}</span>
        <DocsCopyButton value={code} />
      </div>
      <pre className={wrap ? "wrap" : undefined}>{code}</pre>
    </div>
  );
}
