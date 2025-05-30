import { Paragraph, ParagraphSizeVariant, Divider } from '@/components';

interface StepsProps {
  title: string;
  subtitle: string;
  className?: string;
}

export const Steps = ({ title, subtitle, className }: StepsProps) => {
  return (
    <>
      <Paragraph
        size={ParagraphSizeVariant['3XLarge']}
        className="font-medium text-gray-300 mb-3"
      >
        {title}
      </Paragraph>
      <Paragraph className={className}>{subtitle}</Paragraph>

      <Divider className="my-8" />
    </>
  );
};
