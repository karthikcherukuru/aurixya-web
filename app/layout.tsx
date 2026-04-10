import type { Metadata } from "next";
import { Inter, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Load Pixelify Sans
const pixelify = Pixelify_Sans({ 
  subsets: ["latin"],
  variable: "--font-pixelify",
});

export const metadata: Metadata = {
  title: "Aurixya",
  description: "Next Generation Web & AI Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="snap-y snap-mandatory scroll-smooth">
      <body className={`${inter.className} ${pixelify.variable} bg-black text-white`}
        suppressHydrationWarning={true} 
      >
        {children}
        
      </body>
    </html>
  );
}