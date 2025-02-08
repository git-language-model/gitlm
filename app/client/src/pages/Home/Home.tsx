import { Features } from "@/components/Features/Features"
import { Footer } from "@/components/Footer/Footer"
import { Hero } from "@/components/Hero/Hero"
import { ScrollVelocity } from "@/components/ScrollText/ScrollVelocityText"
import { Search } from "@/components/Search/Search"

export function Home() {
    return (
        <>
            <Hero />
            <Search />
            <ScrollVelocity />
            <Features />
            <Footer />
        </>
    )
}