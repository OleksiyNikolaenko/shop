import { ReactNode } from 'react';

export const Card = ({
  children,
  className = '',
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <article className={`relative ${className}`}>{children}</article>;
};
