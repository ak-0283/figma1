export default function Books() {
  return (
    <section className="bg-[#F6F0DC] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">

        {/* LEFT CONTENT */}
        <div>

          {/* Tag */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
              🏅
            </div>
            <p className="font-semibold text-gray-700">
              Books By <span className="text-orange-500 italic">Swami</span>
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-5xl font-bold text-gray-800 leading-tight">
            Bestselling Books Loved{" "}
            <span className="text-orange-500 italic">
              Worldwide
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 mt-6 max-w-lg">
            Transform your life with wisdom from decades of healing,
            spirituality, and divine storytelling.
          </p>

          {/* Badge */}
          <div className="mt-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="Amazon Badge"
              className="w-32"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition">
              Buy on Amazon
            </button>

            <button className="border border-orange-400 text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition">
              Explore More Books
            </button>
          </div>

        </div>


        {/* RIGHT SIDE — BOOK IMAGES */}
        <div className="relative flex justify-center">

          {/* Book 1 */}
          <img
            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
            className="w-64 rounded-lg shadow-2xl rotate-[-6deg]"
          />

          {/* Book 2 */}
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            className="w-64 rounded-lg shadow-2xl rotate-6 absolute left-40 top-16"
          />

        </div>

      </div>
    </section>
  )
}
