import { Paragraph } from '@/components';
import Link from 'next/link';

const FOOTER_LINKS = [
  { key: 'Empresa', links: ['Home', 'Quem somos', 'Serviços', 'Contato'] },
  {
    key: 'Novidades',
    links: ['Passaporte', 'Visto', 'Entrevista', 'Polícia Federal'],
  },
  { key: 'Suporte', links: ['FAQ', 'Contato', 'Dúvidas Frequentes'] },
];

export const FooterLinks = () => {
  return (
    <article className="flex justify-between flex-wrap gap-28">
      {FOOTER_LINKS.map((footerLink) => (
        <div
          key={footerLink.key}
          className="flex flex-col"
          data-testid={`footer-${footerLink.key.toLowerCase()}`}
        >
          <Paragraph className="font-medium text-gray-300 mb-5">
            {footerLink.key}
          </Paragraph>
          {footerLink.links.map((item) => (
            <Link href="/" key={item} className="mb-3">
              <Paragraph>{item}</Paragraph>
            </Link>
          ))}
        </div>
      ))}
    </article>
  );
};
