import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <main className='min-h-screen bg-brand-cream'>
      {/* Hero Image */}
      <div className='w-full h-[320px] md:h-[420px] lg:h-[420px] relative'>
        <Image
          src='/images/ar-blow-up-hero.png'
          alt='You Don&apos;t Have to Blow It Up — Scared Into Progression, Part 2'
          fill
          className='object-cover object-top'
          priority
        />
      </div>

      {/* Blog Post Content */}
      <article className='max-w-3xl mx-auto px-8 py-16'>
        {/* Title Section */}
        <header className='mb-12'>
          <Link href='/blog' className='text-brand-rose hover:text-brand-gold mb-4 inline-block'>
            ← Back to The Build Log
          </Link>
          <p className='text-sm text-brand-teal uppercase tracking-widest mb-4'>
            Scared Into Progression, Part 2
          </p>
          <h1 className='font-cormorant text-5xl md:text-6xl font-bold mb-6 text-brand-brown'>
            You Don&apos;t Have to Blow It Up
          </h1>
          <p className='text-xl text-brand-brown/80 italic'>
            Taking inventory of what you&apos;ve already built, finding the one gap worth solving, and starting before you have the full picture.
          </p>
        </header>

        {/* Article Content */}
        <div className='prose prose-lg max-w-none space-y-6'>
          <p className='mb-6 text-brand-brown/90 leading-loose'>
            There is a specific kind of stuck that nobody talks about.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            It shows up after the fear. After you&apos;ve already decided something has to change. After you&apos;ve given yourself permission to want more. You look up and you can actually see the horizon now.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            And you still don&apos;t move.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Not because you&apos;re scared. You&apos;re past that. You just don&apos;t know which direction to start walking.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            I spent a lot of time in that feeling. Knowing the corporate life wasn&apos;t it anymore. Knowing I had things to build. Knowing, somewhere in the back of my mind, that AI was going to be part of how I got there. But standing completely still because I couldn&apos;t figure out where to put my foot first.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Nobody hands you a map for this part. And honestly, I&apos;m not going to hand you one either.
          </p>

          <p className='mb-8 text-brand-brown/90 leading-loose'>
            What I am going to do is tell you what actually moved me. Because it wasn&apos;t a plan. It wasn&apos;t a course. It was one honest problem and a tool that helped me solve it.
          </p>

          <p className='mb-8 text-brand-brown/90 leading-loose'>
            That&apos;s where this starts.
          </p>

          {/* Section 1 */}
          <h2 className='font-cormorant text-3xl font-bold mt-12 mb-4 text-brand-brown'>
            Your Past Isn&apos;t Baggage. It&apos;s Inventory.
          </h2>
          <div className='relative w-full h-64 md:h-80 rounded-lg overflow-hidden my-6'>
            <Image
              src='/images/ar-blow-up-section1.png'
              alt='What you have already built is not behind you — it is what you are building on'
              fill
              className='object-cover'
            />
          </div>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Before you figure out where you&apos;re going, it helps to know what you&apos;re carrying.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Most people skip this part. They get excited about the new thing, or they get overwhelmed by it, and they go straight to trying to figure out the next move without ever stopping to take stock of what they already have. And then they wonder why the path feels so unclear.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Here&apos;s what I know to be true. Whatever you have been doing up until this moment, you have been building something. Skills. Perspective. Pattern recognition. An understanding of how things work that you probably don&apos;t even register as valuable anymore because it&apos;s just become part of how you think.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            That&apos;s a foundation. And foundations don&apos;t get wasted.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            The better question is what have you already learned or built that you haven&apos;t fully used yet.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Because when AI enters the picture, it doesn&apos;t show up to replace what you&apos;ve accumulated. It shows up to extend it. To take what you already know and give it more range, more reach, more room to grow than you could have managed alone.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            You don&apos;t have to become someone else to move forward. You just have to figure out what you&apos;re already carrying that&apos;s worth building on.
          </p>

          <p className='mb-8 text-brand-brown/90 leading-loose'>
            And I promise you, it&apos;s more than you think.
          </p>

          {/* Section 2 */}
          <h2 className='font-cormorant text-3xl font-bold mt-12 mb-4 text-brand-brown'>
            You Don&apos;t Have to Leave to Start
          </h2>
          <div className='relative w-full h-64 md:h-80 rounded-lg overflow-hidden my-6'>
            <Image
              src='/images/ar-blow-up-section2.png'
              alt='Starting quietly — the decision is made before anyone around you knows it'
              fill
              className='object-cover'
            />
          </div>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            You do not need to know exactly where you are going to know that where you are is no longer the place for you.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            That sounds simple. It took me longer than I&apos;d like to admit to actually believe it.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            I went back to a role I had already left once before. I had a reason. I wanted to transition into development, and I thought that environment could be the bridge. When it became clear that bridge wasn&apos;t going to be built, I didn&apos;t panic. I made a plan. I set a target. I kept showing up, kept doing the work, and when the moment came I had earned myself, I walked out the door.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            From the outside, nothing looked different. From the inside, I was already gone.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            That is what starting actually looks like most of the time. Not a dramatic exit. Not an announcement. Just a quiet, deliberate decision that the current situation has run its course, and a commitment to building toward something better even before you can fully see what that something is.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            You don&apos;t need a complete picture to take the next step. You just need enough honesty to admit that what you&apos;re in right now is no longer serving you the way you thought it would. Or the way it once did.
          </p>

          <p className='mb-8 text-brand-brown/90 leading-loose'>
            That admission is the starting point.
          </p>

          {/* Section 3 */}
          <h2 className='font-cormorant text-3xl font-bold mt-12 mb-4 text-brand-brown'>
            Find the Gap
          </h2>
          <div className='relative w-full h-64 md:h-80 rounded-lg overflow-hidden my-6'>
            <Image
              src='/images/ar-blow-up-section3.png'
              alt='The gap between where you are and where you want to be is the only map you need'
              fill
              className='object-cover'
            />
          </div>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            I was not looking for AI when I found it.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            I was trying to build Tradecraft Academy, a trading education program I had been developing to teach other people what the market had taught me. The goal was straightforward. Take what I knew, make it accessible, and give someone else the tool that had changed my own trajectory.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            What I was not prepared for was how many things I did not know how to do yet.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            I wanted to create visuals. I didn&apos;t want stock images that had nothing to do with my content, or required licensing, which felt like way more work than I was willing to put in at the time. I needed to be able to make my own. That was the gap. One specific wall I kept running into, and it was frustrating enough that I finally went looking for a way around it.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            So I tried AI.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            The first results were not exactly what I had in mind. People had twelve fingers. Three legs. Bodies contorting in ways that were medically impossible and honestly a little alarming. It was not the breakthrough moment I was hoping for.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            But I kept going anyway.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            And somewhere between the chaos and the iteration, something started working. Something existed that wasn&apos;t there before. Something I made. That feeling was quieter than I expected. Not a lightning bolt. More like a door swinging open slowly, and realizing you&apos;d been standing in front of it for a while.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            The visuals led to lessons. The lessons led to wanting a website. The website led me to a full stack development bootcamp. The bootcamp pulled me deeper into AI as a study tool, a building tool, and, dare I say, a thinking partner. Each gap I filled revealed the next one worth solving. Each problem I walked through opened a door I didn&apos;t know was there.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            None of that was planned. It just kept unfolding because I stayed honest about what I needed and kept moving toward it.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            That is the only map I have to offer you.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Find the gap. Not necessarily a project or a plan. Just the distance between where you are and where you actually want to be. That gap looks different for everyone. For some people it&apos;s a skill. For others it&apos;s a feeling. For some it&apos;s just a quiet knowing that something has to change, even if they can&apos;t name what yet.
          </p>

          <p className='mb-8 text-brand-brown/90 leading-loose'>
            Start there. The rest has a way of revealing itself.
          </p>

          {/* Section 4 */}
          <h2 className='font-cormorant text-3xl font-bold mt-12 mb-4 text-brand-brown'>
            The Path Is Already Forming
          </h2>
          <div className='relative w-full h-64 md:h-80 rounded-lg overflow-hidden my-6'>
            <Image
              src='/images/ar-blow-up-section4.png'
              alt='The path exists even when you can not see all of it yet'
              fill
              className='object-cover'
            />
          </div>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            I want to be honest with you about something before we close this out.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            I don&apos;t have the full path figured out yet either.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Trading was always going to be my financial engine. That part I knew. I had already proven I could do it. I could make real money from it. It was a viable way out. That piece of the puzzle was already placed.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            The AI piece is still being assembled.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            I know I enjoy building things. Something lights up in me when I create something that didn&apos;t exist before. An image. An app. A tool that makes someone&apos;s life a little easier. I can see other people thriving in this space, as consultants, as creators, as builders. I can see the destination clearly enough to know it&apos;s real.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            I just don&apos;t have the full route mapped yet. That part is very much still in development.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            I thought I needed the answers before I had the right to share the process. Like somewhere between where I am and where I want to be, there was a gate I hadn&apos;t earned the key to yet.
          </p>

          <blockquote className='border-l-4 border-brand-gold pl-6 my-8 font-cormorant italic text-xl text-brand-gold'>
            There is no gate.
          </blockquote>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            There is just the work. Honest. Unglamorous. Figure-it-out-as-you-go work. And one quiet, unshakeable certainty that the path exists, even when you can&apos;t see all of it yet. There is no reason you cannot figure this out. The only thing left to do is stay in motion long enough to find out.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            That certainty is the transformation. Not the arrival. The decision to keep going anyway.
          </p>

          <p className='mb-12 text-brand-brown/90 leading-loose'>
            Post 3 is where we start building. I&apos;ll see you there.
          </p>

          <p className='mb-12 text-brand-brown/90 leading-loose italic font-cormorant text-xl'>
            V. Michelle is an entrepreneur, trader, and content creator documenting the build in real time at v-michelle.com.
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
