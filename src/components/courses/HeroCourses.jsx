export default function HeroCourses() {
  return (
    <section className="relative bg-[#EFE6C9] pt-32 pb-20 overflow-hidden">

      {/* ===== Background Blobs ===== */}

      {/* Left Blob */}
      <div className="
        absolute 
        -left-32 
        top-10 
        w-96 
        h-96 
        bg-orange-300/30 
        blur-3xl 
        rounded-full
      "></div>

      {/* Right Blob */}
      <div className="
        absolute 
        -right-32 
        top-10 
        w-96 
        h-96 
        bg-orange-400/30 
        blur-3xl 
        rounded-full
      "></div>



      {/* ===== Content ===== */}

      <div className="
        relative
        max-w-5xl
        mx-auto
        px-6
        pt-28
        pb-24
        text-center
      ">

        {/* Tag */}
        <div className="inline-block border border-orange-400 text-orange-500 px-5 py-2 rounded-full text-sm font-medium mb-8">
          ✨ Services
        </div>



        {/* Heading */}

        <h1 className="leading-tight">

          <span className="
            block
            text-4xl
            md:text-6xl
            italic
            text-gray-700
            font-serif
          ">
            60 Days of
          </span>

          <span className="
            block
            text-5xl
            md:text-7xl
            font-bold
            text-orange-500
            mt-2
          ">
            1-Minute Meditations
          </span>

        </h1>



        {/* Description */}

        <p className="
          mt-8
          text-gray-500
          max-w-2xl
          mx-auto
          text-lg
          leading-relaxed
        ">
          Explore Swami's transformative offerings—from healing courses to
          storytelling events.
        </p>

        <p className="
          italic
          text-gray-600
          mt-2
          font-medium
        ">
          Choose what resonates with your journey.
        </p>

      </div>

    </section>
  )
}
