import clsx from 'clsx';

export enum DividerVariant {
  Primary = 'primary',
}

interface DividerProps {
  className?: string;
  variant?: DividerVariant;
}

export const Divider = ({
  className,
  variant = DividerVariant.Primary,
}: DividerProps) => {
  const dividerClassesVariant = {
    [DividerVariant.Primary]: 'border-gray-50',
  };

  return (
    <hr className={clsx('border', dividerClassesVariant[variant], className)} />
  );
};
