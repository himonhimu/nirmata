import ThreeDAnimation from "@/components/OurServices/3D-view-animation";
import ArchitecturalDesignDrawing from "@/components/OurServices/architectural-design-drawing";
import ElectricalDesignDrawing from "@/components/OurServices/electrical-design-drawing";
import StructuralDesignDrawing from "@/components/OurServices/StructuralDesignDrawing";

export default function Services({ params }) {
  const slug = params.service_slug;
  switch (slug) {
    case "architectural-design-drawing":
      return <ArchitecturalDesignDrawing />;
    case "structural-design-drawing":
      return <StructuralDesignDrawing />;
    case "3D-view-animation":
      return <ThreeDAnimation />;
    case "electrical-design-drawing":
      return <ElectricalDesignDrawing />;
    default:
      return <h1>{slug}</h1>;
  }
}
