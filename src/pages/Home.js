import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="text-center px-6 py-20 bg-cover bg-center" style={{
        backgroundImage: "url('https://source.unsplash.com/1600x600/?modern,house')"
      }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sell Your Home in 72 Hours</h1>
        <p className="text-xl mb-6 max-w-2xl mx-auto">No agents. No commission. Just you, your home, and the tools to list fast — and smart.</p>
        <div>
          <Link to="/seller/signup" className="bg-teal-400 hover:bg-teal-300 text-gray-900 font-semibold py-2 px-6 rounded-full mr-4">Get Started</Link>
          <a href="#how-it-works" className="border border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-gray-900">How It Works</a>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="text-lg max-w-3xl mx-auto">List72 is a platform built for homeowners who want to sell smart, save on commission, and launch their listing in just 72 hours — with or without agent help.</p>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gray-800 px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div><h3 className="font-bold text-xl mb-2">1. Create Listing</h3><p>Enter property details and pricing.</p></div>
          <div><h3 className="font-bold text-xl mb-2">2. Choose Services</h3><p>Pick photography, staging, cleaning — only what you need.</p></div>
          <div><h3 className="font-bold text-xl mb-2">3. Go Live</h3><p>Your home is listed on List72 (and optionally REA/Domain).</p></div>
          <div><h3 className="font-bold text-xl mb-2">4. Track Results</h3><p>See buyer interest and manage offers directly.</p></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <blockquote className="bg-gray-800 p-6 rounded-xl">&ldquo;We saved $29,800 in commission and sold in 4 days.&rdquo; <br /> <span className="block mt-2 font-semibold">– Anna, Sydney</span></blockquote>
          <blockquote className="bg-gray-800 p-6 rounded-xl">&ldquo;It was easier than I thought — and faster than any agent promised.&rdquo; <br /> <span className="block mt-2 font-semibold">– Mark, Brisbane</span></blockquote>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-800 px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Skip the Agent?</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-lg">
          <div><strong>85%+</strong><br /> of buyers find homes through REA/Domain</div>
          <div><strong>$25k–$50k</strong><br /> saved on agent commissions</div>
          <div><strong>Same outcomes</strong><br /> as agent-led sales, according to data</div>
        </div>
        <p className="text-sm mt-6 opacity-70">Source: Choice, Consumer Reports, Domain Insights</p>
      </section>
    </div>
  );
}