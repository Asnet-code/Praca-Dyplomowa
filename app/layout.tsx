import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav/NavBar";
import toast, { Toaster } from "react-hot-toast";
import CartProvider from "@/providers/CartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asnet",
  description: "Asnet Sklep Komputerowy",
  openGraph: {
    title: "Asnet",
    description: "Asnet Sklep Komputerowy",
    url: "https://www.asnet-komputery.vercel.app",
    siteName: "Asnet Sklep komputerowy",
    images: [
      {
        url: "https://www.statlook.com/pl/wp-content/uploads/sites/4/2020/01/ewidencja-sprzetu-komputerowego.jpg",
        width: 1260,
        height: 800,
        alt: "Asnet Sklep Komputerowy",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow">{children}</main>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
