import { Logo } from "./Logo";
import { List, X } from 'phosphor-react'

interface MainProps {
  mode: boolean;
  setMode: Function;
}

export function Header({mode, setMode}: MainProps) {

  const handleSidebar = () => {
    setMode(!mode)
  }

  return (
    <header className="w-full h-12 py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
      <button onClick={handleSidebar} className=" absolute sm:hidden right-4 flex justify-end colo">
      {
        mode?<X size={36} color="#81D8F7" />:<List size={36} color="#81D8F7" />
      }
      </button>
    </header>
  );
}
