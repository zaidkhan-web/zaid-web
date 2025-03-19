// components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="container py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" passHref>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-bold text-xl text-foreground"
          >
            ZK
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-2 py-1 transition-all duration-200 ${
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                } group`}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full opacity-70" />
              </Link>
            );
          })}
        </nav>

        {/* Theme Toggle and Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu size={30} />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-l border-border bg-background/95 backdrop-blur-md w-80"
              >
                <div className="h-full flex flex-col">
                  <SheetHeader className="border-b border-border pb-4 mb-6">
                    <SheetTitle className="text-xl font-medium">
                      Zaid Khan
                    </SheetTitle>
                    <SheetDescription className="text-muted-foreground">
                      Portfolio Navigation
                    </SheetDescription>
                  </SheetHeader>

                  <nav className="flex-1 flex flex-col">
                    {navItems.map((item, index) => {
                      const isActive = pathname === item.href;
                      return (
                        <SheetTrigger key={item.name} asChild>
                          <Link
                            href={item.href}
                            className={`relative py-4 px-2 ${
                              index !== navItems.length - 1
                                ? "border-b border-border/50"
                                : ""
                            } 
                            flex items-center transition-all duration-200 ${
                              isActive
                                ? "text-primary font-medium bg-primary/5"
                                : "text-foreground opacity-80 hover:opacity-100 hover:bg-muted/50"
                            }`}
                          >
                            {isActive && (
                              <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full" />
                            )}
                            <span className="ml-2">{item.name}</span>
                          </Link>
                        </SheetTrigger>
                      );
                    })}
                  </nav>

                  <div className="mt-auto pt-2 pb-3 px-3 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Switch theme
                      </span>
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
