# nextjs_api_fetching

A simple Next.js 13 application demonstrating data fetching from an external API (via a custom API route), user interaction (search and modal), and basic Tailwind CSS styling. This project is structured using the new **app** router introduced in Next.js 13.

## Table of Contents

1. [Overview](#overview)  
2. [Features](#features)  
3. [Prerequisites](#prerequisites)  
4. [Installation](#installation)  
5. [Usage](#usage)  
6. [Project Structure](#project-structure)  
7. [Customization](#customization)  
8. [License](#license)  
9. [References](#references)

---

## Overview

This application fetches user data from an external API (JSONPlaceholder) through a **custom Next.js API route**. It demonstrates:

- **Next.js 13 App Router**  
- **Client-side data fetching** using `fetch` in a React component  
- **User interaction** with a search bar and a modal for additional user details  
- **Tailwind CSS** for styling

---

## Features

1. **Custom API Route**  
   - Located in `app/api/users/route.js`, which proxies requests to [JSONPlaceholder](https://jsonplaceholder.typicode.com/).
   
2. **Client-Side Data Fetching**  
   - The `app/page.jsx` file fetches data from the custom API route using the React `useEffect` hook.

3. **Search Bar**  
   - Allows users to filter results by name.

4. **Modal for Additional Details**  
   - Clicking on a user card opens a modal with more user info (e.g., username, website, company).

5. **Tailwind CSS**  
   - Pre-configured for styling components with utility classes.

---

## Prerequisites

- **Node.js** (version 16 or higher recommended)  
- **npm** or **yarn** for package management

You can check your Node.js and npm versions by running:
```bash
node -v
npm -v
```

---

## Installation

1. **Clone this repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. **Navigate into the project folder**:
   ```bash
   cd your-repo-name
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
   *or*  
   ```bash
   yarn
   ```

4. **(Optional) Environment Variables**  
   - If you have any API keys or secrets, create a `.env.local` file in the project root.  
   - For this demo, JSONPlaceholder doesn’t require an API key, so no additional environment variables are needed.  
   - You can include an empty `.env` file in your repo to show where environment variables would go if needed.

---

## Usage

1. **Run the development server**:
   ```bash
   npm run dev
   ```
   *or*  
   ```bash
   yarn dev
   ```
   By default, the app runs at [http://localhost:3000](http://localhost:3000).

2. **Open in your browser**:
   - Go to [http://localhost:3000](http://localhost:3000) to see the application.

3. **Search and Click**:
   - Use the search bar to filter users by name.  
   - Click on a user card to view additional details in a modal.

---

## Project Structure

```bash
nextjs_api/
├─ app/
│  ├─ api/
│  │  └─ users/
│  │     └─ route.js       # Custom API route for fetching user data
│  ├─ globals.css          # Global Tailwind CSS styles
│  ├─ layout.tsx           # Layout component for Next.js 13
│  └─ page.jsx             # Client component: fetches data, search, modal
├─ public/
├─ next.config.js
├─ package.json
├─ postcss.config.mjs
├─ tailwind.config.js      # Tailwind configuration
├─ tsconfig.json
└─ README.md               # This README
```

- **app/**  
  - **api/users/route.js**: Defines the `GET` handler that fetches user data from JSONPlaceholder.  
  - **page.jsx**: A client component with user interaction (search, modal).

---

## Customization

- **Tailwind CSS**: Adjust your Tailwind configuration in `tailwind.config.js` if you need custom colors or utilities.  
- **API Endpoint**: Modify `app/api/users/route.js` to point to a different external API.  
- **UI/UX**: Update the `page.jsx` component to change layout, add new features, or enhance styling.

---

## License

This project is licensed under the [MIT License](LICENSE). You’re free to use and modify this project for personal or commercial purposes. Please provide attribution if you use a significant portion of the code.


## References

- [Next.js Documentation](https://nextjs.org/docs/app)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

