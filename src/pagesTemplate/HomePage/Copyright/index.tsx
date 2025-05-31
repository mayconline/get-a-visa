import { Paragraph, ParagraphSizeVariant } from '@/components';

export const Copyright = () => {
  return (
    <article className="flex justify-center items-center border-t border-t-gray-50 py-8">
      <Paragraph
        size={ParagraphSizeVariant.Small}
        className="font-medium text-gray-300"
      >
        © {new Date().getFullYear()} Tirar Visto - Todos os Direitos Reservados
      </Paragraph>
    </article>
  );
};
