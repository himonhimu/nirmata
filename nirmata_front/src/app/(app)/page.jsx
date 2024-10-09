import Welcome from "@/components/home/welcome";
import MainMaterials from "@/components/materials/main-materials";
import Client from "@/components/our-clients/client";
import MainServices from "@/components/services/main-services";
import Slideshow from "@/ui/slider";
import { services } from "./our-services/page";

export default function Home() {
  return (
    <>
      <Slideshow />

      <section className="container">
        <Welcome />
      </section>

      <section className="container">
        <MainServices services={services.slice(0, 6)} show_more={true} />{" "}
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
