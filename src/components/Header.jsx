import React from 'react';
import { Smartphone, Store, Shield, Plus, Menu } from 'lucide-react';

const Header = ({ onAddListing }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Smartphone className="w-6 h-6 text-indigo-600" />
          <span className="font-semibold text-lg">MultiShop Mobile</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#browse" className="hover:text-gray-900">Browse</a>
          <a href="#shops" className="hover:text-gray-900 flex items-center gap-1"><Store className="w-4 h-4"/>For Shops</a>
          <a href="#admin" className="hover:text-gray-900 flex items-center gap-1"><Shield className="w-4 h-4"/>Admin</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={onAddListing}
            className="inline-flex items-center gap-2 bg-indigo-600 text-white text-sm px-3 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            <Plus className="w-4 h-4" /> Add Listing
          </button>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-4 py-3 flex flex-col gap-3 text-sm text-gray-700">
            <a href="#browse" className="hover:text-gray-900">Browse</a>
            <a href="#shops" className="hover:text-gray-900 flex items-center gap-1"><Store className="w-4 h-4"/>For Shops</a>
            <a href="#admin" className="hover:text-gray-900 flex items-center gap-1"><Shield className="w-4 h-4"/>Admin</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
