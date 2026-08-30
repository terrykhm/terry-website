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
    bullets: [
      "Cut Instagram Android's app-start time 1.7% (~60ms off its ~3.5s average cold start) and lifted the app's top-line user-experience score 3%, by leading app-start and navigation-latency performance for the Consumer Experience team.",
      "Served as Instagram Android's tech lead for the app-start and navigation-latency work streams for four consecutive years, setting the roadmap, defending against production regressions, and aligning goals across partner performance teams each half.",
      'Reduced Profile navigation latency 20% (~360ms off its ~1.8s average load) and improved the bad-navigation rate 4.5%, by designing and shipping a parallel API-prefetch framework used across Profile, Explore, and Feed.',
      "Corrected a company-wide app-start logging error that had been misreporting the org's UX score by 3.8%, bad app-starts by 18%, and network latency by 0.5% (~10ms off its ~2s average).",
      'Prevented a 20% regression from shipping to Shopping, by building a tail-load performance logger that was later adopted across Shopping, Explore, and Reels.',
      "Unblocked and shipped Profile Timeline — Instagram's largest GraphQL query — cutting its navigation latency 270ms initially and another 52ms in the final release, by leading the two-quarter effort to resolve the regressions that had stalled it.",
      'Defended roughly a third of a team’s half-year reliability goal on Threads, by root-causing and fixing four major video/networking regressions in 2025.',
      'Mentored engineers through promotion — including one IC3→IC4 case — and conducted 100+ technical interviews over four years, growing Instagram Android’s team and hiring pipeline.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Facebook',
    location: 'New York, NY',
    dates: 'Aug 2019 — Jan 2021',
    bullets: [
      'Shipped Live viewer and broadcaster features — Stars fan-funding, ticketing, event promotion controls — across Android and Native Templates on the Live Music Experience team.',
      "Became the sole Android engineer on [Boombox](https://techcrunch.com/2021/04/19/facebook-is-expanding-spotify-partnership-with-new-boombox-project/), Facebook's Spotify integration: architected and shipped the MVP, then led MVP2 with dark mode, a new permissions flow, and ads support. [(TechCrunch, 2021)](https://techcrunch.com/2021/04/19/facebook-is-expanding-spotify-partnership-with-new-boombox-project/)",
      'Lifted the MiniPlayer’s user funnel 50%, by re-architecting it off a Service Context that required Android’s system-level "draw over other apps" permission — the change eliminated that permission screen entirely and was validated with senior Android engineers across three teams before shipping.',
      'Promoted to Software Engineer II after exceeding expectations two half-year cycles in a row.',
    ],
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
    bullets: [
      'Shipped bi-directional audio calling for [Watch Party](https://techcrunch.com/2018/01/17/facebook-watch-party/), Facebook\'s group co-watching product — one of the first features outside Messenger to integrate its real-time-call infrastructure — building call setup, controls, and presence across Chrome RTC, PHP signaling, and React clients. [(TechCrunch, 2018)](https://techcrunch.com/2018/01/17/facebook-watch-party/)',
    ],
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
