"use client";

import DOMPurify from "dompurify";
import { useEffect, useState } from "react";

interface SafeHTMLProps {
  html: string;
  className?: string;
}

export const SafeHTML = ({ html, className }: SafeHTMLProps) => {
  const [sanitizedHTML, setSanitizedHTML] = useState("");

  useEffect(() => {
    // DOMPurify only works in the browser
    if (typeof window !== "undefined") {
      const htmlWithBreaks = html?.replace(/\n/g, "<br>");
      const clean = DOMPurify.sanitize(htmlWithBreaks, {
        ALLOWED_TAGS: [
          "b",
          "i",
          "em",
          "strong",
          "a",
          "p",
          "br",
          "ul",
          "ol",
          "li",
          "h1",
          "h2",
          "h3",
          "span",
          "div",
        ],
        ALLOWED_ATTR: ["href", "target", "rel", "class", "style"],
      });
      setSanitizedHTML(clean);
    }
  }, [html]);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
};

export const formatPrice = (price: number) => {
  return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
