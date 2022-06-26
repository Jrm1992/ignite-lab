import { Logo } from "./Logo";
import { List } from 'phosphor-react'

export function handleSidebar(){
  let sidebar = document.querySelector('#sidebar')
  let classList = sidebar?.classList
}


export function Header() {
  return (
    <header className="w-full h-12 py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
      <button onClick={handleSidebar} className=" absolute sm:hidden right-4 flex justify-end colo">
      <List size={36} color="#81D8F7" />
      </button>
    </header>
  );
}
