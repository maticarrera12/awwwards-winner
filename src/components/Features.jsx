import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full ">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const BentoTilt = ({children, className = ''})=>{

  const [transformStyle, setTransformStyle] = useState('')
  const itemRef = useRef()

  const handleMouseMove = (e)=>{
    if (!itemRef.current) return;

    const {left,top,width,height} = itemRef.current.getBoundingClientRect()
    const relativeX = (e.clientX - left)/width
    const relativeY = (e.clientY - top)/height
    const tiltX = (relativeY  - 0.5) * 20
    const tiltY = (relativeX  - 0.5) * -20
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98,0.98,0.98)`
    setTransformStyle(newTransform)
    }

  const handleMouseLeave = ()=>{
    setTransformStyle('')
  }

  return (
    <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
    style={{transform: transformStyle}}>
      {children}
    </div>
  )
}

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Entra a la Capa del Metajuego
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Sumergete en un universo rico y en constante expansión donde una
            vibrante variedad de productos convergen en una experiencia
            superpuesta interconectada en tu mundo.
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radi<b>a</b>nt
              </>
            }
            description="Un metajuego multiplataforma que convierte tus actividades en juegos web2 y web3 en una aventura gratificante."
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="Una colección NFT inspirada en los juegos de anime - la IP preparada para la expansión."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="Un centro social gamificado, que agrega una nueva dimensión de juego a la interacción social para las comunidades web3."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="Un agente IA en todo el mundo: eleva tu juego para que sea más divertido y productivo."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>a</b>s c<b>o</b>ntenido llegando!
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
