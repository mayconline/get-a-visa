import React from 'react';
import Image from 'next/image';
import { Paragraph } from '@/components';

interface CityIllustrationProps {
  src: string;
  alt: string;
}
export const CityIllustration = ({ src, alt }: CityIllustrationProps) => {
  return (
    <figure className="relative flex items-center justify-center">
      <Image src={src} alt={alt} priority />
      <figcaption className="flex items-center absolute bottom-4 h-[32px] px-4 py-2 mx-auto text-white backdrop-blur-[20px] rounded-4xl">
        <Paragraph>{alt}</Paragraph>
      </figcaption>
    </figure>
  );
};
