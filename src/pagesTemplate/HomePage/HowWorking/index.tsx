import Image from 'next/image';
import FamilyImg from '@/assets/imgs/family-img.svg';
import {
  Button,
  ButtonVariant,
  Paragraph,
  ParagraphAsVariant,
  ParagraphSizeVariant,
} from '@/components';
import { Steps } from '@/pagesTemplate/HomePage/HowWorking/Steps';
import clsx from 'clsx';

const STEPS = [
  {
    title: 'Etapa Inicial',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  { title: 'Processo de Entrevista', subtitle: '+ Leia mais' },
  { title: 'Entrega de Documentos', subtitle: '+ Leia mais' },
];

export const HowWorking = () => {
  return (
    <section className="flex flex-col justify-between flex-wrap px-4 pt-4 mb-20 lg:max-w-[1440px] mx-auto">
      <Button
        variant={ButtonVariant.Secondary}
        className="w-[169px] h-[41px] mb-3"
      >
        Veja como funciona
      </Button>
      <main className="flex flex-wrap justify-between items-center mb-16">
        <Paragraph
          as={ParagraphAsVariant.H3}
          size={ParagraphSizeVariant['5XLarge']}
          className="font-medium text-gray-300 max-w-[500px]"
        >
          Sua tranquilidade não tem preço!
        </Paragraph>

        <Paragraph as={ParagraphAsVariant.H3} className="flex flex-1 py-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </Paragraph>
      </main>

      <aside className="flex justify-between flex-wrap">
        <Image src={FamilyImg} alt="happy family illustration" priority />

        <article className="flex flex-col">
          {STEPS?.map(({ title, subtitle }, index) => (
            <Steps
              key={title}
              title={title}
              subtitle={subtitle}
              className={clsx({ 'font-medium text-gray-300': index !== 0 })}
            />
          ))}
        </article>
      </aside>
    </section>
  );
};
