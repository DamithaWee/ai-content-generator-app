![logo](https://github.com/user-attachments/assets/643b9453-b129-4111-882c-7d8e75d78ee2)

<p align="center"><a href="#project-description">Project Description</a> - <a href="## 🧰 Getting Started">## 🧰 Getting Started</a>

![Screenshot 2025-07-07 180128](https://github.com/user-attachments/assets/2db9d118-1d94-47e8-8543-f2cde2c2100d)


## Project Description

This is a Next.js project designed to help users generate various types of content using AI, such as blog titles, blog content, product descriptions, social media captions, articles, essays, and reports. It leverages the Google Gemini API for content generation and Google Custom Search for web search capabilities to provide context to the AI model.

## 📑 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Development Server](#running-the-development-server)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Authentication](#authentication)
- [Styling](#styling)
- [Deployment](#deployment)
- [Learn More](#learn-more)
- [Contributing](#contributing)
- [License](#license)

---

## 🚀 Features

- **AI-Powered Content Generation**: Supports multiple content types:
  - Blog Titles
  - Blog Content
  - Product Descriptions
  - Social Media Captions
  - Articles
  - Essays
  - Reports

- **Contextual AI Generation**: Uses real-time web search results to enhance generation relevance.

- **User-Friendly Interface**: Clean, intuitive dashboard to interact with AI templates.

- **Responsive Design**: Built with Tailwind CSS for seamless experience across devices.

- **Authentication**: Powered by Clerk for secure user login and registration.

- **Rich Text Output**: Uses Toast UI Editor for displaying and copying AI-generated results.

---

## 🛠 Technologies Used

- **Next.js 15.1.3** – React framework for SSR and static apps
- **React 18.2.0**
- **Tailwind CSS 3.4.1** – Utility-first CSS framework
- **Clerk/nextjs** – User authentication and session management
- **@google/generative-ai** – Google Gemini API for content generation
- **Toast UI Editor** – WYSIWYG editor for content preview
- **Lucide React** – Icon set
- **Shadcn/ui** – Accessible UI components (based on Radix + Tailwind)
- **dotenv** – For environment variables

---

## 🧰 Getting Started

### ✅ Prerequisites

- Node.js (v18 or higher)
- Package manager: `npm`, `yarn`, `pnpm`, or `bun`
- Google Cloud Project with access to:
  - Google Gemini API
  - Google Custom Search API
- Clerk account

### 📦 Installation

```bash
git clone <your-repository-url>
cd ai-content-creator

# With npm
npm install

# Or with Yarn
yarn install

# Or with pnpm
pnpm install

# Or with Bun
bun install
```

---

## 📁 Project Structure

```text
.
├── .gitignore
├── README.md
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   │   └── [[...sign-in]]/
│   │   │       └── page.tsx
│   │   └── sign-up/
│   │       └── [[...sign-up]]/
│   │           └── page.tsx
│   ├── (data)/
│   │   └── Templates.tsx
│   ├── dashboard/
│   │   ├── _components/
│   │   │   ├── Header.tsx
│   │   │   ├── SearchSection.tsx
│   │   │   ├── SideNav.tsx
│   │   │   ├── TemplateCard.tsx
│   │   │   └── TemplateListSection.tsx
│   │   ├── content/
│   │   │   ├── [template-slug]/
│   │   │   │   └── page.tsx
│   │   │   └── _components/
│   │   │       ├── CreateNewContent.tsx
│   │   │       ├── FormSection.tsx
│   │   │       └── OutputSection.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── lib/
│   └── utils.ts
├── utils/
│   └── AiModel.tsx
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── logo.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
└── postcss.config.mjs
```

---

## 🧩 Key Components

### `app/(data)/Templates.tsx`

This file defines all AI content generation templates. Each template includes:

- `name`: Display name (e.g., "Blog Title")
- `desc`: Brief description of the template's purpose
- `category`: Content category (e.g., "Blog", "E-Commerce")
- `icon`: URL or icon component for UI display
- `aiPrompt`: Instruction used to guide the AI model
- `slug`: Unique identifier used for routing
- `form`: Array of fields (label, type, name, required) used for user input

---

### `utils/AiModel.tsx`

Handles the integration with Google Gemini and Google Custom Search APIs.

- `webSearch(query: string)`: 
  - Performs a search via Google Custom Search
  - Returns an array of results (title, snippet, link)

- `createPrompt(userQuery, searchResults, taskInstruction)`:
  - Combines user input with web context and task-specific instructions
  - Formats a prompt string to send to Gemini

- `chatSession`:
  - Initializes a chat instance with Gemini (e.g., gemini-2.0-flash-exp)
  - Configured with temperature, topP, topK, and maxOutputTokens

---

### `app/dashboard/`

This is the core of the application's dashboard and user interface.

- `layout.tsx`: 
  - Dashboard layout with header and side navigation

- `page.tsx`: 
  - Main dashboard page that renders templates

- `_components/`:
  - `Header.tsx`: Top navigation bar with optional banners or promotions
  - `SearchSection.tsx`: Allows users to search for content templates
  - `SideNav.tsx`: Sidebar navigation (Home, History, Billing, etc.)
  - `TemplateCard.tsx`: Reusable card component to show each template
  - `TemplateListSection.tsx`: Displays a list/grid of `TemplateCard`s

- `content/[template-slug]/page.tsx`:
  - Dynamically renders a page based on the selected content template

- `content/_components/`:
  - `CreateNewContent.tsx`: Main logic and UI for generating content
  - `FormSection.tsx`: Dynamically builds form fields for user input
  - `OutputSection.tsx`: Displays the AI-generated result using Toast UI Editor

---

### `components/ui/`

This folder contains shared UI components built with **Shadcn/ui** and styled using **Tailwind CSS**:

- `button.tsx`: Reusable button component
- `input.tsx`: Reusable input field
- `textarea.tsx`: Reusable textarea for multi-line input

---

## 🔐 Authentication

User authentication is powered by **Clerk**.

- Sign-in and sign-up routes are under `app/(auth)/`
- Uses Clerk’s hosted components to manage user sessions securely
- Requires `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` in your environment variables

---

## 🎨 Styling

The project uses **Tailwind CSS** for styling:

- Global styles: `app/globals.css`
- Customizations: `tailwind.config.ts`
- Components from **Shadcn/ui** follow Tailwind conventions for accessible and composable design

---

## 🚀 Deployment

This project is best deployed using [**Vercel**](https://vercel.com), the creators of Next.js.

Steps:
- Connect your GitHub repository
- Set environment variables via the Vercel dashboard
- Deploy and enjoy automatic CI/CD and preview builds

For advanced options, refer to the [Next.js Deployment Documentation](https://nextjs.org/docs/deployment).

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Clerk Docs](https://clerk.dev/docs)
- [Google Gemini API Docs](https://ai.google.dev)
- [Shadcn/ui](https://ui.shadcn.com)

---

## 🤝 Contributing

Contributions are welcome!

If you find bugs, have suggestions, or want to contribute improvements:
- Open an issue
- Submit a pull request

Help us make this project better!

---

## 📄 License

This project is licensed under the **[MIT License](./LICENSE)**.

---

> Created with 💡 and 🚀 using Next.js, Gemini AI, and Shadcn UI.

