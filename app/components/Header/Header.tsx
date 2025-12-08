export default function Header({ title }) {
  return (
    <>
      <div className="row justify-content-center">
        <h1 className="section-title text-center mt-4" data-aos="fade-up">
          {title}
        </h1>
        <div
          className="col-md-6 text-center"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            voluptas ut dolorum consequuntur, adipisci repellat! Eveniet commodi
            voluptatem voluptate, eum minima, in suscipit explicabo voluptatibus
            harum, quibusdam ex repellat eaque!
          </p>
        </div>
      </div>
    </>
  );
}
