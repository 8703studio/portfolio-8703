'use client';

import React, { useEffect, useState } from "react";
import { createClient } from "@/prismicio";
import { PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import type { LinkField, ImageField } from "@prismicio/types";

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

const Gallery = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [filter, setFilter] = useState("All");
  const client = createClient();

  useEffect(() => {
    async function fetchGalleryItems() {
      try {
        const response = await client.getAllByType("gallery_item");
        setItems(
          response.map((item) => ({
            id: item.id,
            data: {
              category: item.data.category,
              link_project: item.data.link_project,
              image: item.data.image,
              title: item.data.title ?? undefined,
              description: item.data.description ?? undefined,
              year: item.data.year ?? "2023",
            },
          }))
        );
      } catch (error) {
        console.error("Erreur récupération Prismic:", error);
      }
    }

    fetchGalleryItems();
  }, []);

  const categories = [
    "All",
    ...Array.from(
      new Set(
        items.flatMap((item) =>
          item.data.category
            ?.map((cat) => cat.label)
            .filter((label): label is string => !!label)
        )
      ),
    ),
  ];

  const filteredItems =
    filter === "All"
      ? items
      : items.filter((item) =>
          item.data.category?.some((cat) => cat.label === filter)
        );

  return (
    <div>
      {/* FILTRES */}
      <div className="filters mb-8 flex flex-wrap gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded border transition ${
              filter === cat
                ? "bg-white text-black"
                : "bg-transparent text-white border-white hover:bg-white hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GALERIE */}
      <div className="w-full px-4">
        <div
          className={`
          grid
          w-full 
          grid-cols 
          gap-6 
          sm:grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3
          `}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative cursor-pointer group w-full"
              style={{ minWidth: '200px' }} // optionnel, ajuste largeur minimale en desktop
            >
              {item.data.link_project?.url ? (
                <PrismicLink field={item.data.link_project}>
                  <PrismicNextImage
                    field={item.data.image}
                    className="w-full h-auto object-cover aspect-[4/3] shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75"
                  />
                </PrismicLink>
              ) : (
                <PrismicNextImage
                  field={item.data.image}
                  className="w-full h-auto object-cover aspect-[4/3] shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75"
                />
              )}

              {/* Titre en haut à gauche */}
              <div className="absolute top-0 left-0 px-6 py-4">
                <h4 className="mb-3 font-semibold tracking-tight text-white uppercase transition-all duration-300 ease-out group-hover:tracking-wider group-hover:opacity-90">
                  {item.data.title ?? "Sans titre"}
                </h4>
              </div>

              {/* Catégories en bas à gauche */}
              <div className="absolute bottom-3 left-0 px-6 py-4">
                <span className="leading-normal text-gray-100 text-sm">
                  {item.data.category
                    ?.map((cat) => cat.label)
                    .filter(Boolean)
                    .join(", ") ?? ""}
                </span>
              </div>

              {/* Info latérale à droite */}
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-center rotate-90 origin-center text-white">
                <div>{item.data.description}</div>
                <div className="text-sm text-gray-300">{item.data.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
