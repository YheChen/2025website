export type Project = {
  title: string;
  description: string;
  tech: string[];
  imgAlt: string;
  imgSrc: string;
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "TorontoGuessr",
    description:
      "Street View geolocation game that tests your knowledge of downtown Toronto, averaging 300 monthly players across 2,000+ playable locations.",
    tech: ["TypeScript", "Next.js", "Tailwind", "Supabase", "Google Maps API"],
    imgAlt: "TorontoGuessr",
    imgSrc: "/projects/TorontoGuessrThumbnail.webp",
    github: "https://github.com/YheChen/TorontoGuessr",
    demo: "https://torontoguessr.ca/",
  },
  {
    title: "NovaOS",
    description:
      "Browser-based operating-systems lab that compiles a toy language through a real toolchain and lets you time-travel through CPU, memory, and syscalls.",
    tech: ["TypeScript", "Turborepo", "Vitest", "Playwright"],
    imgAlt: "NovaOS",
    imgSrc: "/projects/NovaOSThumbnail.webp",
    github: "https://github.com/YheChen/NovaOS",
    demo: "https://nova-os-lab.vercel.app/",
  },
  {
    title: "ChenDB",
    description:
      "Relational database engine written from scratch in Python: pages, B+ trees, a cost-based planner, WAL recovery, and MVCC, with a visual explorer that shows the engine working as it runs.",
    tech: ["Python", "TypeScript", "React", "Pyodide", "WebAssembly"],
    imgAlt: "ChenDB visual database explorer",
    imgSrc: "/projects/ChenDBThumbnail.webp",
    github: "https://github.com/YheChen/ChenDB",
    demo: "https://chen-db.vercel.app",
  },
  {
    title: "FPS Engine",
    description:
      "Custom C++23 game engine and the online multiplayer shooter built on it, with an authoritative dedicated server, client-side prediction, snapshot interpolation, and lag compensation.",
    tech: ["C++", "CMake", "WebAssembly", "Catch2"],
    imgAlt: "FPS Engine multiplayer arena",
    imgSrc: "/projects/FPSThumbnail.webp",
    github: "https://github.com/YheChen/FPS",
    demo: "https://fps.yanzhenchen.ca/",
  },
  {
    title: "CMemoryViz",
    description:
      "Browser-based visualizer for C memory: write C and step through execution while the stack, heap, and pointer arrows build up, with breakpoints and an exam mode for practice.",
    tech: ["TypeScript", "React", "Vite", "Monaco"],
    imgAlt: "CMemoryViz memory diagram",
    imgSrc: "/projects/CMemoryVizThumbnail.webp",
    github: "https://github.com/YheChen/CMemoryViz",
    demo: "https://c-memory-viz.vercel.app",
  },
  {
    title: "LeetCord",
    description:
      "Discord bot for LeetCode communities with linking, daily tracking, streaks, and leaderboards.",
    tech: ["TypeScript", "Discord.js", "Prisma", "PostgreSQL"],
    imgAlt: "LeetCord",
    imgSrc: "/projects/LeetCordThumbnail.webp",
    github: "https://github.com/YheChen/LeetCord",
  },
  {
    title: "Job Bot",
    description:
      "Discord bot that discovers software engineering internships across Ashby, Greenhouse, Lever, and Workday, then de-duplicates, scores, and posts them as rich embeds.",
    tech: ["Python", "discord.py", "SQLAlchemy", "PostgreSQL", "Docker"],
    imgAlt: "Job Bot",
    imgSrc: "/projects/placeholder-project.svg",
    github: "https://github.com/YheChen/Job-Bot",
  },
  {
    title: "PokéScale",
    description:
      "Browser game about scale: resize one Pokémon until it looks the right size beside a reference. All 1,025 species, five rounds, fully static with no backend.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind", "Vitest"],
    imgAlt: "PokéScale scale-guessing game",
    imgSrc: "/projects/PokeScaleThumbnail.webp",
    github: "https://github.com/YheChen/PokemonSize",
    demo: "https://pokescale.vercel.app/",
  },
  {
    title: "Gridwright",
    description:
      "Daily logic and word puzzle platform with four games, procedurally generated boards verified by a solver, seeded daily challenges, and full offline play.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind", "Zustand"],
    imgAlt: "Gridwright puzzle platform",
    imgSrc: "/projects/GridwrightThumbnail.webp",
    github: "https://github.com/YheChen/LinkedinPractice",
    demo: "https://linkedin-games-tryhard.vercel.app/",
  },
  {
    title: "Train in a Snap",
    description:
      "Immersive AR safety training prototype with real-time voice guidance.",
    tech: ["Python", "TypeScript", "Flask", "Snap3D", "Vapi Voice AI"],
    imgAlt: "Train in a Snap",
    imgSrc: "/projects/TrainInASnapThumbnail.webp",
    github: "https://github.com/krishh-p/train-in-a-snap",
  },
  {
    title: "Wordle Solver",
    description:
      "Information-theory Wordle solver that recommends the highest-entropy next guess, with a Next.js UI and FastAPI backend.",
    tech: ["Next.js", "TypeScript", "FastAPI", "Python", "NumPy"],
    imgAlt: "Wordle Solver",
    imgSrc: "/projects/WordleSolverThumbnail.webp",
    github: "https://github.com/YheChen/WordleSolver",
    demo: "https://wordle-solver-chen.vercel.app/",
  },
  {
    title: "EyeTrack Ad Demo",
    description:
      "A demo ad that only plays while you're looking at it, using in-browser MediaPipe gaze tracking that never leaves the device.",
    tech: ["React", "TypeScript", "Vite", "MediaPipe", "Tailwind"],
    imgAlt: "EyeTrack Ad Demo",
    imgSrc: "/projects/EyeTrackerThumbnail.webp",
    github: "https://github.com/YheChen/UnethicalAdEyeTracker",
    demo: "https://unethical-ad-eye-tracker.vercel.app/",
  },
  {
    title: "TorontoEats",
    description:
      "A personal map of every restaurant I've eaten at in Toronto, with ratings, cuisine filters, and 2D and 3D map views.",
    tech: ["Next.js", "TypeScript", "Tailwind", "MapLibre", "Zustand"],
    imgAlt: "TorontoEats restaurant map",
    imgSrc: "/projects/TorontoEatsThumbnail.webp",
    github: "https://github.com/YheChen/RestaurantBlog",
    demo: "https://food.yanzhenchen.ca",
  },
  {
    title: "Columns",
    description:
      "Browser remake of a MIPS assembly Columns puzzle game, reimplemented natively in TypeScript on Canvas.",
    tech: ["TypeScript", "Vite", "Canvas", "Tone.js"],
    imgAlt: "Columns",
    imgSrc: "/projects/ColumnsThumbnail.webp",
    github: "https://github.com/YheChen/Columns",
    demo: "https://columns-258.vercel.app/",
  },
  {
    title: "Indoor Outdoor Classifier",
    description:
      "Flask web app that classifies indoor and outdoor images using a custom-trained CNN with 85% validation accuracy.",
    tech: ["Pytorch", "Flask", "Matplotlib", "scikit-learn"],
    imgAlt: "Indoor Outdoor Classifier",
    imgSrc: "/projects/IndoorDetectorThumbnail.webp",
    github: "https://github.com/YheChen/IndoorDetector",
  },
  {
    title: "GuessUp",
    description: "Mobile charades game with custom prompts",
    tech: ["React Native", "TypeScript"],
    imgAlt: "GuessUp",
    imgSrc: "/projects/GuessUpThumbnail.webp",
    github: "https://github.com/YheChen/GuessUp",
  },
  {
    title: "CSSU Website",
    description: "Website representing over 5000 CS students at UofT",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    imgAlt: "CSSU Website",
    imgSrc: "/projects/CSSUSiteThumbnail.webp",
    github: "https://github.com/cssu/cssu.ca",
    demo: "https://www.cssu.ca",
  },
  {
    title: "Gyroscopic Authenticator",
    description: "Phone tilt-based authentication system",
    tech: ["Next.js", "React Native", "Firebase"],
    imgAlt: "Gyroscopic Authenticator",
    imgSrc: "/projects/TiltAuthThumbnail.webp",
    github: "https://github.com/YheChen/UofTHacks12",
  },
  {
    title: "Movie Review Platform",
    description: "Java-based movie review system with MongoDB",
    tech: ["Java", "JavaSwing", "MongoDB"],
    imgAlt: "Movie Review Platform",
    imgSrc: "/projects/IMDBRipOffThumbnail.webp",
    github: "https://github.com/YheChen/IMDBRipOff",
  },
  {
    title: "Player Profile Analyzer",
    description: "Game performance metrics analysis tool for League of Legends",
    tech: ["Next.js", "React.js", "TypeScript"],
    imgAlt: "Player Profile Analyzer",
    imgSrc: "/projects/OPGGThumbnail.webp",
    github: "https://github.com/YheChen/leagueplayertrackerv2",
  },
  {
    title: "Health Record Summarizer",
    description: "AI-powered medical record analysis tool",
    tech: ["React.js", "Python"],
    imgAlt: "Health Record Summarizer",
    imgSrc: "/projects/MedEasyThumbnail.webp",
    github: "https://github.com/gr125/treehacks24",
  },
  {
    title: "Pokedex Web App",
    description: "React-based Pokemon database",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    imgAlt: "Pokedex Web App",
    imgSrc: "/projects/PokedexThumbnail.webp",
    github: "https://github.com/YheChen/pokedex",
    demo: "https://pokedex-yhechen.vercel.app/",
  },
  {
    title: "Todo List",
    description: "Simple task management app",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    imgAlt: "Todo List",
    imgSrc: "/projects/TodoListThumbnail.webp",
    github: "https://github.com/YheChen/chentodo",
    demo: "https://chentodo.vercel.app/",
  },
  {
    title: "Grade Calculator",
    description: "Calculator for course grades that supports multiple courses",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    imgAlt: "Grade Calculator",
    imgSrc: "/projects/GradeCalculatorThumbnail.webp",
    github: "https://github.com/YheChen/GradeCalculator",
    demo: "https://multi-grade-calculator.vercel.app/",
  },
  {
    title: "Job Application Helper",
    description: "Quick copy paste job application tool",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    imgAlt: "Job Copy Paste Helper",
    imgSrc: "/projects/JobAppThumbnail.webp",
    github: "https://github.com/YheChen/Job-Application-Copy-Paste",
    demo: "https://job-application-copy-paste.vercel.app/",
  },
  {
    title: "Exam Timer",
    description: "Live countdown for upcoming tests",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    imgAlt: "ExamCountdown",
    imgSrc: "/projects/ExamCountdownThumbnail.webp",
    github: "https://github.com/YheChen/ExamCountdown",
    demo: "https://examcount-down.vercel.app/",
  },
  {
    title: "Graphing Calculator",
    description: "Online graphing calculator",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    imgAlt: "Graphing Calculator",
    imgSrc: "/projects/GraphingCalcThumbnail.webp",
    github: "https://github.com/YheChen/GraphingCalculator",
    demo: "https://yz-graphing-calculator-app.vercel.app/",
  },
  {
    title: "Guess Who Game",
    description: "Fun guessing game with friends",
    tech: ["Next.js", "JavaScript", "Tailwind"],
    imgAlt: "Guess Who Game",
    imgSrc: "/projects/GuessWhoThumbnail.webp",
    github: "https://github.com/YheChen/GuessWho",
    demo: "https://cssuguesswho.vercel.app",
  },
];

export const hiddenProjectTitles = new Set<string>([
  "Health Record Summarizer",
  "Job Application Helper",
  "Graphing Calculator",
  "Exam Timer",
]);

export function ensureHttps(url: string): string {
  return url.startsWith("http") ? url : `https://${url}`;
}

export const visibleProjects = projects.filter(
  (project) => !hiddenProjectTitles.has(project.title)
);
