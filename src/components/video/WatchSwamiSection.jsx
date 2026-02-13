export default function WatchSwamiSection() {
  return (
    <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">

      {/* Background Image */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx8L--P09EcBKQXVou5bVov7hQ7ToKVzvW9Q&s"   /* Put your image inside public/watch-swami.jpg */
        alt="Watch Swami"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-end justify-between pb-10">

        {/* Left Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
            Watch <span className="text-orange-400 italic">Swami</span>
          </h2>

          <p className="mt-3 text-gray-200 text-sm md:text-base">
            Teachings • Meditations • Stories • Travel • Conversations
          </p>
        </div>

        {/* Button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium shadow-lg transition">
          ▶ Watch Featured
        </button>

      </div>

    </section>
  );
}
