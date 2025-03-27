import { urlFor } from '@/sanity/lib/image';
import { HIGHLIGHT_QUERYResult } from '@/sanity/types'
import { Image } from 'next-sanity/image';
import React from 'react'
import { PublishedAt } from './PublishedAt';
import { Categories } from './Categories';
import Link from 'next/link';

const Highlight = ({ highlight_post }: { highlight_post: HIGHLIGHT_QUERYResult[0]["highlight_post"]}) => {
    if(!highlight_post) return null;

  return (
    <Link className='mb-10 group'
    href={`/posts/${highlight_post.slug?.current}`}>
        {highlight_post.mainImage ? (
                    <Image className='h-[45vh] md:h-[75vh] w-full rounded-t-4xl md:rounded-4xl mt-1 object-cover 
                    hover:border-green-400 hover:border-2 transition-all ease-in-out duration-300'
                      src={urlFor(highlight_post.mainImage).width(800).height(500).url()}
                      width={800}
                      height={500}
                      alt={highlight_post.mainImage.alt || highlight_post.title || ''}
                    />
                  ) : null}
        <div className="p-6  bg-white shadow-lg md:w-3/7 rounded-b-2xl md:rounded-2xl md:absolute top-[25vh] left-20 lg:block lg:top-[55vh] lg:left-1/6
        lg:group-hover:top-[50vh] transition-all ease-in-out duration-500">
            <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-1">
                    <Categories categories={highlight_post.categories} />
                </div>
                <h2 className='text-3xl font-bold'>{highlight_post.title}</h2>
                <p className=''>{highlight_post.description}</p>
                <div className="text-slate-900 text-xs">
                    <PublishedAt publishedAt={highlight_post.publishedAt} />
                </div> 
            </div>     
        </div>
        
    </Link>
  )
}

export default Highlight