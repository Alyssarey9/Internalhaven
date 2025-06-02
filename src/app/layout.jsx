import "./globals.css";

export const metadata = {
  title: "Internal Haven - Professional Life Coaching",
  description: "Transform your life with professional life coaching. Discover your purpose and achieve your goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Bellota:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Gochi+Hand&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-bellota">
        {children}
      </body>
    </html>
  );
}