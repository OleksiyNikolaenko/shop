import { InputHTMLAttributes } from 'react';

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const {
    placeholder,
    value,
    className,
    onChange,
    type = 'text',
    ...rest
  } = props;
  return (
    <input
      type={type}
      className={`outline-0 ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};
