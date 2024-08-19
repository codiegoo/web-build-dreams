import { Inter, Lato } from "next/font/google";
import Head from "next/head"; // Importa el componente Head
import './main.sass';

const inter = Inter({ subsets: ["latin"], weight: "900", variable: "--font-inter" });
const lato = Lato({ subsets: ["latin"], weight: "400", variable: "--font-lato" });

export const metadata = {
  title: "WebBuildDreams",
  description: "Sitio constructor de páginas web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={`${lato.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
