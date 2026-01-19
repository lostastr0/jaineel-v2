// src/app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";

export const metadata = {
  title: "Jaineel",
  description: "Cyber security student portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
