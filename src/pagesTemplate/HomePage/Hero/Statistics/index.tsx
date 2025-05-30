import { Paragraph, ParagraphSizeVariant } from '@/components';
import clsx from 'clsx';

interface StatisticsProps {
  title: string;
  subtitle: string;
  hasRightBorder?: boolean;
}

export const Statistics = ({
  title,
  subtitle,
  hasRightBorder = true,
}: StatisticsProps) => {
  return (
    <article
      className={clsx('flex flex-col justify-center w-44 gap-2 pr-2', {
        'border-r border-gray-50': hasRightBorder,
      })}
    >
      <Paragraph
        size={ParagraphSizeVariant['3XLarge']}
        className="font-medium text-gray-300"
      >
        {title}
      </Paragraph>

      <Paragraph>{subtitle}</Paragraph>
    </article>
  );
};
