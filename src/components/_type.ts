import type { ThreeElements } from '@react-three/fiber';

/**
 * Type générique pour représenter un tableau non vide.
 * Il garantit qu'il y a au moins un élément dans le tableau.
 *
 * @template T - Le type des éléments du tableau.
 */
export type NonEmptyArray<T> = readonly [T, ...T[]];

/**
 * Props pour le composant FlipWords.
 * Il inclut un tableau non vide de mots, une durée optionnelle pour l'animation,
 * et une classe CSS optionnelle pour le style.
 */
export type FlipWordsProps = {
  words: NonEmptyArray<string>;
  duration?: number;
  className?: string;
};

/**------------------------HeroText Props ------------------------ */
export type HeroTextProps = {
  words: NonEmptyArray<string>;
};

export type ProjectTag = {
  id: number;
  name: string;
  logo: string;
};

/**------------------------Project Props ------------------------ */
export type ProjectProps = {
  title: string;
  description: string;
  subDescription: string[];
  tags: ProjectTag[];
  image: string;
  href: string;
  setPreview: (image: string | null) => void;
};

/**------------------------Project Details Props ------------------------ */
export type ProjectDetailsProps = {
  title: string;
  description: string;
  subDescription: string[];
  tags: ProjectTag[];
  image: string;
  href: string;
  closeModal: () => void;
};

/**------------------------Wyvern Props ------------------------ */
export type WyvernProps = ThreeElements['group'];
