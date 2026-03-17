import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='min-h-screen bg-brand-warmGray'>

      {/* --- NEWSLETTER CTA --- */}
      <section className="w-full bg-brand-warmGray py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-brand-charcoal">
            Get The Build Brief
          </h2>
          <p className="text-brand-charcoal/70 text-lg mb-8 leading-relaxed">
            A weekly dispatch of one framework, one habit stack, and one actionable prompt — delivered every Tuesday.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 rounded-full border border-brand-charcoal/20 bg-white text-brand-charcoal placeholder-brand-charcoal/40 focus:outline-none focus:ring-2 focus:ring-brand-gold"
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

      {/* --- WELCOME --- */}
      <section className='max-w-4xl mx-auto px-8 py-8 text-center'>
        <h2 className='font-playfair text-4xl md:text-5xl font-bold mb-6 text-brand-darkBrown'>
          You're Not Behind. You're Just Mid-Assembly.
        </h2>
        <p className='text-xl text-brand-darkBrown/80 leading-relaxed mb-8'>
          Assembly Required is a field guide for the intentional builder — the person who knows a better life isn't found, it's designed. One habit, one mindset shift, one system at a time.
        </p>
        <div className='border-b-2 border-brand-gold max-w-xs mx-auto mt-8' />
      </section>

      {/* --- PILLARS --- */}
      <section className='bg-white py-20'>
        <div className='max-w-6xl mx-auto px-8'>
          <h2 className='font-playfair text-4xl md:text-5xl font-bold text-center mb-4 text-brand-darkBrown'>
            What We Build Here
          </h2>
          <p className='text-center text-brand-darkBrown/70 mb-12 max-w-2xl mx-auto'>
            Four pillars. One system. Built for the person who's done waiting and ready to design.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='bg-white p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-gold'>
              <div className='font-mono text-sm tracking-widest uppercase text-brand-gold mb-4'>01</div>
              <h3 className='font-playfair text-2xl font-bold mb-3 text-brand-darkBrown'>
                Habit Architecture
              </h3>
              <p className='text-brand-darkBrown/80 mb-4 leading-relaxed'>
                Building stackable behaviors that stick — without relying on willpower or motivation.
              </p>
              <Link href='/' className='text-brand-peach hover:text-brand-gold font-semibold transition-colors'>
                Explore →
              </Link>
            </div>
            <div className='bg-white p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-gold'>
              <div className='font-mono text-sm tracking-widest uppercase text-brand-gold mb-4'>02</div>
              <h3 className='font-playfair text-2xl font-bold mb-3 text-brand-darkBrown'>
                Wealth & Trading
              </h3>
              <p className='text-brand-darkBrown/80 mb-4 leading-relaxed'>
                Financial growth, trading mindset, and building income systems with intention and strategy.
              </p>
              <Link href='/' className='text-brand-peach hover:text-brand-gold font-semibold transition-colors'>
                Explore →
              </Link>
            </div>
            <div className='bg-white p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-gold'>
              <div className='font-mono text-sm tracking-widest uppercase text-brand-gold mb-4'>03</div>
              <h3 className='font-playfair text-2xl font-bold mb-3 text-brand-darkBrown'>
                The Build Log
              </h3>
              <p className='text-brand-darkBrown/80 mb-4 leading-relaxed'>
                Real experiments, honest reflections, and the developer journey documented in real time.
              </p>
              <Link href='/' className='text-brand-peach hover:text-brand-gold font-semibold transition-colors'>
                Explore →
              </Link>
            </div>
            <div className='bg-white p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-gold'>
              <div className='font-mono text-sm tracking-widest uppercase text-brand-gold mb-4'>04</div>
              <h3 className='font-playfair text-2xl font-bold mb-3 text-brand-darkBrown'>
                Identity Blueprints
              </h3>
              <p className='text-brand-darkBrown/80 mb-4 leading-relaxed'>
                Mindset work framed as redesigning who you're becoming — not fixing who you are.
              </p>
              <Link href='/' className='text-brand-peach hover:text-brand-gold font-semibold transition-colors'>
                Explore →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- LATEST POST --- */}
      <section className='max-w-6xl mx-auto px-8 py-20'>
        <h2 className='font-playfair text-4xl md:text-5xl font-bold text-center mb-4 text-brand-darkBrown'>
          Latest From The Blog
        </h2>
        <p className='text-center text-brand-darkBrown/70 mb-12 max-w-2xl mx-auto'>
          Thoughts, insights, and stories from the journey of building a life worth living.
        </p>
        <div className='bg-white rounded-lg shadow-xl overflow-hidden border border-brand-peach/20 hover:shadow-2xl transition-shadow duration-300'>
          <div className='md:flex'>
            <div className='md:w-2/5 relative h-64 md:h-auto'>
              <Image
                src='/images/hero.png'
                alt='Latest post'
                fill
                className='object-cover'
              />
            </div>
            <div className='p-8 md:w-3/5'>
              <p className='text-brand-peach text-sm font-semibold mb-2'>LATEST POST</p>
              <h3 className='font-playfair text-3xl font-bold mb-4 text-brand-darkBrown'>
                Why I Stopped Waiting to Feel Ready
              </h3>
              <p className='text-brand-darkBrown/80 mb-6 leading-relaxed'>
                Sometimes, the version of yourself you're waiting to become only shows up after you begin. A reflection on inspired action, letting go of perfectionism, and building the courage to start before you feel ready.
              </p>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-brand-darkBrown/60'>February 11, 2026</span>
                <Link
                  href='/blog/why-i-stopped-waiting'
                  className='bg-brand-peach hover:bg-brand-gold text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300'
                >
                  Read Full Post →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
