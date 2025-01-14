import { Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

// Spécifier les sous-ensembles de la police
const BricolageGrotesqueFonts = Bricolage_Grotesque({
  weight: '400',
  subsets: ['latin'],  // Spécifier les sous-ensembles
});

export const metadata = {
  title: "Tack Movies",
  description: "Découvrez les films populaires, les séries et plus encore sur Tack Movies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={BricolageGrotesqueFonts.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
