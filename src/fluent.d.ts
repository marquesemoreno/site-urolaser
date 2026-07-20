import * as React from "react";

// Declaração de tipos para os web components do Fluent UI no JSX do React
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-button": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          appearance?: "accent" | "neutral" | "lightweight" | "outline";
          type?: "button" | "submit";
        },
        HTMLElement
      >;
      "fluent-text-field": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          appearance?: "outline" | "filled";
          type?: string;
          placeholder?: string;
          value?: string;
          name?: string;
        },
        HTMLElement
      >;
      "fluent-text-area": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          appearance?: "outline" | "filled";
          placeholder?: string;
          value?: string;
          name?: string;
        },
        HTMLElement
      >;
      "fluent-card": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export {};
