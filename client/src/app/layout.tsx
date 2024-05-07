
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/providers/authProvider";
import AdminProvider from "@/providers/adminProvider";
import StudentProvider from "@/providers/studentProvider";
import { Suspense } from "react";
import TutorProvider from "@/providers/tutorProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Innmind Tutors",
  description: "Powered by Innminds Tutors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <AdminProvider>
        <TutorProvider>
          <StudentProvider>
              <html lang="en">
                <body className={inter.className}>{children}</body>
              </html>
          </StudentProvider>
        </TutorProvider>
      </AdminProvider>
    </AuthProvider>
  );
}
