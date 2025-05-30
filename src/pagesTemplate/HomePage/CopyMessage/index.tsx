import { Paragraph, ParagraphSizeVariant } from '@/components';

export const CopyMessage = () => {
  return (
    <section className="flex justify-center items-center bg-gray-60 lg:px-14 py-20 my-20">
      <main className="px-4 pt-4 w-full lg:max-w-[1440px]">
        <Paragraph
          size={ParagraphSizeVariant['5XLarge']}
          className="uppercase font-medium text-gray-300 lg:max-w-[1024px]"
        >
          Consultoria completa para tirar seu visto
        </Paragraph>
        <Paragraph
          size={ParagraphSizeVariant['5XLarge']}
          className="uppercase font-medium italic text-gray-300 text-right mt-4"
        >
          você esta em boas mãos!
        </Paragraph>
      </main>
    </section>
  );
};
