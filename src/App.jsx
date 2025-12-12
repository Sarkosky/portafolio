import { useEffect, useState } from "react";
import './styles/introAnimation.css';
import LiquidGlass from "liquid-glass-react";
import DecryptedText from "./components/DecryptedText";
import TextType from "./components/TextType";
import InfiniteMenu from "./components/InfiniteMenu"
import NeonButton from "./components/NeonButton";
import Modal from "./components/Modal";
import DonationModal from "./components/DonationModal";


function App() {

   // Estado para controlar la intro
  const [introActiva, setIntroActiva] = useState(true);

  // Controlar intro y scroll del body
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    const timer = setTimeout(() => {
      setIntroActiva(false);
      document.body.classList.remove("overflow-hidden");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // 
  // 
  // animacion para mostrar texto encriptado
  // 
  const [mostrarEcriptado, setMostrarEncriptado] = useState(false);
   useEffect(() => {
    const timer =  setTimeout(() => {
      setMostrarEncriptado(true);
    }, 2500)
    return () => clearTimeout(timer)
   })


   // opciones para el menu de trabajos realizados
const items = [
  {
    image: './public/vite.svg',
    // link: 'https://google.com/',
    title: 'FREELANCE',
    description: 'This is pretty cool, right?'
  },
  {
    image: './public/vite.svg',
    // link: 'https://google.com/',
    title: 'UPROCACH',
    description: 'Procesos ETL para la generación y visualización de la información'
  },
  {
    image: './public/vite.svg',
    // link: 'https://google.com/',
    title: 'CGE QUITO SUR',
    description: 'Desarrollo de un sistema para gestión para prácticas clínicas y procesos internos en Consulting Group Ecuador'
  },
 
];


// ventana modal about me
const [open, setOpen] = useState(false);


  //Modal de donaciones
  const [donationOpen, setDonationOpen] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(null);

  const openDonation = (type) => {
    setSelectedDonation(type);
    setDonationOpen(true);
  };


  return (
    <>

     {/* INTRO ANIMADA */}
      {introActiva && (
        <div
          id="introText"
          className="fixed inset-0 z-50 flex items-center justify-center "
        >
          <TextType
            text={["Hello World!"]}
            typingSpeed={100}
            pauseDuration={500}
            deletingSpeed={40}
            showCursor={true}
            cursorCharacter="|"
            className="text-white font-extrabold text-[15rem]"
          />
        </div>
      )}

    <div className="w-full min-h-screen paginaCompleta bg-black text-white">      

      {/* Seccion inicial */}
      <section
          id="start"
          className={`min-h-screen transition-opacity duration-500 ${
            introActiva ? "opacity-0" : "opacity-100"
          }`}
        >
        <div  className="contenedorPrincipal  ">

          <header className="w-full flex items-center justify-center m-3 ">

              <LiquidGlass
                displacementScale={100}
                blurAmount={0.4}
                saturation={200}
                aberrationIntensity={2}
                elasticity={0.35}
                cornerRadius={100}
                padding=" "
                mode="standard"
                className="cursor-pointer rounded-full shadow-xl z-[9999]"
                style={{ position: 'fixed', left: '50%', top:'5%'}}
              >
                 <nav className="barraNavegacion flex gap-6 px-[3em] py-3 text-white">
                  <a href="#start">Start</a>
                  <a href="#aboutMe">About me</a>
                  <a href="#works">Works</a>
                  <a href="#endGame">End Game</a>
                </nav>
              </LiquidGlass>

          </header>          

           <div className="  flex items-center justify-between w-full min-h-screen px-20"> 
            <div className=" w-1/2 flex justify-center items-center">
              {
                mostrarEcriptado && (
                  <DecryptedText
                    text="THIS IS SARKOSKY"
                    speed={100}
                    maxIterations={30}
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
                    className="revealed font-bold"
                    parentClassName="all-letters text-[10rem] text-center" 
                    encryptedClassName="encrypted"
                    animateOn="both"
                
                />
              )
              }
            </div>

            <div className="w-1/2 flex justify-center items-center">
              espacio para la animacion 3d
            </div>             
          </div>
        </div>      
         
      </section>

      {/* Seccion de presetancion sobre mi */}
      <section id="aboutMe" className={`aboutMe min-h-screen flex bg-amber-200 ${
            introActiva ? "opacity-0" : "opacity-100" }`}>

        <div className="flex w-full">
          {/* Columna izquierda con la descripción */}
          <div className="w-1/2 flex items-center justify-center ">
            <div className="max-w-3xl">
              <h2 className="text-6xl font-bold mb-6">Hi, I'm Santiago</h2>
              <p className="text-3xl leading-relaxed text-justify">
                Full Stack Developer and Software Engineer with hands-on experience building web applications, APIs, and ETL pipelines for business intelligence. I excel at adapting quickly to new technologies, solving complex challenges, and contributing effectively across the entire development lifecycle. Strong team coordination and technical leadership skills, focused on delivering high-quality solutions and driving successful project outcomes.
              </p>
            </div>
          </div>

          {/* Columna derecha libre para la animación */}
          {/* 
          -
          -
          -
          -
          -
          - */}
          <div className="w-1/2 flex items-center justify-center">
            {/* Aquí irá la animación 3D */}
            espacio para la animación 3D de perfil
          </div>
        </div>
      </section>

      {/* Seccion de proyectos */}
      <section id="works" className={`works ${introActiva ? "opacity-0": "opacity-100"}`}>
        <div className="w-full ">
          <div className="h-[35vh]  flex items-center justify-center ">espacio para el 3d de frente</div>
          <div className="h-[65vh] flex items-center justify-center overflow-hidden " style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}>
            <div className="w-full h-full relative overflow-hidden">
              <InfiniteMenu items={items}/>
            </div>
          </div>
        </div>
      </section>

      {/* Seccion final */}
      {/* 
      *
      *
      * 
      * 
      ***
      **/}
      <section id="endGame" className={`endGame h-[35vh] flex items-center justify-center px-10 ${introActiva ? "opacity-0": "opacity-100"}`}>
        <div className="w-full h-full grid grid-cols-3 gap-6">

          {/* IZQUIERDA */}
          <div className="flex  justify-center items-center p-4">

            <div className="">

            <NeonButton 
              label="Contact me!" 
              onClick={() => setOpen(true)} 
              />
              </div>

            <Modal isOpen={open} onClose={() => setOpen(false)} />
            
          </div>

          {/* CENTRO */}
          <div className="flex flex-col justify-center items-center  p-4">
            <div>animación 3D mía</div>
            <div>tecnologías</div>
          </div>

          {/* DERECHA */}
          <div className="flex flex-col justify-center items-center space-y-[1rem] bg-red-500">
            <h2 className="font-bold text-xl">¿Me invitas algo?</h2>

            <div className="flex p-2.5 justify-center bg-blue-400 w-full h-[50%] space-x-3">
            <button
              onClick={() => openDonation("cafe")}
              className="w-full py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all hover:cursor-pointer"
            >
              ☕ Coffee
            </button>


            <button
              onClick={() => openDonation("beer")}
              className="w-full py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all hover:cursor-pointer"
              >
              🍺 Beer
            </button>

            <button
              onClick={() => openDonation("weed")}
              className="w-full py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all hover:cursor-pointer"
              >
              🍃 Weed
            </button>

              <DonationModal 
                isOpen={donationOpen} 
                onClose={() => setDonationOpen(false)} 
                type={selectedDonation}
                />
                </div>
          </div>

        </div>
      </section>

      {/* seccion de redes sociales */}

      <div id="socialMedia" className={`m-4 flex items-center justify-center ${introActiva ? "opacity-0": "opacity-100"}`}>
        <a href="" target="_blank">Linkedin</a>
        <a href="" target="_blank">Instagram</a>
        <a href="" target="_blank">Tiktok</a>
        <a href="http://www.instagram.com" target="_blank">Git Hub</a>
      </div>

      </div>
        </>
  )
}

export default App
