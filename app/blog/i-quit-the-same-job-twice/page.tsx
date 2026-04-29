import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <main className='min-h-screen bg-brand-cream'>
      {/* Hero Image */}
      <div className='w-full h-[320px] md:h-[420px] lg:h-[420px] relative'>
        <Image
          src='/images/ar-resignation-hero.png'
          alt='I Quit the Same Job Twice. The Second Time Was the Right One.'
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
            I Quit the Same Job Twice. The Second Time Was the Right One.
          </h1>
          <p className='text-xl text-brand-brown/80 italic'>
            There is something humbling about resigning from a job you already resigned from once before.
          </p>
        </header>

        {/* Article Content */}
        <div className='prose prose-lg max-w-none space-y-6'>
          <p className='mb-6 text-brand-brown/90 leading-loose'>
            The first time I left, it was 2024. I was going to trade full time, build something of my own, and finally stop splitting my energy between what paid me and what called me. And for a while, it felt right. Until it didn&apos;t. Trading from home alone is quiet in a way that starts to feel like isolation. I missed people. I missed being part of something. So I went back.
          </p>

          <p className='mb-8 text-brand-brown/90 leading-loose'>
            I told myself I had changed. And honestly? I had. I just didn&apos;t know yet what kind of changed I was.
          </p>

          {/* Section 1 */}
          <h2 className='font-cormorant text-3xl font-bold mt-12 mb-4 text-brand-brown'>
            The Story I Told Myself
          </h2>
          <div className='relative w-full h-64 md:h-80 rounded-lg overflow-hidden my-6'>
            <Image
              src='/images/ar-resignation-section1.png'
              alt='The narrative that brought me back — and what I found when I got there'
              fill
              className='object-cover'
            />
          </div>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            When I walked back through those doors in February 2025, I had a whole narrative ready. I&apos;d grown. I was less reactive. More grounded. Even if the environment hadn&apos;t changed, I had, and that would be enough to make it work this time.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            That story wasn&apos;t a lie. It just wasn&apos;t the whole truth.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            I had changed. Significantly. But the change I&apos;d gone through didn&apos;t make me better at surviving that environment. It made me better at seeing it clearly. And what I saw clearly was this: in order to actually thrive there, I would have to become someone I had no interest in becoming.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Someone who wasn&apos;t driven. Someone who didn&apos;t hold themselves accountable. Someone comfortable with not caring.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            I could not be that person. I did not want to be that person. And the longer I stayed, the more I understood that the job wasn&apos;t the problem. The incompatibility was.
          </p>

          <p className='mb-8 text-brand-brown/90 leading-loose'>
            And the community I went back for? The team, the people, the feeling of being part of something? I never found it. That was the quietest confirmation of all.
          </p>

          {/* Section 2 */}
          <h2 className='font-cormorant text-3xl font-bold mt-12 mb-4 text-brand-brown'>
            What the Outside Built
          </h2>
          <div className='relative w-full h-64 md:h-80 rounded-lg overflow-hidden my-6'>
            <Image
              src='/images/ar-resignation-section2.png'
              alt='Building something that lights you up changes your tolerance for everything that doesn&apos;t'
              fill
              className='object-cover'
            />
          </div>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Here is the thing nobody talks about when they tell you to build something on the side.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            They tell you it will be hard. They tell you it will take time. They tell you to be patient and consistent and trust the process. What they don&apos;t tell you is that building something that actually lights you up will make everything that doesn&apos;t feel unbearable by comparison.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            The trading. The content. The AI work. The Assembly Required build. Every hour I spent on those things felt like breathing. Purposeful. Alive. And every hour I spent at that job felt like the opposite.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            The contrast became impossible to ignore. Finding the things that made me feel alive made it that much harder to tolerate the things that made me feel dead inside. That is not a dramatic statement. It is just the truth.
          </p>

          <p className='mb-8 text-brand-brown/90 leading-loose'>
            When you know what it feels like to be in alignment, misalignment stops being something you can rationalize your way through.
          </p>

          {/* Section 3 */}
          <h2 className='font-cormorant text-3xl font-bold mt-12 mb-4 text-brand-brown'>
            The Decision That Wasn&apos;t Really a Decision
          </h2>
          <div className='relative w-full h-64 md:h-80 rounded-lg overflow-hidden my-6'>
            <Image
              src='/images/ar-resignation-section3.png'
              alt='The peace that comes from finally admitting what you already know'
              fill
              className='object-cover'
            />
          </div>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            People keep asking me if I&apos;m scared.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            I&apos;m not.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            I am not afraid of being broke. I am not afraid of failing. I am not lying awake running worst case scenarios. What I feel, if I&apos;m being honest, is spaciousness. Like I just put down something heavy I didn&apos;t realize I&apos;d been carrying.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            And I think that peace makes sense when you understand where I believe provision actually comes from. Not from a job title. Not from a salary. Not from any one opportunity I can manufacture on my own. I have never been the source of what takes care of me. That job wasn&apos;t the source either. It was just one channel. And channels can close without the supply stopping.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            I have gifts and skills and a calling that exist completely independent of any employer. I knew that before I resigned. I know it now. That knowing is what makes the leap feel less like falling and more like finally stepping into something that was already waiting.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            The decision to leave didn&apos;t feel like a leap of faith. It felt like finally admitting what I already knew. The job was not a placeholder anymore. It had become a ceiling. And I have too much to build to spend my energy maintaining something that was never going to let me grow.
          </p>

          <p className='mb-8 text-brand-brown/90 leading-loose'>
            Something had to go. It was always going to be that job.
          </p>

          {/* Section 4 */}
          <h2 className='font-cormorant text-3xl font-bold mt-12 mb-4 text-brand-brown'>
            What I Want You to Take From This
          </h2>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            If you are reading this from inside a situation that no longer fits, I want you to hear this clearly.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            You do not have to stay.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Not in that job. Not in that relationship. Not in that version of yourself that you&apos;ve already outgrown. I know it is not simple. I know there are bills and responsibilities and voices in your head that will recite every reason why now is not the right time. I am not dismissing any of that.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            What I am telling you is that a plan is possible. A different life is possible. And the fact that you can see the gap between where you are and where you belong is not a curse. It is information.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Start with what you already know lights you up. What have you already built on the margins? What have you already proven you can do? Those aren&apos;t experiments anymore, they are evidence. They are proof points and they are yours to build on. You don&apos;t have to blow it all up. But you do have to start.
          </p>

          <p className='mb-12 text-brand-brown/90 leading-loose'>
            The pieces are already yours.
          </p>

          <p className='mb-12 text-brand-brown/90 leading-loose italic font-cormorant text-xl'>
            Assembly Required.
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
