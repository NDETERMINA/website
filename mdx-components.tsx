import type { MDXComponents } from "mdx/types";

import { mdxComponents } from "@/app/components/docs/mdx";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components
  };
}
