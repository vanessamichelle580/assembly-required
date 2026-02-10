import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <main className='min-h-screen bg-brand-warmGray'>
      {/* Hero Image */}
      <div className='w-full h-96 relative'>
        <Image
          src='/images/puzzle.png'
          alt='Assembly Required - Puzzle pieces representing building your best life'
          fill
          className='object-cover'
          priority
        />
      </div>

      {/* Blog Post Content */}
      <article className='max-w-3xl mx-auto px-8 py-16'>
        {/* Title Section */}
        <header className='mb-12'>
          <Link href='/' className='text-brand-peach hover:text-brand-gold mb-4 inline-block'>
            ← Back to Home
          </Link>
          <h1 className='font-playfair text-5xl md:text-6xl font-bold mb-6 text-brand-darkBrown'>
            Why I Stopped Waiting to Feel Ready
          </h1>
          <p className='text-xl text-brand-darkBrown/80 italic'>
            Sometimes, the version of yourself you're waiting to become only shows up after you begin.
          </p>
        </header>

        {/* Article Content */}
        <div className='prose prose-lg max-w-none space-y-6'>
          {/* Section 1 */}
          <h2 className='font-playfair text-3xl font-bold mt-12 mb-4 text-brand-darkBrown'>
            So How Did We Get Here?
          </h2>
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            It all started as most things do — with a dream and a plan. I had many dreams and even more plans on how I was going to realize those dreams. And boy, did I have plans. I was the <strong>master planner</strong>. Even my plans had <em>mini plans</em> of their own.
          </p>
          
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            These weren't your average run of the mill plans either — they were elaborate, <em>motion picture, que the credits</em> type plans. But alas some of the best green-lit productions never see the light of day. That was often the fate of mine.
          </p>
          
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            You see, while I'm superb at making plans, let's just say my follow-through game is … under development. After all those plans, all I had to show for it was a mild dopamine addition and a collection of cute notebooks filled with excellent hand writing. Seriously — I write pretty. 😊
          </p>
          
          <p className='mb-8 text-brand-darkBrown/90 leading-loose'>
            Then one day, I sat down and began to craft my most elaborate plan yet …
          </p>

          {/* Section 2 */}
          <h2 className='font-playfair text-3xl font-bold mt-12 mb-4 text-brand-darkBrown'>
            The Illusion of Readiness
          </h2>
          
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            For years, I thought being prepared was the same as being ready. I told myself that once I had the perfect plan, the perfect timing, and maybe a little divine sign from the universe, I'd finally start.
          </p>
          
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            Oh - but not before I had <em>all</em> of the information. If there were no unknowns and every variable was thoughtfully accounted for, <strong>nothing</strong> bad could happen, right?
          </p>
          
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            So I planned harder. I researched deeper. I bought new notebooks — because this project deserved its own special place. After all, <em>this</em> was "the one".
          </p>
          
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            But the truth was, my dogged pursuit of perfection was standing in the way of any real progress. Somehow, I convinced myself that if I couldn't do something perfectly, it wasn't worth doing at all. Any hint of failure would cue the loud whispers of ridicule and judgement — and who wants to suffer through that?
          </p>
          
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            Planning became my way of feeling safe — busy enough to seem productive, structured enough to avoid the scary part: actually doing the thing.
          </p>
          
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            I convinced myself that readiness was a destination, something I could arrive at with enough effort. But readiness isn't a milestone. It's a mirage.
          </p>
          
          <p className='mb-8 text-brand-darkBrown/90 leading-loose'>
            Every time I said, "I'll start when…," I pushed my dreams another inch down the road. And if I'm honest, there was comfort in that — because "someday" never asks you to risk failure.
          </p>

          {/* Section 3 */}
          <h2 className='font-playfair text-3xl font-bold mt-12 mb-4 text-brand-darkBrown'>
            The Perfect Plan
          </h2>
          
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            Remember I said this all started with a dream … and a plan?
          </p>
          
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            During the COVID-19 pandemic, I started learning about the stock market. The more I learned, the more I wanted to learn! I mean, this was great! You mean to tell me people make money by staring at red and green candles and placing bets on the future direction of stocks? <em>Sign me up!</em>
          </p>
          
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            Eventually, I got to a place where I felt my day job was getting in the way of me making <strong>millions</strong> in the market. I spent many days thinking, <em>if only I didn't have to work this pesky job, I'd be able to focus on the becoming a market millionaire.</em>
          </p>
          
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            So I made a plan — because that's what I do best. No was was gonna get between me and my millions!
          </p>
          
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            And oh, did I plan. I mapped out exactly how I would save up enough money to cover my expenses for several months (you know, just in case the market millions were running late). I rehearsed how I would break the news to my employer — who, obviously would be devastated. I even designed how I would spend my days, each starting with a vlog worthy morning routine.
          </p>
          
          <p className='mb-8 text-brand-darkBrown/90 leading-loose'>
            Only … <strong>nothing</strong> went according to plan!
          </p>

          {/* Section 4 */}
          <h2 className='font-playfair text-3xl font-bold mt-12 mb-4 text-brand-darkBrown'>
            Inspired Action
          </h2>
          
          <blockquote className='border-l-4 border-brand-peach pl-6 my-8 italic text-xl text-brand-darkBrown/80'>
            "Readiness doesn't arrive — it reveals itself."
          </blockquote>
          
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            When my perfect plan fell apart, something surprising happened — I didn't fall apart with it.
          </p>
          
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            In that quiet space between what I <em>thought</em> I wanted and what actually was, I learned about something called <strong>inspired action</strong> — the art of moving when your heart whispers <em>go</em>, even if your mind still wants a full itinerary.
          </p>
          
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            At first, it felt reckless. For someone like me — a recovering master-planner — the idea of acting without all of the data was unthinkable. But I noticed something: every time I followed that nudge, even in small ways, life opened up a little more. My creativity returned. My curiosity bloomed. The world felt spacious again.
          </p>
          
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            Inspired action doesn't demand perfection; it just asks for participation. When I stopped micromanaging every detail, I started to <em>feel</em> the flow instead of forcing it. Things didn't become instantly easy, but they became <em>lighter</em>.
          </p>
          
          <p className='mb-8 text-brand-darkBrown/90 leading-loose'>
            These days, I give myself permission to learn as I go. I trade perfection for grace. I start before I feel ready — trusting that clarity comes in motion. And every time I do, I'm reminded that sometimes the best plan … is simply to begin.
          </p>

          {/* Section 5 */}
          <h2 className='font-playfair text-3xl font-bold mt-12 mb-4 text-brand-darkBrown'>
            Are You Inspired Yet?
          </h2>
          
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            Funny enough, this very blog is the product of inspired action. I didn't have a blueprint, a content calendar, or even the faintest idea what the "right" first post would be. I just felt that tug — the one that said, <em>start now, figure it out later.</em>
          </p>
          
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            And here we are.
          </p>
          
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            <em>Assembly Required</em> is the beginning of a new kind of building for me — one rooted in trust curiosity, and movement. I don't know exactly, where this road leads, but that's part of the adventure. My plan — if we can even call it that — is to keep following what feels aligned and share what I discover along the way.
          </p>
          
          <p className='mb-6 text-brand-darkBrown/90 leading-loose'>
            If you've ever found yourself waiting to feel ready, consider this your nudge: start assembling. Start exploring. Start becoming.
          </p>
          
          <p className='mb-12 text-brand-darkBrown/90 leading-loose'>
            I'd love for you to join me on this journey — not because I have all the answer, but because I finally stopped waiting to find them before I began.
          </p>

          {/* Author Bio Box */}
          <div className='bg-white border-2 border-brand-peach/30 rounded-lg p-8 mt-16 shadow-lg'>
            <p className='text-2xl mb-4'>🌸</p>
            <p className='font-semibold text-xl mb-3 text-brand-darkBrown'>Hi, I'm Vanessa Michelle.</p>
            <p className='mb-3 text-brand-darkBrown/90'>
              Writer, trader, and lifelong curator of beautiful things — both tangible and intangible. <em>Assembly Required</em> is my open journal, built on a simple belief: we don't have to have it all figured out to start building the life we want.
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