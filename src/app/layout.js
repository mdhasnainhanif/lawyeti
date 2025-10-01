import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--poppins",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Law Yeti",
  description: "Lawyers on demand, for free.",
  icons: {
    icon: "/assets/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}  antialiased`}>
        <main className="bg-[#090909] text-white overflow-hidden">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
