export default function Hero() {
  return (
    <div className="min-h-screen bg-[#FFF9D9] relative overflow-hidden">
      
      {/* Left Section - Text */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center min-h-screen">
        <div className="z-10">
          
          {/* Badge */}
          <div className="inline-block border border-orange-500 text-orange-500 px-4 py-2 rounded-full mb-6">
            ✨ Storytelling That Awakens the Soul
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Swami —
            <span className="text-orange-500"> Author, Healer, Storyteller</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-8">
            For over 50 years, Swamiji has guided people to experience joy, healing, and spiritual reconnection through the <span className="italic">magic of storytelling</span>. Step into a world where stories uplift, open hearts, and help rediscover purpose.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
              Connect
            </button>
            <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition">
              Explore Courses
            </button>
          </div>

          {/* Badges */}
          <div className="flex gap-6 mt-12 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-blue-500">■</span> #1 Amazon Bestsellers
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-500">🎤</span> Guided Practice • Open Mic
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative h-[500px] md:h-[600px]">
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
            alt="Swami"
            className="w-full h-full object-cover rounded-3xl shadow-2xl"
          />
          
          {/* Badge on Image */}
          <div className="absolute bottom-8 right-8 bg-white rounded-2xl px-6 py-4 shadow-xl">
            <div className="font-bold text-2xl text-orange-500">50+</div>
            <div className="text-gray-600 text-sm font-medium">Years of Wisdom</div>
          </div>
        </div>
      </div>
    </div>
  )
}
