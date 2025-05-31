import { Paragraph, ParagraphSizeVariant } from '@/components';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

export const Newsletter = () => {
  return (
    <article className="flex items-center justify-between border-b border-b-gray-300 w-[500px] h-fit cursor-pointer">
      <Paragraph
        size={ParagraphSizeVariant['2XLarge']}
        className="text-gray-300"
      >
        Receba novidades
      </Paragraph>
      <ArrowUpRightIcon className="size-10 text-gray-300" />
    </article>
  );
};
