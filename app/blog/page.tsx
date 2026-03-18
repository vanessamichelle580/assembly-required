import Image from 'next/image';
import Link from 'next/link';

const posts = [
  {
    slug: 'you-see-lazy',
    title: 'You See Lazy. I See Misalignment.',
    excerpt:
      'What if the story you've been telling yourself about consistency and execution is just the wrong angle? A reflection on reframing identity, protecting mental capital, and moving at your own pace.',
    date: 'February 28, 2026',
    tag: 'Mindset',
    image: '/images/puzzle.png',
    imageAlt: 'You See Lazy. I See Misalignment.',
  },
  {
    slug: 'why-i-stopped-waiting',
    title: 'Why I Stopped Waiting to Feel Ready',
    excerpt:
      'Sometimes, the version of yourself you're waiting to become only shows up after you begin. A reflection on inspired action, letting go of perfectionism, and building the courage to start before you feel ready.',
    date: 'March 15, 2026',
    tag: 'Mindset',
    image: '/images/why-i-stopped-waiting-hero.png',
    imageAlt: 'Why I Stopped Waiting to Feel Ready',
  },
];

export default function BlogIndex() {
  return (
    <main className='min-h-screen bg-brand-warmGray'>
      <section className='max-w-4xl mx-auto px-8 py-20'>
        <header className='mb-12 text-center'>
          <Link href='/' className='text-brand-peach hover:text-brand-gold mb-6 inline-block'>
            ← Back to Home
          </Link>
          <h1 className='font-playfair text-5xl md:text-6xl font-bold mb-4 text-brand-darkBrown'>
            The Build Log
          </h1>
          <p className='text-xl text-brand-darkBrown/70 max-w-2xl mx-auto'>
            Real reflections, honest experiments, and stories from the journey of building intentionally.
          </p>
          <div className='border-b-2 border-brand-gold max-w-xs mx-auto mt-8' />
        </header>

        <div className='space-y-10'>
          {posts.map((post) => (
            <div
              key={post.slug}
              className='bg-white rounded-lg shadow-lg overflow-hidden border border-brand-peach/20 hover:shadow-xl transition-shadow duration-300'
            >
              <div className='md:flex'>
                <div className='md:w-2/5 relative h-56 md:h-auto'>
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-8 md:w-3/5 border-l-4 border-brand-gold'>
                  <span className='inline-block text-xs text-brand-teal border border-brand-teal rounded-full px-3 py-1 mb-3'>
                    {post.tag}
                  </span>
                  <h2 className='font-playfair text-2xl md:text-3xl font-bold mb-3 text-brand-darkBrown'>
                    {post.title}
                  </h2>
                  <p className='text-brand-darkBrown/80 mb-6 leading-relaxed'>
                    {post.excerpt}
                  </p>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-brand-darkBrown/60'>{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className='bg-brand-charcoal hover:bg-brand-gold text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300'
                    >
                      Read Full Post →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
