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
import img1 from './assets/ponte JK1920x1280.jpg'
import img2 from './assets/catedral1920x1280.jpg'
import img3 from './assets/biblioteca 1920x1280.jpg'
import img4 from './assets/STF 1920x1280.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [pub1, setPub1] = useState(false)
  const [wwp, setWwp] = useState(false)
  const [mensagem, setMensagem] = useState('')

  function handlePub1 () {
    setPub1(!pub1)
    console.log(pub1)
  }

  function handleWwp () {
    setWwp(!wwp)
    console.log(wwp)
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
      <Carousel showStatus={false}  showThumbs={false} className='Carrousel' autoPlay={true} infiniteLoop={true} interval={5000} stopOnHover={false}>
        <div>
            <img src={img1} className='CarrouselImage'/>
            
        </div>
        <div>
            <img src={img2} className='CarrouselImage'/>
            
        </div>
        <div>
            <img src={img3} className='CarrouselImage'/>
            
        </div>
        <div>
            <img src={img4} className='CarrouselImage'/>
            
        </div>
      </Carousel>
      <p className="legenda">??reas de Atua????o: <br/>
              - Direito Civil e seus ramos: <br/>
              - Direito de Sucess??o <br/> 
              - Direito de Fam??lia <br/>
              - Direito Imobili??rio <br/>
              - Direito do Consumidor</p>
      <div className='Cards'>
        <div className='card'>
          <Carrousel variant="dark" indicators={false} >
            <Carrousel.Item>
              <p onClick={handlePub1} className='cardText'>
                Precedente do tribunal do Distrito Federal a respeito da impossibilidade de reter mais de 30% da conta-sal??rio, em caso de empr??stimo pessoal
              </p>
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
      <div className='footer' >
        <div className='contatos'>
          +55 (61) 9.9640-5998. <br />
          Asa Sul - Bras??lia/DF
        </div>
        <div className='linhaFooter' />
        <div className='linhaFooter1' />
        <div className='contatos'>
          cabralbezerra@adv.br <br />
          escritorio@cabralbezerra.com
        </div>
      </div>
    
      
      <div className={pub1 ? 'page-mask-open' : 'page-mask'} onClick={handlePub1} ></div>
      <div className={pub1 ? 'window-open' : 'window'}>
        <p className='pub'>
          APELA????O C??VEL. DIREITO DO CONSUMIDOR. SUPERENDIVIDAMENTO. CONTRATO DE EMPR??STIMO PESSOAL. DESCONTO EM CONTA CORRENTE. LIMITA????O EM 30% DOS PROVENTOS. POSSIBILIDADE. M??NIMO EXISTENCIAL PARA A SUBSIST??NCIA. DANO MORAL. INOCORR??NCIA. 1. Os servi??os de cr??dito e financiamento est??o submetidos ?? prote????o espec??fica do sistema de defesa do consumidor, por expressa previs??o do art. 3??, ?? 2??, do C??digo de Defesa do Consumidor, e em conformidade com S??mula n. 297 do Superior Tribunal de Justi??a. 2. As cl??usulas contratuais, em linhas gerais, devem guardar estrita observ??ncia ao dever de transpar??ncia, art. 4??, caput, do CDC, e estar em conformidade com a boa-f?? objetiva e o equil??brio nas rela????es entre consumidores e fornecedores, inc. III do mesmo dispositivo legal. 3. O superendividamento pode ser definido como a ?impossibilidade global do devedor-pessoa f??sica, consumidor, leigo e de boa-f??, de pagar todas as suas d??vidas atuais e futuras de consumo (exclu??das as d??vidas com o Fisco, oriundas de delitos e alimentos) em um tempo razo??vel com sua capacidade atual de rendas e patrim??nio?. 4. A prote????o conferida pela teoria do superendividamento destina-se a proteger os consumidores de boa-f?? que, apesar de desejarem, n??o possuem renda ou patrim??nio para honrar os compromissos assumidos. 5. O Superior Tribunal de Justi??a, por aplica????o anal??gica, consagrou o entendimento de que em vista da natureza alimentar dos sal??rios, referido limite tamb??m se aplica aos descontos em conta banc??ria. 6. O car??ter alimentar dos vencimentos imp??e a restri????o da cobran??a a um percentual razo??vel, a fim de n??o privar o mutu??rio do indispens??vel ?? sua sobreviv??ncia, sob pena de inobserv??ncia aos princ??pios constitucionais da prote????o legal do sal??rio (art. 7??, inc. X, CF), da dignidade da pessoa humana (art. 1??, inc. I, CF) e da razoabilidade. 7. A limita????o de desconto de 30% (trinta por cento) da remunera????o do correntista ?? considerada v??lida pela jurisprud??ncia mesmo na hip??tese de haver cl??usula autorizativa de descontos realizados diretamente em conta corrente. Isso se deve ?? necess??ria preserva????o do m??nimo existencial da parte correntista. 8. N??o obstante declarada a abusividade do contrato, n??o se verificam circunst??ncias que revelem viola????o a atributos da personalidade do consumidor, raz??o pela qual n??o se vislumbra no presente caso a caracteriza????o de dano extrapatrimonial. 9. Apela????o c??vel parcialmente provida.
          (TJ-DF 07301147620188070001 DF 0730114-76.2018.8.07.0001, Relator: HECTOR VALVERDE, Data de Julgamento: 10/07/2019, 1?? Turma C??vel, Data de Publica????o: Publicado no DJE : 19/07/2019 . P??g.: Sem P??gina Cadastrada.)
        </p>
      </div>

      <div id={wwp ? 'chat-box': 'chat-box-closed'}>
        <div id='chat-top'>Whatsapp <span id='chat-top-right'><svg id='close-box' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" fill='#fff'/></svg></span><div className='clear'></div></div>
        <div id='chat-msg'><p>We Are expert in Web Design and Technical SEO</p>
        <div id='chat-form'>
        <div className='chat-in'>
        <input onChange={e => setMensagem(e.target.value)} type='text' id='whats-in' placeholder='Mande sua mensagem...' /></div><a target="_blank" href={'https://api.whatsapp.com/send?phone=55555555&text=' + mensagem} id='send-btn'><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 48 48"><path d="M4.02 42L46 24 4.02 6 4 20l30 4-30 4z" fill='rgb(18, 140, 126)' /></svg></a></div>
        </div>
      </div>
      <div id='whats-chat'>

        <svg onClick={handleWwp} xmlns="http://www.w3.org/2000/svg" version="1" width="35" height="35" viewBox="0 0 90 90"><path d="M90 44a44 44 0 0 1-66 38L0 90l8-24A44 44 0 0 1 46 0c24 0 44 20 44 44zM46 7C25 7 9 24 9 44c0 8 2 15 7 21l-5 14 14-4a37 37 0 0 0 58-31C83 24 66 7 46 7zm22 47l-2-1-7-4-3 1-3 4h-3c-1 0-4-1-8-5-3-3-6-6-6-8v-2l2-2 1-1v-2l-4-8c0-2-1-2-2-2h-2l-3 1c-1 1-4 4-4 9s4 11 5 11c0 1 7 12 18 16 11 5 11 3 13 3s7-2 7-5l1-5z" fill="#FFF"/></svg>
      </div>

    </div>
  )
}

export default App
