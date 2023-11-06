import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useScrollPosition } from './hooks/useScrollPosition';
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
import Barra1 from './assets/canto inferior sem texto.png'
import Barra2 from './assets/canto superior.png'
import logoEmpresa from './assets/LogoGabrielFundoEscuro2.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [pub1, setPub1] = useState(false)
  const [wwp, setWwp] = useState(false)
  const [opened, setOpened] = useState(false)
  const [mensagem, setMensagem] = useState('')

  useEffect(() => {
    if (scrollPosition > 180 && window.innerWidth > 900 && opened == false) {
      setWwp(true)
      setOpened(true)
    }
  });

  function handlePub1 () {
    setPub1(!pub1)
    console.log(pub1)
  }

  function handleWwp () {
    setWwp(!wwp)
    console.log(wwp)
  }

  const scrollPosition = useScrollPosition()

  console.log(scrollPosition)
  
  return (
    <div className="App">
      
      
      <div className='Header' >
        <div className='FotoPerfil' ></div>
        <img className='Logo' src={Logo} alt ='' />
        <img className='Nome' src={Nome} alt='' />
        <img className='Logo1' src={Logo} alt ='' />
        <div className='Areas'>
            <h5>Áreas de atuação:</h5>  Direito Civil e seus ramos
            <li>Direitos de Sucessão</li>
            <li>Direito de Família</li>
            <li>Direito Imobiliário</li>
            <li>Direito do Consumidor</li>
        </div>
        <img src={Barra1} className='Barra1'/>
        <img src={Barra2} className='Barra2'/>
      </div>
      <div className='Mobile' >
        <img className='FotoPerfilM' src={logoEmpresa}></img>
        <div className='AreasMobile'>
              <h5>Áreas de atuação:</h5>  Direito Civil e seus ramos
              <li>Direitos de Sucessão</li>
              <li>Direito de Família</li>
              <li>Direito Imobiliário</li>
              <li>Direito do Consumidor</li>
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
     
      <div className='Cards'>
        <div className='card'>
          <Carrousel variant="dark" indicators={false} >
            <Carrousel.Item>
              <p onClick={handlePub1} className='cardText'>
                Precedente do tribunal do Distrito Federal a respeito da impossibilidade de reter mais de 30% da conta-salário, em caso de empréstimo pessoal
              </p>
            </Carrousel.Item>
            <Carrousel.Item>
              <p className='cardText'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </Carrousel.Item>
            <Carrousel.Item>
             <p className='cardText'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </Carrousel.Item>
          </Carrousel>
        </div>
        <div className='card' >
          <Carrousel variant="dark"indicators={false} fade>
            <Carrousel.Item>
              <p className='cardText'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </Carrousel.Item>
            <Carrousel.Item>
              <p className='cardText'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </Carrousel.Item>
            <Carrousel.Item>
              <p className='cardText'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </Carrousel.Item>
      </Carrousel>
        </div>
      </div>
      <div className='footer' >
        <div className='Redes'>
          <a className='Rede' href='https://web.facebook.com/cabralbezerraadv' target="_blank"><img src={Face} alt='' className='Face'/></a>
          <a className='Rede' href='https://instagram.com/escritoriocabralbezerra?igshid=YmMyMTA2M2Y=' target="_blank"><img src={Insta} alt='' className='Face'/></a>
          <a className='Rede' href='https://twitter.com/escritorioCBadv' target="_blank"><img src={Twitter} alt='' className='Face'/></a>
        </div>
        <div className='contatos'>
          
          Setor Comercial Sul, <br />Quadra 01, Edifício JK,<br /> Conjunto 122, CEP 70306-900, <br /> Brasília-DF
        </div>
        <div className='linhaFooter' />
        <div className='linhaFooter1' />
        <div className='contatos1'>
          +55 (61) 9.9158-9849 <br />
          escritorio@cabralbezerra.com
        </div>
      </div>
    
      
      <div className={pub1 ? 'page-mask-open' : 'page-mask'} onClick={handlePub1} ></div>
      <div className={pub1 ? 'window-open' : 'window'}>
        <p className='pub'>
          APELAÇÃO CÍVEL. DIREITO DO CONSUMIDOR. SUPERENDIVIDAMENTO. CONTRATO DE EMPRÉSTIMO PESSOAL. DESCONTO EM CONTA CORRENTE. LIMITAÇÃO EM 30% DOS PROVENTOS. POSSIBILIDADE. MÍNIMO EXISTENCIAL PARA A SUBSISTÊNCIA. DANO MORAL. INOCORRÊNCIA. 1. Os serviços de crédito e financiamento estão submetidos à proteção específica do sistema de defesa do consumidor, por expressa previsão do art. 3º, § 2º, do Código de Defesa do Consumidor, e em conformidade com Súmula n. 297 do Superior Tribunal de Justiça. 2. As cláusulas contratuais, em linhas gerais, devem guardar estrita observância ao dever de transparência, art. 4º, caput, do CDC, e estar em conformidade com a boa-fé objetiva e o equilíbrio nas relações entre consumidores e fornecedores, inc. III do mesmo dispositivo legal. 3. O superendividamento pode ser definido como a ?impossibilidade global do devedor-pessoa física, consumidor, leigo e de boa-fé, de pagar todas as suas dívidas atuais e futuras de consumo (excluídas as dívidas com o Fisco, oriundas de delitos e alimentos) em um tempo razoável com sua capacidade atual de rendas e patrimônio?. 4. A proteção conferida pela teoria do superendividamento destina-se a proteger os consumidores de boa-fé que, apesar de desejarem, não possuem renda ou patrimônio para honrar os compromissos assumidos. 5. O Superior Tribunal de Justiça, por aplicação analógica, consagrou o entendimento de que em vista da natureza alimentar dos salários, referido limite também se aplica aos descontos em conta bancária. 6. O caráter alimentar dos vencimentos impõe a restrição da cobrança a um percentual razoável, a fim de não privar o mutuário do indispensável à sua sobrevivência, sob pena de inobservância aos princípios constitucionais da proteção legal do salário (art. 7º, inc. X, CF), da dignidade da pessoa humana (art. 1º, inc. I, CF) e da razoabilidade. 7. A limitação de desconto de 30% (trinta por cento) da remuneração do correntista é considerada válida pela jurisprudência mesmo na hipótese de haver cláusula autorizativa de descontos realizados diretamente em conta corrente. Isso se deve à necessária preservação do mínimo existencial da parte correntista. 8. Não obstante declarada a abusividade do contrato, não se verificam circunstâncias que revelem violação a atributos da personalidade do consumidor, razão pela qual não se vislumbra no presente caso a caracterização de dano extrapatrimonial. 9. Apelação cível parcialmente provida.
          (TJ-DF 07301147620188070001 DF 0730114-76.2018.8.07.0001, Relator: HECTOR VALVERDE, Data de Julgamento: 10/07/2019, 1ª Turma Cível, Data de Publicação: Publicado no DJE : 19/07/2019 . Pág.: Sem Página Cadastrada.)
        </p>
      </div>

      <div id={wwp ? 'chat-box': 'chat-box-closed'}>
        <div id='chat-top'>Whatsapp <span id='chat-top-right'><svg onClick={handleWwp} id='close-box' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" fill='#fff'/></svg></span><div className='clear'></div></div>
        <div id='chat-msg'> 
                            <p>Olá, tudo bem? </p>
                            <p>Este é o canal de atendimento do escritório de advocacia Cabral Bezerra Advogados Associados.  </p>
                            <p>Por favor, informe-nos como podemos ajudar-lhe?</p>
        <div id='chat-form'>
        <div className='chat-in'>
        <input onChange={e => setMensagem(e.target.value)} type='text' id='whats-in' placeholder='Mande sua mensagem...' /></div><a target="_blank" href={'https://api.whatsapp.com/send?phone=+5561991589849&text=' + mensagem} id='send-btn'><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 48 48"><path d="M4.02 42L46 24 4.02 6 4 20l30 4-30 4z" fill='rgb(18, 140, 126)' /></svg></a></div>
        </div>
      </div>
      <div id='whats-chat'>

        <svg onClick={handleWwp} xmlns="http://www.w3.org/2000/svg" version="1" width="35" height="35" viewBox="0 0 90 90"><path d="M90 44a44 44 0 0 1-66 38L0 90l8-24A44 44 0 0 1 46 0c24 0 44 20 44 44zM46 7C25 7 9 24 9 44c0 8 2 15 7 21l-5 14 14-4a37 37 0 0 0 58-31C83 24 66 7 46 7zm22 47l-2-1-7-4-3 1-3 4h-3c-1 0-4-1-8-5-3-3-6-6-6-8v-2l2-2 1-1v-2l-4-8c0-2-1-2-2-2h-2l-3 1c-1 1-4 4-4 9s4 11 5 11c0 1 7 12 18 16 11 5 11 3 13 3s7-2 7-5l1-5z" fill="#FFF"/></svg>
      </div>

    </div>
  )
}

export default App
