export default function Stats() {
  return (
    <section className="bg-[#f6f1e7] py-20 mt-10 rounded-t-[40px]">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP STATS */}
        <div className="grid md:grid-cols-4 gap-10 items-center border-b border-orange-200 pb-10">

          {/* Numbers */}
          <div>
            <h2 className="text-5xl font-bold text-orange-500">5</h2>
            <p className="text-gray-600 mt-2 font-medium">
              Healing Sessions
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-orange-500">15+</h2>
            <p className="text-gray-600 mt-2 font-medium">
              Courses
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-orange-500">500+</h2>
            <p className="text-gray-600 mt-2 font-medium">
              Stories Shared
            </p>
          </div>

          {/* Right Text */}
          <p className="text-gray-500 leading-relaxed">
            <span className="italic font-semibold text-gray-700">
              Join Swami on a journey of wisdom
            </span>, joy, and authentic storytelling. 
            Five decades of natural healing expertise meeting 
            the <span className="italic font-semibold">
              power of shared stories.
            </span>
          </p>

        </div>

        {/* FEATURE CARDS */}
        <div className="grid md:grid-cols-4 gap-8 mt-12">

          <Card
            icon="🏅"
            title="White House Commission"
            text="Recognized expert in alternative medicine"
          />

          <Card
            icon="📖"
            title="#1 Bestselling Books"
            text="Amazon bestseller in spiritual healing"
            highlight
          />

          <Card
            icon="❤️"
            title="50 Years Experience"
            text="Five decades of natural healing wisdom"
          />

          <Card
            icon="👥"
            title="Age of Joy Mission"
            text="Leading the storytelling revolution"
            highlight
          />

        </div>
      </div>
    </section>
  )
}


/* ✅ Reusable Card Component */
function Card({ icon, title, text, highlight }) {
  return (
    <div
      className={`
        p-6 rounded-2xl transition duration-300
        ${highlight 
          ? "bg-[#ead8c0]" 
          : "bg-white border border-orange-200"}
        hover:shadow-lg
      `}
    >
      <div className="text-3xl mb-4">{icon}</div>

      <h3 className="font-semibold text-lg text-gray-800">
        {title}
      </h3>

      <p className="text-gray-500 mt-2 text-sm">
        {text}
      </p>
    </div>
  )
}
