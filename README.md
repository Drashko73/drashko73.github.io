# Personal Portfolio & Blog

This repository contains my personal portfolio and blog website, deployed using GitHub Pages.

## Features

- Responsive design using Tailwind CSS
- Portfolio showcasing projects, skills, and experience
- Blog section for articles and tutorials
- Dark/light mode support
- Static site generation with Next.js

## Local Development

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Drashko73/drashko73.github.io.git
   cd drashko73.github.io
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and visit [http://localhost:3000](http://localhost:3000)

## Deployment

This site is automatically deployed to GitHub Pages when code is pushed to the `main` branch. The deployment process is handled by GitHub Actions.

To deploy a new version:

1. Make your changes and commit them
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

## Project Structure

```
src/
├── app/               # Next.js App Router
│   ├── about/         # About page
│   ├── blog/          # Blog page and individual blog posts
│   ├── projects/      # Projects page
│   ├── layout.tsx     # Root layout with navigation and footer
│   └── page.tsx       # Home page
├── components/        # Reusable React components
├── content/           # Blog posts and project data
│   ├── blog/          # Markdown files for blog posts
│   └── projects/      # Project data files
├── lib/               # Utility functions
├── styles/            # Global styles and Tailwind config
```

## Customization

- Update personal information in the pages under `src/app/`
- Add blog posts as Markdown files in `src/content/blog/`
- Add projects in `src/content/projects/`
- Modify the design by editing the Tailwind configuration and styles

## License

[MIT](LICENSE)