import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({ src: "./fonts/aria_black.woff2" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${myFont.className} bg-fooBlue`}>
        <header></header>
        <main className="px-10">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
