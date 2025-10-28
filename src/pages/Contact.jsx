import React from 'react';

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto p-4 sm:p-6 lg:px-8">
      <h2 className="text-2xl font-semibold">Contact Us</h2>
      <p className="mt-4 text-gray-600">Email: hello@priyapickles.example</p>
      <form className="mt-4 space-y-3" onSubmit={(e)=> e.preventDefault()}>
        <label className="block">
          <span className="text-sm">Name</span>
          <input className="mt-1 w-full border rounded px-3 py-2" required />
        </label>
        <label className="block">
          <span className="text-sm">Message</span>
          <textarea className="mt-1 w-full border rounded px-3 py-2" rows="4" required />
        </label>
        <button type="submit" className="px-4 py-2 bg-emerald-600 text-white rounded-lg">Send</button>
      </form>
    </section>
  );
}
