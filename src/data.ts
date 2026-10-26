export interface ExperienceSection {
  title: string;
  bullets: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  dates: string;
  summary?: string;
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
    summary:
      "Team lead responsible for the performance and architecture of Instagram's mobile app, with impact across Instagram, Threads, and Facebook.",
    sections: [
      {
        title: 'Leadership',
        bullets: [
          'Led eight junior-to-staff engineers to exceed goals for consecutive halves, setting direction, projects, and partnerships that increased revenue and user engagement.',
          'Mentored 25+ engineers and interns through promotions (IC3→4→5) and conducted 100+ technical interviews.',
        ],
      },
      {
        title: 'App Performance',
        bullets: [
          "Defined Instagram's app-start, navigation, pagination, and video-render latency metrics and drove their adoption across all teams, catching regressions before launch and enabling partner-team wins.",
          'Built an API-prefetching framework used across Profile, Explore, and Feed, cutting Profile navigation latency 20% (~360ms), improving app start, engagement, and revenue, and eliminating wasteful fetches.',
          'Cut app-start time 1.7% (~60ms off a ~3.5s cold start) and built a start-up job coordinator that orchestrates launch-time jobs and code for performance and engagement.',
          'Reduced video render latency by optimizing video codec and caching strategies.',
        ],
      },
      {
        title: 'Architecture',
        bullets: [
          "Rearchitected Instagram Android's networking stack to bridge its legacy Java HTTP library and native C++ GraphQL library.",
          "Led Instagram Android's GraphQL adoption: shipped Profile Timeline, its largest query, after it stalled (-270ms navigation latency), plus Following/Followers (-150ms) and the Feed MVVM repository refactor.",
        ],
      },
      {
        title: 'Reliability',
        bullets: [
          "Fixed the top memory leaks behind out-of-memory crashes, root-caused four major Threads regressions, and raised the team's bug-fix SLA compliance from 29% to 82%.",
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
    summary: 'Android engineer on Facebook Music and Live; promoted to Software Engineer II.',
    bullets: [
      "Sole Android engineer on [Boombox](https://techcrunch.com/2021/04/19/facebook-is-expanding-spotify-partnership-with-new-boombox-project/), Facebook's Spotify integration: architected and shipped the MVP, then led MVP2 with dark mode, a new permissions flow, and ads. [(Spotify, 2021)](https://newsroom.spotify.com/2021-04-26/share-explore-and-discover-music-and-podcasts-via-spotify-in-the-facebook-app/)",
      'Lifted the MiniPlayer’s user funnel 50% by re-architecting it to eliminate a system "draw over other apps" permission screen.',
      'Shipped Live viewer and broadcaster features (Stars fan-funding, ticketing, event promotion) across Android and Native Templates.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Amazon Web Services',
    location: 'Herndon, VA',
    dates: 'Aug 2018 — Nov 2018',
    bullets: ['Worked on Region Services Management and placed 2nd at the company hackathon.'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Facebook',
    location: 'Menlo Park, CA',
    dates: 'May 2018 — Aug 2018',
    bullets: [
      "Shipped bi-directional audio calling for [Watch Party](https://techcrunch.com/2018/01/17/facebook-watch-party/), one of the first features outside Messenger to use Facebook's real-time-call infrastructure.",
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Leidos',
    location: 'Columbia, MD',
    dates: 'Jun 2017 — Aug 2017',
    bullets: [
      'Built a serverless web app (AWS, Angular.js) using company data to help business development analysts.',
      'Cut average query time by more than 2 seconds using NLP to extract content from company data sources.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Center for Advanced Transportation Technologies Lab',
    location: 'College Park, MD',
    dates: 'Jan 2016 — Aug 2016',
    bullets: [
      'Built database applications (Spring, PostgreSQL, Hibernate) to ingest hundreds of gigabytes of nationwide traffic data daily.',
      'Reduced load and fetch times through concurrency and code simplification, and built D3 web apps to visualize traffic data for clients.',
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
