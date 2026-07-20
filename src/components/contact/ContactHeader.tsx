
import React from "react";

interface ContactHeaderProps {
  title: string;
  subtitle: string;
}

const ContactHeader = ({ title, subtitle }: ContactHeaderProps) => {
  return (
    <>
      <h2 className="section-title text-center">{title}</h2>
      <p className="section-subtitle text-center font-medium">
        {subtitle}
      </p>
    </>
  );
};

export default ContactHeader;
