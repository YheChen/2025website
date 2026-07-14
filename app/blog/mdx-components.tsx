import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

/** Component overrides passed to MDXRemote. */
export const mdxComponents = {
  a: ({ href = "", ...props }: ComponentPropsWithoutRef<"a">) => {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return <Link href={href} {...props} />;
    }
    return <a href={href} target="_blank" rel="noreferrer" {...props} />;
  },
};
