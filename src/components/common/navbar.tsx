import { Link } from "react-router-dom"
import { MobileNavbar } from "./mobile-navbar"

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between md:px-7 max-sm:px-4 py-2 shadow-sm">
      <MobileNavbar/>
      <Link to="/">
        <img src="/logo.png" alt="logo"
          className="w-[220px] h-[39px] max-sm:w-[200px]"
        />
      </Link>
      <div className="flex items-center gap-4 max-sm:hidden">
      <Link to="/sign-up" className="text-[.875rem] hover:text-[#284a01]">Sign up</Link>
          <p>/</p>
          <Link to="/sign-in" className="text-[.875rem] hover:text-[#284a01]">Sign in</Link>
      </div>
    </nav>
  )
}
