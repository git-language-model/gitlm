import { Toaster } from "./components/ui/sonner"
import { Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home/Home"
import UserRepo from "./components/UserRepo/UserRepo";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:username" element={<UserRepo />} />
      </Routes>
      <Toaster richColors />
    </div>
  )
}

export default App