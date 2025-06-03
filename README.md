# GitHub User Repository Explorer

A Next.js application that allows users to explore GitHub user profiles and their repositories. Built with modern web technologies and a clean, responsive design.

## Features

- Search for GitHub users
- View user profile information
- Browse user repositories
- Responsive design for all devices

## Tech Stack

- [Next.js](https://nextjs.org) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [GitHub REST API](https://docs.github.com/en/rest) - Data fetching
- [Husky](https://typicode.github.io/husky/) - Git hooks for code quality

## Development Tools

- [Atom](https://atom.io/) - Recommended code editor
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting
- [Husky](https://typicode.github.io/husky/) - Git hooks for pre-commit checks

## Project Structure

The project follows a feature-based architecture:

```
src/
├── features/           # Feature-based modules
│   ├── auth/          # Authentication feature
│   ├── user/          # User profile feature
│   └── repository/    # Repository feature
├── shared/            # Shared components and utilities
│   ├── components/    # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   ├── store/         # Redux store configuration
│   └── utils/         # Utility functions
├── app/               # Next.js app directory
└── public/            # Static assets
```

Each feature module contains:

- Components
- Redux slice
- API services
- Types
- Utils

## Getting Started

First, clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd github-user-repo
npm install
```

Set up Husky for pre-commit hooks:

```bash
npm run prepare
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Development Guidelines

### State Management

- Use Redux Toolkit for global state management
- Follow the feature-based architecture for organizing Redux slices
- Keep components as pure as possible, moving business logic to Redux

### Code Quality

- Husky pre-commit hooks ensure:
  - Code formatting with Prettier
  - Linting with ESLint
  - Type checking with TypeScript
  - Test coverage requirements

### Feature Development

- Create new features in the `features/` directory
- Follow the established module structure
- Keep features modular and self-contained
- Share common code through the `shared/` directory

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [GitHub REST API Documentation](https://docs.github.com/en/rest)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Husky Documentation](https://typicode.github.io/husky/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
