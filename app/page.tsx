import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='min-h-screen bg-brand-warmGray'>
      {/* Full Puzzle Image */}
      <div className='relative w-full h-[300px] md:h-[700px] lg:h-[800px]'>
        <Image
          src='/images/hero.png'
          alt='Assembly Required - Building your best life, one piece at a time'
          fill
          className='object-cover object-center'
          priority
        />
      </div>

      {/* Welcome Section */}
      <section className='max-w-4xl mx-auto px-8 py-16 text-center'>
        <h2 className='font-playfair text-4xl md:text-5xl font-bold mb-6 text-brand-darkBrown'>
          Welcome to Assembly Required
        </h2>
        <p className='text-xl text-brand-darkBrown/80 leading-relaxed mb-8'>
          A space for intentional living and personal growth. Join me as I share insights on mindset, money, health, and the art of curating a life you love.
        </p>
        <Link 
          href='/blog/why-i-stopped-waiting'
          className='inline-block bg-brand-peach hover:bg-brand-gold text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-300 shadow-xl'
        >
          Read Latest Post →
        </Link>
      </section>
    </main>
  );
}