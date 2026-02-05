export default function Chapter() {
  return (
    <section className="relative bg-[#F8F6F2] py-28 overflow-hidden">

      {/* OPTIONAL Background Pattern Effect */}
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#e7dfcf 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <span className="inline-block border border-orange-300 text-orange-500 px-4 py-1 rounded-full text-sm font-medium">
          📖 Chapter 1
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-6 leading-tight">
          The Childhood Moments That Sparked{" "}
          <span className="text-orange-500 italic">
            a Spiritual Revolution.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 mt-6 max-w-3xl mx-auto">
          <span className="font-semibold text-gray-700">
            Swamiji shares the childhood moments
          </span>{" "}
          — of protection, intuition, and wonder—that quietly revealed the{" "}
          <span className="font-semibold text-gray-700">
            Divine was already walking beside him.
          </span>
        </p>

        {/* VIDEO CARD */}
        <div className="relative mt-14 rounded-[28px] overflow-hidden border-4 border-orange-400 shadow-xl group">

          {/* Thumbnail */}
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Chapter Video"
            className="w-full h-[420px] object-cover"
          />

          {/* Dark Hover Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
              ▶
            </div>
          </div>

          {/* Fake Controls Bar (for design look) */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-orange-200">
            <div className="h-2 w-1/4 bg-orange-500"></div>
          </div>

        </div>

        {/* CTA BUTTON */}
        <button className="mt-12 border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition">
          Download PDF →
        </button>

      </div>
    </section>
  )
}
