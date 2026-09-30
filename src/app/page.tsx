"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/en");
  }, [router]);

  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/en" />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>
          Redirecting to <Link href="/en">/en</Link>...
        </p>
      </body>
    </html>
  );
}
