import AppBar from "@/components/AppBar";
import "./globals.css";
import Providers from "@/components/Providers";
import SecondaryAppBar from "@/components/SecondaryAppBar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "MegaMart",
  description: "A ecommerce app using Next and TypeScript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
   
          <AppBar />
          <SecondaryAppBar />

   
         
          {children}
          <Footer />

        </Providers>
      </body>
    </html>
  );
}
