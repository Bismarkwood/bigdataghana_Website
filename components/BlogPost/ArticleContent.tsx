import Link from "next/link";
import type { ReactNode } from "react";

function parseInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|\*[^*]+\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith("**")) {
      parts.push(
        <strong key={match.index} className="font-semibold text-gray-900 dark:text-white">
          {token.slice(2, -2)}
        </strong>,
      );
    } else if (token.startsWith("[")) {
      const linkMatch = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        parts.push(
          <Link
            key={match.index}
            href={linkMatch[2]}
            className="text-red-600 underline underline-offset-2 hover:text-red-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkMatch[1]}
          </Link>,
        );
      }
    } else if (token.startsWith("*")) {
      parts.push(<em key={match.index}>{token.slice(1, -1)}</em>);
    }

    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

interface ArticleContentProps {
  content: string;
  excerpt?: string;
}

export default function ArticleContent({ content, excerpt }: ArticleContentProps) {
  const blocks = content.split(/\n\n+/).map((b) => b.trim()).filter(Boolean);

  return (
    <div className="article-content">
      {excerpt && (
        <p className="text-lg font-semibold leading-relaxed text-gray-900 dark:text-gray-100 mb-8 border-l-4 border-red-600 pl-5">
          {excerpt}
        </p>
      )}

      <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-7 text-[17px]">
        {blocks.map((block, index) => {
          if (block === "---") {
            return <hr key={index} className="border-gray-200 dark:border-gray-800" />;
          }

          if (block.startsWith("## ")) {
            return (
              <h2
                key={index}
                className="font-montserrat text-2xl font-bold text-gray-900 dark:text-white pt-6 pb-2"
              >
                {block.slice(3)}
              </h2>
            );
          }

          if (block.startsWith("*") && block.endsWith("*") && !block.includes("[")) {
            return (
              <p key={index} className="text-sm italic text-gray-500 dark:text-gray-400">
                {block.slice(1, -1)}
              </p>
            );
          }

          return <p key={index}>{parseInline(block)}</p>;
        })}
      </div>
    </div>
  );
}
