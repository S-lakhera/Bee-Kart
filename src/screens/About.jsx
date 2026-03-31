import React from 'react';

const About = () => {
  const values = [
    { title: "Pure Quality", desc: "Just like organic honey, we source only the finest premium products." },
    { title: "Hive Speed", desc: "Our delivery network is as fast as a bee's wing—getting your loot to you in 24h." },
    { title: "Worker Bees", desc: "Our support team is always active, ensuring your experience is sweet and smooth." }
  ];

  return (
    <div className="bg-[#121116] min-h-screen text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <section className="text-center mb-20">
          <span className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-xs">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-8">
            BEHIND THE <span className="text-yellow-500 italic">HIVE.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Bee-Kart was founded in 2026 with a single mission: to cut through the noise of modern e-commerce. 
            We believe shopping should be fast, aesthetically pleasing, and highly rewarding.
          </p>
        </section>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {values.map((v, i) => (
            <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-yellow-500/30 transition-all group">
              <div className="w-12 h-12 bg-yellow-500 rounded-xl mb-6 flex items-center justify-center text-black font-black text-xl group-hover:scale-110 transition-transform">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold mb-4">{v.title}</h3>
              <p className="text-slate-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center bg-yellow-500 p-12 rounded-[3rem]">
          <h2 className="text-3xl font-black text-black mb-4">WANT TO JOIN THE SWARM?</h2>
          <p className="text-black/70 font-medium mb-8">We're always looking for new partners and collectors.</p>
          <button className="bg-black text-white px-10 py-4 rounded-2xl font-bold hover:scale-105 active:scale-95 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;