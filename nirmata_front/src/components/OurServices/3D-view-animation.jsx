import styles from "./css/3D-view-animation.module.css";

export default function ThreeDAnimation() {
  return (
    <section className="container">
      {" "}
      <div className={styles.container}>
        <section className={"title"}>
          <h1>Professional 3D View Animation</h1>
          <p>
            Enhance your construction projects with stunning, realistic 3D
            animations that bring your designs to life.
          </p>
        </section>

        {/* Introduction Section */}
        <section className={styles.introduction}>
          <p className={styles.introText}>
            At <strong>Nirmata</strong>, we specialize in creating high-quality
            3D view animations that allow clients to visualize their projects
            before they are built. Our animations provide a clear, immersive
            preview, offering an interactive experience to better understand
            space, scale, and design elements. From residential buildings to
            commercial structures, our 3D view animations are designed to make
            every project come to life.
          </p>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefits}>
          <h2 className={styles.sectionTitle}>Why Use 3D View Animation?</h2>
          <div className={styles.benefitList}>
            <div className={styles.benefitItem}>
              <h3>Realistic Project Previews</h3>
              <p>
                Our 3D animations provide a realistic representation of your
                project, allowing you to visualize every detail before
                construction begins.
              </p>
            </div>
            <div className={styles.benefitItem}>
              <h3>Improved Design Communication</h3>
              <p>
                Convey design concepts more effectively to clients,
                stakeholders, and contractors, ensuring everyone is aligned on
                the vision.
              </p>
            </div>
            <div className={styles.benefitItem}>
              <h3>Cost-Efficient Modifications</h3>
              <p>
                Identify potential design issues early on, making revisions
                easier and less costly compared to post-construction changes.
              </p>
            </div>
            <div className={styles.benefitItem}>
              <h3>Enhanced Marketing and Sales</h3>
              <p>
                Use 3D animations to attract potential investors, buyers, or
                clients by showcasing a polished, professional view of the
                project.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.process}>
          <h2 className={styles.sectionTitle}>Our 3D Animation Process</h2>
          <div className={styles.processSteps}>
            <div className={styles.step}>
              <h3>Step 1: Consultation & Planning</h3>
              <p>
                We start by understanding your project&apos;s requirements,
                gathering architectural plans, and discussing your vision for
                the final animation.
              </p>
            </div>
            <div className={styles.step}>
              <h3>Step 2: 3D Modeling</h3>
              <p>
                Our team creates detailed 3D models based on the blueprints and
                design specifications to ensure accuracy and realism.
              </p>
            </div>
            <div className={styles.step}>
              <h3>Step 3: Animation & Rendering</h3>
              <p>
                We animate the 3D models, incorporating lighting, textures, and
                camera movements to deliver an immersive experience.
              </p>
            </div>
            <div className={styles.step}>
              <h3>Step 4: Review & Finalization</h3>
              <p>
                After reviewing the initial animation with you, we implement any
                requested changes and finalize the animation for delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className={styles.useCases}>
          <h2 className={styles.sectionTitle}>
            Where Can 3D Animations Be Used?
          </h2>
          <div className={styles.useCaseList}>
            <div className={styles.useCaseItem}>
              <h3>Residential Projects</h3>
              <p>
                Show potential home buyers or investors a realistic tour of
                residential properties, highlighting interior layouts and
                exterior designs.
              </p>
            </div>
            <div className={styles.useCaseItem}>
              <h3>Commercial Buildings</h3>
              <p>
                Present office spaces, shopping centers, or hotels with a
                detailed 3D preview to attract investors and clients.
              </p>
            </div>
            <div className={styles.useCaseItem}>
              <h3>Urban Planning</h3>
              <p>
                Use 3D view animations to visualize large-scale developments and
                urban plans, helping city planners and developers see the big
                picture.
              </p>
            </div>
            <div className={styles.useCaseItem}>
              <h3>Marketing & Sales</h3>
              <p>
                Create visually engaging marketing materials with 3D animations,
                making your project stand out in the competitive construction
                industry.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
