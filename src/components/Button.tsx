import React from "react";
import { GrDocumentPdf } from "react-icons/gr";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <a className="group relative inline-block focus:outline-none focus:ring">
      <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#33a3db] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

      <span className="relative inline-flex items-center border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
        {children} <GrDocumentPdf className="ml-2" />
      </span>
    </a>
  );
};

export default Button;
