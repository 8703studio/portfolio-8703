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
        <div className="group relative mx-auto w-full">
            <div className="grid w-full">
                <div className="relative cursor-pointer">
                    <PrismicLink field={works.data.link_project}>
                        <PrismicNextImage
                            alt=""
                            field={works.data.image}
                             className="mx-auto w-full origin-top transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75"
                        />
                    </PrismicLink>
                    <div className="absolute top-0 left-0 px-6 py-4">
                         <h4 className="mb-3 font-semibold tracking-tight text-white uppercase transition-all duration-300 ease-out group-hover:tracking-wider group-hover:opacity-90">This is the title</h4>
                    </div>
                    <div className="absolute bottom-3 px-6 py-4">
                        <span className="leading-normal text-gray-100">category</span>
                    </div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-center rotate-90 origin-center">
                        <div>Personnal</div>
                        <div className="text-sm text-gray-300">2023</div>
                    </div>
                </div>
            </div>
        </div>
    );
}