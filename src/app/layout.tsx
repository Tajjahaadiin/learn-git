import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./global.css";
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: {
    template: "%s | TAjjz Porto",
    default: "Tajjz Porto",
  },
  description: "Official Web Portofolio By Tajjuddin",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
