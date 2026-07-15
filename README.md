# Fieldnotes — React Router Blog App

A multi-page blog application built with React and React Router as part of a Front-End Development internship task at CoreGen.

## About This Project

Fieldnotes is a personal blog covering frontend development,  design decisions, and broader topics like space, money, and learning. It was built to demonstrate multi-page routing, dynamic content rendering, and a clean, editorial design system — not to look like a generic tutorial clone.

## Features

- Client-side routing with React Router v7 (`BrowserRouter`, `Routes`, `Route`)
- Dynamic post detail pages via `useParams()` (`/post/:id`)
- Programmatic navigation via `useNavigate()` on the Contact form
- Custom 404 page for unmatched routes and invalid post IDs
- Featured post + responsive 3-column card grid on the homepage
- Mobile hamburger menu with animated toggle
- Structured post content — real paragraphs, subheadings, and lists
- Two-column About page with profile photo, stats, and bio
- Contact form with controlled inputs, validation, and post-submit redirect
- Fully responsive across mobile, tablet, and desktop breakpoints


## Tech Stack

- React (Vite)
- React Router DOM v7
- Plain CSS with custom design tokens (no UI framework)

## Project Structure

```
react-router-blog-app-coregen/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── Rajan.png
│   │   └── logo.png
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── FeaturedPost.jsx
│   │   └── PostListItem.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── PostDetail.jsx
│   │   └── NotFound.jsx
│   ├── data/
│   │   └── posts.js
│   ├── utils/
│   │   └── date.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vercel.json
├── README.md
└── vite.config.js
```

## Status

- [x] Routing — Home, About, Contact, dynamic post pages, 404
- [x] `useParams` and `useNavigate` both implemented
- [x] Design system — colors, typography, spacing
- [x] Responsive navbar with mobile menu
- [x] Home page — featured post + card grid
- [x] 7 blog posts with real, structured content
- [x] About and Contact pages complete
- [x] Deployment

## Setup

```bash
npm install
npm run dev
```

## What I Learned

Building this made client-side routing click — the URL is just another piece of state, and everything on screen reacts to it. 

I also learned how much a consistent design system (shared colors, fonts, spacing) does for making a site feel intentional rather than assembled page by page, and the value of keeping shared logic like date formatting in one place instead of repeating it.


## Author

**Rajan Shukla**

[GitHub](https://github.com/Rajan-Shukla18) · [LinkedIn](https://linkedin.com/in/rajan-shukla-b02467337)
