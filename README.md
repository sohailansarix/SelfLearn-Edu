# SelfLearn Edu

Modern, responsive educational website for **Class 6-12** and **competitive exams** (JEE, NEET, UPSC, SSC). Built with vanilla HTML, CSS, and JavaScript for fast loading and easy deployment on GitHub Pages.

## Features

✅ **Progressive Learning**: Structured curriculum for Class 6-10, Boards, and competitive exams
✅ **Responsive Design**: Mobile-first, works on all devices
✅ **Dark/Light Mode**: Toggle theme with localStorage persistence
✅ **Progress Tracking**: Track completed lessons in browser storage
✅ **Quizzes & Exercises**: Interactive assessments for each topic
✅ **Fast Loading**: Pure HTML/CSS/JS, no frameworks
✅ **Accessible**: WCAG 2.1 compliant semantics
✅ **GitHub Pages Ready**: Deploy in minutes
✅ **Open-Source**: MIT licensed, community-driven
✅ **SEO Optimized**: Meta tags, semantic HTML

## Project Structure

```
SelfLearn-Edu/
├── _config.yml              # Jekyll configuration for GitHub Pages
├── index.html               # Homepage with hero & CTAs
├── curriculum.html          # Learning tracks (Class 6-10, JEE, NEET, UPSC, SSC)
├── lessons/
│   ├── index.html           # Lesson list
│   └── lesson-*.html        # Individual lessons (expandable)
├── exercises/
│   ├── index.html
│   └── exercise-*.html
├── quizzes/
│   ├── index.html
│   └── quiz-*.html
├── assets/
│   ├── css/
│   │   ├── base.css         # Colors, typography, reset
│   │   ├── layout.css       # Header, nav, footer, responsive
│   │   ├── components.css   # Buttons, cards, badges
│   │   └── theme.css        # Dark mode overrides
│   ├── js/
│   │   ├── theme-toggle.js      # Dark/light mode
│   │   ├── progress.js          # Progress tracking
│   │   ├── search.js            # Client-side search
│   │   └── analytics.js         # Privacy-friendly analytics
│   └── img/                 # Logos, icons
├── content/
│   ├── lessons/             # Markdown lesson source
│   ├── exercises/
│   ├── quizzes/
│   └── resources.md
├── downloads/               # PDFs, worksheets
├── docs/
│   ├── CONTRIBUTING.md      # How to contribute lessons
│   ├── content-structure.md # Naming conventions
│   └── deployment.md        # Deployment guide
└── README.md                # This file
```

## Color Palette (Minimal)

**Light Mode:**
- Background: `#ffffff`
- Text: `#111827` (near-black)
- Accent: `#2563eb` (blue)
- Muted: `#6b7280` (gray)

**Dark Mode:**
- Background: `#0b1120` (near-black)
- Text: `#e5e7eb` (light gray)
- Accent: `#38bdf8` (cyan)
- Muted: `#9ca3af`

High contrast for readability, minimal palette for focus on content.

## Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/sohailansarix/SelfLearn-Edu.git
   cd SelfLearn-Edu
   ```

2. **Serve locally**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Or with Ruby
   ruby -run -ehttpd . -p8000
   ```

3. **Open browser**
   Navigate to `http://localhost:8000`

### Customization

- **Edit `_config.yml`** to change site title, baseurl, and Jekyll settings
- **Update `index.html`** to personalize the homepage
- **Modify `assets/css/base.css`** color variables for branding
- **Add lessons** in `lessons/` following the template structure

## Deployment to GitHub Pages

1. **Fork or create new repo** named `SelfLearn-Edu` under your GitHub account

2. **Push code**
   ```bash
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to repo → Settings → Pages
   - Select "Deploy from a branch"
   - Choose `main` branch
   - Save

4. **Site goes live** at `https://yourusername.github.io/SelfLearn-Edu`

5. **Update baseurl** in `_config.yml`:
   ```yaml
   baseurl: "/SelfLearn-Edu"
   url: "https://yourusername.github.io"
   ```

## Features in Detail

### Dark/Light Mode Toggle
- Click moon 🌙 icon in header to switch
- Preference saved in `localStorage`
- Respects system preference on first visit

### Progress Tracking
- Click "Mark as Completed" on lesson pages
- Progress stored in browser's `localStorage`
- No backend required, privacy-first

### Client-Side Search
- Type in search bar to filter lessons
- Searches by title, tags, and description
- Results appear instantly

### Mobile Responsiveness
- Flexbox/Grid layouts
- Touch-friendly buttons & links
- Readable font sizes on small screens

## Creating Lessons

### HTML Template
```html
<article class="lesson" data-lesson-id="lesson-x">
  <header>
    <p class="lesson-tag">Module 1 • Foundations</p>
    <h1>Lesson Title</h1>
    <p class="lesson-meta">Estimated time: 20 min • Level: Beginner</p>
  </header>
  
  <section>
    <h2>Content here...</h2>
  </section>
  
  <section>
    <button class="btn" onclick="markLessonCompleted('lesson-x')">Mark Completed</button>
  </section>
</article>
```

## Contributing

Contributions welcome! See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines on:
- Adding new lessons
- Creating quizzes & exercises
- Improving design/UX
- Reporting bugs

## Analytics

- No tracking cookies
- Privacy-respecting analytics optional via Plausible or Fathom
- Can be enabled in `_config.yml`

## SEO & Accessibility

- Semantic HTML5 (`<header>`, `<main>`, `<article>`)
- Proper heading hierarchy
- ARIA labels for buttons & forms
- Meta descriptions on all pages
- Fast Core Web Vitals scores

## Roadmap

- [ ] Interactive code editor for programming lessons
- [ ] Spaced repetition for quizzes
- [ ] Community forums / discussion board
- [ ] Mobile app version (React Native)
- [ ] Teacher dashboard for class management
- [ ] Gamification (badges, leaderboard)

## License

MIT License - feel free to use, modify, and distribute.

## Support

Have questions? Open an issue on GitHub or email the maintainer.

---

**Made for self-learners, by self-learners.** 📚
