import { Header } from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import { Inter } from 'next/font/google';

const inter = Inter(
  {
    subsets: ['latin']
  }
)

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={`${inter.className} bg min-h-screen`}>
      <Header />
      {children}
      <SanityLive />
    </section>
  );
}