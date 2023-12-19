import React, { InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ className = '', ...props }: CheckboxProps) => {
  return (
    <input
      {...props}
      type="checkbox"
      className={
        'w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-md cursor-pointer ring-offset-3 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ' +
        className
      }
    />
  );
};

export default Checkbox;
