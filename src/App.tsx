import Logo from "./assets/DEV.svg"
import Icondown from "./assets/icondown.svg"
import Gif from "./assets/programadora.gif"
import Imagem from "./assets/imagem.svg"
import Ipam from "./assets/ipam.svg"
import Samar from "./assets/samar.svg"
import Dcoimbra from "./assets/Dcoimbra.svg"
import Linkedin from "./assets/Linkedin.svg"
import Whatsapp from "./assets/Whatsapp.svg"


export function App() {
  return (
    <div className="overflow-hidden">
      <header className="bg-violet-700 w-screen h-14 flex justify-between items-center text-gray-200   pl-6 pr-6">
        <div>

          <img src={Logo} alt="" />
        </div>
        <div className="flex gap-5 items-center">
          <p className="cursor-pointer hover:text-gray-300 transition" > Início</p>
          <p className="cursor-pointer hover:text-gray-300 transition">Sobre mim</p>
          <div className="flex items-center gap-2 bg-blackopecity rounded-full pr-6 cursor-pointer hover:bg-red-500 transition duration-500">
            <img className="w-12 h-12 rounded-full" src="https://avatars.githubusercontent.com/u/62900342?v=4" alt="" />
            <p>Thais Perez</p>
            <img src={Icondown} alt="" />
          </div>
        </div>
      </header>
      <main className="flex items-center pl-6 pr-6 justify-between ">
        <p className="text-gray-200 max-w-3xl">
          Olá, meu nome é Thais, trabalho atualmente como técnica de garantia da qualidade. Gosto de desafios novos para poder adquirir novos conhecimentos e sou apaixonada por tecnologia.
        </p>
        <img src={Gif} alt="" />
      </main>
      <div className=" pl-6 pr-6">
        <p className="text-gray-500 text-3xl ">
          Formação
        </p>
        <div className="flex gap-12 mt-3 ">
          <div className="bg-zinc-800 w-96 flex">
            <img src={Imagem} alt="" />
            <div className="flex justify-center flex-col items-center flex-1">
              <p className="text-gray-200 ">Sistema de informação</p>
              <p className="text-gray-400 text-sm ">Bacharel</p>
            </div>
          </div>
          <div className="bg-zinc-800 w-96 flex">
            <img src={Imagem} alt="" />
            <div className="flex justify-center flex-col items-center w-auto flex-1">
              <p className="text-gray-200 text-xs">CST em Redes de Computadores</p>
              <p className="text-gray-400 text-sm">Tecnólogo</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" pl-6 pr-6">
        <p className="text-gray-500 text-3xl mt-4">
          Experiências
        </p>
        <div className="flex gap-12 mt-3 ">
          <div className="bg-zinc-800 w-96 flex">
            <img src={Ipam} alt="" />
            <div className="flex justify-center flex-col items-center flex-1 px-4 pt-4">
              <p className="text-gray-200 ">Estágio - CPD</p>
              <p className="text-gray-400 text-sm flex-1">Manutenção, formatação, limpeza e configuração de redes</p>
            </div>
          </div>
          <div className="bg-zinc-800 w-96 flex">
            <img src={Imagem} alt="" />
            <div className="flex justify-center flex-col items-center flex-1 px-4 pt-4">
              <p className="text-gray-200 ">Analista de redes e de comunição</p>
              <p className="text-gray-400 text-sm flex-1">Instalação de impressora e computadores</p>
            </div>
          </div>
          <div className="bg-zinc-800 w-96 flex">
            <img src={Samar} alt="" />
            <div className="flex justify-center flex-col items-center flex-1 px-4 pt-4">
              <p className="text-gray-200">Auxiliar Administrativo</p>
              <p className="text-gray-400 text-sm flex-1">Instalação de impressora e computadores</p>
            </div>
          </div>
          <div className="bg-zinc-800 w-96 flex">
            <img src={Dcoimbra} alt="" />
            <div className="flex justify-center flex-col items-center flex-1 px-4 pt-4">
              <p className="text-gray-200 ">Técnico de qualidade</p>
              <p className="text-gray-400 text-sm flex-1">Teste com cypress, montagem de cenários e selenium</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex items-center justify-center h-44 gap-3 ">
        <img src={Linkedin} alt="" />
        <img src={Whatsapp} alt="" />
      </footer>
    </div>
  )
} 