import Slider from "@/components/home/slider";
import Client from "@/components/our-clients/client";
import MainServices from "@/components/services/main-services";

export default function Home() {
  return (
    <>
      <Slider />

      <section className="container">
        <MainServices />
      </section>

      <section className="container">
        <Client />
      </section>
    </>
  );
}
