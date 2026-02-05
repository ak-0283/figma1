export default function Courses() {
  return (
    <section className="bg-[#F7F7F7] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Courses &{" "}
              <span className="text-orange-500 italic">
                Events
              </span>
            </h2>

            <p className="text-gray-500 mt-4 max-w-xl">
              Explore Swami's transformative offerings — from healing courses
              to storytelling events. Choose what resonates with your journey.
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition">
            Book a Sessions →
          </button>

        </div>


        {/* COURSES GRID */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <CourseCard
            title="Storytelling for Healing"
            description="Learn the art of therapeutic storytelling. Transform your experiences into powerful healing narratives."
            bg="bg-[#F3EEDC]"
            solidButton
          />

          <CourseCard
            title="Open Mic Leadership"
            description="Master the skills to host transformative open mic events. Create safe spaces for authentic expression."
            bg="bg-[#E7EFEF]"
            outlineButton
          />

          <CourseCard
            title="Live Wisdom Sessions"
            description="Join our monthly live webinars. Direct access to Swami's teachings and community Q&A."
            bg="bg-[#EFE7E7]"
            solidButton
          />

        </div>

      </div>
    </section>
  )
}


function CourseCard({
  title,
  description,
  bg,
  solidButton,
  outlineButton
}) {
  return (
    <div className={`${bg} p-8 rounded-[30px] shadow-sm hover:shadow-md transition`}>

      {/* Icon */}
      <div className="w-14 h-14 rounded-full border border-orange-300 flex items-center justify-center text-orange-500 text-xl">
        🎥
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-800 mt-6">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 mt-4">
        {description}
      </p>

      {/* Badge */}
      <span className="inline-block mt-6 bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm">
        🎓 Gain CEU & Certification
      </span>

      {/* Button */}
      <button
        className={`
          w-full mt-8 py-3 rounded-full font-semibold transition
          ${
            solidButton
              ? "bg-orange-500 hover:bg-orange-600 text-white"
              : ""
          }
          ${
            outlineButton
              ? "border-2 border-orange-500 text-orange-500 hover:bg-orange-50"
              : ""
          }
        `}
      >
        Join Now
      </button>

    </div>
  )
}
