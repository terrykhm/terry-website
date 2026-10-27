export type Bullet = string | { text: string; sub: string[] };

export interface ExperienceSection {
  title: string;
  bullets: Bullet[];
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
      "Tech lead responsible for the performance and architecture of Instagram's mobile app, with impact across Instagram, Threads, and Facebook, concentrating on client networking infrastructure, video playback, and reliability.",
    sections: [
      {
        title: 'App Performance & Reliability',
        bullets: [
          {
            text: 'Architected and oversaw critical frameworks responsible for network orchestration, HTTP/3, caching, prefetching, app-start initializations, and client background tasks.',
            sub: [
              'Saved the company millions by eliminating unnecessary gCPU usage.',
              'Built an easy-to-integrate API prefetching framework that was adopted across all major products on Instagram. Key highlights include a 20% reduction in navigation latency (360ms) to user profiles.',
              'Reduced cold app-start times by over 3%.',
            ],
          },
          {
            text: 'Established newly defined app-start, navigation latency, and pagination performance metrics and enforced them across all teams in Instagram.',
            sub: [
              'Diagnosed regressions in production and pre-release that degraded or broke user experiences.',
              'Provided consulting for major launches and new product features to build performant experiences.',
            ],
          },
          {
            text: 'Owner and front-line defender of video performance issues on Instagram and Threads.',
            sub: [
              'Reduced video render latency by over 15% by orchestrating requests.',
              'Implemented new video caching infrastructure to reduce cache misses.',
              'Optimized HTTP/3 prioritization strategies for video playback.',
            ],
          },
          {
            text: 'Drove down user-reported video bugs on Instagram and Threads by 10%.',
            sub: ['Built AI-driven pipelines to analyze and root-cause bugs.'],
          },
        ],
      },
      {
        title: 'Architecture',
        bullets: [
          "Rearchitected Instagram Android's core networking stack to bridge its legacy Java HTTP library and native C++ GraphQL library.",
          'Migrated thousands of files from mutable to immutable data flows to adopt GraphQL.',
          'Successfully migrated popular Instagram surfaces to GraphQL, resulting in 150-270ms navigation latency improvements.',
          'Drove efforts to adopt MVVM across major surfaces on Instagram.',
        ],
      },
      {
        title: 'Leadership',
        bullets: [
          'Increased revenue by millions of dollars and boosted user engagement as team lead of eight junior-to-staff engineers, exceeding goals for consecutive halves while setting direction, projects, and partnerships.',
          'Mentored 25+ engineers and interns through promotions (IC3→4→5) and conducted 100+ technical interviews.',
          'Championed numerous better-engineering efforts around reliability, architecture, code quality, and bugs for teams and orgs.',
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
    summary: 'Android engineer on Facebook Music and Live.',
    bullets: [
      "Android engineer lead of [Boombox](https://techcrunch.com/2021/04/19/facebook-is-expanding-spotify-partnership-with-new-boombox-project/), a new 0-1 initiative collaboration between Facebook and Spotify.",
      'Worked with Spotify engineers to adopt new SDKs to integrate Spotify playback into the Facebook app and launched to select countries ([Spotify, 2021](https://newsroom.spotify.com/2021-04-26/share-explore-and-discover-music-and-podcasts-via-spotify-in-the-facebook-app/)).',
      "Reduced onboarding drop-off by 50% by re-architecting Facebook's video mini-player to eliminate a system permission prompt.",
      'Implemented Facebook Live donation features for streamers.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Amazon Web Services',
    location: 'Herndon, VA',
    dates: 'Aug 2018 — Nov 2018',
    bullets: [
      'Implemented a new config system to manage AWS region services.',
      'Placed 2nd at the company hackathon by creating an AI-powered meeting transcription and summarization tool.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Facebook',
    location: 'Menlo Park, CA',
    dates: 'May 2018 — Aug 2018',
    bullets: [
      "Designed and tested group audio calling for [Watch Party](https://techcrunch.com/2018/01/17/facebook-watch-party/), letting friends talk while watching videos together, by extending Messenger's real-time calling infrastructure, a foundation later reused for [Messenger Rooms](https://about.fb.com/news/2020/04/introducing-messenger-rooms/).",
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
      'Built database applications (Spring, PostgreSQL, Hibernate) to daily ingest hundreds of gigabytes of nationwide traffic data.',
      'Reduced load and fetch times through concurrency and code simplification, and built D3 web apps to visualize traffic data for clients.',
    ],
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { label: 'Languages', items: ['Java', 'Kotlin', 'C++', 'Python', 'TypeScript', 'Swift', 'Haskell'] },
  { label: 'Platforms', items: ['Android', 'iOS', 'Web (React)', 'AWS'] },
  { label: 'Architecture', items: ['MVVM', 'GraphQL', 'System Design'] },
  { label: 'Performance & Networking', items: ['Client Networking', 'HTTP/3', 'Latency Optimization', 'Reliability'] },
  { label: 'AI', items: ['LLM Applications', 'Agents & Tool Use', 'MCP', 'Prompt Engineering'] },
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
