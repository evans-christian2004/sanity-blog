import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from '@/sanity/lib/queries'
import { PostCard } from '@/components/PostCard'
import { Title } from '@/components/Title'
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const {data: posts} = await sanityFetch({query: POSTS_QUERY});

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6">
      
      <Title>Entries</Title>
      <div className="mt-7 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5 p-5">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </main>
  )
}