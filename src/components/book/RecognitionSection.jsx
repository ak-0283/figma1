export default function RecognitionSection() {
  return (
    <section className="bg-[#EFE6C9] py-24">

      <div className="max-w-6xl mx-auto px-6">

        {/* Decorative Divider */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-[2px] w-20 bg-orange-400"></div>
          <span className="mx-4 text-orange-500 text-xl">✦ ✧ ✦</span>
          <div className="h-[2px] w-20 bg-orange-400"></div>
        </div>


        {/* Main Card */}
        <div className="
          bg-[#F5EFD6]
          rounded-[40px]
          border-[6px]
          border-[#E7DFC2]
          p-10
          md:p-14
          flex
          flex-col
          md:flex-row
          items-center
          gap-10
        ">

          {/* LEFT CONTENT */}
          <div className="flex-1">

            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
              Honored Recognition from
              <span className="block italic text-orange-500 mt-2">
                India's Top Scholar
              </span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
              In New Delhi, Swami Ji had the honor of gifting his bestselling
              book,
              <span className="text-orange-500 font-semibold">
                {" "}“The Ayurveda Encyclopedia,”{" "}
              </span>
              to Shankarachara Ji, India's highest spiritual scholar,
              in a sacred, respectful ceremony.
            </p>

          </div>


          {/* RIGHT IMAGE */}
          <div className="flex-1">

            {/* 👉 Replace this with your real image inside /public */}
            <img
              src="https://picsum.photos/200/300?random=6"
              alt="Recognition Ceremony"
              className="
                w-full
                max-w-lg
                mx-auto
                rounded-3xl
                shadow-lg
                object-cover
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}
