import MainFooter from "@/components/footer/main-footer";
import Header from "@/ui/header";

export const metadata = {
  title:
    "Nirmata - Your Trusted Partner for Construction and Design in Rajshahi, Bangladesh",
  description:
    "Nirmata is a trusted name in the construction industry, offering a complete range of services including architectural design, construction, and high-quality materials supply. Located in Rajshahi, Bangladesh, our experienced team is committed to delivering precision, innovation, and client-focused results on every project. From 3D visualization and cost estimation to comprehensive project management, Nirmata ensures a seamless building process from start to finish. Contact us today to bring your vision to life with expert consultancy and unparalleled service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
