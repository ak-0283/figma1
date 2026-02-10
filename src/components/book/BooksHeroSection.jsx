export default function BooksHeroSection() {
  return (
    <section className="relative bg-[#FFF3CC] overflow-hidden">

      {/* ===== TOP HERO ===== */}
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-orange-400 text-orange-600 px-5 py-2 rounded-full text-sm font-medium mb-8">
          ✨ Amazon #1 Bestselling Author
        </div>

        {/* Heading */}
        <h1 className="leading-tight">
          <span className="block text-4xl md:text-6xl font-serif text-gray-800">
            Transformative Stories &
          </span>
          <span className="block text-5xl md:text-7xl font-bold italic text-orange-500 mt-2">
            Spiritual Wisdom
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Discover profound insights, practical wisdom, and life-changing
          stories that have guided thousands on their path to spiritual
          awakening.
        </p>
      </div>

      {/* ===== BOOKS SECTION ===== */}
      <div className="relative bg-gradient-to-b from-orange-200/60 to-orange-300/80 rounded-t-[48px] pt-16 pb-24">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 flex items-center justify-center gap-6">
            <span className="h-px w-20 bg-orange-400"></span>
            Amazon #1 Bestselling Books
            <span className="h-px w-20 bg-orange-400"></span>
          </h2>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">

          {/* Book Card 1 */}
          <div className="bg-[#FFF6DF] rounded-3xl p-6 flex gap-6 shadow-lg">
            <img
              src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1175803216i/560872.jpg"
              alt="The Ayurveda Encyclopedic"
              className="w-32 h-44 object-cover rounded-xl"
            />

            <div>
              <span className="inline-block border border-orange-400 text-orange-600 px-3 py-1 rounded-full text-xs mb-2">
                ✨ Volume 2
              </span>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                The Ayurveda Encyclopedic
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Simple, fun, handy-dandy way to easily grasp the basics of
                Ayurveda, meditation, and more. Evidence-based studies
                included.
              </p>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-medium transition">
                🛒 Buy on Amazon
              </button>
            </div>
          </div>

          {/* Book Card 2 */}
          <div className="bg-[#FFF6DF] rounded-3xl p-6 flex gap-6 shadow-lg">
            <img
              src="https://m.media-amazon.com/images/I/61CFl8SLLPL._AC_UF1000,1000_QL80_.jpg"
              alt="The Magic of the Blessed Mother's Miracle"
              className="w-32 h-44 object-cover rounded-xl"
            />

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                The Magic of the Blessed mother’s miracle
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                One specific memory stands out—the “Invisible Hand.” Plunging
                into depths far too deep for a boy his age, panic should have
                set in. Instead, a serene force, physically palpable yet
                unseen.
              </p>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-medium transition">
                🛒 Buy on Amazon
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
