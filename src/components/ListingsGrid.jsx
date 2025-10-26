import React from 'react';
import { Phone, MessageCircle, MapPin, BadgeCheck, ChevronLeft, ChevronRight } from 'lucide-react';

const currency = (n) => new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

const ImageGallery = ({ images }) => {
  const [index, setIndex] = React.useState(0);
  const prev = (e) => { e.stopPropagation(); setIndex((i)=> (i - 1 + images.length) % images.length); };
  const next = (e) => { e.stopPropagation(); setIndex((i)=> (i + 1) % images.length); };
  return (
    <div className="relative group select-none">
      <img src={images[index]} alt="Listing" className="w-full h-48 md:h-40 object-cover rounded-md" />
      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition" aria-label="Previous image">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition" aria-label="Next image">
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <span key={i} className={`w-1.5 h-1.5 rounded-full ${i === index ? 'bg-white' : 'bg-white/60'}`} />
        ))}
      </div>
    </div>
  );
};

const ListingCard = ({ item, listView=false }) => {
  const telLink = `tel:${item.phone}`;
  const waPhone = item.whatsapp?.replace(/[^\d]/g, '') || item.phone.replace(/[^\d]/g, '');
  const waLink = `https://wa.me/${waPhone}?text=${encodeURIComponent('Hi, I am interested in your listing: ' + item.title)}`;
  return (
    <div className={`border border-gray-100 rounded-lg overflow-hidden bg-white ${listView ? 'flex' : ''}`}>
      <div className={`${listView ? 'w-48' : ''} p-3 md:p-4`}>
        <ImageGallery images={item.images} />
      </div>
      <div className={`p-3 md:p-4 flex-1 grid ${listView ? 'grid-cols-1 md:grid-cols-3 items-center' : 'grid-cols-1 gap-2'}`}>
        <div className="space-y-1">
          <h3 className="font-semibold text-gray-900 line-clamp-1">{item.title}</h3>
          <div className="text-sm text-gray-600">{item.brand} • {item.model} • {item.condition}</div>
          <div className="flex items-center gap-1 text-sm text-gray-600"><MapPin className="w-4 h-4" />{item.location}</div>
        </div>
        <div className="text-left md:text-center">
          <div className="text-lg font-semibold text-gray-900">{currency(item.price)}</div>
          <div className="text-xs text-gray-500">Seller: {item.seller}</div>
          {item.verified && (
            <div className="inline-flex items-center gap-1 text-emerald-600 text-xs"><BadgeCheck className="w-4 h-4"/>Verified shop</div>
          )}
        </div>
        <div className="flex flex-col sm:flex-row md:justify-end gap-2 mt-2 md:mt-0">
          <a href={telLink} className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 text-gray-900 text-sm" aria-label="Call Seller">
            <Phone className="w-4 h-4"/> Call Seller
          </a>
          <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-sm" aria-label="WhatsApp Seller">
            <MessageCircle className="w-4 h-4"/> WhatsApp
          </a>
        </div>
        {!listView && (
          <p className="col-span-full text-sm text-gray-600 line-clamp-2 mt-2">{item.description}</p>
        )}
      </div>
    </div>
  );
};

const ListingsGrid = ({ items, filters, listView }) => {
  const filtered = React.useMemo(()=>{
    let out = [...items];
    if (filters.query) {
      const q = filters.query.toLowerCase();
      out = out.filter(i => `${i.title} ${i.brand} ${i.model}`.toLowerCase().includes(q));
    }
    if (filters.brand) out = out.filter(i => i.brand === filters.brand);
    if (filters.condition) out = out.filter(i => i.condition === filters.condition);
    if (filters.location) out = out.filter(i => i.location === filters.location);
    if (filters.minPrice) out = out.filter(i => i.price >= Number(filters.minPrice));
    if (filters.maxPrice) out = out.filter(i => i.price <= Number(filters.maxPrice));
    if (filters.sort === 'price_low') out.sort((a,b)=> a.price - b.price);
    if (filters.sort === 'price_high') out.sort((a,b)=> b.price - a.price);
    return out;
  }, [items, filters]);

  return (
    <section id="browse" className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-600">{filtered.length} result{filtered.length !== 1 ? 's' : ''}</p>
      </div>
      <div className={listView ? 'space-y-3' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4'}>
        {filtered.map(item => (
          <ListingCard key={item.id} item={item} listView={listView} />
        ))}
      </div>
    </section>
  );
};

export default ListingsGrid;
