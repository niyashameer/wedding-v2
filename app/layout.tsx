// This file intentionally left minimal.
// The real root layout lives at app/[locale]/layout.tsx
// so that next-intl can inject the correct locale into <html lang="...">

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
