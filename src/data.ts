export interface Experience {
  role: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
}

export interface ProjectPlaceholder {
  title: string;
  desc: string;
  imageLabel: string;
}

export interface WritingPlaceholder {
  title: string;
  desc: string;
  date: string;
}

export const experiences: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'Instagram',
    location: 'New York, NY',
    dates: 'Jan 2021 — Present',
    bullets: ['App performance across core surfaces.'],
  },
  {
    role: 'Software Engineer',
    company: 'Facebook',
    location: 'New York, NY',
    dates: 'Aug 2019 — Jan 2021',
    bullets: ['Music.', 'Live Videos.'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Amazon Web Services',
    location: 'Herndon, VA',
    dates: 'Aug 2018 — Nov 2018',
    bullets: ['Region Services Management.', '2nd place at company hackathon.'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Facebook',
    location: 'Menlo Park, CA',
    dates: 'May 2018 — Aug 2018',
    bullets: ['Watch Parties — synchronized video playback.'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Leidos',
    location: 'Columbia, MD',
    dates: 'Jun 2017 — Aug 2017',
    bullets: [
      'Designed and built a tool using company data to help business development analysts.',
      'Built a serverless web app with AWS and Angular.js.',
      'Cut average query time by more than 2 seconds using NLP to extract content from Leidos data sources.',
    ],
  },
];

export const skills: string[] = [
  'Android',
  'iOS',
  'Swift',
  'Kotlin',
  'React',
  'JavaScript / TypeScript',
  'Node.js',
  'AWS',
  'Performance Engineering',
  'System Design',
  'NLP',
];

export const projectPlaceholders: ProjectPlaceholder[] = [
  { title: 'Project title', desc: 'One or two lines on the problem and your approach.', imageLabel: 'project screenshot' },
  { title: 'Project title', desc: 'One or two lines on the problem and your approach.', imageLabel: 'project screenshot' },
  { title: 'Project title', desc: 'One or two lines on the problem and your approach.', imageLabel: 'project screenshot' },
];

export const writingPlaceholders: WritingPlaceholder[] = [
  { title: 'Post title', desc: 'One or two lines summarizing the post.', date: 'Mon YYYY' },
  { title: 'Post title', desc: 'One or two lines summarizing the post.', date: 'Mon YYYY' },
  { title: 'Post title', desc: 'One or two lines summarizing the post.', date: 'Mon YYYY' },
];
