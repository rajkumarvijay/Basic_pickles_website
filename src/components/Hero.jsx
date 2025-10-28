import React from 'react';

export default function Hero() {
  return (
    <section className="bg-emerald-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-800 leading-tight">Artisan Pickles — Local Flavour, Timeless Taste</h1>
          <p className="mt-4 text-gray-600 max-w-xl">Classic family recipes, small-batch pickles made with care. Explore tangy, spicy and subtle flavours.</p>
          <div className="mt-6 flex gap-3">
            <a href="#shop" className="px-5 py-3 bg-emerald-600 text-white rounded-lg shadow-sm">Shop Bestsellers</a>
            <a href="#about" className="px-5 py-3 border rounded-lg">Learn More</a>
          </div>
        </div>

        <div className="w-full max-w-md">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/images/mango.svg" alt="Pickles" className="w-full h-64 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
