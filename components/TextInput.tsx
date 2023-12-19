"use client";
import React, { useEffect, useRef, InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  isFocused?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ 
  type = 'text', 
  className = '', 
  isFocused = false, 
  ...props 
},ref
) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <input
      {...props}
      type={type}
      className={
        `outline-none py-1.5 px-2 border-0 ring-1 ring-blue-700 focus:ring-2 focus:ring-blue-700 rounded-xl shadow-sm ` +
        className
      }
      ref={inputRef}
    />
  );
};

export default TextInput;
