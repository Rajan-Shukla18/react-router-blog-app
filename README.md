# Fieldnotes — React Router Blog App

A multi-page blog application built with React and React Router as part of a Front-End Development internship task at CoreGen.

## Live Demo

_(Add your deployed Vercel/Netlify link here once deployed)_

## About This Project

Fieldnotes is a personal blog covering frontend development, AI-assisted coding, design decisions, and broader topics like space, money, and learning. It was built to demonstrate multi-page routing, dynamic content rendering, and a clean, editorial design system — not to look like a generic tutorial clone.

## Features

- Client-side routing with React Router v7 (`BrowserRouter`, `Routes`, `Route`)
- Dynamic post detail pages via `useParams()` (`/post/:id`)
- Custom 404 page for unmatched routes
- Featured post + responsive card grid layout on the homepage
- Author info, category tags, and formatted dates on every post
- Contact form with controlled inputs and submission state
- Fully responsive across mobile, tablet, and desktop breakpoints
- Custom design system: off-white background, forest green accent, Fraunces (serif) + Inter (sans) typography

## Tech Stack

- React (Vite)
- React Router DOM v7
- Plain CSS with custom design tokens (no UI framework)

## Project Structure

\`\`\`
react-router-blog-app-coregen/
├── public/
│ ├── favicon.svg
│
├── src/
│ ├── assets/
│ │ └── Rajan.png
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ │ ├── FeaturedPost.jsx
│ │ └── PostListItem.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── About.jsx
│ │ ├── Contact.jsx
│ │ ├── PostDetail.jsx
│ │ └── NotFound.jsx
│ ├── data/
│ │ └── posts.js
│ ├── utils/
│ │ └── date.js
│ ├── App.jsx
│ ├── App.css
│ ├── main.jsx
│ └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
\`\`\`

## Status

- [✔] Project scaffolded with Vite + React
- [✔] React Router installed and configured
- [✔] Route structure: `/`, `/about`, `/contact`, `/post/:id`, and catch-all 404
- [✔] Global design system — color tokens, typography, spacing
- [✔] Navbar with active-route indicator
- [✔] Home page — featured post + responsive card grid
- [✔] Dynamic post detail page
- [✔] Footer with social links
- [ ] Blog post data with real content across 7 posts
- [ ] 404 page
- [ ] About and Contact page content finalized
- [ ] Final responsive QA pass
- [ ] Deployment

## Setup

\`\`\`bash
npm install
npm run dev
\`\`\`

## What I Learned

This project helped me understand client-side routing, dynamic pages with URL parameters, and organizing a React application into reusable components.

I also learned the importance of maintaining a consistent design system, writing reusable code, and building responsive layouts that work across different screen sizes.

## Author

Rajan Shukla — [GitHub](https://github.com/Rajan-Shukla18) · [LinkedIn](https://linkedin.com/in/rajan-shukla-b02467337)
