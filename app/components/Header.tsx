import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-white border-b border-brand-peach/20 sticky top-0 z-50 shadow-sm'>
      <nav className='max-w-6xl mx-auto px-8 py-4 flex justify-between items-center'>
        <Link href='/' className='font-playfair text-2xl font-bold text-brand-darkBrown hover:text-brand-peach transition-colors'>
          Assembly Required
        </Link>
        <Link href='/' className='text-brand-darkBrown/70 hover:text-brand-peach transition-colors font-medium'>
          Home
        </Link>
      </nav>
    </header>
  );
}