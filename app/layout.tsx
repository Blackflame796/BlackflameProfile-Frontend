import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";
import Header from "./components/Header/Header";

export const metadata: Metadata = {
  title: "Blackflame",
  description: "Blackflame",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={styles.Container}>
          {children}
        </main>
      </body>
    </html>
  );
}
