import React from 'react';
import { Search, Filter, Grid, List as ListIcon, MapPin } from 'lucide-react';

const FiltersBar = ({
  query,
  setQuery,
  brand,
  setBrand,
  condition,
  setCondition,
  location,
  setLocation,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  sort,
  setSort,
  listView,
  setListView,
  brandOptions,
  locationOptions,
}) => {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, brand, or model"
              className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setListView(false)}
              className={`p-2 border rounded-md ${!listView ? 'bg-gray-900 text-white border-gray-900' : 'border-gray-200 text-gray-600'}`}
              aria-label="Grid view"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setListView(true)}
              className={`p-2 border rounded-md ${listView ? 'bg-gray-900 text-white border-gray-900' : 'border-gray-200 text-gray-600'}`}
              aria-label="List view"
            >
              <ListIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
          <div className="col-span-1">
            <label className="sr-only">Brand</label>
            <select value={brand} onChange={(e)=>setBrand(e.target.value)} className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm">
              <option value="">All Brands</option>
              {brandOptions.map((b)=> (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
          <div className="col-span-1">
            <label className="sr-only">Condition</label>
            <select value={condition} onChange={(e)=>setCondition(e.target.value)} className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm">
              <option value="">Any Condition</option>
              <option>New</option>
              <option>Used</option>
              <option>Refurbished</option>
            </select>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="relative">
              <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <select value={location} onChange={(e)=>setLocation(e.target.value)} className="w-full border border-gray-200 rounded-md pl-9 pr-3 py-2 text-sm">
                <option value="">All Locations</option>
                {locationOptions.map((l)=> (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-span-1">
            <input type="number" min={0} value={minPrice} onChange={(e)=>setMinPrice(e.target.value)} placeholder="Min Price" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm" />
          </div>
          <div className="col-span-1">
            <input type="number" min={0} value={maxPrice} onChange={(e)=>setMaxPrice(e.target.value)} placeholder="Max Price" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm" />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select value={sort} onChange={(e)=>setSort(e.target.value)} className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm">
                <option value="recent">Most Recent</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className="md:hidden flex items-center justify-end gap-2">
          <button
            onClick={() => setListView(false)}
            className={`p-2 border rounded-md ${!listView ? 'bg-gray-900 text-white border-gray-900' : 'border-gray-200 text-gray-600'}`}
            aria-label="Grid view"
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setListView(true)}
            className={`p-2 border rounded-md ${listView ? 'bg-gray-900 text-white border-gray-900' : 'border-gray-200 text-gray-600'}`}
            aria-label="List view"
          >
            <ListIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FiltersBar;
