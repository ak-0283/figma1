export default function Services() {
  return (
    <section className="bg-[#F3EEDC] py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Tag */}
        <span className="bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-medium">
          📖 Swami Services
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mt-6 text-gray-800">
          Pathways to Inner{" "}
          <span className="text-orange-500 italic">
            Wisdom
          </span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Choose the guidance that resonates with your current journey.
          Each offering is crafted with love to support your unique path.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <ServiceCard
            badge="Workshop"
            title="Speaking & Workshops"
            subtitle="Inspiring Talks That Spark Transformation"
            img="https://images.unsplash.com/photo-1503428593586-e225b39bddfe"
          />

          {/* Highlight Card */}
          <ServiceCard
            highlight
            title="1-on-1 & Group Readings"
            subtitle="Personal Readings for Clarity, Healing & Guidance"
            img="https://images.unsplash.com/photo-1544717305-2782549b5136"
          />

          <ServiceCard
            badge="Free Call"
            title="Discovery Zoom Calls"
            subtitle="A Warm Conversation to Begin Your Journey"
            img="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b"
          />

        </div>

        {/* Button */}
        <button className="mt-16 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition">
          Book a Sessions →
        </button>

      </div>
    </section>
  )
}


/* ✅ Reusable Card */
function ServiceCard({ badge, title, subtitle, img, highlight }) {
  return (
    <div
      className={`
        relative rounded-[30px] p-5 transition duration-300
        ${highlight 
          ? "bg-orange-500 text-white scale-105 shadow-xl" 
          : "bg-[#f7f2e7] border border-orange-100 hover:shadow-lg"}
      `}
    >

      {/* Badge */}
      {badge && (
        <span className="absolute top-5 left-5 text-xs bg-white text-orange-500 px-3 py-1 rounded-full">
          {badge}
        </span>
      )}

      {/* Image */}
      <img
        src={img}
        className="rounded-2xl h-52 w-full object-cover"
      />

      {/* Content */}
      <div className="mt-5 text-left">

        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className={`mt-2 text-sm ${highlight ? "text-orange-100" : "text-gray-500"}`}>
          {subtitle}
        </p>

        {/* Small Button */}
        <button
          className={`
            mt-4 px-4 py-2 rounded-full text-sm font-medium
            ${highlight
              ? "bg-white text-orange-500"
              : "border border-orange-300 text-orange-500"}
          `}
        >
          Sessions →
        </button>

      </div>
    </div>
  )
}
