import { DockDemo } from "@/components/Dock/DockDemo"
import { Features } from "@/components/Features/Features"
import { Hero } from "@/components/Hero/Hero"
import { Search } from "@/components/Search/Search"
import { BlurFade } from "@/components/ui/blur-fade"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"

export function Home() {
    return (
        <>
            <Hero />
            <Search />
            <BlurFade delay={0.25} inView>
                <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white pt-5 pb-5">
                    Features we provide
                </p>
            </BlurFade>
            <Features />
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
                <DockDemo />
            </div>
            <div className="flex items-center justify-center">
                <TextHoverEffect text="GITLM" />
            </div>
        </>
    )
}