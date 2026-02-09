export default function ExperientialServices() {
  const services = [
    {
      title: "Awakening Your Radiance",
      subtitle: "Ayurveda Wellness Reset",
      desc: "A transformational journey designed to awaken inner calm and energy, based on ancient spiritual science.",
      badge: "Online Experience",
      img: "https://images.unsplash.com/photo-1593810450967-f9c42742e326?q=80&w=1200",
      button: "Enroll Now",
      bg: "bg-[#F6EFD0]"
    },
    {
      title: "Glow Up Your Radiance – Tell your story",
      subtitle: "",
      desc: "Through guided storytelling and soulful reflection, you’ll uncover your authentic voice.",
      badge: "Online Experience",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
      button: "Enroll Now",
      bg: "bg-[#F1F1F1]"
    },
    {
      title: "Your Radiant Voice – Storytelling Lab",
      subtitle: "",
      desc: "Join our monthly membership community circle where your story becomes medicine.",
      badge: "Advanced Integration",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
      button: "Join the Circle",
      bg: "bg-[#F6EFD0]"
    }
  ]

  return (
    <section className="py-24 px-6 bg-[#FAF7F2]">

      {/* HEADER */}
      <div className="text-center mb-16">

        <h2 className="text-5xl font-serif text-gray-800">
          Experiential <span className="text-orange-500 italic">Service</span>
        </h2>

        <p className="text-gray-500 mt-3">
          <span className="font-semibold text-gray-700">
            Limited seats
          </span>{" "}
          available for more personal interaction.
        </p>

      </div>


      {/* CARDS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {services.map((service, i) => (

          <div
            key={i}
            className={`
              ${service.bg}
              rounded-[28px]
              overflow-hidden
              shadow-sm
              hover:shadow-xl
              transition
              duration-300
              group
            `}
          >

            {/* IMAGE */}
            <div className="relative h-[230px] overflow-hidden">

              <img
                src={service.img}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* BADGE */}
              <div className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-sm shadow">
                {service.badge}
              </div>

            </div>


            {/* CONTENT */}
            <div className="p-7">

              <h3 className="text-2xl font-serif text-orange-600 mb-2">
                {service.title}
              </h3>

              {service.subtitle && (
                <p className="italic text-gray-500 mb-3">
                  {service.subtitle}
                </p>
              )}

              <p className="text-gray-600 leading-relaxed mb-6">
                {service.desc}
              </p>


              {/* FEATURES */}
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✔ Free discovery session</li>
                <li>✔ 4 hr sessions</li>
              </ul>


              {/* SMALL TOOL BUTTON */}
              <button className="
                w-full
                border
                border-orange-300
                text-orange-500
                py-2
                rounded-full
                mb-6
                hover:bg-orange-50
                transition
              ">
                ✨ On-the-Go Meditation Tools
              </button>


              {/* MAIN BUTTON */}
              <button className="
                w-full
                bg-orange-500
                text-white
                py-3
                rounded-full
                font-semibold
                hover:bg-orange-600
                transition
              ">
                {service.button}
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}
