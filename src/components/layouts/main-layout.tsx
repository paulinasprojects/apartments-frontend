import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex-1">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default MainLayout