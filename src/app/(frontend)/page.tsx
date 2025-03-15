import Link from "next/link";
import { Title } from "@/components/Title";

export default async function Page() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
        {/* {blured SVG background} */}
        <svg className="absolute left-0 md:left-40 top-20 w-[60%] h-[60%] -z-10 blur-3xl opacity-30 animate-svg1" 
        width="554" height="396" viewBox="0 0 554 396" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M554 233.5C554 342.852 343.055 396 221 396C98.9451 396 0 307.352 0 198C0 88.6476 98.9451 0 221 0C343.055 0 554 124.148 554 233.5Z"/>
        </svg>
        <svg className="absolute top-5 left-0 xl:left-68 w-[80%] h-[80%] -z-10 blur-3xl opacity-30 animate-svg2" 
        width="327" height="449" viewBox="0 0 327 449" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M289.999 262.604C289.999 371.956 191.5 473.5 64.9997 443.604C-60 409 35.4993 307.456 35.4993 198.104C35.4993 88.7515 134.444 0.103882 256.499 0.103882C391 0.103943 289.999 153.252 289.999 262.604Z"/>
        </svg>
        <svg className="max-w-screen absolute top-[40vh] right-40 w-[50%] h-[40%] -z-10 blur-3xl opacity-30 animate-svg3" 
        width="443" height="249" viewBox="0 0 443 249" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M443 195.5C443 304.852 321 215.396 194.5 185.5C69.5003 150.896 0 175.352 0 66C0 -43.3524 130.445 16.9999 252.5 16.9999C387.001 17 443 86.1476 443 195.5Z"/>
        </svg>

        {/* Hero Content */}
        <div className="flex flex-col mt-[15vh] md:mt-[18vh] mx-auto max-w-2/3 ">
          <h1 className="text-2xl md:text-5xl text-center mb-10 md:mb-20">Hi I&apos;m <span className="font-bold hover:font-thin transition-all ease-in-out">Chris</span>, this is where I document my journey as a developer</h1>
          {/* Mobile CTA Button */}
          <button className="md:hidden block m-auto bg-black text-sm whitespace-nowrap text-green-500 font-mono px-4 py-2 border-2 border-green-500 
              hover:border-black hover:bg-green-500 hover:text-black hover:shadow-2xl hover:shadow-green-300 transition-all ease-in"
              ><Link className="flex items-center gap-2" href="/posts">Check it Out <div className="text-xl">&rarr;</div></Link></button>
          {/* Desktop CTA Button w/ simulated terminal window */}
          <div className="hidden md:block h-30">
            <div className="bg-black p-5 rounded-lg shadow-lg border-12 border-gray-200 w-96 text-left m-auto">              
              <h1 className="overflow-hidden whitespace-nowrap border-r-2 text-green-500 font-mono border-green-500 w-fit animate-typing">&gt; Welcome to my Terminal</h1>
              <button className="text-green-500 font-mono px-4 py-2 border-2 border-green-500 
              hover:border-black hover:bg-green-500 hover:text-black hover:shadow-2xl hover:shadow-green-300 transition-all ease-in ml-[25%] mt-10"
              ><Link className="flex items-center gap-2" href="/posts">Check it Out <div className="text-xl">&rarr;</div></Link></button>
            </div>
          </div>
          
        </div>
    </section>
  );
}