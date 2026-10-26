export interface ExperienceSection {
  title: string;
  bullets: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
  sections?: ExperienceSection[];
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
    sections: [
      {
        title: 'Leadership',
        bullets: [
          'Led a team of eight junior-to-staff engineers to exceed goals for consecutive halves, responsible for establishing team goals, direction, projects, partnerships, and mentorship.',
          "Served as the technical domain lead for Instagram Android's app-start, navigation, and pagination latency, supporting all teams across Instagram in optimizing latency and defending against regressions.",
          'Drove adoption of performance metrics across all Instagram teams through instrumentation support, regression debugging, and training, catching regressions before launch and enabling partner-team wins.',
          'Mentored 25+ engineers and interns across technical domains, project management, and promotions (IC3→4→5).',
          'Conducted 100+ technical interviews.',
        ],
      },
      {
        title: 'App Performance',
        bullets: [
          'Built a parallel API-prefetch framework used across Profile, Explore, and Feed, cutting Profile navigation latency 20% (~360ms off a ~1.8s average load) and reducing slow navigations 4.5%.',
          "Cut Instagram Android's app-start time 1.7% (~60ms off a ~3.5s average cold start) across its global user base and lifted the app's top-line user-experience score 3%.",
          'Launched video prefetching on the Threads feed, improving first-video-render performance 6% (FVRE) and lifting time spent 0.5%.',
          'Shaped how Instagram measures speed by helping define and instrument its app-start, navigation-latency, pagination, and video-render-latency metrics, including a pagination logger that caught a 20% Shopping regression before it shipped and a logging fix that corrected the top-line user-experience score by 3.8%.',
        ],
      },
      {
        title: 'Architecture',
        bullets: [
          "Took Profile Timeline, Instagram's largest GraphQL query, from stalled to shipped by leading the two-quarter effort to resolve its regressions, cutting navigation latency 270ms.",
          'Shipped the Following/Followers GraphQL migration, cutting navigation latency 7.6% (~150ms) and reducing app crashes 0.46%.',
          'Led the Feed MVVM repository refactor as DRI alongside two engineers, isolating data sources behind a repository layer so surfaces can adopt GraphQL without product-code changes.',
          "Built a proof of concept routing GraphQL requests through Instagram's Android networking stack, defining the path for GraphQL adoption.",
        ],
      },
      {
        title: 'Reliability',
        bullets: [
          "Root-caused and fixed four major video and networking regressions on Threads in 2025, protecting roughly a third of the team's half-year reliability goal.",
          "Fixed the top four memory leaks behind out-of-memory crashes in Instagram's new single-source-of-truth data layer, and bugs that cut crashes in testing from 72% to 23%.",
          "Raised the Android team's bug-fix SLA compliance from 29% to 82% as SLA champion.",
        ],
      },
    ],
    bullets: [],
  },
  {
    role: 'Software Engineer',
    company: 'Facebook',
    location: 'New York, NY',
    dates: 'Aug 2019 — Jan 2021',
    bullets: [
      'Shipped Live viewer and broadcaster features — Stars fan-funding, ticketing, event promotion controls — across Android and Native Templates on the Live Music Experience team.',
      "Became the sole Android engineer on [Boombox](https://techcrunch.com/2021/04/19/facebook-is-expanding-spotify-partnership-with-new-boombox-project/), Facebook's Spotify integration: architected and shipped the MVP, then led MVP2 with dark mode, a new permissions flow, and ads support. [(TechCrunch, 2021)](https://techcrunch.com/2021/04/19/facebook-is-expanding-spotify-partnership-with-new-boombox-project/) [(Spotify, 2021)](https://newsroom.spotify.com/2021-04-26/share-explore-and-discover-music-and-podcasts-via-spotify-in-the-facebook-app/)",
      'Lifted the MiniPlayer’s user funnel 50%, by re-architecting it off a Service Context that required Android’s system-level "draw over other apps" permission — the change eliminated that permission screen entirely and was validated with senior Android engineers across three teams before shipping. [(Spotify, 2021)](https://newsroom.spotify.com/2021-04-26/share-explore-and-discover-music-and-podcasts-via-spotify-in-the-facebook-app/)',
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
