import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <main className='min-h-screen bg-brand-cream'>
      {/* Hero Image */}
      <div className='w-full h-[320px] md:h-[420px] lg:h-[420px] relative'>
        <Image
          src='/images/ar-scared-hero.png'
          alt='Scared Into Progression: Why the AI Panic Might Be the Best Thing That Ever Happened to You'
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
            Scared Into Progression: Why the AI Panic Might Be the Best Thing That Ever Happened to You
          </h1>
          <p className='text-xl text-brand-brown/80 italic'>
            On manufactured urgency, who benefits from your panic, and why the fear you&apos;re running from might be the exact thing to run toward.
          </p>
        </header>

        {/* Article Content */}
        <div className='prose prose-lg max-w-none space-y-6'>
          <p className='mb-6 text-brand-brown/90 leading-loose'>
            It usually hits around 10pm.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            You&apos;re not even looking for it. You&apos;re just scrolling. And then there it is — another headline. Another expert. Another thread explaining in very confident, very specific terms exactly how your job, your industry, and possibly your entire skill set is about to become irrelevant.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            You put your phone down.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            You pick it back up.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            You read it again, as if the second read is going to somehow change what it says.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            It doesn&apos;t.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            So you click the link. Which leads to another link. Which leads to a subreddit that was clearly written by people who have not slept since 2023. Which leads to a YouTube video with a thumbnail of someone making a face that no human being should ever make. Which leads to a podcast episode. Which leads to you, at 1am, somehow now also worried about things you had never once considered before you picked up your phone a couple of hours ago.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            You put it down again. For real this time.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            And now you&apos;re lying there in the dark, running the math in your head on a problem you don&apos;t fully understand yet, about a future that hasn&apos;t happened, based on information from someone you&apos;ve never met who may or may not actually know what they&apos;re talking about.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Welcome to the AI panic. Population: everyone with a pulse and a LinkedIn account.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Here&apos;s what I want to tell you. Not to calm you down. Not to sell you a course. Just because it&apos;s true.
          </p>

          <p className='mb-8 text-brand-brown/90 leading-loose'>
            The fear is not the problem. The fear might actually be the point.
          </p>

          {/* Section 1 */}
          <h2 className='font-cormorant text-3xl font-bold mt-12 mb-4 text-brand-brown'>
            The Honest Look
          </h2>
          <div className='relative w-full h-64 md:h-80 rounded-lg overflow-hidden my-6'>
            <Image
              src='/images/ar-scared-section1.png'
              alt='Lying awake scrolling, caught in the pull of the feed'
              fill
              className='object-cover'
            />
          </div>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Here&apos;s something nobody in those headlines is going to tell you.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Fear is a business model.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Not for everyone. But for enough people that you need to know how to read the room before you let any of this land. The AI conversation is real. The disruption is real. But the volume? The urgency? The &quot;everything is changing RIGHT NOW and if you&apos;re not panicking you&apos;re not paying attention&quot; energy?
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            That part is manufactured. And it is manufactured deliberately.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Think about who benefits every single time you feel behind, unprepared, or one software update away from irrelevance. The answer is not complicated. It is just inconvenient.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Clicks need anxiety to survive. Courses need insecurity to sell. Consultants need chaos to stay booked. And the algorithm — the beautiful, indifferent, completely amoral algorithm — does not care whether what it shows you is true. It only cares that you stayed.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            So it shows you the thing that made you stay last time.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            And last time, it was fear.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Which is probably why, thirty minutes into your spiral, you got served an ad for a $997 course on how to survive it.
          </p>

          <p className='mb-8 text-brand-brown/90 leading-loose'>
            This is not a conspiracy. It is just capitalism doing what capitalism does. But once you see it, you cannot unsee it. And once you cannot unsee it, you get to make a different choice about what you do with the noise.
          </p>

          {/* Section 2 */}
          <h2 className='font-cormorant text-3xl font-bold mt-12 mb-4 text-brand-brown'>
            Who&apos;s In The Room
          </h2>
          <div className='relative w-full h-64 md:h-80 rounded-lg overflow-hidden my-6'>
            <Image
              src='/images/ar-scared-section3.png'
              alt='One door open, light already waiting — choosing whose voice gets the most space'
              fill
              className='object-cover'
            />
          </div>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Not everyone talking about AI is trying to scare you. But not everyone is trying to help you either. And the difference matters more than most people realize.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Here&apos;s a quick field guide.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            <strong>The Panic Merchants</strong> are the easiest to spot. Their content has one setting — urgent. Every post is a countdown clock. Every video starts with &quot;if you&apos;re not doing this by [insert arbitrary deadline] you&apos;re already behind.&quot; They speak fluently in statistics that were designed to alarm, not inform. They may or may not have anything to sell you today. But they are absolutely building an audience that they will sell something to later. The panic is the product until the actual product is ready.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            <strong>The Credential Collectors</strong> are trickier. These are the people who genuinely know things. Researchers, academics, industry insiders. Their job is to show you why their information is valuable enough to pay for — think research grants, speaking engagements, and consulting fees. These are the people writing the World Economic Forum reports that everyone quotes but nobody fully reads.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Their information is often accurate. But how much they can actually earn from that information is directly impacted by how urgent it feels.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Not because they want you scared. Because scared gets cited. Scared gets funded. Scared gets booked for the keynote.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            It is not malicious. It is just incentives. Nobody is twirling a mustache. They just have a mortgage too.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            <strong>The Builders</strong> are who you&apos;re looking for. They&apos;re not hard to find once you know what you&apos;re looking for. They&apos;re the ones already doing the thing. Already experimenting, already failing publicly, already showing you the process in real time. They talk about AI the way a carpenter talks about a new tool — with curiosity, not catastrophe. Their content makes you want to try something, not survive something.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            You know you&apos;ve found a real one when you close the tab feeling like something is possible that didn&apos;t feel possible before you opened it. Not inspired in a vague, motivational poster kind of way. Optimistic in a specific, <em>I could actually do something with this</em> kind of way. That&apos;s the difference.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            One of these groups needs your fear to function. One of them is simply doing their job. And one of them is holding the door open.
          </p>

          <p className='mb-8 text-brand-brown/90 leading-loose'>
            You get to choose whose voice gets the most space in your head.
          </p>

          {/* Section 3 */}
          <h2 className='font-cormorant text-3xl font-bold mt-12 mb-4 text-brand-brown'>
            The Reframe
          </h2>
          <div className='relative w-full h-64 md:h-80 rounded-lg overflow-hidden my-6'>
            <Image
              src='/images/ar-scared-section2.png'
              alt='Disruption has always been the story — we have always found a way through'
              fill
              className='object-cover'
            />
          </div>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Here is what the panic merchants will never put in the headline.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            We have been here before.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Not metaphorically. Not &quot;well change is always hard&quot; philosophically. Literally. The industrial revolution eliminated entire categories of work that had existed for generations. The printing press made certain professions obsolete overnight. The internet made others follow. Every single time, the conversation sounded exactly like the one happening right now. Different technology. Same fear. Same headlines. Same experts explaining in very serious tones why this time was different from every other time.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            It never was.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            What history actually shows us is not that disruption destroys people. It shows us that disruption reveals them. The people who got left behind weren&apos;t the ones who couldn&apos;t keep up with the technology. They were the ones who never decided what they were going to do about it.
          </p>

          <blockquote className='border-l-4 border-brand-gold pl-6 my-8 font-cormorant italic text-xl text-brand-gold'>
            Deciding is the whole thing.
          </blockquote>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Not mastering every tool. Not having a five year plan. Not knowing exactly how it all shakes out. Just making the decision that you are going to be someone who figures it out rather than someone who waited to see what happened.
          </p>

          <p className='mb-8 text-brand-brown/90 leading-loose'>
            Here is what nobody is putting in the headline because it does not generate enough panic to go viral. We are living in the first moment in history where the gap between having an idea and being able to actually build it has never been smaller. AI did not create your ambition. But it just made your ambition a lot more actionable. You do not have to blow up your life to find out what it&apos;s capable of. You just have to decide that finding out is worth it.
          </p>

          {/* Section 4 */}
          <h2 className='font-cormorant text-3xl font-bold mt-12 mb-4 text-brand-brown'>
            The Application
          </h2>
          <div className='relative w-full h-64 md:h-80 rounded-lg overflow-hidden my-6'>
            <Image
              src='/images/ar-scared-section4.png'
              alt='The skill that no automation touches — presence, trust, and the ability to hold a room'
              fill
              className='object-cover'
            />
          </div>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Here is what AI cannot do.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            It cannot be trusted the way you trust a person. It cannot be loyal the way a person is loyal. It can help you build the plan. But it cannot sit across from you three years later and remind you why you started. It cannot feel proud of you. It cannot be changed by knowing you.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            And in a workplace? It cannot walk into a room and know instinctively that today is not the day to push back. It cannot read the energy in a meeting and pivot the entire conversation in real time because something shifted. It cannot be the person the whole team rallies around when everything is uncertain and nobody has the answers yet.
          </p>

          <blockquote className='border-l-4 border-brand-gold pl-6 my-8 font-cormorant italic text-xl text-brand-gold'>
            That is not a soft skill. That is the skill.
          </blockquote>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            The one that compounds quietly over time. The one that makes people choose you, trust you, and fight to keep you in the room. No automation touches it. No software update replaces it.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            And here is where it gets interesting — because this applies whether you want to stay or whether staying was never really the goal.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            If you want to stay, bring these skills into an AI powered workplace deliberately and visibly. The person who knows how to work WITH the technology AND bring something to the table that the technology simply cannot is not just safe in the new landscape. They are irreplaceable. They are indispensable. They become the person the organization cannot afford to lose.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            And if staying was never really the goal — these same skills are what make building something of your own more accessible than it has ever been before. Without blowing up what you already have.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            AI handles the execution. You bring the vision, the relationships, the judgment, and the humanity.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            That combination is not the future.
          </p>

          <p className='mb-8 text-brand-brown/90 leading-loose'>
            It is available right now.
          </p>

          {/* Section 5 */}
          <h2 className='font-cormorant text-3xl font-bold mt-12 mb-4 text-brand-brown'>
            The Invitation
          </h2>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            So if you&apos;ve made it this far and the panic has started to feel less like dread and more like energy — good. That&apos;s exactly what it&apos;s supposed to feel like.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Fear in the hands of an unprepared person is paralyzing. Fear in the hands of someone who knows what they&apos;re working with is just momentum that hasn&apos;t found its direction yet.
          </p>

          <blockquote className='border-l-4 border-brand-gold pl-6 my-8 font-cormorant italic text-xl text-brand-gold'>
            You now know what you&apos;re working with.
          </blockquote>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            The prepared person doesn&apos;t eliminate fear. They just stop letting it make decisions. They feel it, they acknowledge it, and then they pick up a piece and start placing it. That is the whole move. That has always been the whole move.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            This is the first post in a three part series. Because this conversation doesn&apos;t end here and neither does yours.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            Next up — you don&apos;t have to blow up what you&apos;ve built to build what you want. We&apos;re going to talk about exactly how someone in the middle of a career, a life, and a calling figures out how to hold all three without dropping any of them.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            If you want that conversation delivered directly to you, the email list is where it lives first.
          </p>

          <p className='mb-6 text-brand-brown/90 leading-loose'>
            No noise. No panic.
          </p>

          <p className='mb-12 text-brand-brown/90 leading-loose'>
            Just the next piece.
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
