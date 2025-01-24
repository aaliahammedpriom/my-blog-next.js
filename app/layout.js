import { AuthProvider } from "./AuthProvider/AuthProvider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import LoginBtn from "./components/LoginBtn";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import LogOutBtn from "./components/LogOutBtn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Blog",
  description: "This is My Blog Home Page",
  
};

export default async function RootLayout({ children }) {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = await getUser();
  console.log(isUserAuthenticated)

  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-800`}
        >
          <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <h1 className="text-2xl font-bold text-blue-600">My Blog</h1>
                </div>
                <div>
                  <ul className="flex gap-3">
                    <li>
                      <Link
                        href="/"
                        className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/profile"
                        className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                      >
                        Profile
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  {
                    (user && isAuthenticated) ? <LogOutBtn></LogOutBtn> : <LoginBtn></LoginBtn>
                  }
                </div>
              </div>
            </div>
          </nav>
          <main className="min-h-screen p-6">{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
}
