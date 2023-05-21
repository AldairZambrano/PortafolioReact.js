import BarraNavegacion from './Componentes/BarraNavegacion'
import Hero from './Componentes/Hero'
import Experiencia from './Componentes/Experiencia'
import Proyectos from './Componentes/Proyectos'
import Testimonios from './Componentes/Testimonios'
import Footer from './Componentes/Footer'
import ScrollToTopButton from './Componentes/BotonDeSubir'
import './App.css'

// sobre mi
const SobreMi = () => {
  return (
    <section id="sobre-mi" className="sobre-mi seccion-oscura">
    <div className="contenedor">
      <h2 className="seccion-titulo">Conoce a Aldair Zambrano</h2>
      <p className="seccion-texto">Actualmente estoy estudiando el programa de Técnico Profesional en Mantenimiento de Equipos de Cómputo, soy una persona con alta motivación por aprender, mejorar cada día mis habilidades de programación para lograr mi objetivo de ser Desarrollador FullStack, además de poder crecer como persona, Estoy orientada a la Objetividad, proactiva y detallista.</p>
    </div>
  </section>
  )
}

// contactos

const Contactos = () => {
  return (
    <section id="contacto" className="contacto seccion-oscura">
    <div className="container">
      <div className="container text-center rectangulo d-flex justify-content-evenly">
        <div className="row">
          <div className="col-12 col-md-4 seccion-titulo">
            ¡Hablemos!
          </div>
          <div className="col-12 col-md-4 descripcion">
            Contáctame para iniciar tu proyecto de desarrollo web y haré que tu visión se vuelva realidad.
          </div>
          <div className="col-12 col-md-4">
            <a href="mailto:aldairzambrano12345@gmail.com">
              <button type="button">  
                Contacto
                <i className="bi bi-envelope-check-fill"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}
function App() {

  return (
  <>      
       <BarraNavegacion></BarraNavegacion> 
       <Hero></Hero>
       <SobreMi></SobreMi>
       <Experiencia></Experiencia>
       <Proyectos></Proyectos>
       <Testimonios></Testimonios>
       <Contactos></Contactos>
       <Footer></Footer>
       <ScrollToTopButton></ScrollToTopButton>
       </>

  )
}

export default App
