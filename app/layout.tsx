// app/layout.tsx

export const metadata = {
  title: 'Tool Wikki',
  description: 'One place for all your essential tools.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
