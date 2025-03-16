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
    <Link className="group max-w-100 rounded-4xl border-1 border-gray-100 shadow-xl shadow-gray-200 p-4 m-auto 
    card-effect hover:border-green-200 hover:shadow-neutral-50 transition-all ease-in" 
    href={`/posts/${props.slug!.current}`}>
      {/* Article Image Element */}
      <article className="flex flex-col gap-3 ">
          {mainImage ? (
            <Image className='rounded-2xl mt-1 w-fit h-fit'
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
        <div className="">
          <Categories categories={categories} />
        </div>
        {/* Title */}
        <div className="">
          <h2 className="text-2xl font-semibold text-slate-800 transition-colors">
            <span className=" z-[1]">{title}</span>
          </h2>
          {/* Author component hidden for SEO */}
          <div className="hidden">
            <Author author={author} />
          </div>
          {/* Description */}
          <p className='text-xs italic my-1'>{description}</p>
        </div>
      </article>
    </Link>
  )
}