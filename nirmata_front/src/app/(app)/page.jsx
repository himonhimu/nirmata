import MainServices from "@/components/services/main-services";
import Slider from "@/components/home/slider";
import MainMaterials from "@/components/materials/main-materials";
import Client from "@/components/our-clients/client";

export default function Home() {
  return (
    <>
      <Slider />

      <section className="container">
        <MainServices />
      </section>

      <section className="container">
        <MainMaterials />
      </section>

      <section className="container">
        <Client />
      </section>
    </>
  );
}
