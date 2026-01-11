import Link from "next/link";
import {Button} from "@/components/ui/button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex items-center justify-between">
            {/* Logo and Navigation */}
            <Link href="/">
                <h1 className="text-4xl font-semibold text-white">
                    Suraj<span className="text-accent transition-colors duration-300">.</span>
                </h1>
            </Link>

            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                    <Button>Hire me</Button>
                </Link>
            </div>

            {/* // Mobile Navigation */}
            <div className="xl:hidden">mobile nav</div>
        </div>
    </header>
  )
}

export default Header