import { createClient } from '@/prismicio';
import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import React from 'react'

type Props = {
    id: string;
}

export async function WorksList({id}: Props) {
    const client = createClient();
    const works = await client.getByID<Content.WorksDocument>(id);
  return (
    <div><PrismicNextImage alt="" field={works.data.image} width={200} height={200}></PrismicNextImage></div>
  )
}