import Link from "next/link";

export function DocsPrevNext({
  prev,
  next
}: {
  prev?: { title: string; href: string };
  next?: { title: string; href: string };
}) {
  if (!prev && !next) return null;
  return (
    <nav className="docs-prevnext" aria-label="Pagination">
      {prev ? (
        <Link href={prev.href} className="docs-prevnext-tile">
          <div className="docs-prevnext-label">← Previous</div>
          <div className="docs-prevnext-title">{prev.title}</div>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={next.href} className="docs-prevnext-tile docs-prevnext-next">
          <div className="docs-prevnext-label">Next →</div>
          <div className="docs-prevnext-title">{next.title}</div>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
