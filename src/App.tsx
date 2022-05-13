import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css'
import Logo from './assets/logo.png'
import Nome from './assets/nome.png'
import Face from './assets/face.png'
import Insta from './assets/insta.png'
import Twitter from './assets/twitter.png'
import Base from './assets/image_base.png'

function App() {
  
  return (
    <div className="App">
      <div className='Header' >
        <img className='Logo' src={Logo} alt ='' />
        <img className='Nome' src={Nome} alt='' />
        <div className='Redes'>
          <a className='Rede'><img src={Face} alt='' className='Face'/></a>
          <a className='Rede'><img src={Insta} alt='' className='Face'/></a>
          <a className='Rede'><img src={Twitter} alt='' className='Face'/></a>
        </div>
      </div>
      <Carousel showStatus={false} showIndicators={false} showThumbs={false}>
        <div>
            <img src={Base} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={Base} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={Base} />
            <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  )
}

export default App
