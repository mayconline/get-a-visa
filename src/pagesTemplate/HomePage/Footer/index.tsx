import { CallCenter } from '@/pagesTemplate/HomePage/Footer/CallCenter';
import { Newsletter } from '@/pagesTemplate/HomePage/Footer/Newsletter';
import { SocialLinks } from '@/pagesTemplate/HomePage/Footer/SocialLinks';
import { FooterLinks } from '@/pagesTemplate/HomePage/Footer/FooterLinks';

export const Footer = () => {
  return (
    <footer className="flex flex-col px-4 pt-4 my-20 w-full lg:max-w-[1440px] mx-auto gap-10">
      <section className="flex justify-between items-center flex-wrap">
        <CallCenter />
        <Newsletter />
      </section>

      <section className="flex justify-between items-center flex-wrap">
        <SocialLinks />
        <FooterLinks />
      </section>
    </footer>
  );
};
