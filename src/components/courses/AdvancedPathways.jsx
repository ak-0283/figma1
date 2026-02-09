import { BookOpen, BadgeCheck } from "lucide-react";

export default function AdvancedPathways() {
  return (
    <section className="px-6 py-20 bg-[#F7F7F7]">

      {/* CONTAINER */}
      <div
        className="
        max-w-6xl
        mx-auto
        rounded-[40px]
        px-10
        py-16
        relative
        overflow-hidden
      "
        style={{
          background:
            "linear-gradient(90deg, #F6C79E 0%, #F2E6D9 40%, #F2E6D9 60%, #F6C79E 100%)",
        }}
      >

        {/* HEADER */}
        <h2 className="text-center text-4xl font-serif text-gray-800 mb-14">
          Advanced <span className="text-orange-500 italic">Pathways</span>
        </h2>


        {/* GRID */}
        <div className="grid md:grid-cols-2 items-center">

          {/* LEFT */}
          <div className="text-center space-y-4">

            {/* ICON */}
            <div className="w-16 h-16 mx-auto bg-white rounded-full shadow flex items-center justify-center">
              <BookOpen className="text-orange-500" size={28} />
            </div>

            <h3 className="text-2xl font-serif text-gray-800">
              Advanced CEU Trainings
            </h3>

            <p className="text-orange-500 font-medium">
              Coming soon
            </p>

          </div>



          {/* DIVIDER */}
          <div className="
            hidden md:block
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            h-28
            w-[2px]
            bg-orange-400
          "></div>



          {/* RIGHT */}
          <div className="text-center space-y-4 mt-10 md:mt-0">

            <div className="w-16 h-16 mx-auto bg-white rounded-full shadow flex items-center justify-center">
              <BadgeCheck className="text-orange-500" size={28} />
            </div>

            <h3 className="text-2xl font-serif text-gray-800">
              Certification Programs
            </h3>

            <p className="text-orange-500 font-medium">
              Coming soon
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
