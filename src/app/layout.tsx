import "./globals.css";
import { ThemeProvider } from "@/lib/theme";
import Shell from "@/components/Shell";

export const metadata = {
  title: "Jaineel's Portfolio - LostAstr0",
  description: "LostAstr0 by Jaineel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <ThemeProvider>
          <Shell>{children}</Shell>
        </ThemeProvider>
      </body>
    </html>
  );
}
