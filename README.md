# B. Priyanka | Personal Portfolio

> **Aspiring AI Engineer | Computer Science Undergraduate**  
> Karunya Institute of Technology and Sciences (Class of 2027) • CGPA: 8.68

A modern, responsive, and recruiter-friendly personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Designed specifically for software engineering, Artificial Intelligence, and machine learning internship applications.

---

## 🌟 Highlights & Key Features

- **Modern Dark Theme Aesthetic**: Dark slate background (`#090d16`) with subtle gradient borders, glowing accents, and typography optimized for readability.
- **Recruiter-Friendly Design**: Clear breakdown of academic standing, skills, practical projects, internships, and certifications.
- **Centralized Data File**: All personal details, project descriptions, and placeholders are managed in `src/data/portfolioData.js` for instant updates.
- **Fully Responsive**: Flawless layout across mobile phones, tablets, and desktop displays with an accessible mobile navigation drawer.
- **Smooth Navigation & Interactivity**: Smooth section scrolling, active navigation spy, interactive contact form with copy-to-clipboard functionality, and modal resume downloader.
- **Zero Broken Links**: Clean fallback states and transparent editable placeholders for repository URLs and credentials.

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   └── resume.pdf               # Place your actual resume PDF here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Responsive header with scroll spy and CTA
│   │   ├── Hero.jsx             # Hero section with intro, CTAs & code spec card
│   │   ├── About.jsx            # Background, pillars, and academic highlights
│   │   ├── Skills.jsx           # Categorized skill cards with filter tabs
│   │   ├── Projects.jsx         # Project showcase with tags, highlights & links
│   │   ├── Internships.jsx      # Work experience timeline & key deliverables
│   │   ├── Certifications.jsx   # Credentials & verification badges
│   │   ├── Education.jsx        # Academic qualifications & coursework
│   │   ├── Contact.jsx          # Interactive contact form & social channels
│   │   ├── Footer.jsx           # Clean footer with quick links & back-to-top
│   │   └── ResumeModal.jsx      # Guided resume download & preview modal
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for all data & links
│   ├── App.jsx                  # Main application orchestrator
│   ├── index.css                # Tailwind directives and custom utility styles
│   └── main.jsx                 # Vite application entry point
├── index.html                   # HTML metadata, OpenGraph tags & web fonts
├── package.json                 # Project dependencies & scripts
├── tailwind.config.js           # Custom colors, glows, and animations
└── vite.config.js               # Vite build configuration
```

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) & [Fira Code](https://fonts.google.com/specimen/Fira+Code)

---

## 🚀 Getting Started Locally

### 1. Prerequisites
Ensure you have **Node.js** (v18 or newer) and **npm** installed on your computer.

### 2. Installation
Open your terminal inside the `portfolio` folder and install dependencies:
```bash
npm install
```

### 3. Run Development Server
Start the local development server:
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to preview the website.

### 4. Build for Production
To create an optimized production build:
```bash
npm run build
```
The compiled static assets will be located in the `dist/` directory.

---

## ✏️ How to Customize Your Details

Open `src/data/portfolioData.js` to customize any information:

1. **Personal Information & Links**:
   ```javascript
   export const personalInfo = {
     name: "B. Priyanka",
     email: "your-email@gmail.com", // EDIT HERE
     github: "https://github.com/your-username", // EDIT HERE
     linkedin: "https://linkedin.com/in/your-profile", // EDIT HERE
     resumePath: "/resume.pdf"
   };
   ```

2. **Resume File**:
   - Place your latest PDF resume in the `public/` directory and name it `resume.pdf`.

3. **Project Links**:
   - Update `githubUrl` and `demoUrl` fields inside the `projects` array in `portfolioData.js`.

---

## 🌐 Deployment Guide

### Deploying to GitHub & Vercel (Recommended)

#### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click the **+** icon in the top right and select **New repository**.
3. Name your repository (e.g., `priyanka-portfolio` or `ai-portfolio`).
4. Set visibility to **Public** and leave "Add a README" unchecked.
5. Click **Create repository**.

#### Step 2: Push Your Local Code to GitHub
Open your terminal in the `portfolio` folder and run:
```bash
git add .
git commit -m "Initial commit: B. Priyanka AI Engineer Portfolio"
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
git branch -M main
git push -u origin main
```

#### Step 3: Deploy to Vercel (1-Click & Free)
1. Go to [Vercel](https://vercel.com) and sign in with your GitHub account.
2. Click **Add New...** -> **Project**.
3. Find your repository (`priyanka-portfolio`) and click **Import**.
4. In the configuration:
   - **Framework Preset**: Vite (automatically detected)
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.
6. Within 30 seconds, Vercel will provide your live URL (e.g., `https://priyanka-portfolio.vercel.app`).

---

## 📄 License

This project is open-source and free to use as a portfolio template.
