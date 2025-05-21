interface Props {
  className?: string;
  count: number;
}

export const Bage = ({ className, count }: Props) => {
  return (
    <span
      className={`absolute bottom-4 left-5 -z-10 flex items-center justify-center rounded-full bg-blue-600 py-1 px-2 text-xs font-bold text-white ${className}`}>
      {count}
    </span>
  );
};
