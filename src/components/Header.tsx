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
    <div className="glass border-b-1 border-bg-border top-0 sticky z-10">
      <header className="flex items-center justify-between p-4 container mx-auto">
        <Link
          className={`${oxanium.className} flex gap-3 items-center md:text-2xl font-semibold`}
          href="/"
        >
          <Image className='rounded-lg logo-shake transition-all ease-in' src="/logo.svg" width="35" height="35" alt='terminal logo'/>
        </Link>
        <ul className="flex items-center gap-4 font-semibold text-slate-700">
          <li>
            <Link 
              className="" href="https://www.linkedin.com/in/evanschristian" passHref={true}
            ><div className="flex flex-row gap-1 hover:gap-3 text-green-500 font-mono px-4 py-2 border-2 border-green-500 bg-black
              hover:border-black hover:bg-green-500 hover:text-black hover:rounded-2xl hover:shadow-2xl hover:shadow-green-300 transition-all"
             >
              <span className='block'>&lt;</span>
              <span className='block'>About Me</span>
              <span className='block'>/&gt;</span>
              </div>
              
            </Link>
          </li>
        </ul>
      </header>
    </div>
  )
}