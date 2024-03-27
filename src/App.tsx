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
  const [pub2, setPub2] = useState(false)
  const [pub3, setPub3] = useState(false)
  const [txt1, setTxt1] = useState(false)
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

  function handlePub2 () {
    setPub2(!pub2)
    console.log(pub2)
  }

  function handlePub3 () {
    setPub3(!pub3)
    console.log(pub3)
  }

  function handleTxt1 () {
    setTxt1(!txt1)
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
        <div className='card1'>
          <Carrousel variant="dark" indicators={false} >
            <Carrousel.Item>
              <p onClick={handlePub1} className='cardText'>
                Precedente do tribunal do Distrito Federal a respeito da impossibilidade de reter mais de 30% da conta-salário, em caso de empréstimo pessoal
              </p>
            </Carrousel.Item>
            <Carrousel.Item>
              <p onClick={handlePub2} className='cardText'>
              CNJ lança ferramenta que permite identificar ativos e agilizar execução 
              </p>
            </Carrousel.Item>
            <Carrousel.Item>
             <p onClick={handlePub3} className='cardText'>
             Prescrição também impede cobrança extrajudicial da dívida, diz STJ 
              </p>
            </Carrousel.Item>
          </Carrousel>
        </div>
        <div className='card1' >
          <Carrousel variant="dark"indicators={false} >
            <Carrousel.Item>
              <p onClick={handleTxt1} className='cardText'>
              Frequentemente, nossos clientes apresentam uma dúvida recorrente relacionada ao funcionamento dos processos judiciais. 
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

      <div className={pub2 ? 'page-mask-open' : 'page-mask'} onClick={handlePub2} ></div>
      <div className={pub2 ? 'window-open' : 'window'}>
        <p className='pub'>
        O Conselho Nacional de Justiça (CNJ) lançou, nesta terça-feira (16/8), ferramenta digital para agilizar e centralizar a busca de ativos e patrimônios em diversas bases de dados. O Sistema Nacional de Investigação Patrimonial e Recuperação de Ativos (Sniper), desenvolvido no Programa Justiça 4.0, identifica em segundos os vínculos patrimoniais, societários e financeiros entre pessoas físicas e jurídicas. <br/>
        Lançamento do Sniper, ferramenta que permite localizar ativos e patrimônios
        Romulo Serpa/CNJ 
        Com isso, a expectativa é que a busca de ativos — que hoje chega a levar meses e mobiliza uma equipe especializada em investigação patrimonial a partir da análise de documentos — possa ser feita rapidamente. <br/>
        Os resultados são representados em grafos (conjunto de informações e das relações existentes entre eles) de fácil compreensão pela magistratura, indicando as ligações entre os atores de forma simples, o que contribui para reduzir o tempo de conclusão dos processos na fase de execução e cumprimento de sentença — maior gargalo atual dos processos judiciais. <br/>
        De acordo com o relatório Justiça em Números, existem quase 40 milhões de processos com execução pendente, o que corresponde a mais da metade (58%) do total de processos pendentes (75 milhões). <br/>
        Para receber uma sentença, o processo leva, desde a data de ingresso, quase o triplo de tempo na fase de execução (quatro anos e sete meses) em comparação com a fase de conhecimento (um ano e sete meses). A taxa de congestionamento durante a execução é de 84%. Ou seja, são processos que ficam aguardando bens, ativos ou direitos passíveis de constrição judicial para uma solução e o cumprimento da sentença judicial.<br/>
        Diante disso, o presidente do CNJ, ministro Luiz Fux, avalia que o Sniper irá aprimorar a atuação do Judiciário. "É o caça-fantasmas de bens, que passa a satisfazer não só as execuções, mas também a recuperação de ativos decorrentes dos crimes de corrupção e lavagem de dinheiro", afirmou. A solução dificulta a ocultação patrimonial e aumenta a possibilidade de cumprimento de uma ordem judicial em sua totalidade, com a identificação de recursos para o pagamento de dívidas, especialmente na área fiscal.<br/>
        "O Sniper foi desenvolvido para trazer agilidade e eficiência na descoberta de relações e vínculos de interesse do processo judicial. Ele permite a melhor compreensão das provas produzidas em processos judiciais de crimes financeiros complexos, como a corrupção e lavagem de capitais, em segundos e com maior eficiência", explica Dorotheo Barbosa Neto, juiz auxiliar da presidência do CNJ que está à frente do projeto.<br/>
        Como funciona <br/>
        Com uma interface amigável e navegação intuitiva em plataforma web, o Sniper já disponibiliza uma consulta rápida a bases de dados abertas e fechadas, com a possibilidade de incluir novas bases de informações. O acesso ao sistema só é ser feito por pessoas autorizadas, a partir da decisão de quebra de sigilo, para garantir a segurança das informações.<br/>
        Por meio do sistema, usuários e usuárias podem buscar dados de pessoas físicas e jurídicas pelo nome, CPF, razão social, nome fantasia ou CNPJ. É possível visualizar as informações, a relação de bens e ativos (incluindo aeronaves e embarcações) e as relações com outras pessoas físicas e jurídicas. As informações podem ser exportadas em um relatório no formato .pdf e anexadas a um processo judicial.<br/>
        Atualmente, já estão integrados ao Sniper os dados de CPF e CNPJ, as bases de candidatos e bens declarados do Tribunal Superior Eleitoral (TSE), informações sobre sanções administrativas, empresas punidas e acordos de leniência (CGU), dados do Registro Aeronáutico Brasileiro (Anac), embarcações listadas no Registro Especial Brasileiro (Tribunal Marítimo) e informações sobre processos judiciais, como partes, classe, assunto dos processos e valores (cabeçalho processual, do CNJ).<br/>
        No módulo de dados sigilosos, poderão ser adicionadas informações fiscais e bancárias, com acesso restrito a usuários autorizados, a partir da integração com o Infojud e Sisbajud.<br/>
        O sistema foi elaborado por equipe multidisciplinar do CNJ e do Programa das Nações Unidas para o Desenvolvimento (Pnud), com a participação de profissionais de tecnologia e especialistas em Direito e investigação patrimonial. Com informações da assessoria de imprensa do CNJ.<br/><br/>
        Revista Consultor Jurídico, 21 de agosto de 2022, 7h48
        </p>
      </div>

      <div className={pub3 ? 'page-mask-open' : 'page-mask'} onClick={handlePub3} ></div>
      <div className={pub3 ? 'window-open' : 'window'}>
        <p className='pub'>
          O reconhecimento de uma determinada dívida impede qualquer tipo de cobrança, inclusive aquela feita fora do processo. O débito não deixa de existir, mas não pode mais ser cobrado. Com esse entendimento, a 3ª Turma do Superior Tribunal de Justiça negou provimento ao recurso especial de uma empresa de recuperação de créditos.<br/>
          O reconhecimento da prescrição impede qualquer cobrança do débito, diz ministraGustavo Lima/STJ 
          A posição representa uma correção de rumos da jurisprudência do colegiado, já que há acórdãos em que se admitiu a cobrança extrajudicial de dívidas prescritas, mediante a errônea interpretação de um precedente da 3ª Turma julgado em 2017.<br/>
          Em suma, a prescrição torna inviável apenas a cobrança da dívida. Isso não significa que ela deixou de existir, nem que houve a quitação do saldo devedor. Ainda assim, o credor perde o direito de exercer qualquer pretensão, seja através do processo ou fora dele.<br/>
          No caso julgado, a ação foi ajuizada por um particular que passou a ser alvo de cobranças feitas pela empresa de recuperação de créditos por meio de telefonemas, e-mail, mensagens de texto de celular (SMS e WhatsApp). Ele teve seu nome inscrito em cadastro de inadimplentes.<br/>
          A sentença entendeu que a cobrança como estava sendo feita pela empresa seria possível, mas o Tribunal de Justiça de São Paulo deu provimento à apelação por entender que a prescrição da dívida a torna inexigível e veda qualquer cobrança, seja judicial ou extrajudicial.<br/>
          Relatora, a ministra Nancy Andrighi manteve essa interpretação. Ela explicou que a prescrição atua encobrindo a eficácia da pretensão de cobrar a dívida, a qual se submete ao princípio da indiferença das vias. Ou seja, a pretensão de cobrança não pode ser mais exercida por qualquer meio existente.<br/>
          Ao cobrar extrajudicialmente o devedor, o credor está, efetivamente, exercendo sua pretensão, ainda que fora do processo, já que não é apenas em juízo que se exercem as pretensões. Para a ministra Nancy Andrighi, essa ação está inviabilizada pela ocorrência da prescrição.<br/>
          "Logo, se a pretensão é o poder de exigir o cumprimento da prestação, uma vez paralisada a sua eficácia em razão do transcurso do prazo prescricional, não será mais possível exigir o referido comportamento, ou seja, não será mais possível cobrar do devedor a dívida", resumiu.<br/>
          "Pouco importa a via ou instrumento utilizado para a realização da cobrança, porquanto a pretensão — que é o instituto de direito material que confere ao credor esse poder — encontra-se praticamente inutilizada pela prescrição", acrescentou. A votação foi unânime.<br/><br/>
          Revista Consultor Jurídico, 30 de outubro de 2023, 7h49

        </p>
      </div>

      <div className={txt1 ? 'page-mask-open' : 'page-mask'} onClick={handleTxt1} ></div>
      <div className={txt1 ? 'window-open' : 'window'}>
        <p className='pub'>
          Frequentemente, nossos clientes apresentam uma dúvida recorrente relacionada ao funcionamento dos processos judiciais. Para aqueles que desejam entrar com uma ação judicial ou já têm experiências judiciais anteriores e não foram bem assessorados, esclarecer o andamento de um processo judicial pode ser desafiador. Por vezes, ao verificar a posição do processo nos sites dos tribunais, encontram termos como "disponibilizado no DJ eletrônico", "recebido os autos" ou "processo concluso para o juiz", que podem parecer desconcertantes.<br/>
          Nesta oportunidade, gostaria de simplificar essa questão. Uma analogia que pode auxiliar na compreensão do processo judicial é compará-lo a um jogo de "batata quente" que costumávamos brincar quando éramos crianças.<br/>
          Imaginemos a seguinte situação: Você está em um jogo de batata quente com outros dois participantes, o juiz e o advogado. A "bola" inicia em suas mãos e você a passa para o juiz, que por sua vez a entrega ao advogado. O advogado devolve a "bola" ao juiz, e o juiz, por fim, a devolve a você.<br/>
          Na nossa analogia, no contexto do processo judicial, quem detém a "batata quente" é a parte com o direito de se manifestar ou apresentar informações, seja mediante petições escritas ou documentos. Uma vez feita esta manifestação, a "batata quente" é passada para a outra parte, que segue o mesmo processo, podendo devolvê-la a você, dependendo do conteúdo do processo em questão.<br/>
          Por fim, no nosso jogo imaginário, o juiz, apesar de jogar junto conosco, também fará o papel de árbitro do jogo, olhando tudo o que acontece, e que dará a palavra final sobre quem irá ganhar, baseado em qual dos outros dois jogadores se manifestou de forma mais eficaz, ou seja, “quem jogou o jogo melhor”.<br/>
          Lembrando que nossa analogia, o juiz, apesar de também jogar junto, não pode ganhar o jogo. Ele também “pega na batata quente quando algum dos jogadores a joga em sua direção”, ou seja, ele também se manifesta no desenrolar do processo, mas ele não pode “ganhar” o jogo. Somente um dos outros jogadores, os advogados, podem fazê-lo.<br/>
          Uma explicação simples, mas espero que tenha ajudado a explicar de forma mais clara como funciona o processo judicial na prática. Estou à disposição para eventuais esclarecimentos adicionais.<br/><br/>
          Atenciosamente,<br/><br/>
          Gabriel Parente.<br/><br/>
          Cabral Bezerra Advogados Associados'

        </p>
      </div>
      {/* <div id={wwp ? 'chat-box': 'chat-box-closed'}>
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
      </div> */}
      

    </div>
    
  )
}

export default App
