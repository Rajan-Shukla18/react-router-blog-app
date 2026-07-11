import rajanPhoto from "../assets/Rajan.png";

const posts = [
  {
    id: "vibe-coding-vs-actually-learning-to-code",
    title: "Vibe coding is fine, until it isn't",
    excerpt: "AI tools can write your routes for you. They can't debug your understanding of why they broke.",
    category: "AI & Dev Tools",
    image: "https://picsum.photos/id/180/1200/800",
    author: "Rajan Shukla",
    authorAvatar: rajanPhoto,
    date: "2026-07-09",
    readTime: "5 min read",
    body: [
      "Write 3-5 paragraphs here — your real take on AI coding tools, using your own experience with platforms like emergent.sh and Antigravity as the concrete example, not just theory.",
      "A good angle: what AI tools are genuinely good at speeding up, versus what still requires you to understand the code yourself.",
    ],
  },

{
    id: "clean-ui-over-clever-ui",
    title: "Why clean UI still wins in 2026",
    excerpt: "The best interfaces are rarely the ones you even notice. That's the whole point.",
    category: "Design",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=1200&q=80&auto=format&fit=crop",
    author: "Rajan Shukla",
    authorAvatar: rajanPhoto,
    date: "2026-06-24",
    readTime: "4 min read",
    body: [
      "Write your own take here.",
    ],
  },

  {
    id: "why-most-portfolios-get-five-seconds",
    title: "Why most developer portfolios get five seconds, and how to earn more",
    excerpt: "Recruiters don't read your README. They scan it. Here's what actually stops the scroll.",
    category: "Career",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
    author: "Rajan Shukla",
    authorAvatar: rajanPhoto,
    date: "2026-07-02",
    readTime: "4 min read",
    body: [
      "Write your own take here — you can draw on the research we discussed earlier about attention spans and what separates a memorable README from a generic one.",
    ],
  },


  {
  id: "why-developers-are-ditching-webpack-for-vite",
  title: "Why developers are quietly ditching Webpack for Vite",
  excerpt: "It's not hype. It's the difference between waiting and not waiting.",
  category: "Tooling",
  image: "https://picsum.photos/id/119/1200/800",
  author: "Rajan Shukla",
  authorAvatar: rajanPhoto,
  date: "2026-06-18",
  readTime: "4 min read",
  body: [
    "I didn't think much about my build tool until I built this exact project with Vite and felt how fast the dev server actually starts. No long wait, no bundling delay — just an instant reload every time I saved a file.",
    "Webpack isn't a bad tool. It's just solving a problem from a different era of the web, when bundling everything upfront made sense. Vite instead serves your code natively over ES modules during development, and only bundles for production — so you get near-instant startup regardless of project size.",
    "The developer sentiment shift backs this up too — most conversations among frontend developers point toward near-universal satisfaction with Vite, versus real frustration with Webpack's slower iteration loop.",
    "For a project like this one, it wasn't a hard choice. Fast feedback loops matter more than people give them credit for, especially when you're the one waiting on every save.",
  ],
},


{
  id: "the-boring-way-people-actually-save-money",
  title: "The boring way people actually end up saving money",
  excerpt: "No hacks, no apps. Just moving the decision somewhere you can't undo it easily.",
  category: "Money",
  image: "https://picsum.photos/id/26/1200/800",
  author: "Rajan Shukla",
  authorAvatar: rajanPhoto,
  date: "2026-05-28",
  readTime: "4 min read",
  body: [
    "Most advice about saving money assumes the problem is information — that if you just knew the right budgeting method, you'd stick to it. In practice, the people who consistently save aren't the ones with the best spreadsheet. They're the ones who never see the money in the first place.",
    "Automatic transfers on payday, before you look at the balance, do more than any amount of willpower. Not because the psychology is complicated, but because it removes a daily decision entirely. You can't spend what already left the account.",
    "The uncomfortable part is that this works precisely because it's boring. It doesn't feel like progress in the moment — no dashboard, no visible win. Just a number quietly growing somewhere you stopped checking.",
    "Most systems that actually work, in money or in code, share this trait: they don't rely on you making the right choice repeatedly. They make the wrong choice harder to reach.",
  ],
},


{
  id: "why-cramming-feels-productive-and-rarely-is",
  title: "Why cramming feels productive and rarely is",
  excerpt: "Your brain rewards the feeling of learning fast. It doesn't reward what actually sticks.",
  category: "Learning",
  image: "https://picsum.photos/id/24/1200/800",
  author: "Rajan Shukla",
  authorAvatar: rajanPhoto,
  date: "2026-05-14",
  readTime: "5 min read",
  body: [
    "There's a well-documented gap between how confident cramming makes you feel and how much you actually retain a week later. Re-reading notes feels productive because recognition is easy — you see the material and it feels familiar, so your brain files it as 'known.' Recall is a different skill entirely, and it's the one that actually matters.",
    "Spaced repetition works because it deliberately makes recall harder, closer to the moment you're about to forget. That discomfort is the signal that learning is happening — not a sign you're doing it wrong.",
    "This maps directly onto learning to code, too. Watching a tutorial feels like progress because you're following along and everything makes sense in the moment. Building the same thing from a blank file a week later, with no reference open, is where you find out what you actually learned.",
    "The uncomfortable version of studying is usually the one that works. The comfortable version just feels like it does.",
  ],
},

{
  id: "angular-vs-react-which-javascript-framework-is-right-for-you",
  title: "Angular vs React: Which JavaScript Framework is Right for You?",
  excerpt: "Angular and React are two of the most popular JavaScript technologies for building modern web applications, but they solve problems in different ways.",
  category: "React",
  image: "https://picsum.photos/id/0/1200/800",
  author: "Rajan Shukla",
  authorAvatar: rajanPhoto,
  date: "2026-07-11",
  readTime: "5 min read",
  body: [
    "Angular and React are two of the most widely used technologies in modern frontend development. Both power applications used by millions of people every day.",
    "React focuses on building user interfaces through reusable components and gives developers the flexibility to choose their own tools and architecture.",
    "Angular, on the other hand, provides a complete framework with routing, forms, dependency injection, and state management built into the ecosystem.",
    "For smaller projects and startups, React often offers faster development and greater flexibility. For large enterprise applications, Angular's structure and conventions can improve consistency across teams.",
    "There isn't a universal winner. The right choice depends on project requirements, team experience, scalability needs, and long-term maintenance considerations."
  ],
},

];


export default posts;