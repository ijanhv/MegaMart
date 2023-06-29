import AppBar from "@/components/AppBar";
import "./../globals.css";
import Navbar from "@/components/Vendor/Navbar";
import Sidebar from "@/components/Vendor/Sidebar";


export const metadata = {
  title: "MegaMart",
  description: "A ecommerce app using Next and TypeScript",
};

export default function VendorLayout({ children }: { children: React.ReactNode }) {
    
  return (
    <html lang="en">
      <body>
      <Navbar />
          <Sidebar />
        {children}
      </body>
    </html>
  );
}
