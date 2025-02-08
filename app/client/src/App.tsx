import { Toaster } from "./components/ui/sonner"
import { Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home/Home"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster richColors />
    </div>
  )
}

export default App