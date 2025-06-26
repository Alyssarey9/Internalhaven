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
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Coming+Soon&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-coming-soon">
        {children}
      </body>
    </html>
  );
}