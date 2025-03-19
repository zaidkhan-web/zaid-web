import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Main from "@/components/Layout/Main";
import Header from "@/components/Sections/Header/Header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Zaid Khan | Web Developer & React Expert",
  description:
    "I'm Zaid Khan, a skilled web developer specializing in Next.js, React.js, Tailwind CSS, and Supabase. I create modern, responsive, and high-performance websites.",
  icons: "/zaid.png",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Main>{children}</Main>
        </ThemeProvider>
      </body>
    </html>
  );
}
