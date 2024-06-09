import {Section} from "@/app/_components/Section";
import {Button, buttonVariants} from "@/components/ui/button";
import {GithubIcon} from "@/app/_components/icons/GithubIcon";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {XIcon} from "@/app/_components/icons/XIcon";
import {LinkedinIcon} from "@/app/_components/icons/LinkedinIcon";

export const Header = () => {
    return (
    <header className="sticky top-0 py-4">
        <Section className="flex items-baseline">
            <h1 className="text-lg font-bold text-primary">Articvolt</h1>
            <div className="flex-1" />
            <ul className="flex items-center gap-2">
                <Link
                    href="https://github.com/Articvolt"
                    className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}
                >
                    <GithubIcon size={16} className="text-foreground" />
                </Link>
                <Link
                    href="https://github.com/Articvolt"
                    className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}
                >
                    <XIcon size={16} className="text-foreground" />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/ugo-da-silva-990a90139/"
                    className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}
                >
                    <LinkedinIcon size={16} className="text-foreground" />
                </Link>
            </ul>
        </Section>
    </header>
    )
}