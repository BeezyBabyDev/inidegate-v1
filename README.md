# InideGate.v1

A modern React application built with Vite, Tailwind CSS, and a comprehensive development toolchain.

## 🚀 Features

- ⚛️ **React 19** - Latest React with modern features
- ⚡ **Vite** - Lightning fast development and build tool
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧪 **Vitest** - Fast unit testing with React Testing Library
- 📏 **ESLint** - Code linting and quality checks
- 💅 **Prettier** - Code formatting
- 🐕 **Husky** - Git hooks for quality assurance
- 📦 **Component Library** - Reusable UI components
- 📱 **Responsive Design** - Mobile-first approach

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Git

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/inidegate-v1.git
   cd inidegate-v1
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

### Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Code Quality

- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Testing

- `npm test` - Run tests in watch mode
- `npm run test:ui` - Run tests with UI interface
- `npm run test:coverage` - Run tests with coverage report

### Utilities

- `npm run clean` - Clean build artifacts and cache
- `npm run type-check` - Run TypeScript type checking

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── __tests__/      # Component tests
│   ├── Button.jsx      # Button component
│   ├── Card.jsx        # Card component
│   ├── Dashboard.jsx   # Dashboard component
│   └── Navbar.jsx      # Navigation component
├── test/               # Test utilities and setup
│   └── setup.js        # Test configuration
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Component System

### Button Component

```jsx
import Button from './components/Button'

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>
<Button variant="outline">Outline</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### Card Component

```jsx
import Card from './components/Card'

;<Card>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>
```

## 🧪 Testing

Tests are written using Vitest and React Testing Library. Run tests with:

```bash
npm test                 # Watch mode
npm run test:coverage    # With coverage
npm run test:ui          # With UI interface
```

### Writing Tests

```jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Button from '../Button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
```

## 🔧 Development Workflow

### Git Hooks

Pre-commit hooks automatically run:

- ESLint (with auto-fix)
- Prettier formatting
- Type checking

### Branch Strategy

- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - Feature branches

### Commit Convention

```
feat: add new dashboard component
fix: resolve navigation bug on mobile
docs: update README with setup instructions
style: improve button hover effects
refactor: reorganize component structure
test: add unit tests for Card component
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🛠️ Configuration Files

- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `vitest.config.js` - Test configuration
- `eslint.config.js` - ESLint rules
- `.prettierrc` - Prettier formatting rules
- `.lintstagedrc.json` - Lint-staged configuration

## 📚 Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Testing**: Vitest, React Testing Library
- **Code Quality**: ESLint, Prettier, Husky
- **Build Tool**: Vite
- **Package Manager**: npm

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`npm test`)
5. Commit your changes (`git commit -m 'feat: add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ using React and Tailwind CSS
