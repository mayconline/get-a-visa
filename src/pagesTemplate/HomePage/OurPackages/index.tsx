import {
  Button,
  ButtonVariant,
  Paragraph,
  ParagraphAsVariant,
  ParagraphSizeVariant,
} from '@/components';
import PassportImg from '@/assets/imgs/passport-img.svg';
import PassVisaImg from '@/assets/imgs/pass-visa-img.svg';
import ConsultancyImg from '@/assets/imgs/consultancy-img.svg';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { PackagesCard } from './PackagesCard';

const PACKAGES = [
  {
    src: PassportImg,
    alt: 'Passaporte',
    title: 'Passaporte',
    kind: 'On-line',
    duration: '45 dias',
    amount: '890,00',
  },
  {
    src: PassVisaImg,
    alt: 'Man boarding',
    title: 'Passaporte + Visto',
    kind: 'On-line + Presencial',
    duration: '25 dias',
    amount: '1.290,00',
  },
  {
    src: ConsultancyImg,
    alt: 'Woman receiving consulting paper',
    title: 'Consultoria Completa',
    kind: 'Presencial Completo',
    duration: '10 dias',
    amount: '1.890,00',
  },
];

export const OurPackages = () => {
  return (
    <section className="flex flex-col justify-between flex-wrap px-4 md:px-6 pt-4 md:mb-20 w-full lg:max-w-[1440px] mx-auto">
      <Button
        variant={ButtonVariant.Secondary}
        className="w-[95px] h-[41px] mb-2"
      >
        Pacotes
      </Button>

      <header className="flex items-center justify-between mb-16">
        <Paragraph
          as={ParagraphAsVariant.H5}
          size={ParagraphSizeVariant['5XLarge']}
          className="font-medium text-gray-300"
        >
          Confira nossos pacotes
        </Paragraph>

        <nav className="flex items-center gap-4">
          <Button variant={ButtonVariant.Tertiary} className="size-[54px]">
            <ArrowLeftIcon className="size-6 text-black" />
          </Button>

          <Button className="size-[54px]">
            <ArrowRightIcon className="size-6 text-white" />
          </Button>
        </nav>
      </header>

      <main className="flex flex-wrap items-center justify-between gap-y-8 lg:gap-2">
        {PACKAGES.map((item) => (
          <PackagesCard key={item.title} {...item} />
        ))}
      </main>
    </section>
  );
};
