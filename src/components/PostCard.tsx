import { Author } from '@/components/Author'
import { Categories } from '@/components/Categories'
import { POSTS_QUERYResult } from '@/sanity/types'
import { PublishedAt } from '@/components/PublishedAt'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

export function PostCard(props: POSTS_QUERYResult[0]) {
  const { title, author, mainImage, publishedAt, categories, description } = props

  return (
    <Link className="overflow-hidden max-w-80 rounded-4xl border-2 border-gray-100 shadow-xl shadow-gray-200 p-4 
    card-effect hover:border-green-200 hover:shadow-neutral-50 transition-all ease-in" 
    href={`/posts/${props.slug!.current}`}>
      {/* Article Image Element */}
      <article className="flex flex-col gap-3 ">
          {mainImage ? (
            <Image className='h-48 w-full rounded-2xl mt-1 object-cover'
              src={urlFor(mainImage).width(400).height(250).url()}
              width={400}
              height={250}
              alt={mainImage.alt || title || ''}
            />
          ) : null}
        {/* Date Published */}
        <div className="text-slate-900 text-xs">
          <PublishedAt publishedAt={publishedAt} />
        </div>  
        {/* Categories */}
        <div className="flex flex-wrap gap-1">
          <Categories categories={categories} />
        </div>
        {/* Title */}
        <div className="flex flex-col flex-grow">
          <h2 className="text-2xl font-semibold text-slate-800 transition-colors">
            <span className=" z-[1]">{title}</span>
          </h2>
          {/* Author component hidden for SEO */}
          <div className="hidden">
            <Author author={author} />
          </div>
          {/* Description */}
          <p className='text-xs italic my-1 px-1'>{description}</p>
        </div>
      </article>
    </Link>
  )
}