import { FaGithub, FaLinkedinIn } from "react-icons/fa"

const links = [
  {href: 'https://localhost:5173', icon: <FaGithub/>},
  {href: 'https://localhost:5173', icon: <FaLinkedinIn/>}
]

const Footer = () => {
  return (
    <div className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row"> 
      <p className="text-center text-sm md:text-left">&copy; Matias Carrera 2024</p>
      </div>

      <div className="flex justify-center gap-4 md:justify-start">
      {
        links.map((link)=>(
          <a key={link} href={link.href} target="_blank" rel="noopener noreferrer" className="text-black mt-2 ease-in-out hover:text-white">
            {link.icon}
          </a>
        ))
      }
      </div>
    </div>
  )
}

export default Footer
