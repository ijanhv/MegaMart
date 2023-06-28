import AppBar from "@/components/AppBar";
import "./../globals.css";


export const metadata = {
  title: "MegaMart",
  description: "A ecommerce app using Next and TypeScript",
};

export default function VendorLayout({ children }: { children: React.ReactNode }) {
    
  return (
    <html lang="en">
      <body>
        
        {children}
      </body>
    </html>
  );
}
