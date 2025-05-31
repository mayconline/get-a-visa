import {
  Button,
  ButtonVariant,
  Divider,
  Paragraph,
  ParagraphSizeVariant,
} from '@/components';
import Image from 'next/image';

interface PackagesCardProps {
  src: string;
  alt: string;
  title: string;
  kind: string;
  duration: string;
  amount: string;
}

export const PackagesCard = ({
  src,
  alt,
  title,
  kind,
  duration,
  amount,
}: PackagesCardProps) => {
  return (
    <article className="flex flex-col justify-center gap-4 border border-gray-50 p-4 rounded-2xl">
      <Image src={src} alt={alt} priority className="mb-8" />

      <header className="flex items-center gap-4">
        <Button variant={ButtonVariant.Tertiary} className="w-[82px] h-[32px]">
          Basic
        </Button>
        <Button
          variant={ButtonVariant.Quaternary}
          className="w-[109px] h-[32px]"
        >
          Premium
        </Button>
      </header>

      <Paragraph
        size={ParagraphSizeVariant.Large}
        className="text-black font-semibold"
      >
        {title}
      </Paragraph>

      <main className="grid grid-cols-2 justify-between">
        <div className="flex flex-col gap-2">
          <Paragraph className="font-medium text-gray-300">
            Atendimento
          </Paragraph>
          <Paragraph>{kind}</Paragraph>
        </div>

        <div className="flex flex-col gap-2">
          <Paragraph className="font-medium text-gray-300">Tempo</Paragraph>
          <Paragraph>{duration}</Paragraph>
        </div>
      </main>

      <Divider className="my-5" />

      <footer className="flex items-center justify-between">
        <div>
          <Paragraph>A partir de</Paragraph>
          <Paragraph
            size={ParagraphSizeVariant.Large}
            className="text-gray-300 font-semibold"
          >
            R$ {amount}
          </Paragraph>
        </div>

        <Button className="w-[115px] h-[54px]">Contratar</Button>
      </footer>
    </article>
  );
};
