
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const gallerySection = document.querySelector('#gallery');
    if (gallerySection) {
      observer.observe(gallerySection);
    }
    
    return () => {
      if (gallerySection) {
        observer.unobserve(gallerySection);
      }
    };
  }, []);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'campus', name: 'Campus' },
    { id: 'events', name: 'Events' },
    { id: 'sports', name: 'Sports' },
    { id: 'activities', name: 'Activities' }
  ];
  
  const galleryItems = [
    {
      id: 1,
      category: 'campus',
      imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800',
      title: 'Modern Campus Building'
    },
    {
      id: 2,
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800',
      title: 'Annual Day Celebration'
    },
    {
      id: 3,
      category: 'sports',
      imageUrl: 'https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?q=80&w=800',
      title: 'Sports Tournament'
    },
    {
      id: 4,
      category: 'activities',
      imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800',
      title: 'Science Exhibition'
    },
    {
      id: 5,
      category: 'campus',
      imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800',
      title: 'School Library'
    },
    {
      id: 6,
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=800',
      title: 'Cultural Program'
    },
    {
      id: 7,
      category: 'activities',
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800',
      title: 'Art & Craft Workshop'
    },
    {
      id: 8,
      category: 'sports',
      imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800',
      title: 'Basketball Match'
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-school-soft-gray" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark inline-block relative">
            School Gallery
            <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-school-orange"></span>
          </h2>
          <p className="mt-6 text-gray-600 font-poppins">
            Explore our vibrant school life through our gallery of campus facilities, events, 
            sports competitions, and student activities.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-8 animate-fade-in">
          <div className="bg-white rounded-full shadow-md p-1.5 inline-flex">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-colors font-poppins ${
                  activeCategory === category.id
                    ? 'bg-school-blue text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-lg shadow-md group h-64 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x600?text=Photo";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-school-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-white font-medium font-poppins">{item.title}</h4>
                <p className="text-white/80 text-sm capitalize font-poppins">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="bg-white border border-school-blue text-school-blue hover:bg-school-blue hover:text-white font-medium px-8 py-3 rounded-md transition-colors font-poppins"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
