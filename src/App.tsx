import { Navigate, Route, Routes } from "react-router-dom"
import MainLayout from "@/components/layouts/main-layout"
import Homepage from "@/pages/home-page"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Homepage /></MainLayout>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App