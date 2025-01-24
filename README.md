# Blog Viewer Application

This is a simple blog viewer application built with **Next.js** that demonstrates key concepts such as routing, server and client components, dynamic routes, authentication, and data fetching. It uses the **Kinde Auth** library for authentication and **JSONPlaceholder** as the mock API for blog data.

## Features

### Home Page
- Displays a list of blog post titles fetched from the JSONPlaceholder API.
- Each title links to a detailed page for that specific post.

### Blog Details Page
- Uses a dynamic route (`/blog/[id]`) to display the details of a specific blog post.
- Fetches blog details based on the `id` parameter from the URL.

### Protected Page
- Includes a "Profile" page accessible only to authenticated users.
- Displays a static message: "Welcome to your profile!".
- Redirects unauthenticated users to the login page.

### Navigation
- Header with links to "Home" and "Profile".
- Shows a "Login" button if the user is not authenticated and a "Logout" button if the user is authenticated.

### Styling
- Clean and responsive design using **Tailwind CSS**.

## Tech Stack
- **Next.js**: Framework for React applications with support for server-side rendering.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Kinde Auth**: Library for authentication and user session management.
- **JSONPlaceholder**: Mock API for blog data.

## Getting Started

### Prerequisites
- Node.js (>= 14.x)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/blog-viewer.git
   ```
2. Navigate to the project directory:
   ```bash
   cd blog-viewer
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Environment Variables
Create a `.env.local` file in the root of your project and add the following variables for Kinde Auth:
```env
KINDE_DOMAIN=your-kinde-domain
KINDE_CLIENT_ID=your-client-id
KINDE_REDIRECT_URI=http://localhost:3000/api/auth/callback
```
Replace `your-kinde-domain` and `your-client-id` with the credentials from your Kinde Auth application.

### Running the App
Start the development server:
```bash
npm run dev
# or
yarn dev
```
Visit `http://localhost:3000` in your browser.

## API Integration
- Fetch all blog posts:
  ```bash
  GET https://jsonplaceholder.typicode.com/posts
  ```
- Fetch a specific post by `id`:
  ```bash
  GET https://jsonplaceholder.typicode.com/posts/[id]
  ```
