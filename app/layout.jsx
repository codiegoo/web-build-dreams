import { Inter, Lato } from "next/font/google";
import './main.sass';


const inter = Inter({ subsets: ["latin"], weight: "900", variable: "--font-inter" });
const lato = Lato({ subsets: ["latin"], weight: "400", variable: "--font-lato" });

export const metadata = {
  title: "WebBuildDreams",
  description: "Sitio constructor de paginas web.",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={`${lato.variable} ${inter.variable}`}>
          {children}
        </body>
      </html>
  );
}
