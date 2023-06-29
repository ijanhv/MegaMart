import AppBar from "@/components/AppBar";
import "./../globals.css";
import SecondaryAppBar from "@/components/SecondaryAppBar";
import Footer from "@/components/Footer/Footer";
import Providers from "@/components/Providers";
import { ReactQueryProvider } from "@/components/ReactQueryProvider";

export const metadata = {
  title: "MegaMart",
  description: "A ecommerce app using Next and TypeScript",
};

interface IProps {
  children: React.ReactNode;
}

export default async function UserLayout({ children }: IProps) {

  return (
    <html lang="en">
      <body>

        <Providers>
          <ReactQueryProvider >
            <AppBar />
            <SecondaryAppBar />
            {children}
            <Footer />
            </ReactQueryProvider>
        </Providers>

      </body>
    </html>
  );
}
