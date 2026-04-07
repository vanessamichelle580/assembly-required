import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-brand-espresso border-b border-brand-gold/20 sticky top-0 z-50 shadow-sm'>
      <nav className='max-w-6xl mx-auto px-8 py-4 flex justify-between items-center'>
        <Link href='/' className='font-raleway text-2xl font-bold text-brand-cream hover:text-brand-gold transition-colors'>
          Assembly Required
        </Link>
        <Link href='/' className='text-brand-cream/70 hover:text-brand-gold transition-colors font-medium'>
          Home
        </Link>
      </nav>
    </header>
  );
}
