import Link from 'next/link';

export default function BlogPost() {
  return (
    <main className='min-h-screen bg-brand-warmGray'>
      {/* Blog Post Content */}
      <article className='max-w-3xl mx-auto px-8 py-16'>
        {/* Title Section */}
        <header className='mb-12'>
          <Link href='/' className='text-brand-peach hover:text-brand-gold mb-4 inline-block'>
            ← Back to Home
          </Link>
          <h1 className='font-playfair text-5xl md:text-6xl font-bold mb-6 text-brand-darkBrown'>
            You See Lazy. I See Misalignment.
          </h1>
          <p className='text-xl text-brand-darkBrown/80 italic'>
            Nothing about the environment had changed. Only my direction did.
          </p>
        </header>

        {/* Article Content */}
        <div className='prose prose-lg max-w-none space-y-6'>
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            This morning I stepped out onto the balcony and looked straight ahead. The view was fine. A gorgeous, colorful billboard featuring an art deco woman staring back at me, her eyes captivating and completely engaging.
          </p>

          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            It was interesting. Beautiful, even.
          </p>

          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            And for a moment, I thought that was the view.
          </p>

          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            Then I turned around.
          </p>

          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            Behind me was the spectacular ocean stretching to the east. Expansive, calm, impossible to ignore once I actually faced it.
          </p>

          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            Nothing about the environment had changed.
          </p>

          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            Only my direction did.
          </p>

          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            And it made me wonder how often I have been doing that with myself.
          </p>

          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            For a while now, I have been telling myself a quiet story. That I struggle with execution. That I start too many things. That I lack consistency. And when you repeat a narrative long enough, it stops feeling like a thought and starts feeling like truth.
          </p>

          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            Perspective shapes identity. Identity shapes behavior.
          </p>

          <p className='mb-8 text-brand-darkBrown/90 leading-loose'>
            So I started asking myself a different question: What if I am not lazy? What if I have just been measuring myself from the wrong angle?
          </p>

          {/* Section 1 */}
          <h2 className='font-playfair text-3xl font-bold mt-12 mb-4 text-brand-darkBrown'>
            When I Looked Honestly
          </h2>

          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            When I looked honestly at my patterns, something clicked.
          </p>

          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            I was not avoiding work. I was choosing stimulation over structure.
          </p>

          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            When bootcamp got hard and I started comparing myself to others, I did not push through. I redirected. I went somewhere I could feel competent again. I told myself I would work outside of class to catch up. But that outside work rarely happened, because high dopamine creates motion. Low dopamine builds mastery. And I kept choosing motion.
          </p>

          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            It was not a discipline issue. It was a containment issue.
          </p>

          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            Comparing myself to others made me feel behind. And when I felt behind, I rushed. But rushing without structure does not close the gap. It widens it.
          </p>

          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            Rushing to catch up with others is following THEIR path. I started making real progress when I slowed down and moved at my own pace.
          </p>

          <blockquote className='border-l-4 border-brand-peach pl-6 my-8 italic text-xl text-brand-darkBrown/80'>
            You are never behind when you move in true alignment.
          </blockquote>

          {/* Section 2 */}
          <h2 className='font-playfair text-3xl font-bold mt-12 mb-4 text-brand-darkBrown'>
            Protecting My Capital
          </h2>

          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            In trading, when a setup is not ready, you do not abandon it. You set an alert. You let it develop. You come back when it is time. You do not stare at every chart all day. You protect your capital.
          </p>

          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            So I am protecting my mental capital the same way.
          </p>

          <p className='mb-8 text-brand-darkBrown/90 leading-loose'>
            I am working in three lanes only: bootcamp, trading, and content. And bootcamp gets protected first. From 7:00 to 8:30 AM daily, before trading, before content, before the world starts pulling at me, I am building skill.
          </p>

          <p className='mb-8 text-brand-darkBrown/90 leading-loose'>
            Not to prove something. Not to compete.
          </p>

          <p className='mb-8 text-brand-darkBrown/90 leading-loose'>
            To build rhythm.
          </p>

          {/* Section 3 */}
          <h2 className='font-playfair text-3xl font-bold mt-12 mb-4 text-brand-darkBrown'>
            Are You Measuring From the Right Angle?
          </h2>

          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            If you have been looking around at everyone else and wondering why you are not keeping up, consider the words of Henry David Thoreau.
          </p>

          <blockquote className='border-l-4 border-brand-peach pl-6 my-8 italic text-xl text-brand-darkBrown/80'>
            "If a man does not keep pace with his companions, perhaps it is because he hears a different drummer. Let him step to the music which he hears, however measured or far away."
          </blockquote>

          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            Lazy is a state of mind. Stop applying labels to yourself that you have not truly earned. Adjust the lens.
          </p>

          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            You are not behind. You are building at your pace.
          </p>

          <p className='mb-12 text-brand-darkBrown/90 leading-loose'>
            When you are building something worthwhile, sometimes Assembly is Required.
          </p>

          {/* Author Bio Box */}
          <div className='bg-white border-2 border-brand-peach/30 rounded-lg p-8 mt-16 shadow-lg'>
            <p className='text-2xl mb-4'>🌸</p>
            <p className='font-semibold text-xl mb-3 text-brand-darkBrown'>Hi, I&apos;m Vanessa Michelle.</p>
            <p className='mb-3 text-brand-darkBrown/90'>
              Writer, trader, and lifelong curator of beautiful things — both tangible and intangible. <em>Assembly Required</em> is my open journal, built on a simple belief: we don&apos;t have to have it all figured out to start building the life we want.
            </p>
            <p className='text-brand-darkBrown/90'>
              Join me as I learn, grow, and assemble mine — piece by piece.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
