import Image from "next/image";
import styles from "./css/main-materials.module.css";

import cement from "@/assets/materials-picture/Cement photo.jpg";
import domarStand from "@/assets/materials-picture/Domar Sand.jpg";
import handMakeIt from "@/assets/materials-picture/Hand Make Brick-1.jpg";
import bigStone from "@/assets/materials-picture/indian stone Big Size.jpg";
import smallStone from "@/assets/materials-picture/Indian stone Small  Size.jpg";
import localStand from "@/assets/materials-picture/Local Sand.jpg";
import machineIt from "@/assets/materials-picture/machine it.jpg";
import rod from "@/assets/materials-picture/Rod photo.jpg";

const materials = [
  {
    image: cement,
    name: "সিমেন্ট (বস্তা)",
    price: "৫২৫৳-৫৬০৳",
    updatedDate: "2024-10-07T10:27:54.086Z",
  },
  {
    image: rod,
    name: "রড (টন)",
    price: "৮৮,০০০৳- ৯৪,০০০৳",
    updatedDate: "2024-10-07T10:27:54.086Z",
  },
  {
    image: machineIt,
    name: "মেশিনে তৈরি ইট (১০০০ পিস)",
    price: "৯,৬০০৳-৯,৭০০৳",
    updatedDate: "2024-10-07T10:27:54.086Z",
  },
  {
    image: handMakeIt,
    name: "হাতে কাটা ইট (১০০০ পিস)",
    updatedDate: "2024-10-07T10:27:54.086Z",
    price: "১০,৮০০৳-১১,০০০৳",
  },
  {
    image: "/",
    name: "মোটা বালি (৭৫০ cft)",
    price: "১৩,৫০০৳-১৩,৬০০৳",
    updatedDate: "2024-10-07T10:27:54.086Z",
  },
  {
    image: localStand,
    name: "চিকন বালি (৭৫০ cft)",
    price: "৮,৮০০৳-৯,০০০৳",
    updatedDate: "2024-10-07T10:27:54.086Z",
  },
  {
    image: domarStand,
    name: "ডোমার বালি (cft)",
    price: "৮০৳-৮৫৳",
    updatedDate: "2024-10-07T10:27:54.086Z",
  },
  {
    image: bigStone,
    name: "ইন্ডিয়ান পাথর (সাইজ ৫/৮)",
    price: "১৭৮৳-১৮০৳/cf",
    updatedDate: "2024-10-07T10:27:54.086Z",
  },
  {
    image: smallStone,
    name: "ইন্ডিয়ান পাথর (সাইজ ৩/৪)",
    price: "১৮০৳-১৮৪৳/cf",

    updatedDate: "2024-10-07T10:27:54.086Z",
  },
];

export default function MainMaterials() {
  return (
    <div className={styles.materials}>
      <div className="title">
        <h1>Materials</h1>
        <p>
          High-quality materials are the foundation of any successful project.
          Explore our range of durable, reliable, and sustainable materials to
          ensure your construction stands the test of time.
        </p>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Updated Date</th>
            </tr>
          </thead>
          <tbody>
            {materials.map(({ image, name, price, updatedDate }, index) => (
              <tr key={name}>
                <td>{index + 1}</td>
                <td>
                  <div className={styles.imageWrapper}>
                    <Image
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      src={image.src || "/no-image.png"}
                      alt={name}
                      fill
                    />
                  </div>
                </td>
                <td>{name}</td>
                <td className={styles.price}>
                  <strong>{price}</strong>
                </td>
                <td>
                  <time dateTime={updatedDate}>
                    <strong> {new Date(updatedDate).toDateString()}</strong>
                  </time>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
