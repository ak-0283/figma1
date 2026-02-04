import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"

export default function Footer() {
  return (
    <footer>

      {/* ================= CTA SECTION ================= */}

      <div className="bg-[#F3EEDC] py-20 text-center px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Ready to Dive Deeper?{" "}
          <span className="text-orange-500 italic">
            Let’s Talk!
          </span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          The Mandala Within isn’t just a path — it’s a conversation waiting
          to happen. Let’s explore what’s unfolding for you.
        </p>

        <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold shadow-md transition">
          Book Complimentary 1:1 Session
        </button>

        <p className="text-gray-400 mt-3 text-sm">
          No cost. Just presence.
        </p>

      </div>


      {/* ================= MAIN FOOTER ================= */}

      <div className="bg-gradient-to-r from-red-700 to-orange-500 text-white pt-16 pb-10">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

          {/* COLUMN 1 */}
          <div>

            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-orange-600 font-bold">
                ☀️
              </div>

              <h3 className="font-semibold text-lg">
                Orange Cowboy
              </h3>
            </div>

            <p className="text-orange-100 text-sm">
              Spiritual training · Mind-body healing · Storytelling
              transformation.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-orange-600 transition cursor-pointer hover:scale-110">
                <FaFacebookF size={18} />
              </div>
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-orange-600 transition cursor-pointer hover:scale-110">
                <FaInstagram size={18} />
              </div>
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-orange-600 transition cursor-pointer hover:scale-110">
                <FaYoutube size={18} />
              </div>
            </div>

          </div>


          {/* COLUMN 2 */}
          <div>
            <h4 className="font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-orange-100">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Books</li>
              <li className="hover:text-white cursor-pointer">Products</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>


          {/* COLUMN 3 */}
          <div>
            <h4 className="font-semibold mb-4">
              Support & Legal
            </h4>

            <ul className="space-y-2 text-orange-100">
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Terms of Service
              </li>
            </ul>
          </div>


          {/* COLUMN 4 — NEWSLETTER */}
          <div>
            <h4 className="font-semibold mb-4">
              Stay Connected 🍃
            </h4>

            <p className="text-orange-100 text-sm mb-4">
              Receive insights and updates from Radiant Light Academy.
            </p>

            <div className="flex flex-col gap-3">

              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-lg text-gray-700 outline-none"
              />

              <button className="bg-white text-orange-600 py-3 rounded-lg font-semibold hover:bg-orange-100 transition">
                Subscribe
              </button>

            </div>
          </div>

        </div>


        {/* ================= BOTTOM BAR ================= */}

        {/* ================= BOTTOM BAR ================= */}

<div className="border-t border-white/20 mt-12">

  <div className="
    max-w-7xl
    mx-auto
    px-6
    py-6
    relative
    flex
    items-center
    justify-center
  ">

    {/* CENTER COPYRIGHT */}
    <p className="text-white/80 text-sm text-center">
      © 2025 Orange Cowboy. All rights reserved.
    </p>

    {/* RIGHT LINKS */}
    <div className="
      hidden md:flex
      gap-6
      text-white/80
      text-sm
      absolute
      right-6
    ">
      <span className="hover:text-white cursor-pointer transition">
        Privacy Policy
      </span>

      <span className="hover:text-white cursor-pointer transition">
        Terms of Service
      </span>
    </div>

  </div>
</div>


      </div>

    </footer>
  )
}
