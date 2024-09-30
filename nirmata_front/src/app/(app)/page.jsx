import MainServices from "@/components/services/main-services";
import Slider from "@/components/home/slider";

export default function Home() {
  return (
    <>
      <Slider />

      <div className="container">
        <MainServices />
      </div>
    </>
  );
}
