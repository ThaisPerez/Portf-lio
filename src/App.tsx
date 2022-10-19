import Logo from "./assets/DEV.svg"
import Icondown from "./assets/icondown.svg"

export function App() {
  return (
    <div className="bg-violet-700 w-screen h-14 flex justify-between items-center text-gray-200 pl-6 pr-6">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="flex gap-5 items-center">
        <p className="cursor-pointer">Início</p>
        <p className="cursor-pointer">Sobre mim</p>
        <div className="flex items-center gap-2 bg-blackopecity rounded-full pr-6 cursor-pointer">
          <img className="w-12 h-12 rounded-full" src="https://avatars.githubusercontent.com/u/62900342?v=4" alt="" />
          <p>Thais Perez</p>
          <img src={Icondown} alt="" />
        </div>
      </div>
    </div>
  )
} 