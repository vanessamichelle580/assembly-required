import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='min-h-screen bg-brand-cream'>

      {/* --- HERO --- */}
      <div className="relative w-full h-[60vh] min-h-[500px] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Assembly Required puzzle - building your best life"
          fill
          className="object-cover object-center brightness-[1.05] saturate-[1.1] contrast-[0.95]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-24 text-center px-6 md:px-12">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/95 font-light max-w-4xl mx-auto drop-shadow-xl mb-10 md:mb-12 animate-fade-in-up">
            Built, not born. One stack at a time.
          </p>
          <Link
            href="/blog"
            className="bg-brand-gold hover:bg-brand-teal text-white font-semibold text-lg md:text-xl px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
          >
            Start Building →
          </Link>
        </div>
      </div>

      {/* --- NEWSLETTER CTA --- */}
      <section className="w-full bg-brand-cream py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold mb-4 text-brand-espresso">
            Get The Build Brief
          </h2>
          <p className="text-brand-brown/70 text-lg mb-8 leading-relaxed">
            A weekly dispatch of one framework, one habit stack, and one actionable prompt — delivered every Tuesday.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 rounded-full border border-brand-brown/20 bg-white text-brand-brown placeholder-brand-brown/40 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
            <button
              type="submit"
              className="bg-brand-gold hover:bg-brand-teal text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 whitespace-nowrap"
            >
              Join the Build
            </button>
          </form>
        </div>
      </section>

      {/* --- WELCOME --- */}
      <section className='max-w-4xl mx-auto px-8 py-8 text-center'>
        <h2 className='font-cormorant text-4xl md:text-5xl font-bold mb-6 text-brand-brown'>
          You're Not Behind. You're Just Mid-Assembly.
        </h2>
        <p className='text-xl text-brand-brown/80 leading-relaxed mb-8'>
          Assembly Required is a field guide for the intentional builder — the person who knows a better life isn't found, it's designed. One habit, one mindset shift, one system at a time.
        </p>
        <div className='border-b-2 border-brand-gold max-w-xs mx-auto mt-8' />
      </section>

      {/* --- PILLARS --- */}
      <section className='bg-white py-20'>
        <div className='max-w-6xl mx-auto px-8'>
          <h2 className='font-cormorant text-4xl md:text-5xl font-bold text-center mb-4 text-brand-brown'>
            What We Build Here
          </h2>
          <p className='text-center text-brand-brown/70 mb-12 max-w-2xl mx-auto'>
            Four pillars. One system. Built for the person who's done waiting and ready to design.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='bg-white p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-gold'>
              <div className='font-mono text-sm tracking-widest uppercase text-brand-gold mb-4'>01</div>
              <h3 className='font-cormorant text-2xl font-bold mb-3 text-brand-brown'>
                Habit Architecture
              </h3>
              <p className='text-brand-brown/80 mb-4 leading-relaxed'>
                Building stackable behaviors that stick — without relying on willpower or motivation.
              </p>
              <Link href='/' className='text-brand-rose hover:text-brand-gold font-semibold transition-colors'>
                Explore →
              </Link>
            </div>
            <div className='bg-white p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-gold'>
              <div className='font-mono text-sm tracking-widest uppercase text-brand-gold mb-4'>02</div>
              <h3 className='font-cormorant text-2xl font-bold mb-3 text-brand-brown'>
                Wealth & Trading
              </h3>
              <p className='text-brand-brown/80 mb-4 leading-relaxed'>
                Financial growth, trading mindset, and building income systems with intention and strategy.
              </p>
              <Link href='/' className='text-brand-rose hover:text-brand-gold font-semibold transition-colors'>
                Explore →
              </Link>
            </div>
            <div className='bg-white p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-gold'>
              <div className='font-mono text-sm tracking-widest uppercase text-brand-gold mb-4'>03</div>
              <h3 className='font-cormorant text-2xl font-bold mb-3 text-brand-brown'>
                The Build Log
              </h3>
              <p className='text-brand-brown/80 mb-4 leading-relaxed'>
                Real experiments, honest reflections, and the developer journey documented in real time.
              </p>
              <Link href='/' className='text-brand-rose hover:text-brand-gold font-semibold transition-colors'>
                Explore →
              </Link>
            </div>
            <div className='bg-white p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-gold'>
              <div className='font-mono text-sm tracking-widest uppercase text-brand-gold mb-4'>04</div>
              <h3 className='font-cormorant text-2xl font-bold mb-3 text-brand-brown'>
                Identity Blueprints
              </h3>
              <p className='text-brand-brown/80 mb-4 leading-relaxed'>
                Mindset work framed as redesigning who you're becoming — not fixing who you are.
              </p>
              <Link href='/' className='text-brand-rose hover:text-brand-gold font-semibold transition-colors'>
                Explore →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- LATEST POST --- */}
      <section className='max-w-6xl mx-auto px-8 py-20'>
        <h2 className='font-cormorant text-4xl md:text-5xl font-bold text-center mb-4 text-brand-brown'>
          From The Build Log
        </h2>
        <p className='text-center text-brand-brown/70 mb-12 max-w-2xl mx-auto'>
          Real reflections, honest experiments, and stories from the journey of building intentionally.
        </p>
        <div className='bg-white rounded-lg shadow-xl overflow-hidden border border-brand-rose/20 hover:shadow-2xl transition-shadow duration-300'>
          <div className='md:flex'>
            <div className='md:w-2/5 relative h-64 md:h-auto'>
              <Image
                src='/images/ar-resignation-hero.png'
                alt='I Quit the Same Job Twice. The Second Time Was the Right One.'
                fill
                className='object-cover'
              />
            </div>
            <div className='p-8 md:w-3/5 border-l-4 border-brand-gold'>
              <span className='inline-block text-xs text-brand-teal border border-brand-teal rounded-full px-3 py-1 mb-2'>Build in Motion</span>
              <p className='text-brand-teal text-sm font-semibold mb-2'>LATEST POST</p>
              <h3 className='font-cormorant text-3xl font-bold mb-4 text-brand-brown'>
                I Quit the Same Job Twice. The Second Time Was the Right One.
              </h3>
              <p className='text-brand-brown/80 mb-6 leading-relaxed'>
                On incompatibility, what building on the outside taught me, and why leaving the second time felt less like a leap of faith and more like finally admitting what I already knew.
              </p>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-brand-brown/60'>April 28, 2026</span>
                <Link
                  href='/blog/i-quit-the-same-job-twice'
                  className='bg-brand-espresso hover:bg-brand-gold text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300'
                >
                  Read Full Post →
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link
          href='/blog'
          className='block text-center text-brand-espresso hover:text-brand-gold font-semibold mt-8 transition-colors duration-300'
        >
          Browse all posts →
        </Link>
      </section>

    </main>
  );
}
