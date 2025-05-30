import Image from 'next/image';
import AboutImg from '@/assets/imgs/about-img.svg';
import {
  Button,
  Divider,
  Header,
  Paragraph,
  ParagraphAsVariant,
  ParagraphSizeVariant,
} from '@/components';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Statistics } from '@/pagesTemplate/HomePage/Hero/Statistics';
import { IllustrationHero } from '@/pagesTemplate/HomePage/Hero/IllustrationHero';

const STATISTICS = [
  { title: '509', subtitle: 'Vistos Tirados' },
  { title: '602', subtitle: 'Passaportes Tirados' },
  { title: '634', subtitle: 'Famílias Felizes' },
];

export const Hero = () => {
  return (
    <section className="flex lg:grid grid-cols-2 justify-between items-center flex-wrap gap-16 min-h-full px-4 pt-4 lg:max-w-[1440px] mx-auto">
      <main className="grid grid-cols-1">
        <Header />

        <Paragraph
          as={ParagraphAsVariant.H1}
          size={ParagraphSizeVariant['4XLarge']}
          className="font-medium text-gray-300 mt-10 mb-8"
        >
          Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
        </Paragraph>

        <Divider className="mb-14" />

        <section className="flex justify-between gap-5">
          <article className="flex flex-col w-[340px]">
            <Paragraph>
              Com uma equipe altamente treinada, nós temos todos os
              procedimentos para que seu processo seja o mais tranquilo e
              rápido. Uma consultoria completa para você e sua família não ter
              nenhuma preocupação na sua viagem.
            </Paragraph>
            <Button className="w-[160px] h-[54px] mt-10">
              Saiba mais <ArrowRightIcon className="size-6 text-white" />
            </Button>
          </article>

          <article className="flex flex-col justify-end">
            <Image
              src={AboutImg}
              alt="about illustration"
              width={191}
              height={110}
              priority
            />
            <div className="flex justify-between mt-4">
              <div className="flex flex-col">
                <Paragraph className="font-semibold text-gray-300">
                  Conheça a Bruna
                </Paragraph>
                <Paragraph size={ParagraphSizeVariant.ExtraSmall}>
                  Ver vídeo
                </Paragraph>
              </div>
              <Button className="size-9">
                <ArrowRightIcon className="size-6 text-white" />
              </Button>
            </div>
          </article>
        </section>

        <section className="flex justify-between mt-20 gap-2">
          {STATISTICS?.map(({ title, subtitle }, index) => (
            <Statistics
              key={title}
              title={title}
              subtitle={subtitle}
              hasRightBorder={index !== STATISTICS?.length - 1}
            />
          ))}
        </section>
      </main>
      <aside className="grid grid-cols-1">
        <IllustrationHero />
      </aside>
    </section>
  );
};
