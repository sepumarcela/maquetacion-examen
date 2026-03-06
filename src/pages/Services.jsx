import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import './Services.css'

function Services() {
  return (
    <div className="services-layout">

      <Sidebar />

      <div className="services-content">

 
        <div className="services-banner">
          <p className="services-banner__label">COMPONENTE DOS</p>
        </div>

        <div className="services-cards">
          <Card titulo="TÍTULO" />
          <Card titulo="TÍTULO" />
          <Card titulo="TÍTULO" />
        </div>

        <Footer />

      </div>
    </div>
  )
}

export default Services