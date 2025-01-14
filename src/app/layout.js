import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const BricolageGrotesqueFonts = Bricolage_Grotesque({
  weight: '400',
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
      </body>
    </html>
  );
}
