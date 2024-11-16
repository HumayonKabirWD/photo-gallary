"use client"

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';



const ImageGallery = () => {
  // Sample image data
  const images = [
    { id: 1, src: '/n1.jpg', alt: 'Nature 1', category: 'nature' },
    { id: 2, src: '/n2.jpg', alt: 'Nature 2', category: 'nature' },
    { id: 3, src: '/n3.jpg', alt: 'Nature 3', category: 'nature' },
    { id: 4, src: '/n4.jpg', alt: 'Nature 4', category: 'nature' },
    { id: 5, src: '/n5.jpg', alt: 'Nature 5', category: 'nature' },
    { id: 6, src: '/n6.jpg', alt: 'Nature 6', category: 'nature' },
    { id: 7, src: '/n7.jpg', alt: 'Nature 7', category: 'nature' },
    { id: 8, src: '/n8.jpg', alt: 'Nature 8', category: 'nature' },
    { id: 9, src: '/n9.jpg', alt: 'Nature 9', category: 'nature' },
    { id: 10, src: '/n10.jpg', alt: 'Nature 10', category: 'nature' },
    { id: 11, src: '/n11.jpg', alt: 'Nature 11', category: 'nature' },
    { id: 12, src: '/ar1.jpg', alt: 'Architecture 1', category: 'architecture' },
    { id: 13, src: '/ar2.jpg', alt: 'Architecture 2', category: 'architecture' },
    { id: 14, src: '/ar3.jpg', alt: 'Architecture 3', category: 'architecture' },
    { id: 15, src: '/ar5.jpg', alt: 'Architecture 4', category: 'architecture' },
    { id: 16, src: '/ar6.jpg', alt: 'Architecture 5', category: 'architecture' },
    { id: 17, src: '/ar7.jpg', alt: 'Architecture 6', category: 'architecture' },
    { id: 18, src: '/a1.jpg', alt: 'animale 1', category: 'animale' },
    { id: 19, src: '/a2.jpg', alt: 'animale 2', category: 'animale' },
    { id: 20, src: '/a3.jpg', alt: 'animale 3', category: 'animale' },
    { id: 21, src: '/a4.jpg', alt: 'animale 4', category: 'animale' },
    { id: 22, src: '/a5.jpg', alt: 'animale 5', category: 'animale' },
    { id: 23, src: '/a6.jpg', alt: 'animale 6', category: 'animale' },
    { id: 24, src: '/animal1.jpg', alt: 'animale 7', category: 'animale' },
    { id: 25, src: '/animal2.jpg', alt: 'animale 8', category: 'animale' },
    { id: 26, src: '/animal3.jpg', alt: 'animale 9', category: 'animale' },
    { id: 27, src: '/animal5.jpg', alt: 'animale 10', category: 'animale' },
    { id: 28, src: '/animal6.jpg', alt: 'animale 11', category: 'animale' },
    
  ];

  // States
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Get unique categories
  const categories = ['all', ...new Set(images.map(img => img.category))];

  // Filter images based on selected category
  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <div className="container mx-auto px-4 py-8 bg-black text-white">
        <h2 className='text-3xl text-center font-bold pb-8'>IMAGE Gallery App</h2>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8 items-center justify-center text-black">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-xl capitalize text-sm font-semibold transition-colors
              ${activeFilter === category 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {filteredImages.map(image => (
          <Card 
            key={image.id} 
            className="overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative aspect-square">
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60">
                <p className="text-xs capitalize">{image.category}</p>
                <p className="text-sm font-semibold truncate">{image.alt}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal for enlarged image */}
      <Dialog 
        open={selectedImage !== null} 
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl w-full p-0 bg-black/90">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-2 top-2 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          {selectedImage && (
            <div className="relative w-full h-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 text-white">
                <p className="text-sm capitalize">{selectedImage.category}</p>
                <p className="text-lg font-semibold">{selectedImage.alt}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageGallery;