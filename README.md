# FixMate Profile

![Project Preview](./public/assets/images/preview.png)

A modern personal portfolio website built with React and Tailwind CSS, showcasing projects, skills, and contact information.

## 🚀 Features

- Responsive design (mobile-first)
- Dark/light mode toggle
- Animated sections with Framer Motion
- Interactive contact form
- Project filtering system
- Smooth scrolling navigation
- Performance optimized

## 🛠️ Technologies

- React 18
- Tailwind CSS 3
- Framer Motion (animations)
- React Icons
- Formik + Yup (form handling)
- React Router (navigation)

## 📦 Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
git clone https://github.com/boaz-marube/fixmate-profile.git
2. Navigate to project directory:
cd fixmate-profile
3. Install dependencies:
npm install
# or
yarn install
4. Start development server:
npm run dev
# or
yarn dev

### Project Structure
fixmate-profile/
├── public/                  # Static assets
│   ├── assets/
│   │   ├── images/          # Optimized images
│   │   ├── fonts/           # Custom fonts
│   │   └── icons/           # SVG icons
│   └── index.html
│
├── src/
│   ├── components/          # Reusable components
│   │   ├── common/         # UI components (Buttons, Cards)
│   │   ├── layout/         # Layout components
│   │   └── sections/       # Page sections
│   │
│   ├── context/            # React contexts
│   ├── data/               # Static data
│   ├── hooks/              # Custom hooks
│   ├── pages/              # Page components
│   ├── styles/             # Global styles
│   ├── utils/              # Utility functions
│   ├── App.jsx             # Main component
│   └── main.jsx            # Entry point
│
├── .eslintrc.json          # ESLint config
├── .prettierrc             # Prettier config
├── tailwind.config.js      # Tailwind config
├── postcss.config.js       # PostCSS config
├── vite.config.js          # Vite config
└── package.json