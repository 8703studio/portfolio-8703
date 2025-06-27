'use client';

import React, { useEffect, useState, useRef } from 'react';
import Macy from 'macy';
import { createClient } from '@/prismicio';
import { PrismicLink } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import type { LinkField, ImageField } from '@prismicio/types';

type GalleryItem = {
  id: string;
  data: {
    category?: { label: string | null }[];
    link_project?: LinkField;
    image: ImageField;
    title?: string;
    description?: string;
    year?: string;
  };
};

const Masonry = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [filter, setFilter] = useState('All');
  const macyRef = useRef<Macy | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const client = createClient();

  useEffect(() => {
    async function fetchGalleryItems() {
      try {
        const response = await client.getAllByType('gallery_item');
        setItems(
          response.map((item) => ({
            id: item.id,
            data: {
              category: item.data.category,
              link_project: item.data.link_project,
              image: item.data.image,
              title: item.data.title ?? undefined,
              description: item.data.description ?? undefined,
              year: item.data.year ?? '2023',
            },
          }))
        );
      } catch (error) {
        console.error('Erreur récupération Prismic:', error);
      }
    }

    fetchGalleryItems();
  }, []);

  // Macy layout update
  useEffect(() => {
    if (!galleryRef.current) return;

    if (macyRef.current) {
      macyRef.current.remove();
    }

    const timeout = setTimeout(() => {
      macyRef.current = new Macy({
        container: galleryRef.current!,
        columns: 3,
        margin: { x: 0, y: 0 },
        breakAt: {
          "1400": 3,
          "1200": 2,
          "768": 1,
          "480": 1,
        },
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, [items, filter]);

  const categories = [
    'All',
    ...Array.from(
      new Set(
        items.flatMap((item) =>
          item.data.category
            ?.map((cat) => cat.label)
            .filter((label): label is string => !!label)
        )
      )
    ),
  ];

  const filteredItems =
    filter === 'All'
      ? items
      : items.filter((item) =>
          item.data.category?.some((cat) => cat.label === filter)
        );

  return (
    <div>
      {/* FILTRES */}
      <div className='flex flex-row space-between items-center justify-between mb-8'> 
        <div> ALL PROJECTS</div>
              <div className="filters mb-8 flex flex-wrap gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 border transition ${
              filter === cat
                ? 'bg-white text-black'
                : 'bg-transparent text-white border-white hover:bg-white hover:text-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      </div>


      {/* GALERIE MASONRY */}
      <div ref={galleryRef} className="gallery-masonry">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="gallery-item relative cursor-pointer group w-full"
          >
            {item.data.link_project?.url ? (
              <PrismicLink field={item.data.link_project}>
               <div className="relative">
            <PrismicNextImage
              field={item.data.image}
              className="w-full h-auto object-cover shadow-lg transition-transform duration-500 ease-in-out"
            />
            {/* Overlay orange */}
            <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />
          </div>
        </PrismicLink>
      ) : (
        <div className="relative">
          <PrismicNextImage
            field={item.data.image}
            className="w-full h-auto object-cover shadow-lg transition-transform duration-500 ease-in-out"
          />
          {/* Overlay orange */}
          <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />
        </div>
      )}

             {/* TITRE visible au hover */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h4 className="text-[24px] sm:text-[16px] md:text-[20px] lg:text-[26px] font-bold text-white text-center group-hover:tracking-wide">
          {item.data.title ?? 'Sans titre'}
        </h4>
      </div>

      {/* CATÉGORIE visible au hover */}
      <div className="absolute bottom-3 left-0 px-6 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="leading-normal text-gray-100 text-sm">
          {item.data.category
            ?.map((cat) => cat.label)
            .filter(Boolean)
            .join(', ') ?? ''}
        </span>
      </div>

      {/* DESCRIPTION & ANNÉE visibles au hover */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-center rotate-90 origin-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div>{item.data.description}</div>
        <div className="text-sm text-gray-300">{item.data.year}</div>
      </div>
    </div>
        ))}
      </div>
    </div>
  );
};

export default Masonry;
