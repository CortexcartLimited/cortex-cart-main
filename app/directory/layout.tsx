// app/(landing)/layout.tsx
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Note: No Navbar or Footer components here! */}
        <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}