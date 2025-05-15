import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';

import { createClient } from '@/prismicio';
import { PrismicLink } from '@prismicio/react';

type Props = {
    id: string;
}

export async function WorksList({ id }: Props) {
    const client = createClient();
    const works = await client.getByID<Content.WorksDocument>(id);
    return (
        <div className="group relative mx-auto w-full max-w-72 px-8 pt-4 ">

            <div className="-mb-1 overflow-hidden py-4">
                <PrismicLink field={works.data.link_project}>
                    <PrismicNextImage
                        alt=""
                        field={works.data.image}
                        className=" mx-auto w-full origin-top"
                    />
                </PrismicLink>
            </div>
            <div className="flex flex-col justify-between ~text-sm/2xl">
                <h3 className="my-2 font-sans leading-tight ~text-lg/xl">
                    titre
                </h3>
                <span className="inline-flex items-center gap-1">
                    category
                </span>
            </div>
        </div>
    )
}