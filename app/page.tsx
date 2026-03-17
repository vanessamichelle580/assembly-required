import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='min-h-screen bg-brand-warmGray'>
      
      {/* Full Puzzle Image - Old Hero Section*/}
{/*       <div className='relative w-full h-[300px] md:h-[700px] lg:h-[800px]'>
        <Image
          src='/images/hero.png'
          alt='Assembly Required - Building your best life, one piece at a time'
          fill
          className='object-cover object-top'
          priority
        />
      </div>
 */}

      {/* Refined Hero - Complements baked-in image text */}
  <div className="relative w-full h-[60vh] min-h-[500px] md:h-[80vh] lg:h-[90vh] overflow-hidden">
  <Image
    src="/images/hero.png"
    alt="Assembly Required puzzle - building your best life"
    fill
    className="object-cover object-center brightness-[1.05] saturate-[1.1] contrast-[0.95]" // subtle warmth boost – tweak numbers if needed
    priority
  />
  
  {/* Soft gradient overlay – helps text pop without hiding image details */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
  
  {/* Content overlay – positioned lower/centered to avoid clashing with main title */}
  <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-24 text-center px-6 md:px-12">
    {/* Tagline / value prop – warm, inviting, not repeating title */}
    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/95 font-light max-w-4xl mx-auto drop-shadow-xl mb-6 md:mb-10 animate-fade-in-up">
      Building your best life, one intentional piece at a time
    </p>
    
    {/* Thematic keywords */}
    <p className="text-lg md:text-xl lg:text-2xl text-white/85 mb-10 md:mb-12 tracking-wide">
      Mindset • Money • Health • Creation • Growth
    </p>
    
    {/* Prominent CTA – pink/peach brand color, rounded, hover effects */}
    <Link 
      href="/blog"  // or /topics, /about – change to your preferred starting point
      className="bg-brand-peach hover:bg-brand-gold text-white font-semibold text-lg md:text-xl px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
    >
      Start Exploring <span aria-hidden="true">→</span>
    </Link>
  </div>
</div>

      {/* Welcome Section */}
      <section className='max-w-4xl mx-auto px-8 py-8 text-center'>
        <h2 className='font-playfair text-4xl md:text-5xl font-bold mb-6 text-brand-darkBrown'>
          Welcome to Assembly Required
        </h2>
        <p className='text-xl text-brand-darkBrown/80 leading-relaxed mb-8'>
          A space for intentional living and personal growth. Join me as I share insights on mindset, money, health, and the art of curating a life you love.
        </p>
      </section>

      {/* Topics Section */}
      <section className='bg-white py-20'>
        <div className='max-w-6xl mx-auto px-8'>
          <h2 className='font-playfair text-4xl md:text-5xl font-bold text-center mb-4 text-brand-darkBrown'>
            What You'll Find Here
          </h2>
          <p className='text-center text-brand-darkBrown/70 mb-12 max-w-2xl mx-auto'>
          Assembly Required explores the key pieces of building your best life - from health and wealth to personal development and creative pursuits.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Health & Wellness */}
            <div className='bg-brand-warmGray p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 border border-brand-peach/20'>
              <div className='text-5xl mb-4'>💪</div>
              <h3 className='font-playfair text-2xl font-bold mb-3 text-brand-darkBrown'>
                Health & Wellness
              </h3>
              <p className='text-brand-darkBrown/80 mb-4 leading-relaxed'>
                Building sustainable habits, fitness journeys, and nurturing physical and mental well-being.
              </p>
              <Link href='/' className='text-brand-peach hover:text-brand-gold font-semibold transition-colors'>
                Explore →
              </Link>
            </div>

             {/* Wealth & Trading */}
            <div className='bg-brand-warmGray p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 border border-brand-peach/20'>
              <div className='text-5xl mb-4'>📈</div>
              <h3 className='font-playfair text-2xl font-bold mb-3 text-brand-darkBrown'>
                Wealth & Trading
              </h3>
              <p className='text-brand-darkBrown/80 mb-4 leading-relaxed'>
                Financial growth, trading insights, and building wealth through intentional strategy.
              </p>
              <Link href='/' className='text-brand-peach hover:text-brand-gold font-semibold transition-colors'>
                Explore →
              </Link>
            </div>

            {/* Developer Journey */}
            <div className='bg-brand-warmGray p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 border border-brand-peach/20'>
              <div className='text-5xl mb-4'>💻</div>
              <h3 className='font-playfair text-2xl font-bold mb-3 text-brand-darkBrown'>
                Developer Journey
              </h3>
              <p className='text-brand-darkBrown/80 mb-4 leading-relaxed'>
                Learning to code, building projects, and documenting the path to becoming a developer.
              </p>
              <Link href='/' className='text-brand-peach hover:text-brand-gold font-semibold transition-colors'>
                Explore →
              </Link>
            </div>

            {/* Content Creation */}
            <div className='bg-brand-warmGray p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 border border-brand-peach/20'>
              <div className='text-5xl mb-4'>🎨</div>
              <h3 className='font-playfair text-2xl font-bold mb-3 text-brand-darkBrown'>
                Content Creation
              </h3>
              <p className='text-brand-darkBrown/80 mb-4 leading-relaxed'>
                Building a personal brand, creating with AI, and sharing authentic stories online.
              </p>
              <Link href='/' className='text-brand-peach hover:text-brand-gold font-semibold transition-colors'>
                Explore →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Post Section */}
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