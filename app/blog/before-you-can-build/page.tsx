import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <main className='min-h-screen bg-brand-cream'>
      {/* Hero Image */}
      <div className='w-full h-[320px] md:h-[420px] lg:h-[420px] relative'>
        <Image
          src='/images/ar-negation-hero.png'
          alt='Before You Can Build, You Have to Cut'
          fill
          className='object-cover'
          priority
        />
      </div>

      {/* Blog Post Content */}
      <article className='max-w-3xl mx-auto px-8 py-16'>
        {/* Title Section */}
        <header className='mb-12'>
          <Link href='/' className='text-brand-rose hover:text-brand-gold mb-4 inline-block'>
            ← Back to Home
          </Link>
          <h1 className='font-cormorant text-5xl md:text-6xl font-bold mb-6 text-brand-brown'>
            Before You Can Build, You Have to Cut
          </h1>
          <p className='text-xl text-brand-brown/80 italic'>
            A lesson I learned at a trading desk that turned out to be about everything else.
          </p>
        </header>

        {/* Article Content */}
        <div className='prose prose-lg max-w-none space-y-6'>
          <p className='mb-6 text-brand-brown/90 leading-loose'>
            I have been trading long enough to know that the market is an excellent mirror.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Not always a flattering one. But an honest one. And if you sit with it long enough, it stops being just about money and starts being about how you actually think. How you handle uncertainty. What you do when the thing you planned for does not happen the way you planned it.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            One of the most useful ideas I have ever encountered in trading came from Oliver Velez. He was talking about development. About why most traders never fix the thing that is actually holding them back.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            He said this: you cannot know what proper trading looks like until you are already doing it. But you can know what it is not.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            He calls it negation.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            The idea is this. You are looking for a needle in a haystack. Proper trading, proper living, whatever it is you are building — that needle is in there somewhere. You cannot see it yet. But every piece of hay you pull out and set aside, every behavior you identify as wrong and commit to eliminating, gets you one step closer.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Not this. Not that. Not this either.
          </p>

          <p className='mb-8 text-brand-brown/90 leading-loose'>
            Over time, through that process of elimination, the needle starts to become visible. Not because you found it. Because you finally cleared enough of what was in the way.
          </p>

          <p className='mb-8 text-brand-brown/90 leading-loose'>
            I have been thinking about that framework ever since. Because it does not just apply to trading.
          </p>

          {/* Section 1 */}
          <h2 className='font-cormorant text-3xl font-bold mt-12 mb-4 text-brand-brown'>
            The Life I Was Living Was Not Wrong. It Just Was Not Right.
          </h2>
          <div className='relative w-full h-64 md:h-80 rounded-lg overflow-hidden my-6'>
            <Image
              src='/images/ar-negation-section1.png'
              alt='Recognizing misalignment before you have the words for it'
              fill
              className='object-cover'
            />
          </div>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Here is the honest version of how I left the corporate world.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            It was not a dramatic exit. No single breaking point. No moment of clarity where everything clicked and I walked out with a box of desk plants and a clean conscience.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            It was a slow fade.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            I knew for a long time. Longer than I want to admit, probably. The job was good. The money was real. The title said something that other people seemed to respect. Spoiler: the grass on that side still just tastes like grass. And on the outside, everything looked assembled.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            But I had this quiet, persistent feeling that I was in the wrong haystack.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Not failing. Not broken. Not even unhappy, exactly. Just misaligned. Like I was performing a life that fit on paper but did not fit me. And the longer I stayed, the better I got at the performance and the further I got from whatever the real thing was.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            What I did not have language for at the time was negation.
          </p>

          <blockquote className='border-l-4 border-brand-gold pl-6 my-8 font-cormorant italic text-xl text-brand-gold'>
            I was not trying to build the right life yet. I was just starting to recognize that what I was doing was not it.
          </blockquote>

          <p className='mb-8 text-brand-brown/90 leading-loose'>
            That is not a failure. That is actually the first step.
          </p>

          {/* Section 2 */}
          <h2 className='font-cormorant text-3xl font-bold mt-12 mb-4 text-brand-brown'>
            You Cannot Manufacture the Win
          </h2>
          <div className='relative w-full h-64 md:h-80 rounded-lg overflow-hidden my-6'>
            <Image
              src='/images/ar-negation-section2.png'
              alt='The controllable loss — cutting before it becomes a catastrophe'
              fill
              className='object-cover'
            />
          </div>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Velez makes a point in trading that stopped me in my tracks the first time I heard it.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            He says wins take care of themselves. If you buy a position and it goes in your favor, you did not make that happen. The market moved. You were in it. You could have picked that trade by throwing a dart and the result would have been the same.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            What cannot happen without you is a controllable loss. The kind that stays small because you cut before it becomes a catastrophe. That requires presence, discipline, and the emotional regulation to act on what you know even when every feeling you have is telling you to wait just a little longer.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            I think about that in the context of building a life, too.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            You cannot manufacture the right path. You cannot engineer clarity through sheer force of will. The version of yourself you are becoming is already in there. The pieces are already yours.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            What you can do is stop doing the things that are blocking it.
          </p>

          <p className='mb-8 text-brand-brown/90 leading-loose'>
            Cut the role that is slowly hollowing you out. Cut the habit that is louder than your actual goals. Cut the version of the plan that looked right two years ago and has not fit since. Cut the relationship with staying small that you have been calling responsibility.
          </p>

          <p className='mb-8 text-brand-brown/90 leading-loose'>
            Not all at once. One piece of hay at a time.
          </p>

          {/* Section 3 */}
          <h2 className='font-cormorant text-3xl font-bold mt-12 mb-4 text-brand-brown'>
            What Negation Actually Looks Like
          </h2>
          <div className='relative w-full h-64 md:h-80 rounded-lg overflow-hidden my-6'>
            <Image
              src='/images/ar-negation-section3.png'
              alt='Negation is quieter than you think — it feels like fatigue'
              fill
              className='object-cover'
            />
          </div>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            It is quieter than you think.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            It does not always feel like a breakthrough. Most of the time it feels like fatigue. Like you are just done. Done performing. Done pretending the fit is better than it is. Done explaining to yourself why this is still the right choice when your whole body has been registering a different answer for months.
          </p>

          <blockquote className='border-l-4 border-brand-gold pl-6 my-8 font-cormorant italic text-xl text-brand-gold'>
            That tiredness is not weakness. It is information.
          </blockquote>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            For me, leaving the corporate job was not a leap of faith into a fully formed vision. It was a negation. I did not know exactly what I was building yet. I still do not have the whole picture. But I knew, clearly and finally, what I was not doing anymore.
          </p>

          <p className='mb-8 text-brand-brown/90 leading-loose'>
            And that clarity — that one piece of hay removed from the pile — made everything that came after it possible.
          </p>

          <p className='mb-8 text-brand-brown/90 leading-loose'>
            The trading. The content. The site you are reading this on right now. The version of a life that actually belongs to me.
          </p>

          <p className='mb-8 text-brand-brown/90 leading-loose'>
            None of it was visible until I cleared enough space to see it.
          </p>

          {/* Section 4 */}
          <h2 className='font-cormorant text-3xl font-bold mt-12 mb-4 text-brand-brown'>
            Where I Am Now
          </h2>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            I want to be clear about something.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            I am not writing this from the other side of the journey. I am not here to sell you the finished product, because I do not have one.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            I am far enough in to know the decision was right. Not far enough to have it all figured out. Still placing pieces. Still pulling hay. Still some mornings where the picture feels clearer than others.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            But that is the point of Assembly Required.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            This is not a highlight reel. It is a documentary. And what I can tell you from where I am standing is that the cutting is not the loss. The cutting is the work.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            You do not have to have the whole vision before you make the move. You just have to be honest about what is not it anymore.
          </p>

          <p className='mb-12 text-brand-brown/90 leading-loose'>
            That is the first piece. Place it.
          </p>

          <p className='mb-12 text-brand-brown/90 leading-loose italic font-cormorant text-xl'>
            The pieces are already yours.
          </p>

          {/* Author Bio Box */}
          <div className='bg-white border-2 border-brand-rose/30 rounded-lg p-8 mt-16 shadow-lg'>
            <p className='text-2xl mb-4'>🌸</p>
            <p className='font-semibold text-xl mb-3 text-brand-brown'>Hi, I&apos;m Vanessa Michelle.</p>
            <p className='mb-3 text-brand-brown/90'>
              Writer, trader, and lifelong curator of beautiful things — both tangible and intangible. <em>Assembly Required</em> is my open journal, built on a simple belief: we don&apos;t have to have it all figured out to start building the life we want.
            </p>
            <p className='text-brand-brown/90'>
              Join me as I learn, grow, and assemble mine — piece by piece.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
