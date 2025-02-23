import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/rupamjit">
            <Github className="text-white w-10 h-10" />
          </Link>
          <Link href="https://www.linkedin.com/in/rupamjit-ghosh-64b718276/">
            <Linkedin className="text-white w-10 h-10" />
          </Link>
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;