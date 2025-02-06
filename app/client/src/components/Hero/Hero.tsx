import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { ArrowRight, Github, Rocket } from "lucide-react";
import { BlurFade } from "../ui/blur-fade";

export function Hero() {
    return (
        <div className="relative flex size-full flex-col items-center justify-center overflow-hidden bg-background p-20 ">
            <AnimatedShinyText className="inline-flex border rounded-full items-center justify-center px-4 py-1 mt-[2px] transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Introducing GitLM</span>
                <ArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
            <BlurFade delay={0.25} inView>
                <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white pt-10">
                    New to Opensource?
                </p>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>
                <div className="pt-4">
                    <span className="text-pretty text-xl tracking-tighter flex items-center justify-center text-center">
                    Learn about any <Github className="ml-2 mr-2 size-4 hidden md:block" />repository in minutes and contribute to projects<Rocket className="ml-2 size-4 hidden md:block"/>
                </span>
                </div>
            </BlurFade>
            <GridPattern
                width={40}
                height={40}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                )}
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent blur-9xl" />
        </div>
    );
}