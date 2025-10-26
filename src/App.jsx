import React from 'react';
import Header from './components/Header';
import FiltersBar from './components/FiltersBar';
import ListingsGrid from './components/ListingsGrid';
import Footer from './components/Footer';

const demoListings = [
  {
    id: '1',
    title: 'iPhone 14 Pro Max - Deep Purple 256GB',
    brand: 'Apple',
    model: 'iPhone 14 Pro Max',
    condition: 'Used',
    price: 999,
    description: 'Gently used with original box and charger. Battery health 94%. No dents, minor micro-scratches.',
    location: 'New York, NY',
    images: [
      'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1661961110671-77b972349545?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1678685888425-54097d77e612?q=80&w=1600&auto=format&fit=crop'
    ],
    seller: 'Prime Mobiles',
    phone: '+1 555 0100',
    whatsapp: '+1 555 0100',
    verified: true,
  },
  {
    id: '2',
    title: 'Samsung Galaxy S23 Ultra 12/256',
    brand: 'Samsung',
    model: 'Galaxy S23 Ultra',
    condition: 'New',
    price: 1099,
    description: 'Brand new, sealed box with full warranty. Available in Phantom Black and Green.',
    location: 'San Francisco, CA',
    images: [
      'https://images.unsplash.com/photo-1641193944637-311b5e71d217?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607860108855-0e29a4ba7fe2?q=80&w=1600&auto=format&fit=crop'
    ],
    seller: 'Bay Tech Store',
    phone: '+1 555 0112',
    whatsapp: '+1 555 0112',
    verified: true,
  },
  {
    id: '3',
    title: 'OnePlus 11 8/128 - Titan Black',
    brand: 'OnePlus',
    model: '11',
    condition: 'Refurbished',
    price: 599,
    description: 'Certified refurbished with 6-month store warranty. Excellent condition.',
    location: 'Austin, TX',
    images: [
      'https://images.unsplash.com/photo-1622560480654-d96214fdc887?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop'
    ],
    seller: 'Lone Star Mobiles',
    phone: '+1 555 0199',
    whatsapp: '+1 555 0199',
    verified: false,
  },
  {
    id: '4',
    title: 'Google Pixel 7 - Snow 128GB',
    brand: 'Google',
    model: 'Pixel 7',
    condition: 'Used',
    price: 499,
    description: 'Clean condition, includes case. Latest Android updates installed.',
    location: 'Seattle, WA',
    images: [
      'https://images.unsplash.com/photo-1660075787099-56cc3dd6becd?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1656087732281-ef0354fafe31?q=80&w=1600&auto=format&fit=crop'
    ],
    seller: 'Northwest Phones',
    phone: '+1 555 0188',
    whatsapp: '+1 555 0188',
    verified: true,
  },
  {
    id: '5',
    title: 'Xiaomi 13 Pro 12/256 - Ceramic White',
    brand: 'Xiaomi',
    model: '13 Pro',
    condition: 'New',
    price: 799,
    description: 'Sealed pack with global warranty. Limited stock, call to reserve.',
    location: 'Chicago, IL',
    images: [
      'https://images.unsplash.com/photo-1604754742629-3e5728249cdf?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=1600&auto=format&fit=crop'
    ],
    seller: 'City Gadget Hub',
    phone: '+1 555 0177',
    whatsapp: '+1 555 0177',
    verified: false,
  },
];

const App = () => {
  const [query, setQuery] = React.useState('');
  const [brand, setBrand] = React.useState('');
  const [condition, setCondition] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [minPrice, setMinPrice] = React.useState('');
  const [maxPrice, setMaxPrice] = React.useState('');
  const [sort, setSort] = React.useState('recent');
  const [listView, setListView] = React.useState(false);

  const brandOptions = React.useMemo(()=> Array.from(new Set(demoListings.map(i=>i.brand))).sort(), []);
  const locationOptions = React.useMemo(()=> Array.from(new Set(demoListings.map(i=>i.location))).sort(), []);

  const filters = { query, brand, condition, location, minPrice, maxPrice, sort };

  const handleAddListing = () => {
    alert('In a full build, this opens the shop upload form with image gallery.');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header onAddListing={handleAddListing} />

      <section className="bg-gradient-to-b from-indigo-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <h1 className="text-2xl md:text-4xl font-semibold leading-tight">Find the right phone from trusted shops near you</h1>
          <p className="mt-3 text-white/90 max-w-2xl">Browse new, used, and refurbished smartphones. Contact sellers instantly via call or WhatsApp.</p>
        </div>
      </section>

      <FiltersBar
        query={query}
        setQuery={setQuery}
        brand={brand}
        setBrand={setBrand}
        condition={condition}
        setCondition={setCondition}
        location={location}
        setLocation={setLocation}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        sort={sort}
        setSort={setSort}
        listView={listView}
        setListView={setListView}
        brandOptions={brandOptions}
        locationOptions={locationOptions}
      />

      <ListingsGrid items={demoListings} filters={filters} listView={listView} />
      <Footer />
    </div>
  );
};

export default App;
