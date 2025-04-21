# GitHub Finder

A modern React + Vite web app to search for GitHub users and view detailed profile information.

## Features

- **Search GitHub Users:**
  - Enter a username query to search for GitHub users.
  - Displays a list of matching users with avatars and usernames.
- **User Details:**
  - Click on a username to view detailed information, including:
    - Full name (if available)
    - Bio
    - Public repositories count
    - Followers & Following
    - Direct link to the GitHub profile
- **Navigation:**
  - Simple navigation bar with Home, About, Contact, and GitHub Users pages.
- **Responsive & Modern UI:**
  - Built with Tailwind CSS for a clean, responsive design.

## Getting Started

### Prerequisites
- Node.js (v16 or newer recommended)
- npm

### Setup
```bash
npm install
```

### Running the App
```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure
- `src/pages/GitHubUsers.jsx` — Search and list GitHub users
- `src/pages/UserDetails.jsx` — Detailed information for a selected user
- `src/components/NavBar.jsx` — Navigation bar
- `src/App.jsx` — App routes

## API
- Uses the [GitHub REST API](https://docs.github.com/en/rest) for user search and profile details.

## License
MIT
