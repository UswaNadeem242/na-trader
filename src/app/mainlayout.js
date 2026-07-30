"use client";

import { usePathname } from "next/navigation";

export default function MainLayout({ children }) {
  const pathname = usePathname();

  return (
    <main className={pathname === "/" ? "" : ""}>
      {children}
    </main>
  );
}