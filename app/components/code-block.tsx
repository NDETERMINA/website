export function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="mono w-full min-w-0 max-w-full whitespace-pre-wrap break-words rounded-md border p-4 text-sm leading-7 theme-code [overflow-wrap:anywhere]">
      {code}
    </pre>
  );
}
