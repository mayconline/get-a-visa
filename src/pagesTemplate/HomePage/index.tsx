import { Hero } from '@/pagesTemplate/HomePage/Hero';
import { CopyMessage } from '@/pagesTemplate/HomePage/CopyMessage';
import { HowWorking } from '@/pagesTemplate/HomePage/HowWorking';
import { TopDestinations } from '@/pagesTemplate/HomePage/TopDestinations';

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center">
      <Hero />
      <CopyMessage />
      <HowWorking />
      <TopDestinations />
    </main>
  );
}
