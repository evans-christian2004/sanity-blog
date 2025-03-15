import Image from 'next/image'
import Link from 'next/link'
import { Oxanium} from 'next/font/google'

const oxanium = Oxanium(
  {
    subsets: ["latin"]
  }
)

export function Header() {
  return (
    <div className="glass border-b-1 border-bg-border top-0 sticky">
      <header className="flex items-center justify-between p-4 container mx-auto">
        <Link
          className={`${oxanium.className} flex gap-3 items-center md:text-2xl font-semibold`}
          href="/"
        >
          <Image className='rounded-lg' src="/logo.svg" width="35" height="35" alt='terminal logo'/>
        </Link>
        <ul className="flex items-center gap-4 font-semibold text-slate-700">
          <li>
            <Link 
              className="hover:text-green-400 transition-colors"
              href="/posts"
            >
              Posts
            </Link>
          </li>
        </ul>
      </header>
    </div>
  )
}