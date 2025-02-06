import { Features } from "./components/Features/Features"
import { Footer } from "./components/Footer/Footer"
import { Hero } from "./components/Hero/Hero"
import { ScrollVelocity } from "./components/ScrollText/ScrollVelocityText"
import { Search } from "./components/Search/Search"
import { Toaster } from "./components/ui/sonner"

const App = () => {
  return (
    <div>
      <Hero/>
      <Search/>
      <ScrollVelocity/>
      <Features/>
      <Footer/>
      <Toaster position="top-center" closeButton richColors />
    </div>
  )
}

export default App