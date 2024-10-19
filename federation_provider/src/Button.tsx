import { ComponentProps, FC } from 'react';

// src/button.tsx
export const Button: FC<ComponentProps<'button'>> = ({ ...props }) => {
  return <button {...props}>Provider button!!!!</button>;
};

export default Button;
