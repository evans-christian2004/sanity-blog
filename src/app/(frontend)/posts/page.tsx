import { sanityFetch } from "@/sanity/lib/live";
import { HIGHLIGHT_QUERY, POSTS_QUERY } from '@/sanity/lib/queries'
import { PostCard } from '@/components/PostCard'
import Highlight from "@/components/Highlight";

export default async function Page() {
  const {data: posts} = await sanityFetch({query: POSTS_QUERY});
  const {data: highlightData} = await sanityFetch({query: HIGHLIGHT_QUERY});

  const highlight_post = highlightData?.[0]?.highlight_post || null

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6">
      <Highlight highlight_post={highlight_post}/>
      <h1 className=" mb-0 pb-1 text-2xl md:text-4xl lg:text-6xl font-semibold text-slate-800 max-w-3xl">All Entries &darr;</h1>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-evenly gap-6 p-5">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </main>
  )
}