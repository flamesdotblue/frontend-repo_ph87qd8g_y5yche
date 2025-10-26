import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-semibold text-gray-900 mb-2">MultiShop Mobile</div>
          <p className="">A marketplace for new, used, and refurbished smartphones from trusted shops near you.</p>
        </div>
        <div>
          <div className="font-medium text-gray-900 mb-2">For Shops</div>
          <ul className="space-y-1">
            <li><a href="#shops" className="hover:text-gray-900">Register your shop</a></li>
            <li><a href="#shops" className="hover:text-gray-900">Upload inventory</a></li>
            <li><a href="#shops" className="hover:text-gray-900">Seller guidelines</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-gray-900 mb-2">Admin</div>
          <ul className="space-y-1">
            <li><a href="#admin" className="hover:text-gray-900">Moderation</a></li>
            <li><a href="#admin" className="hover:text-gray-900">Reports</a></li>
            <li><a href="#admin" className="hover:text-gray-900">User management</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-6">© {new Date().getFullYear()} MultiShop Mobile</div>
    </footer>
  );
};

export default Footer;
