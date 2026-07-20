
import React from "react";
import { Linkedin, Instagram } from "lucide-react";

const SocialMediaLinks = () => {
  return (
    <>
      <h4 className="font-bold text-white mb-4">REDES SOCIAIS</h4>
      <div className="flex gap-4">
        <a 
          href="https://www.instagram.com/ti.vdc/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-tr from-[#ff00a0]/20 to-[#ac00e6]/20 border border-white/10 text-white p-3 rounded-full hover:from-[#ff00a0]/40 hover:to-[#ac00e6]/40 transition-all"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </div>
    </>
  );
};

export default SocialMediaLinks;
