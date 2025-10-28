import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { useCart } from '../context/CartContext';

export default function Shop() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const { addItem } = useCart();

  const filtered = PRODUCTS.filter(p => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.tags.join(' ').toLowerCase().includes(q);
  });

  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:px-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Shop</h2>
        <div className="text-sm text-gray-500">{filtered.length} products</div>
      </div>

      <div className="mt-4">
        <input aria-label="Search products" onChange={(e)=> setQuery(e.target.value)} placeholder="Search pickles, tags..." className="w-full border rounded-full py-2 px-4 text-sm shadow-sm focus:outline-none" />
      </div>

      <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map(p => (
          <ProductCard key={p.id} p={p} onAdd={addItem} onView={(prod)=> setSelected(prod)} />
        ))}
      </div>

      <ProductModal product={selected} onClose={()=> setSelected(null)} onAdd={addItem} />
    </section>
  );
}
