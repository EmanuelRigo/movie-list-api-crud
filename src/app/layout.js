import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import MovieProvider from "@/context/MovieContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "MovieList",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MovieProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} `}>
          <div className="h-screen w-screen flex items-center">
            {/* <NavBar></NavBar> */}
            <div>{children}</div>
          </div>
        </body>{" "}
      </MovieProvider>
    </html>
  );
}
