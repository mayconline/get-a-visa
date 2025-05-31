import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Quaternary = 'quaternary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = ({
  children,
  variant = ButtonVariant.Primary,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const buttonClassesVariant = {
    [ButtonVariant.Primary]: 'bg-blue-500 hover:bg-blue-500/90 text-white',
    [ButtonVariant.Secondary]:
      'bg-yellow-500 hover:bg-yellow-500/90 text-gray-200',
    [ButtonVariant.Tertiary]:
      'bg-white hover:bg-white/90 text-gray-300 border border-gray-300',
    [ButtonVariant.Quaternary]:
      'bg-white hover:bg-white/90 text-gray-100 border border-gray-100',
  };

  return (
    <button
      className={clsx(
        'flex items-center justify-center rounded-full font-semibold gap-2 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed',
        buttonClassesVariant[variant],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
