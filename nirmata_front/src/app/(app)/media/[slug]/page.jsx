export default function SlugPage({ params }) {
  return (
    <section className="container">
      <h1>{params.slug}</h1>
    </section>
  );
}
