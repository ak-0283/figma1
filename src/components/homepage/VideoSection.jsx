export default function VideoSection() {
  return (
    <section className="bg-[#F6F0DC] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* VIDEO CONTAINER */}
        <div className="relative group rounded-[30px] overflow-hidden border-4 border-orange-500 shadow-xl">

          {/* Thumbnail */}
          <img
            src="https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg"
            alt="Swami Video"
            className="w-full h-[500px] object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

          {/* Play Button */}
          <a
            href="https://www.youtube.com/watch?v=ScMzIvxBSi4"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
              ▶
            </div>
          </a>

          {/* Bottom Title */}
          <h2 className="absolute bottom-6 left-8 text-white text-4xl font-bold">
            The <span className="text-orange-400">Orange</span> Cowboy
          </h2>

          {/* Top Label */}
          <p className="absolute top-6 left-6 text-white text-sm">
            Swami the Orange Cowboy — Engaging Talks & Transformative Training
          </p>

        </div>

      </div>
    </section>
  )
}
