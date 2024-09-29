import { FaBuilding, FaDraftingCompass, FaLaptopHouse } from "react-icons/fa";
import styles from "./main-services.module.css";
import {
  Gi3dGlasses,
  GiElectric,
  GiMaterialsScience,
  GiMoneyStack,
  GiTestTubes,
} from "react-icons/gi";
import { FiActivity } from "react-icons/fi";

import ServiceCard from "./service-card";
import { MdApproval, MdSupervisedUserCircle } from "react-icons/md";

const services = [
  {
    id: 1,
    title: "Architectural Design and Drawing",
    description:
      "We create innovative and functional architectural designs, blending aesthetics with practicality to meet your unique vision.",
    icon: <FaDraftingCompass />,
  },
  {
    id: 2,
    title: "Structural Design and Drawing",
    description:
      "Our team provides accurate and safe structural designs to ensure your building stands strong and meets all engineering standards.",
    icon: <FaBuilding />,
  },
  {
    id: 3,
    title: "3D View and Animation",
    description:
      "Experience your future building with our realistic 3D views and animations, offering a virtual tour before construction begins.",
    icon: <Gi3dGlasses />,
  },
  {
    id: 4,
    title: "Electrical Design and Drawing",
    description:
      "We offer detailed electrical design services, ensuring your building is safe, efficient, and meets all regulations.",
    icon: <GiElectric />,
  },
  {
    id: 5,
    title: "Estimate Cost",
    description:
      "Receive a precise estimate of your project’s cost to help you plan your budget with confidence and avoid surprises.",
    icon: <GiMoneyStack />,
  },
  {
    id: 6,
    title: "Plan Approval (RDA/ Pourashava)",
    description:
      "We assist in obtaining all necessary approvals from the relevant authorities, ensuring your project complies with local regulations.",
    icon: <MdApproval />,
  },
  {
    id: 7,
    title: "Digital Survey",
    description:
      "Our digital survey services use the latest technology to accurately measure and map your property, providing essential data for planning and design.",
    icon: <FiActivity />,
  },
  {
    id: 8,
    title: "Soil Test",
    description:
      "We perform thorough soil tests to ensure your site is suitable for construction, guaranteeing the safety and durability of your building.",
    icon: <GiTestTubes />,
  },
  {
    id: 9,
    title: "Building Construction Supervision",
    description:
      "Our expert supervisors monitor every stage of construction to ensure your project is executed with precision and quality.",
    icon: <MdSupervisedUserCircle />,
  },
  {
    id: 10,
    title: "Building Construction",
    description:
      "From foundation to finish, we handle all aspects of building construction, delivering high-quality results on time and within budget.",
    icon: <FaLaptopHouse />,
  },
  {
    id: 11,
    title: "Construction Materials Supply",
    description:
      "We supply high-grade construction materials, ensuring that your project is built with durable and reliable resources.",
    icon: <GiMaterialsScience />,
  },
];

export default function MainServices() {
  return (
    <div>
      <div className="title">
        <h1>Our Services</h1>

        <p>
          At Nirmata, we provide a comprehensive range of professional services
          tailored to meet all your construction and architectural needs. From
          design to execution, our expert team ensures quality and excellence in
          every step of your project.
        </p>
      </div>

      <div className={styles.cards}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <div>
        <h2>This is server config test server</h2>
      </div>
    </div>
  );
}
