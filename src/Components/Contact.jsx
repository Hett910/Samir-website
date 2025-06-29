// src/components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="bg-[#fcfcfe] text-[#3054aa] py-16 px-4">
      <div
        className="max-w-4xl mx-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="mb-6 text-lg text-gray-700">
          Let’s discuss your next big idea or project. Reach out today!
        </p>
        import {Link} from "react-router-dom";
        <Link
          to="/inquiry"
          className="bg-[#3054aa] text-white px-6 py-3 font-semibold rounded-full hover:bg-[#203a7a] transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
