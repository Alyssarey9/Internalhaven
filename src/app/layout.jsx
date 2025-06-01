import "./globals.css";

export const metadata = {
  title: "Internal Haven - Professional Life Coaching",
  description: "Transform your life with professional life coaching. Discover your purpose and achieve your goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}