function ContactMe() {
  return (
    <section className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <div className="w-full">
        <h2 id="contact" className="secondary-title">
          Contact Me
        </h2>
        <p className="section-paragraph">
          Ive had the pleasure of working with multiple blas and multiple blas
        </p>
        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
          <div className="space-y-12">
            <div>
              <label
                htmlFor=""
                className="text-white block mb-6 text-xl font-bold"
              >
                Name
              </label>
              <input
                type="text"
                className="w-full border border-input-border bg-input px-4 py-4"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="text-white block mb-6 text-xl font-bold"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full border border-input-border bg-input px-4 py-4"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="text-white block mb-6 text-xl font-bold"
              >
                Message
              </label>
              <textarea className="w-full border border-input-border bg-input px-4 py-4" />
            </div>
            <button className="px-6 py-2 bg-theme text-white font-bold">
              Send it!
            </button>
          </div>
          <div className="mt-12">
            <p className="text-secondary">0432 331 381</p>
            <a
              href="mailto:riripishu@gmail.com"
              className="text-secondary underline mt-4"
            >
              riripishu@gmail.com
            </a>
            <div className="flex mt-20 space-x-6">
              Socials
              <a href="#">LinkedIn</a>
              <a href="#">Github</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
