import React from 'react';

export default function ProductCard({ p, onAdd, onView }) {
  return (
    <article className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col" aria-labelledby={'title-'+p.id}>
      <div className="h-44 sm:h-56 bg-gray-100">
        <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 id={'title-'+p.id} className="font-semibold text-lg">{p.title}</h3>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-yellow-500 text-sm">{'★'.repeat(Math.floor(p.rating))}<span className="text-gray-400 ml-1 text-xs">{p.rating.toFixed(1)}</span></div>
          <div className="text-emerald-700 font-bold">₹{p.price}</div>
        </div>
        <p className="text-gray-500 text-sm mt-3 flex-1">{p.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-2">
            {p.tags.slice(0,2).map(t=> <span key={t} className="text-xs px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full">{t}</span>)}
          </div>
          <div className="flex gap-2">
            <button onClick={()=>onAdd(p)} className="px-4 py-2 bg-emerald-600 text-white rounded-lg">Add</button>
            <button onClick={()=>onView(p)} className="px-3 py-2 border rounded-lg">View</button>
          </div>
        </div>
      </div>
    </article>
  );
}
