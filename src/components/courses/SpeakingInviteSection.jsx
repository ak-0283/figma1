import React from "react";

export default function SpeakingInviteSection() {
  return (
    <section className="bg-[#F4F1E6] px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-[#E7E1C6] border-[10px] border-[#EFEAD6] rounded-[48px] px-8 md:px-16 py-12 overflow-hidden">
          {/* LEFT SIDE */}
          <div className="max-w-2xl">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full tracking-wide">
              INVITE SWAMI TO SPEAK
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
              Schools, Charities & Wellness Associations
            </h2>

            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Bring the wisdom of
              <span className="text-orange-600 font-semibold"> Radiant Light Academy </span>
              to your organization. Inspiring talks on mindfulness, spiritual
              resilience, and discovering one's higher purpose.
            </p>

            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition">
              Request Speaking
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-[320px] md:w-[420px] flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=80"
              alt="Speaker"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
