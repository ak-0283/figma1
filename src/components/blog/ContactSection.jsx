import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaEnvelope, 
  FaLinkedinIn 
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-[#EFE6C9] py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800">
            Let's <span className="text-orange-500">Connect</span> with{" "}
            <span className="italic text-orange-500">Love & Joy</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a question, want to share your story, or interested in joining
            our community? We'd love to hear from you.
          </p>

          <div className="w-28 h-[2px] bg-orange-400 mx-auto mt-6"></div>
        </div>



        {/* ================= MAIN CARD ================= */}
        <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-lg">

          {/* LEFT IMAGE */}
          <div className="relative h-[420px] md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1600&auto=format&fit=crop"
              alt="Tree"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-6 left-6 text-white max-w-xs">
              <p className="italic text-lg">
                "I am listening with an open heart. Speak freely."
              </p>
              <p className="text-sm mt-2 opacity-90">— Swami Tirtha</p>
            </div>
          </div>



          {/* RIGHT FORM */}
          <div className="bg-[#F4F0DC] p-8 md:p-12">

            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Send a Message
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-400"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-400"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="mt-4 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-400"
            />

            <textarea
              rows="5"
              placeholder="How can swami ji help today"
              className="mt-4 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-400"
            ></textarea>



            {/* ================= SMALL SOCIAL ICONS ================= */}
            <div className="flex gap-4 mt-6">

              <a
                href="https://facebook.com"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center border border-orange-400 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center border border-orange-400 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center border border-orange-400 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white transition"
              >
                <FaYoutube />
              </a>

            </div>



            <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition">
              Send Message
            </button>

          </div>
        </div>



        {/* ================= CONNECT ON SOCIALS ================= */}
<div className="mt-28 bg-[#F4F0DC] rounded-3xl py-20 px-10 text-center">

  {/* Heading */}
  <h3 className="text-4xl font-serif text-gray-800">
    Connect <span className="text-orange-500 italic">On Socials</span>
  </h3>

  <p className="text-gray-500 mt-3">
    Join the community on your favorite platform
  </p>

  <div className="w-40 border-t-2 border-dashed border-orange-400 mx-auto my-10"></div>



  {/* PERFECT GRID */}
  <div className="grid md:grid-cols-3">

    {/* ================= YOUTUBE ================= */}
    <a className="flex flex-col items-center px-6 md:border-r md:border-dashed md:border-orange-500">

      <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mb-6">
        <FaYoutube size={18}/>
      </div>

      <h4 className="text-xl font-serif text-gray-800">
        Orange Cowboy Channel
      </h4>

      <p className="text-orange-500 mt-2 tracking-wide">
        SUBSCRIBE →
      </p>

    </a>



    {/* ================= LINKEDIN ================= */}
    <a className="flex flex-col items-center px-6 md:border-r md:border-dashed md:border-orange-400">

      <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mb-6">
        <FaLinkedinIn size={18}/>
      </div>

      <h4 className="text-xl font-serif text-gray-800">
        Swami ji Profile
      </h4>

      <p className="text-orange-500 mt-2 tracking-wide">
        CONNECT →
      </p>

    </a>



    {/* ================= EMAIL ================= */}
    <a
      href="mailto:contact@orangecowboy.com"
      className="flex flex-col items-center px-6"
    >

      <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mb-6">
        <FaEnvelope size={18}/>
      </div>

      <h4 className="text-xl font-serif text-gray-800">
        contact@orangecowboy.com
      </h4>

      <p className="text-orange-500 mt-2 tracking-wide">
        VISIT →
      </p>

    </a>

  </div>

</div>


      </div>
    </section>
  );
}
