"use client";

import Link from "next/link";
import { useState } from "react";

export default function HoverPrefetchLink({ href, className, children }) {
  const [active, setActive] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setActive(true)}
      prefetch={active ? null : false}
      className={className}
    >
      {children}
    </Link>
  );
}
