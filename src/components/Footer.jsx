import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
        <div>
          <div className="text-xl font-bold text-emerald-700">Priya Pickles</div>
          <p className="text-sm text-gray-600 mt-2">Small batch pickles made with love. © {new Date().getFullYear()}</p>
        </div>

        <div className="mt-4 md:mt-0 text-sm text-gray-600 flex gap-6">
          <div>Terms</div>
          <div>Privacy</div>
          <div>Contact</div>
        </div>
      </div>
    </footer>
  );
}
