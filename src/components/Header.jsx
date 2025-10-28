import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cart } = useCart();
  const count = cart.reduce((s,c) => s + c.qty, 0);
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-2xl font-extrabold text-emerald-700">Priya Pickles</Link>
            <nav className="hidden md:flex gap-4 text-sm text-gray-600">
              <NavLink to="/" end className={({isActive})=> isActive ? 'text-emerald-700' : ''}>Home</NavLink>
              <NavLink to="/shop" className={({isActive})=> isActive ? 'text-emerald-700' : ''}>Shop</NavLink>
              <NavLink to="/about" className={({isActive})=> isActive ? 'text-emerald-700' : ''}>About</NavLink>
              <NavLink to="/contact" className={({isActive})=> isActive ? 'text-emerald-700' : ''}>Contact</NavLink>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/shop" className="hidden sm:inline-block px-4 py-2 bg-emerald-600 text-white rounded-lg">Shop</Link>
            <button aria-label="Cart" className="relative p-2 rounded-lg">
              🧺
              {count>0 && <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full px-1">{count}</span>}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
