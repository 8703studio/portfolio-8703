import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const home = await client.getByUID("page", "home", {
    fetchLinks: ["projects.title", "projects.category"], // ⬅️ Ajout magique ici
  });

  return {
    title: home.data.title,
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Index() {
  const client = createClient();

  const home = await client.getByUID("page", "home", {
    fetchLinks: ["projects.title", "projects.category"], // ⬅️ Et ici aussi
  });

  return <SliceZone slices={home.data.slices} components={components} />;
}
