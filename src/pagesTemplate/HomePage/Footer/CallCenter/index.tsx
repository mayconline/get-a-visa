import { Paragraph, ParagraphSizeVariant, Button } from '@/components';

export const CallCenter = () => {
  return (
    <article className="flex flex-col w-[456px]">
      <Paragraph
        size={ParagraphSizeVariant['5XLarge']}
        className="text-gray-300 font-medium mb-3"
      >
        Está com alguma dúvida?
      </Paragraph>
      <Paragraph>
        Entre em contato através do nosso canal direto ao cliente através do
        botão abaixo
      </Paragraph>
      <Button className="w-[225px] h-[54px] mt-10">
        Central de Atendimento
      </Button>
    </article>
  );
};
