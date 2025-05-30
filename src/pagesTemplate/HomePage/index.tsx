import { Hero } from '@/pagesTemplate/HomePage/Hero';
import { CopyMessage } from '@/pagesTemplate/HomePage/CopyMessage';

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center">
      <Hero />
      <CopyMessage />
    </main>
  );
}
