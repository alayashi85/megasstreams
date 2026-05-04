'use client';

import { useEffect } from 'react';

export default function RootPage() {
  useEffect(() => {
    window.location.href = '/en';
  }, []);

  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/en" />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>Redirecting to <a href="/en">/en</a>...</p>
      </body>
    </html>
  );
}
