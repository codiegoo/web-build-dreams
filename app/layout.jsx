import { Inter, Lato } from "next/font/google";
import './main.sass'

const inter = Inter({ subsets: ["latin"], weight: "900" });
const lato = Lato({ subsets: ["latin"], weight: "400" });


export const metadata = {
  title: "WebBuildDreams",
  description: "Sito constructor de paginas web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
