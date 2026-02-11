import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-brand-darkBrown text-white py-12 mt-20'>
      <div className='max-w-6xl mx-auto px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          {/* Brand/Copyright */}
          <div className='text-center md:text-left'>
            <Link href='/' className='font-playfair text-2xl font-bold hover:text-brand-gold transition-colors mb-2 block'>
              Assembly Required
            </Link>
            <p className='text-sm text-white/70'>
              Building the life of your dreams, one puzzle piece at a time.
            </p>
            <p className='text-sm text-white/60 mt-2'>
              © {new Date().getFullYear()} V.Michelle Enterprises. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className='flex gap-6 text-sm'>
            <Link href='/' className='hover:text-brand-gold transition-colors'>
              Home
            </Link>
            <Link href='/blog/why-i-stopped-waiting' className='hover:text-brand-gold transition-colors'>
              Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}