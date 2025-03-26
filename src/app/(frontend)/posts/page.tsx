import { sanityFetch } from "@/sanity/lib/live";
import { HIGHLIGHT_QUERY, POSTS_QUERY } from '@/sanity/lib/queries'
import { PostCard } from '@/components/PostCard'
import { Title } from '@/components/Title'
import Image from "next/image";
import Link from "next/link";
import Highlight from "@/components/Highlight";

export default async function Page() {
  const {data: posts} = await sanityFetch({query: POSTS_QUERY});
  const {data: highlightData} = await sanityFetch({query: HIGHLIGHT_QUERY});

  const highlight_post = highlightData?.[0]?.highlight_post || null;

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6">
      <Highlight highlight_post={highlight_post}/>
      <Title>Entries</Title>
      <div className="mx-auto mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-evenly gap-6 p-5">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </main>
  )
}