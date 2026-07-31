export interface Colors {
  bg: string;
  bgAlt: string;
  card: string;
  border: string;
  text: string;
  textMuted: string;
  textFaint: string;
  invertBg: string;
  invertText: string;
  gridLine: string;
  navBg: string;
}

export type Theme = 'dark' | 'light';

const dark: Colors = {
  bg: 'oklch(15% 0 0)',
  bgAlt: 'oklch(19% 0 0)',
  card: 'oklch(20% 0 0)',
  border: 'oklch(30% 0 0)',
  text: 'oklch(97% 0 0)',
  textMuted: 'oklch(72% 0 0)',
  textFaint: 'oklch(48% 0 0)',
  invertBg: 'oklch(97% 0 0)',
  invertText: 'oklch(15% 0 0)',
  gridLine: 'rgba(255,255,255,.055)',
  navBg: 'rgba(21,21,21,.72)',
};

const light: Colors = {
  bg: 'oklch(98.5% 0 0)',
  bgAlt: 'oklch(96% 0 0)',
  card: 'oklch(100% 0 0)',
  border: 'oklch(88% 0 0)',
  text: 'oklch(16% 0 0)',
  textMuted: 'oklch(38% 0 0)',
  textFaint: 'oklch(56% 0 0)',
  invertBg: 'oklch(16% 0 0)',
  invertText: 'oklch(98% 0 0)',
  gridLine: 'rgba(0,0,0,.045)',
  navBg: 'rgba(251,251,251,.72)',
};

export function getColors(theme: Theme): Colors {
  return theme === 'dark' ? dark : light;
}
