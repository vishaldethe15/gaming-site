import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Best Online Guess Game ",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="pb-4 sm:pb-8 lg:pb-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
