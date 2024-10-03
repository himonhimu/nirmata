import Client from "@/components/our-clients/client";
import MainServices from "@/components/services/main-services";
import Slideshow from "@/ui/slider";

export default function Home() {
  return (
    <>
      <Slideshow />

      <section className="container">
        <MainServices />
      </section>

      <section className="container">
        <Client />
      </section>
    </>
  );
}
