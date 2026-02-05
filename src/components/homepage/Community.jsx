export default function Community() {
  return (
    <section className="bg-[#F3EEDC] py-24">
      <div className="max-w-7xl mx-auto px-6">


        <div className="flex items-center justify-between mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            <span className="text-orange-500 text-5xl mr-2">“</span>
            Community{" "}
            <span className="text-orange-500 italic">
              Word's
            </span>
          </h2>

          {/* Fake Slider Buttons */}
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full border border-orange-400 text-orange-500">
              ←
            </button>
            <button className="w-10 h-10 rounded-full bg-orange-500 text-white">
              →
            </button>
          </div>

        </div>


        {/* TESTIMONIAL CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          <TestimonialCard
            name="Adria Firestone"
            role="Speaker, Author, Coach"
            text='"Swamiji is a joy-generating machine! His speaking is humorous, authentic and deeply transformative."'
          />

          <TestimonialCard
            name="Guru Amrit"
            role="Kundalini Yoga Teacher"
            text='"Swamiji is a rare combination of healer, intuitive, teacher, and scholar..."'
          />

          <TestimonialCard
            name="Sarah Mitchell"
            role="Mindfulness Trainer"
            text='"Every session leaves you feeling connected, uplifted, and inspired to grow."'
          />

        </div>



        <div className="grid md:grid-cols-2 gap-16 mt-28 items-center">

          {/* LEFT FEATURE BLOG */}
          <div className="relative rounded-[30px] overflow-hidden shadow-lg">

            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136"
              className="w-full h-[420px] object-cover"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-3xl font-bold leading-tight">
                Heal Your Spirit Through the Power of Story
              </h3>

              <button className="mt-4 bg-white text-orange-500 px-6 py-2 rounded-full font-semibold">
                Connect
              </button>
            </div>

          </div>


          {/* RIGHT BLOG LIST */}
          <div>

            <h2 className="text-4xl font-bold text-gray-800">
              Our Latest{" "}
              <span className="text-orange-500 italic">
                Blogs
              </span>
            </h2>

            <p className="text-gray-500 mt-4">
              Your journey doesn't end here — it evolves. Discover more
              insights to awaken compassion, stillness, and purpose within.
            </p>

            {/* Blog Cards */}
            <div className="grid grid-cols-2 gap-6 mt-8">

              <BlogCard
                img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                title="Calm, Healing & Storytelling Focus"
              />

              <BlogCard
                img="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
                title="Emotional, Modern & Relatable"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}


function TestimonialCard({ name, role, text }) {
  return (
    <div className="bg-[#F8F6F2] border border-orange-300 rounded-[26px] p-8 hover:shadow-md transition">

      <h3 className="font-semibold text-gray-800">
        {name}
      </h3>

      <p className="text-orange-500 text-sm mb-4">
        {role}
      </p>

      <p className="text-gray-600 italic">
        {text}
      </p>

      {/* Stars */}
      <div className="mt-6 text-orange-400">
        ⭐⭐⭐⭐⭐
      </div>

    </div>
  )
}


function BlogCard({ img, title }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">

      <img
        src={img}
        className="w-full h-32 object-cover"
      />

      <div className="p-4">
        <h4 className="font-semibold text-gray-800">
          {title}
        </h4>

        <p className="text-orange-500 text-sm mt-2">
          Read Blog →
        </p>
      </div>

    </div>
  )
}
