import {Section} from "@/app/_components/Section";
import { ComponentPropsWithoutRef} from "react";
import {cn} from "@/lib/utils";

const Code = ({className, ...props}: ComponentPropsWithoutRef<"span">) => {
    return <span className={cn("bg-accent/30 font-mono text-primary border border-accent p-1 rounded-sm", className)} {...props} />
}

export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start">
            <div className="flex-[2]">
                <h2 className="font-caption text-5xl text-primary">Ugo DA SILVA</h2>
                <h3 className="text-3xl font-caption">
                    Développeur Magento
                </h3>
                <p>
                    lorem ipsum <Code>test</Code>
                </p>
            </div>
            <div className="flex-1">
                <img
                    src="/ugo_profile.jpg"
                    className="w-full h-auto max-w-xs"
                    alt="ugo's profile"
                />
            </div>
        </Section>
    )
}