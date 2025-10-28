import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cart, updateQty, removeItem, total } = useCart();
  return (
    <aside className="fixed right-4 bottom-4 w-80 bg-white rounded-lg shadow-lg p-4" aria-label="Cart summary">
      <h4 className="font-semibold">Your Cart</h4>
      {cart.length===0 ? <div className="text-gray-500 mt-3">Cart is empty</div> : (
        <div className="mt-3 space-y-3">
          {cart.map(c=>(
            <div key={c.id} className="flex items-center gap-3">
              <img src={c.image} alt={c.title} className="w-12 h-12 object-cover rounded-md" />
              <div className="flex-1">
                <div className="font-medium">{c.title}</div>
                <div className="text-sm text-gray-500">₹{c.price}</div>
                <div className="mt-2 flex items-center gap-2">
                  <button onClick={()=> updateQty(c.id, Math.max(1, c.qty-1))} className="px-2 py-1 border rounded">-</button>
                  <div className="px-2">{c.qty}</div>
                  <button onClick={()=> updateQty(c.id, c.qty+1)} className="px-2 py-1 border rounded">+</button>
                  <button onClick={()=> removeItem(c.id)} className="ml-2 text-sm text-red-500">Remove</button>
                </div>
              </div>
            </div>
          ))}
          <div className="pt-3 border-t flex items-center justify-between">
            <div className="font-semibold">Total</div>
            <div className="font-bold text-emerald-700">₹{total}</div>
          </div>
        </div>
      )}
    </aside>
  );
}
