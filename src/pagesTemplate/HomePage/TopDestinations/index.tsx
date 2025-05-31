import Image from 'next/image';
import BgMask from '@/assets/bg/bg-mask.svg';
import BaliImg from '@/assets/imgs/bali-img.svg';
import NewYorkImg from '@/assets/imgs/new-york-img.svg';
import SantoriniImg from '@/assets/imgs/santorini-img.svg';
import ParisImg from '@/assets/imgs/paris-img.svg';
import CaboImg from '@/assets/imgs/city-cabo-img.svg';
import MumbaiImg from '@/assets/imgs/mumbai-img.svg';
import {
  Button,
  ButtonVariant,
  Paragraph,
  ParagraphAsVariant,
  ParagraphSizeVariant,
} from '@/components';
import { CityIllustration } from '@/pagesTemplate/HomePage/TopDestinations/CityIllustration';

const ILLUSTRARIONS = [
  {
    src: BaliImg,
    alt: 'Bali, Indonesia',
  },
  {
    src: NewYorkImg,
    alt: 'Nova York, Estados Unidos',
  },
  {
    src: SantoriniImg,
    alt: 'Santorini, Grecia',
  },
  {
    src: ParisImg,
    alt: 'Paris, França',
  },
  {
    src: CaboImg,
    alt: 'Cidade do Cabo, Africa do Sul',
  },
  {
    src: MumbaiImg,
    alt: 'Mumbai, India',
  },
];

export const TopDestinations = () => {
  return (
    <section className="relative flex flex-col w-full mb-20">
      <Image
        src={BgMask}
        alt="background mask"
        priority
        className="absolute top-0 left-0 w-full h-[423px] -z-10 object-cover"
      />
      <main className="flex flex-col justify-center items-center px-4 mt-28 lg:max-w-[1440px] mx-auto">
        <Button
          variant={ButtonVariant.Secondary}
          className="w-[127px] h-[41px] mb-2"
        >
          Top Destinos
        </Button>

        <Paragraph
          as={ParagraphAsVariant.H4}
          size={ParagraphSizeVariant['5XLarge']}
          className="font-medium text-gray-300 mb-4 text-center"
        >
          Destinos mais procurados
        </Paragraph>

        <Paragraph className="max-w-[600px] text-center">
          Confira os destinos mais procurados por nossos clientes nos últimos
          meses, qual seria o seu novo destino?
        </Paragraph>

        <Button className="w-[150px] h-[54px] mt-10 mb-14">Conheça mais</Button>

        <aside className="flex flex-wrap items-center justify-center lg:grid lg:grid-cols-3 gap-5">
          {ILLUSTRARIONS.map((illustration, index) => (
            <CityIllustration
              key={index}
              src={illustration.src}
              alt={illustration.alt}
            />
          ))}
        </aside>
      </main>
    </section>
  );
};
