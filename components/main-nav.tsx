import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import ModeToggle from "@/components/mode-toggle";

export function MainNav() {
  return (
    <header className="border-primary/20 bg-background sticky top-0 z-50 w-full border-b">
      <div className="container max-w-[87.4rem] px-8 mx-auto flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="text-primary text-xl font-bold">CineScope</span>
        </Link>

        <nav className="ml-auto flex items-center gap-4">
          <Link
            href="/movies"
            className="hover:text-primary px-4 py-2 text-sm transition-colors"
          >
            Movies
          </Link>
          <Link
            href="/genres"
            className="hover:text-primary px-4 py-2 text-sm transition-colors"
          >
            Genres
          </Link>
          <Link
            href="/movies"
            className="hover:text-primary px-4 py-2 text-sm transition-colors"
          >
            About
          </Link>
          <Link
            href="/movies"
            className="hover:text-primary px-4 py-2 text-sm transition-colors"
          >
            Admin
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
