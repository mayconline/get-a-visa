import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';

export enum ParagraphAsVariant {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
}

export enum ParagraphSizeVariant {
  ExtraSmall = 'extra-small',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  ExtraLarge = 'extra-large',
  '2XLarge' = '2x-large',
  '3XLarge' = '3x-large',
  '4XLarge' = '4x-large',
  '5XLarge' = '5x-large',
}

interface ParagraphProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
  size?: ParagraphSizeVariant;
  as?: ParagraphAsVariant;
}

export const Paragraph = ({
  children,
  className,
  size = ParagraphSizeVariant.Medium,
  as = ParagraphAsVariant.P,
  ...props
}: ParagraphProps) => {
  const Component = as;

  const ParagraphClassesSize = {
    [ParagraphSizeVariant.ExtraSmall]: 'text-xs',
    [ParagraphSizeVariant.Small]: 'text-sm',
    [ParagraphSizeVariant.Medium]: 'text-base',
    [ParagraphSizeVariant.Large]: 'text-lg',
    [ParagraphSizeVariant.ExtraLarge]: 'text-xl',
    [ParagraphSizeVariant['2XLarge']]: 'text-2xl',
    [ParagraphSizeVariant['3XLarge']]: 'text-3xl',
    [ParagraphSizeVariant['4XLarge']]: 'text-4xl',
    [ParagraphSizeVariant['5XLarge']]: 'text-5xl',
  };

  return (
    <Component
      className={clsx(ParagraphClassesSize[size], className)}
      title={children as string}
      {...props}
    >
      {children}
    </Component>
  );
};
