export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* LEFT CONTENT */}
      <div>
        <span className="inline-block border border-orange-400 text-orange-500 px-4 py-1 rounded-full text-sm mb-6">
          ✨ Storytelling That Awakens the Soul
        </span>

        <h1 className="mt-6 text-4xl md:text-5xl font-serif text-gray-800">
          Meet Swami —
        </h1>

        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mt-2">
          Author, Healer, Storyteller
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed max-w-lg">
          For over 50 years, <span className="font-semibold">Swamiji</span> has guided people
          to experience joy, healing, and spiritual reconnection through the
          <span className="italic font-medium"> magic of storytelling</span>.
          Step into a world where stories uplift, open hearts, and help rediscover purpose.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium">
            Connect
          </button>
          <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full font-medium">
            Explore Courses
          </button>
        </div>

        {/* Stats */}
        <div className="mt-10 flex gap-8 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            📘 <span>#1 Amazon Bestsellers</span>
          </div>
          <div className="flex items-center gap-2">
            🎤 <span>Guided Practice · Open Mic</span>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
          alt="Swami"
          className="rounded-3xl shadow-lg"
        />

        {/* Badge */}
        <div className="absolute bottom-6 right-6 bg-white px-6 py-4 rounded-2xl shadow-md">
          <p className="text-orange-500 font-bold text-xl">50+</p>
          <p className="text-sm text-gray-600">Years of Wisdom</p>
        </div>
      </div>

    </section>
  )
}
