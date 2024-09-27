import { navLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Nav = () => {
  return (
    <header className="padding-x w-full absolute z-10 py-8">
      <nav className="flex justify-between items-center max-container">
        <Link href="/">
          <Image src='images/header-logo.svg' width={130} height={29} alt="logo" />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray" >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block cursor-pointer hover:shadow-lg">
          <Image src="icons/hamburger.svg" width={25} height={25} alt="meun" />
        </div>
      </nav>
    </header>
  )
}

export default Nav
