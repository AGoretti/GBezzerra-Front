import { Carousel } from 'react-responsive-carousel';
import './App.css'
import Logo from './assets/logo.png'
import Nome from './assets/nome.png'
import Face from './assets/face.png'
import Insta from './assets/insta.png'
import Twitter from './assets/twitter.png'
import Base from './assets/image_base.png'
import Perfil from './assets/perfil.png'

function App() {
  
  return (
    <div className="App">
      <div className='Header' >
        <div className='FotoPerfil' ></div>
        <img className='Logo' src={Logo} alt ='' />
        <img className='Nome' src={Nome} alt='' />
        <div className='Redes'>
          <a className='Rede'><img src={Face} alt='' className='Face'/></a>
          <a className='Rede'><img src={Insta} alt='' className='Face'/></a>
          <a className='Rede'><img src={Twitter} alt='' className='Face'/></a>
        </div>
      </div>
      <Carousel showStatus={false}  showThumbs={false} className='Carrousel'>
        <div>
            <img src={Base} className='CarrouselImage'/>
            <p className="legend">Áreas de Atuação: <br/>
              - Direito Civil e seus ramos: <br/>
              - Direito de Sucessão <br/> 
              - Direito de Família <br/>
              - Direito Imobiliário <br/>
              - Direito do Consumidor</p>
        </div>
        <div>
            <img src={Base} className='CarrouselImage'/>
            <p className="legend">Áreas de Atuação: <br/>
              - Direito Civil e seus ramos: <br/>
              - Direito de Sucessão <br/> 
              - Direito de Família <br/>
              - Direito Imobiliário <br/>
              - Direito do Consumidor</p>
        </div>
        <div>
            <img src={Base} className='CarrouselImage'/>
            <p className="legend">Áreas de Atuação: <br/>
              - Direito Civil e seus ramos: <br/>
              - Direito de Sucessão <br/> 
              - Direito de Família <br/>
              - Direito Imobiliário <br/>
              - Direito do Consumidor</p>
        </div>
        
      </Carousel>
    </div>
  )
}

export default App
