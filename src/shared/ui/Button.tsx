import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'default' | 'error';
}

type ButtonVariants = NonNullable<ButtonProps['variant']>;

export const Button = ({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) => {
  const variants: Record<ButtonVariants, string> = {
    primary: 'bg-blue-500  ',
    default: '',
    error: 'bg-red-500',
  };

  return (
    <button
      className={`rounded-md px-2 py-1 text-white transition-opacity duration-150 ease-in-out hover:opacity-70 ${variants[variant]} ${className}`}
      {...props}>
      {children}
    </button>
  );
};
