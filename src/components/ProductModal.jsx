import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function ProductModal({ product, onClose, onAdd }) {
  useEffect(()=> {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    window.addEventListener('keydown', onKey);
    return ()=> window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!product) return null;
  return createPortal(
    <div role="dialog" aria-modal="true" aria-label="Product details" className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-30" onClick={onClose}></div>
      <div className="relative w-full max-w-3xl bg-white rounded-2xl p-6 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-lg" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">{product.title}</h3>
            <div className="mt-2 flex items-center justify-between">
              <div className="text-yellow-500">{'★'.repeat(Math.floor(product.rating))} <span className="text-gray-400 ml-1 text-xs">{product.rating.toFixed(1)}</span></div>
              <div className="text-2xl font-bold text-emerald-700">₹{product.price}</div>
            </div>
            <p className="mt-4 text-gray-600">{product.description}</p>
            <div className="mt-6 flex gap-3">
              <button onClick={()=> { onAdd(product); onClose(); }} className="px-5 py-3 bg-emerald-600 text-white rounded-lg">Add to cart</button>
              <button onClick={onClose} className="px-5 py-3 border rounded-lg">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
