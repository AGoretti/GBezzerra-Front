import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Carrousel from 'react-bootstrap/Carousel'
import './App.css'
import Logo from './assets/logo.png'
import Nome from './assets/nome.png'
import Face from './assets/face.png'
import Insta from './assets/insta.png'
import Twitter from './assets/twitter.png'
import Base from './assets/image_base.png'
import img1 from './assets/congresso-nacional-em-brasilia.jpg'
import img2 from './assets/entenda-o-funcionamento-dos-trc3aas-poderes-e-do-stf.webp'
import img3 from './assets/Praça_dos_três_poderes_(5944395105)_(3).jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Wwp from './assets/wwpWhite.png'

function App() {

  const [pub1, setPub1] = useState(false)

  function handlePub1 () {
    setPub1(!pub1)
    console.log(pub1)
  }
  
  return (
    <div className="App">
      <div className='Header' >
        <div className='FotoPerfil' ></div>
        <img className='Logo' src={Logo} alt ='' />
        <img className='Nome' src={Nome} alt='' />
        <div className='Redes'>
          <a className='Rede' href='https://web.facebook.com/cabralbezerraadv' target="_blank"><img src={Face} alt='' className='Face'/></a>
          <a className='Rede' href='https://instagram.com/escritoriocabralbezerra?igshid=YmMyMTA2M2Y=' target="_blank"><img src={Insta} alt='' className='Face'/></a>
          <a className='Rede' href='https://twitter.com/escritorioCBadv' target="_blank"><img src={Twitter} alt='' className='Face'/></a>
        </div>
      </div>
      <Carousel showStatus={false}  showThumbs={false} className='Carrousel'>
        <div>
            <img src={img1} className='CarrouselImage'/>
            <p className="legend">Áreas de Atuação: <br/>
              - Direito Civil e seus ramos: <br/>
              - Direito de Sucessão <br/> 
              - Direito de Família <br/>
              - Direito Imobiliário <br/>
              - Direito do Consumidor</p>
        </div>
        <div>
            <img src={img2} className='CarrouselImage'/>
            <p className="legend">Áreas de Atuação: <br/>
              - Direito Civil e seus ramos: <br/>
              - Direito de Sucessão <br/> 
              - Direito de Família <br/>
              - Direito Imobiliário <br/>
              - Direito do Consumidor</p>
        </div>
        <div>
            <img src={img3} className='CarrouselImage'/>
            <p className="legend">Áreas de Atuação: <br/>
              - Direito Civil e seus ramos: <br/>
              - Direito de Sucessão <br/> 
              - Direito de Família <br/>
              - Direito Imobiliário <br/>
              - Direito do Consumidor</p>
        </div>
        
      </Carousel>
      <div className='Cards'>
        <div className='card'>
          <Carrousel variant="dark" indicators={false} fade>
            <Carrousel.Item>
              <a onClick={handlePub1}>
                asdasdasd 1
              </a>
            </Carrousel.Item>
            <Carrousel.Item>
              <a>
                asdasdasd 2
              </a>
            </Carrousel.Item>
            <Carrousel.Item>
              <a>
                asdasdasd 3
              </a>
            </Carrousel.Item>
          </Carrousel>
        </div>
        <div className='card' >
          <Carrousel variant="dark"indicators={false} fade>
            <Carrousel.Item>
              <a>
                asdasdasd 1
              </a>
            </Carrousel.Item>
            <Carrousel.Item>
              <a>
                asdasdasd 2
              </a>
            </Carrousel.Item>
            <Carrousel.Item>
              <a>
                asdasdasd 3
              </a>
            </Carrousel.Item>
      </Carrousel>
        </div>
      </div>
    
      <a href="https://api.whatsapp.com/send?phone=51000000000&text=olá" target="_blank" className='wwp'>
        <img src="https://i.ibb.co/VgSspjY/whatsapp-button.png" alt="botão whatsapp"/>
      </a>
      <div className={pub1 ? 'page-mask-open' : 'page-mask'} onClick={handlePub1} ></div>
      <div className={pub1 ? 'window-open' : 'window'}>Dialog</div>
    </div>
  )
}

export default App
