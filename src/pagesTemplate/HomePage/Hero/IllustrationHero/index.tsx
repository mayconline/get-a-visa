import Image from 'next/image';
import ParkImg from '@/assets/imgs/park-img.svg';
import {
  Button,
  ButtonVariant,
  Paragraph,
  ParagraphSizeVariant,
} from '@/components';

export const IllustrationHero = () => {
  return (
    <figure className="relative">
      <Image
        src={ParkImg}
        alt="park illustration"
        priority
        className="object-cover"
      />
      <figcaption className="flex flex-col absolute bottom-10 left-10 max-w-[535px] mr-8">
        <Paragraph
          size={ParagraphSizeVariant['3XLarge']}
          className="font-semibold text-white mb-3"
        >
          Realize o seu sonho com a ajuda da Tirar Visto!
        </Paragraph>
        <Paragraph className="text-white">
          Com um serviço profissional, você não terá dor de cabeça para todo o
          processo do visto e entrevistas no consulado.
        </Paragraph>
      </figcaption>
      <aside className="absolute top-4 right-4">
        <Button
          variant={ButtonVariant.Secondary}
          className="w-[210px] h-[44px]"
        >
          Tirar meu visto agora!
        </Button>
      </aside>
    </figure>
  );
};
