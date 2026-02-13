export default function TvShowsAndCtaSection() {
  return (
    <section className="bg-[#EFE6C9] py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= TV SHOWS HEADER ================= */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-serif text-gray-800">
            📺 Swami <span className="text-orange-500 italic">TV Shows</span>
          </h2>

          <a href="#" className="text-orange-500 hover:underline font-medium">
            Explore more Videos →
          </a>
        </div>


        {/* ================= TV SHOW CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Discover the Secrets of ChakraVeda Healing",
              desc: "1-min method for anxiety relief.",
              img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
            },
            {
              title: "Herb & Supplement Education",
              desc: "How to sit comfortably for 20 mins.",
              img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1200&auto=format&fit=crop",
            },
            {
              title: "Ignite Your Life – with Radiance",
              desc: "A cinematic introduction to the path.",
              img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop",
            },
          ].map((video, i) => (
            <a
              key={i}
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F4F0DC] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={video.img}
                  alt={video.title}
                  className="h-48 w-full object-cover"
                />

                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-3 rounded-full shadow text-red-600 text-xl">
                    ▶
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="font-semibold text-gray-800">
                  {video.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  {video.desc}
                </p>

                <div className="mt-5 border border-orange-400 text-orange-500 py-2 rounded-full font-medium hover:bg-orange-500 hover:text-white transition">
                  ▶ Watch On Youtube
                </div>
              </div>
            </a>
          ))}
        </div>


        {/* ================= CTA SECTION (WITH BACKGROUND IMAGE) ================= */}

        <div className="mt-24 relative rounded-3xl overflow-hidden">

          {/* Background Image */}
          <img
            src="https://www.hinduamerican.org/wp-content/uploads/2021/05/meditation-4671083_1920-1-e1621445829977.jpg"
            alt="Meditation"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-orange-900/60"></div>

          {/* Content */}
          <div className="relative text-white p-12 md:p-16 text-center">

            <h2 className="text-3xl md:text-5xl font-serif">
              Ready to Dive Deeper?
              <span className="italic text-orange-300"> Let’s talk.</span>
            </h2>

            <p className="mt-4 text-orange-100 max-w-2xl mx-auto">
              The Mandala Within isn’t just a path — it’s a conversation waiting to happen.
              Let’s explore what’s unfolding for you.
            </p>

            <a
              href="#"
              className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold transition shadow-lg"
            >
              Book Complimentary 1:1 Session
            </a>

            <p className="text-xs text-orange-200 mt-4">
              No cost. Just presence.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
