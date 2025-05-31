import { Paragraph, Button, ButtonVariant } from '@/components';

const SOCIAL_LINKS = [
  { title: 'Instagram', url: '#' },
  { title: 'X', url: '#' },
  { title: 'Facebook', url: '#' },
  { title: 'Youtube', url: '#' },
];

export const SocialLinks = () => {
  return (
    <article className="flex flex-col self-end">
      <Paragraph className="font-semibold text-gray-300 mb-5">
        Siga em nossa redes:
      </Paragraph>

      <div className="flex justify-between items-end gap-5 flex-wrap">
        {SOCIAL_LINKS.map((link) => (
          <Button
            variant={ButtonVariant.Tertiary}
            key={link.title}
            className="px-4 py-2"
          >
            {link.title}
          </Button>
        ))}
      </div>
    </article>
  );
};
