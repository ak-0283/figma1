import { Check, Youtube } from "lucide-react";

export default function ChoosePath() {
  return (
    <section className="bg-[#F6F1C7] py-20 px-6">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center">

        <span className="border border-orange-400 text-orange-500 px-4 py-2 rounded-full text-sm">
          ✨ Investment in Your Growth
        </span>

        <h2 className="text-5xl font-serif mt-6 text-gray-800">
          Choose Your <span className="text-orange-500 italic">Path</span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Select the experience level that resonates with your spiritual journey.  
          <span className="text-orange-500 font-semibold">
            {" "}Programs range from $200 – $1,400 · Flexible options available
          </span>
        </p>
      </div>


      {/* PRICING CARDS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">

        {/* CARD 1 */}
        <Card
          title="VIP Mentorship"
          tag="VIP IMMERSIVE"
          features={[
            "Everything in Enhanced",
            "1:1 Coaching Sessions",
            "Personal Assessment",
            "Community Leadership",
            "Advanced CEU Preparation",
          ]}
        />

        {/* CARD 2 */}
        <Card
          title="Group Workshop"
          tag="BASIC PLAN"
          features={[
            "6 Group Sessions",
            "Group Learning Environment",
            "Downloadable Resources",
            "Community Access",
          ]}
        />

        {/* CARD 3 (HIGHLIGHTED) */}
        <Card
          title="Personal Experience"
          tag="ENHANCED"
          highlight
          bestChoice
          features={[
            "Everything in Basic",
            "Personalized Feedback",
            "Live Q&A Sessions",
            "Actionable daily practices",
            "Exclusive Materials",
          ]}
        />

      </div>



      {/* WATCH SWAMI */}
      <div className="max-w-6xl mx-auto mt-24">

        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
          <div>
            <h3 className="text-3xl font-serif">
              Watch <span className="text-orange-500 italic">Swami</span>
            </h3>
            <p className="text-gray-500">
              Previews of the teaching style and free wisdom.
            </p>
          </div>

          <button className="text-orange-500 font-medium hover:underline">
            Visit YouTube Channel →
          </button>
        </div>


        {/* VIDEOS */}
        <div className="grid md:grid-cols-3 gap-8">
          <VideoCard
            title="Instant Meditation"
            subtitle="1-min method for anxiety relief."
            img="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
          />

          <VideoCard
            title="Beginner's Guide"
            subtitle="How to sit comfortably for 20 mins."
            img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          />

          <VideoCard
            title="The Journey Within"
            subtitle="A cinematic introduction to the path."
            img="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          />
        </div>

      </div>
    </section>
  );
}



/* ================= CARD ================= */

function Card({ title, tag, features, highlight, bestChoice }) {
  return (
    <div
      className={`
        rounded-3xl p-8 shadow-sm relative
        ${highlight ? "bg-white border-4 border-orange-500" : "bg-white"}
      `}
    >

      {bestChoice && (
        <span className="absolute -top-3 right-6 bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
          Best choice
        </span>
      )}

      <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
        {tag}
      </span>

      <h3 className={`text-2xl mt-4 font-semibold ${highlight && "text-orange-500"}`}>
        {title}
      </h3>

      <button className="w-full mt-6 bg-orange-400 hover:bg-orange-500 text-white py-3 rounded-full font-medium transition">
        Book a Session
      </button>

      <ul className="mt-6 space-y-3 text-gray-600">
        {features.map((item, i) => (
          <li key={i} className="flex gap-2 items-center">
            <Check size={18} className="text-orange-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}



/* ================= VIDEO CARD ================= */

function VideoCard({ img, title, subtitle }) {
  return (
    <div className="bg-white rounded-2xl p-3 shadow-sm">

      <div className="relative">
        <img
          src={`${img}?auto=format&fit=crop&w=800&q=80`}
          className="rounded-xl h-44 w-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white rounded-full p-3 shadow">
            <Youtube className="text-red-500" />
          </div>
        </div>
      </div>

      <h4 className="mt-4 font-semibold">{title}</h4>
      <p className="text-gray-500 text-sm">{subtitle}</p>

      <button className="mt-4 w-full border border-orange-400 text-orange-500 py-2 rounded-full hover:bg-orange-50 transition">
        ▶ Watch On Youtube
      </button>

    </div>
  );
}
