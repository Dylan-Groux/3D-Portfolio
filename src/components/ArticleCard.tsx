import { motion } from 'motion/react';
import { useState } from 'react';

import type { Article } from './_type';

const tagColors: Record<string, string> = {
  Symfony: '#7a57db',
  PHP: '#5c33cc',
  Architecture: '#33c2cc',
  React: '#33c2cc',
  TypeScript: '#57db96',
  Performance: '#57db96',
  'API Platform': '#7a57db',
  REST: '#33c2cc',
  Docker: '#33c2cc',
  DevOps: '#7a57db',
  Sécurité: '#ca2f8c',
  CSP: '#ea4884',
  Web: '#d6995c',
  Freelance: '#cc6033',
  Organisation: '#d6995c',
  Beauvais: '#57db96',
};

type ArticleCardProps = {
  article: Article;
  index: number;
};

const ArticleCard = ({ article, index }: ArticleCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={article.href}
      target={article.href !== '#' ? '_blank' : undefined}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="block relative rounded-2xl border border-white/5 overflow-hidden cursor-pointer"
      style={{
        background: hovered
          ? 'linear-gradient(135deg, rgba(92,51,204,0.15), rgba(51,194,204,0.08))'
          : 'linear-gradient(135deg, rgba(40,43,75,0.6), rgba(31,30,57,0.6))',
        transition: 'background 0.3s ease, border-color 0.3s ease, transform 0.2s ease',
        borderColor: hovered ? 'rgba(122,87,219,0.4)' : 'rgba(255,255,255,0.05)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: hovered
            ? 'linear-gradient(90deg, #5c33cc, #33c2cc)'
            : 'transparent',
          transition: 'background 0.3s ease',
        }}
      />

      <div className="p-5 md:p-6">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-xs"
            style={{ fontVariantNumeric: 'tabular-nums', color: 'rgba(255,255,255,0.3)' }}
          >
            {article.date}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: 10 }}>·</span>
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            {article.readTime} de lecture
          </span>
        </div>

        <h3
          className="text-base md:text-lg font-semibold mb-2 leading-snug"
          style={{
            color: hovered ? '#fff' : 'rgba(255,255,255,0.85)',
            transition: 'color 0.2s',
          }}
        >
          {article.title}
        </h3>

        <p className="subtext text-sm leading-relaxed mb-4">{article.excerpt}</p>

        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                background: `${tagColors[tag] ?? '#7a57db'}18`,
                color: tagColors[tag] ?? '#7a57db',
                border: `1px solid ${tagColors[tag] ?? '#7a57db'}33`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className="flex items-center gap-1 mt-4 text-xs font-medium"
          style={{
            color: hovered ? '#7a57db' : 'rgba(255,255,255,0.25)',
            transition: 'color 0.2s',
          }}
        >
          Lire l&apos;article
          <img
            src="assets/arrow-up.svg"
            alt=""
            className="size-3"
            style={{
              filter: hovered
                ? 'invert(40%) sepia(80%) saturate(600%) hue-rotate(230deg)'
                : 'invert(1) opacity(0.25)',
              transition: 'filter 0.2s',
            }}
          />
        </div>
      </div>
    </motion.a>
  );
};

export default ArticleCard;
