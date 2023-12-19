import React, { ReactNode } from 'react';
import Spinner from './Spinner';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  children: ReactNode;
  showSpinner?: boolean;
  spinnerColor?: string | null;
  spinnerSize?: string | null;
  spinnerSide?: 'left' | 'right';
  spinnerBgColor?: string | null;
  icon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  disabled,
  children,
  showSpinner = false,
  spinnerColor = null,
  spinnerSize = null,
  spinnerSide = 'right',
  spinnerBgColor = null,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={
        `inline-flex font-mono items-center px-4 py-2 bg-primary-light border border-transparent rounded-md font-semibold text-xs text-white  tracking-widest hover:bg-primary-dark focus:bg-primary-dark active:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && 'opacity-25'
        } ` + className
      }
      disabled={disabled}
    >
      {showSpinner && spinnerSide === 'left' && !disabled && (
        <Spinner
          Size={spinnerSize}
          Color={spinnerColor}
          bgColor={spinnerBgColor}
          Class={'ml-1'}
        />
      )}

      <span>{icon}</span>

      {children}

      {showSpinner && spinnerSide === 'right' && !disabled && (
        <Spinner
          Size={spinnerSize}
          Color={spinnerColor}
          bgColor={spinnerBgColor}
          Class={'ml-2'}
        />
      )}
    </button>
  );
};

export default Button;
