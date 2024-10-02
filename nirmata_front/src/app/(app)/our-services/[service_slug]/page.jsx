import ThreeDAnimation from "@/components/OurServices/3D-view-animation";
import ArchitecturalDesignDrawing from "@/components/OurServices/architectural-design-drawing";
import BuildingConstruction from "@/components/OurServices/building-construction";
import BuildingConstructionSupervision from "@/components/OurServices/building-construction-supervision";
import DigitalSurvey from "@/components/OurServices/digital-survey";
import ElectricalDesignDrawing from "@/components/OurServices/electrical-design-drawing";
import EstimateCost from "@/components/OurServices/estimate-cost";
import PlanApproval from "@/components/OurServices/plan-approval";
import SoilTest from "@/components/OurServices/soil-test";
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
    case "estimate-cost":
      return <EstimateCost />;
    case "plan-approval":
      return <PlanApproval />;
    case "digital-survey":
      return <DigitalSurvey />;
    case "soil-test":
      return <SoilTest />;
    case "building-construction-supervision":
      return <BuildingConstructionSupervision />;
    case "building-construction":
      return <BuildingConstruction />;
    default:
      return <h1>{slug}</h1>;
  }
}
