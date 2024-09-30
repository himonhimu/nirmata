import StructuralDesignDrawing from "@/components/OurServices/StructuralDesignDrawing";

export default function Services({ params }) {
  const slug = params.service_slug;
  switch (slug) {
    case "architectural-design-drawing":
      return <>Custom change</>;
    case "structural-design-drawing":
      return <StructuralDesignDrawing />;
    default:
      return <h1>{slug}</h1>;
  }
}
