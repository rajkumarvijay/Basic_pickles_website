import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="about" className="max-w-7xl mx-auto p-4 sm:p-6 lg:px-8 mt-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold">Why choose our pickles?</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="font-semibold">Small-batch</div>
              <div className="text-sm text-gray-600 mt-1">We make in small batches to preserve flavour and quality.</div>
            </div>
            <div>
              <div className="font-semibold">Traditional recipes</div>
              <div className="text-sm text-gray-600 mt-1">Handed down recipes with authentic spice blends.</div>
            </div>
            <div>
              <div className="font-semibold">Locally sourced</div>
              <div className="text-sm text-gray-600 mt-1">We work with local farmers for the freshest produce.</div>
            </div>
          </div>
          <div className="mt-6">
            <Link to="/shop" className="px-4 py-2 bg-emerald-600 text-white rounded-lg">Visit shop</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
