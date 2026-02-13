export default function BrowsePlaylistSection() {
  return (
    <section className="bg-[#EFE6C9] py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* LEFT PLAYLIST MENU */}
          <div className="bg-[#F4F0DC] rounded-3xl p-6">

            <h2 className="text-2xl font-serif text-gray-800 mb-6">
              Browse <span className="text-orange-500 italic">Playlist</span>
            </h2>

            <ul className="space-y-3">

              <li className="bg-gradient-to-r from-orange-500 to-orange-300 text-white px-4 py-2 rounded-lg font-medium cursor-pointer">
                TV Shows
              </li>

              <li className="text-gray-600 hover:text-orange-500 cursor-pointer">
                Podcasts
              </li>

              <li className="text-gray-600 hover:text-orange-500 cursor-pointer">
                Inner Peace
              </li>

              <li className="text-gray-600 hover:text-orange-500 cursor-pointer">
                Prophetic Dreams & Visions
              </li>

              <li className="text-gray-600 hover:text-orange-500 cursor-pointer">
                Mission Ignited
              </li>

              <li className="text-gray-600 hover:text-orange-500 cursor-pointer">
                Radiant Light Academy
              </li>

              <li className="text-gray-600 hover:text-orange-500 cursor-pointer">
                Swami’s Interview
              </li>

            </ul>
          </div>


          {/* FEATURED VIDEO */}
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2 relative rounded-3xl overflow-hidden group cursor-pointer"
          >

            <img
              src="https://cdn.pixabay.com/photo/2024/04/19/22/25/man-8707406_1280.png" 
              alt="Featured Video"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">

              <div>
                <h3 className="text-2xl font-semibold">
                  Instant Meditation for Anxiety & Calm
                </h3>

                <p className="text-sm text-gray-200 mt-1">
                  A simple 1-minute practice to reset your mind and body
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">

                <div className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full font-medium transition">
                  ▶ Watch Now
                </div>

                <div className="bg-white/90 text-gray-800 px-5 py-2 rounded-full font-medium">
                  YouTube Channel
                </div>

              </div>

            </div>

            {/* Center Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded-full shadow-lg text-red-600 text-2xl">
                ▶
              </div>
            </div>

          </a>

        </div>



        {/* PODCAST SECTION */}
        <div className="mt-20">

          {/* Header */}
          <div className="flex justify-between items-center mb-8">

            <h2 className="text-2xl font-serif text-gray-800">
              🎧 Swami <span className="text-orange-500 italic">Podcast</span>
            </h2>

            <a
              href="#"
              className="text-orange-500 hover:underline font-medium"
            >
              Explore more Videos →
            </a>

          </div>


          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Instant Meditation",
                desc: "1-min method for anxiety relief.",
                img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
              },
              {
                title: "Beginner’s Guide",
                desc: "How to sit comfortably for 20 mins.",
                img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
              },
              {
                title: "The Journey Within",
                desc: "A cinematic introduction to the path.",
                img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
              },
            ].map((video, i) => (
              <a
                key={i}
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F4F0DC] rounded-2xl overflow-hidden group"
              >

                <div className="relative">

                  <img
                    src={video.img}
                    alt={video.title}
                    className="h-44 w-full object-cover group-hover:scale-105 transition"
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-3 rounded-full shadow text-red-600">
                      ▶
                    </div>
                  </div>

                </div>

                <div className="p-4 text-center">

                  <h3 className="font-semibold text-gray-800">
                    {video.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {video.desc}
                  </p>

                  <div className="mt-4 border border-orange-400 text-orange-500 py-2 rounded-full font-medium hover:bg-orange-500 hover:text-white transition">
                    ▶ Watch On Youtube
                  </div>

                </div>

              </a>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
