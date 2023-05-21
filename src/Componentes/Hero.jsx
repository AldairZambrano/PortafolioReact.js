import '../Estilos.css/Hero.css'
import imagenes from './imagenes'

export default function Hero () {
    return (
    <section className="hero align-items-stretch">
      <div className="hero-principal d-flex flex-column justify-content-center align-items-center">
        <img className="hero-imagen-desarrollador rounded-circle" src={imagenes.User} alt="Foto de Jane Doe" />
        <h1>Hola, soy Aldair Zambrano</h1>
        <h2>Desarrollo sitios web y aplicaciones web</h2>
      </div>
      <div className="hero-inferior">
        <img className="hero-inferior-imagen img-fluid" src={imagenes.Monitor} alt="Monitor, laptop y logos de HTML, CSS, JavaScript y React." />
      </div>
    </section>
    )
}