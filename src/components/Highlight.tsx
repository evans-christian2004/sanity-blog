import { urlFor } from '@/sanity/lib/image';
import { HIGHLIGHT_QUERYResult } from '@/sanity/types'
import { Image } from 'next-sanity/image';
import React from 'react'

const Highlight = ({ highlight_post }: { highlight_post: HIGHLIGHT_QUERYResult[0]["highlight_post"]}) => {
    if(!highlight_post) return null;

  return (
    <div>
        {highlight_post.mainImage ? (
                    <Image className='h-48 w-full rounded-2xl mt-1 object-cover'
                      src={urlFor(highlight_post.mainImage).width(400).height(250).url()}
                      width={400}
                      height={250}
                      alt={highlight_post.mainImage.alt || highlight_post.title || ''}
                    />
                  ) : null}
        <h2>{highlight_post.title}</h2>
        <p>{highlight_post.description}</p>
    </div>
  )
}

export default Highlight