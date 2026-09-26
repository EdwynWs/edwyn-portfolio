import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "Sistema de Manuais",
    company: "JCortiça / Artabas",

    description:
      "Plataforma empresarial desenvolvida para centralizar, organizar e disponibilizar manuais e projetos técnicos de painéis elétricos.",

    tags: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "JWT",
      "Cloudflare R2",
    ],

    image: "/sistema-manuais.png",

    url: "https://projeto-jc-gamma.vercel.app/",

    status: "online",
  },

  {
    number: "02",
    title: "TF Soluções Avícolas",
    company: "TF-Soluções Avícolas",

    description:
      "Site desenvolvido para apresentar as soluções e equipamentos da TF Soluções Avícolas, valorizando seus produtos e facilitando o contato de clientes para solicitação de orçamentos.",

    tags: ["Next.js", "React", "Css", "Vercel"],

    image: '/homeTf.png',
    url: 'https://tf-solucoes-avicolas.vercel.app/',

    status: "online",
  },

  {
    number: "03",
    title: "Feito a Mão",
    company: "Feito a Mão",

    description:
      "Site institucional desenvolvido para a Feito à Mão, destacando serviços de marcenaria, serralheria, restauração e projetos personalizados. O projeto valoriza o processo artesanal por meio de uma experiência visual moderna, interativa e responsiva, além de facilitar o contato para solicitação de orçamentos.",

    tags: [ 
    "Next.js", 
    "React", 
    "JavaScript", 
    "CSS", 
    "Responsive Design",
  ],

    image: "/feito-mao.png",
    url: "https://feito-a-mao-one.vercel.app/",

    status: "online",
  },


    {
    number: "04",
    title: "Barbearia",
    company: "BARBERSHOP",

    description:
  "Sistema de agendamento e gestão desenvolvido para a Barbershop Du Cortes. Permite aos clientes reservar horários, acompanhar agendamentos e receber confirmações por e-mail. Conta com painel administrativo para gerenciar serviços, agenda, pagamentos e despesas, além de dashboards e relatórios para acompanhar os resultados da barbearia, em uma interface responsiva.",

  tags: [
  "Next.js",
  "React",
  "JavaScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "CSS",
  "Responsive Design",
],

    image: "/barbearia.png",
    url: "https://barbershop-du-cortes.vercel.app/",

    status: "online",
  },
];

const otherProjects = [
  {
    title: "Oficina Mecânica",
    stack: "Node.js • Express • EJS • MySQL",
  },

  {
    title: "E-commerce",
    stack: "Node.js • Express • EJS • MySQL",
  },

  {
    title: "PDV Supermercado",
    stack: "Next.js • API REST",
  },

  {
    title: "Imobiliária",
    stack: "Next.js • React • API REST",
  },
];

const technologies = {
  Frontend: [
    "Next.js",
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
  ],

  Backend: [
    "Node.js",
    "Express",
    "REST API",
    "JWT",
    "Swagger",
    "Socket.io",
  ],

  "Banco de Dados": [
    "MySQL",
    "PostgreSQL",
    "Oracle",
    "SQL",
  ],

  Ferramentas: [
    "Git",
    "GitHub",
    "Docker",
    "Vercel",
    "Render",
    "Cloudflare R2",
  ],

  Outros: [
    "C#",
    ".NET",
    "Python",
    "C",
  ],
};

export default function Home() {
  return (
    <main>

      {/* ==================================================
          NAVBAR
      ================================================== */}

      <nav className="navbar">

        <a
          href="#home"
          className="logo"
          data-cursor="HOME"
        >
          &lt;EW<span>/</span>&gt;
        </a>

        <div className="navLinks">

          <a
            href="#about"
            data-cursor="ABOUT"
          >
            Sobre
          </a>

          <a
            href="#projects"
            data-cursor="WORK"
          >
            Projetos
          </a>

          <a
            href="#experience"
            data-cursor="CAREER"
          >
            Experiência
          </a>

          <a
            href="#stack"
            data-cursor="STACK"
          >
            Stack
          </a>

        </div>

        <a
          href="#contact"
          className="navContact"
          data-cursor="TALK"
        >
          Vamos conversar <span>↗</span>
        </a>

      </nav>


      {/* ==================================================
          HERO
      ================================================== */}

      <section
        className="hero"
        id="home"
      >

        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />

        <div className="heroStatus">

          <span className="statusDot" />

          Disponível para oportunidades

        </div>


        <div className="heroContent">

          <p className="eyebrow">
            FULL STACK DEVELOPER • BASTOS, SP
          </p>

          <h1>
            EDWYN
            <br />
            <span>WYLLY.</span>
          </h1>


          <div className="heroBottom">

            <p>
              Transformando{" "}
              <strong>
                problemas reais
              </strong>{" "}
              em experiências digitais e sistemas
              que geram resultado.
            </p>


            <div className="heroButtons">

              <a
                href="#projects"
                className="primaryButton"
                data-cursor="EXPLORE"
              >
                Ver projetos <span>↓</span>
              </a>


              <a
                href="https://github.com/EdwynWs"
                target="_blank"
                rel="noreferrer"
                className="secondaryButton"
                data-cursor="CODE ↗"
              >
                GitHub ↗
              </a>

            </div>

          </div>

        </div>


        {/* CARD DE CÓDIGO */}

        <div className="codeCard">

          <div className="codeHeader">

            <div className="windowDots">
              <span />
              <span />
              <span />
            </div>

            <small>
              developer.ts
            </small>

          </div>


          <pre>

            <span className="codePurple">
              const
            </span>{" "}

            <span className="codeBlue">
              developer
            </span>{" "}

            = {"{"}

            {"\n"}  name:{" "}

            <span className="codeGreen">
              &quot;Edwyn Wylly&quot;
            </span>,

            {"\n"}  role:{" "}

            <span className="codeGreen">
              &quot;Full Stack Developer&quot;
            </span>,

            {"\n"}  stack: [

            {"\n"}    <span className="codeGreen">
              &quot;Next.js&quot;
            </span>,

            {"\n"}    <span className="codeGreen">
              &quot;React&quot;
            </span>,

            {"\n"}    <span className="codeGreen">
              &quot;Node.js&quot;
            </span>,

            {"\n"}    <span className="codeGreen">
              &quot;SQL&quot;
            </span>

            {"\n"}  ],

            {"\n"}  building:{" "}

            <span className="codePurple">
              true
            </span>

            {"\n"}

            {"}"};

          </pre>

        </div>


        <div className="scrollIndicator">

          <span>
            SCROLL
          </span>

          <div />

        </div>

      </section>


      {/* ==================================================
          TECH TICKER
      ================================================== */}

      <div className="ticker">

        <div>

          NEXT.JS <span>✦</span>

          REACT <span>✦</span>

          NODE.JS <span>✦</span>

          TYPESCRIPT <span>✦</span>

          MYSQL <span>✦</span>

          POSTGRESQL <span>✦</span>

          REST API <span>✦</span>

          DOCKER <span>✦</span>

          NEXT.JS <span>✦</span>

          REACT <span>✦</span>

          NODE.JS <span>✦</span>

          TYPESCRIPT <span>✦</span>

        </div>

      </div>


      {/* ==================================================
          SOBRE
      ================================================== */}

      <section
        className="section about"
        id="about"
      >

        <div className="sectionLabel">

          <span>01</span>

          SOBRE MIM

        </div>


        <div className="aboutGrid">

          <div>

            <h2>

              Código é só
              <br />
              a ferramenta.

              <br />

              <span>
                Resolver é o objetivo.
              </span>

            </h2>

          </div>


          <div className="aboutText">

            <p>
              Sou{" "}
              <strong>
                Edwyn Wylly Horácio da Silva
              </strong>
              , desenvolvedor Full Stack e
              profissional de TI.
            </p>

            <p>
              Curso Análise e Desenvolvimento de
              Sistemas e atuo profissionalmente com
              tecnologia, desenvolvendo também
              soluções para problemas reais
              encontrados no ambiente empresarial.
            </p>

            <p>
              Trabalho desde interfaces com React
              e Next.js até APIs REST,
              autenticação, bancos de dados,
              armazenamento em nuvem e deploy.
            </p>

          </div>

        </div>


        <div className="stats">

          <div>

            <strong>
              FULL
            </strong>

            <span>
              STACK
            </span>

            <p>
              Frontend + Backend
            </p>

          </div>


          <div>

            <strong>
              REAL
            </strong>

            <span>
              WORLD
            </span>

            <p>
              Projetos empresariais
            </p>

          </div>


          <div>

            <strong>
              2026
            </strong>

            <span>
              ADS
            </span>

            <p>
              Formação
            </p>

          </div>


          <div>

            <strong>
              SP
            </strong>

            <span>
              BRASIL
            </span>

            <p>
              Remoto • Híbrido
            </p>

          </div>

        </div>

      </section>


      {/* ==================================================
          PROJETOS
      ================================================== */}

      <section
        className="section projects"
        id="projects"
      >

        <div className="sectionLabel">

          <span>
            02
          </span>

          PROJETOS SELECIONADOS

        </div>


        <div className="projectsHeader">

          <h2>

            Projetos que saíram

            <br />

            <span>
              do código para o mundo.
            </span>

          </h2>


          <p>
            Aplicações desenvolvidas para solucionar
            problemas empresariais e desafios reais
            de desenvolvimento.
          </p>

        </div>


        {/* ==============================
            LISTA DE PROJETOS
        ============================== */}

        <div className="projectList">

          {projects.map((project) => (

            <article
              className="project"
              key={project.number}
            >

              {/* NÚMERO */}

              <div className="projectNumber">
                {project.number}
              </div>


              {/* =========================
                  PREVIEW
              ========================= */}

              <div className="projectVisual">

                {project.image ? (

                  <div className="projectBrowser">


                    {/* BROWSER TOP */}

                    <div className="projectBrowserTop">

                      <div className="browserDots">
                        <span />
                        <span />
                        <span />
                      </div>


                      <div className="browserAddress">

                        {project.url
                          ? project.url
                              .replace("https://", "")
                              .replace("/", "")
                          : project.title
                              .toLowerCase()
                              .replaceAll(" ", "-")}

                      </div>


                      <span className="browserLive">
                        LIVE
                      </span>

                    </div>


                    {/* SCREENSHOT */}

                    <div className="projectScreenshot">

                      <Image
                        src={project.image}
                        alt={`Página inicial do ${project.title}`}
                        fill
                        priority={project.number === "01"}
                        sizes="(max-width: 1000px) 100vw, 50vw"
                      />


                      <div className="screenshotOverlay" />


                      {project.url && (

                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="imageProjectLink"
                          data-cursor="LAUNCH ↗"
                          aria-label={`Abrir ${project.title}`}
                        >

                          <span>
                            ABRIR PROJETO
                          </span>

                          <strong>
                            ↗
                          </strong>

                        </a>

                      )}

                    </div>

                  </div>

                ) : (

                  /* =========================
                     EM DESENVOLVIMENTO
                  ========================= */

                  <div className="projectDevelopment">

                    <div className="developmentGrid" />


                    <div className="developmentContent">

                      <span className="developmentNumber">
                        {project.number}
                      </span>


                      <div className="developmentIcon">
                        &lt;/&gt;
                      </div>


                      <strong>
                        EM DESENVOLVIMENTO
                      </strong>


                      <p>
                        BUILDING SOMETHING NEW_
                      </p>


                      <div className="developmentLine">
                        <span />
                      </div>

                    </div>

                  </div>

                )}

              </div>


              {/* =========================
                  INFORMAÇÕES
              ========================= */}

              <div className="projectInfo">


                <div className="projectMeta">

                  <span className="projectCompany">
                    {project.company}
                  </span>


                  {project.status === "online" ? (

                    <span className="projectStatus online">

                      <i />

                      ONLINE

                    </span>

                  ) : (

                    <span className="projectStatus development">

                      <i />

                      EM DESENVOLVIMENTO

                    </span>

                  )}

                </div>


                <h3>
                  {project.title}
                </h3>


                <p>
                  {project.description}
                </p>


                <div className="tags">

                  {project.tags.map((tag) => (

                    <span key={tag}>
                      {tag}
                    </span>

                  ))}

                </div>


                {/* PROJETO ONLINE */}

                {project.url ? (

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="projectVisit"
                    data-cursor="LAUNCH ↗"
                  >

                    <div>

                      <small>
                        PROJETO PUBLICADO
                      </small>

                      <strong>
                        Visitar aplicação
                      </strong>

                    </div>


                    <span>
                      ↗
                    </span>

                  </a>

                ) : (

                  /* PROJETO EM DESENVOLVIMENTO */

                  <div className="projectComingSoon">

                    <span>
                      ◌
                    </span>


                    <div>

                      <small>
                        STATUS
                      </small>

                      <strong>
                        Projeto em desenvolvimento
                      </strong>

                    </div>

                  </div>

                )}

              </div>

            </article>

          ))}

        </div>


        {/* ==================================================
            OUTROS PROJETOS
        ================================================== */}

        <div className="otherProjects">

          <h3>
            Outros projetos
          </h3>


          <div className="otherGrid">

            {otherProjects.map((project) => (

              <div
                className="smallProject"
                key={project.title}
              >

                <span>
                  ↗
                </span>

                <h4>
                  {project.title}
                </h4>

                <p>
                  {project.stack}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          MANIFESTO / PROCESSO
      ================================================== */}

      <section className="manifesto">

        <p>
          EU NÃO DESENVOLVO
        </p>


        <h2>

          APENAS

          <br />

          <span>
            TELAS.
          </span>

        </h2>


        <div className="process">


          <div>

            <span>
              01
            </span>

            <h3>
              Entendo.
            </h3>

            <p>
              Analiso o problema e os processos
              antes de escrever código.
            </p>

          </div>


          <div>

            <span>
              02
            </span>

            <h3>
              Desenho.
            </h3>

            <p>
              Transformo requisitos em uma solução
              simples e escalável.
            </p>

          </div>


          <div>

            <span>
              03
            </span>

            <h3>
              Desenvolvo.
            </h3>

            <p>
              Frontend, backend, banco de dados
              e integrações.
            </p>

          </div>


          <div>

            <span>
              04
            </span>

            <h3>
              Entrego.
            </h3>

            <p>
              Deploy, validação, correções e
              evolução da aplicação.
            </p>

          </div>

        </div>

      </section>


      {/* ==================================================
          EXPERIÊNCIA
      ================================================== */}

      <section
        className="section experience"
        id="experience"
      >

        <div className="sectionLabel">

          <span>
            03
          </span>

          EXPERIÊNCIA

        </div>


        <div className="experienceGrid">


          <h2>

            Onde tecnologia

            <br />

            encontra{" "}

            <span>
              negócio.
            </span>

          </h2>


          <div className="timeline">


            {/* JCORTIÇA */}

            <div className="timelineItem">

              <div className="timelineDate">
                ATUAL
              </div>


              <div>

                <span>
                  JCORTIÇA PAINÉIS ELÉTRICOS
                </span>

                <h3>
                  Auxiliar de TI
                </h3>

                <p>
                  Atuação em tecnologia e suporte,
                  além do desenvolvimento de
                  aplicações internas para
                  organização de documentação,
                  relatórios e melhoria de processos
                  empresariais.
                </p>

              </div>

            </div>


            {/* UNOESTE */}

            <div className="timelineItem">

              <div className="timelineDate">
                2026
              </div>


              <div>

                <span>
                  UNOESTE
                </span>

                <h3>
                  Análise e Desenvolvimento de Sistemas
                </h3>

                <p>
                  Desenvolvimento web, APIs,
                  banco de dados, arquitetura de
                  software e engenharia de aplicações.
                </p>

              </div>

            </div>


            {/* ETEC */}

            <div className="timelineItem">

              <div className="timelineDate">
                2023
              </div>


              <div>

                <span>
                  ETEC PROF. MASSUYUKI KAWANO
                </span>

                <h3>
                  Técnico em Administração
                </h3>

                <p>
                  Formação que complementa tecnologia
                  com conhecimento sobre processos,
                  gestão e ambiente empresarial.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          STACK
      ================================================== */}

      <section
        className="section stack"
        id="stack"
      >

        <div className="sectionLabel">

          <span>
            04
          </span>

          TECNOLOGIAS

        </div>


        <h2>

          Minha{" "}

          <span>
            stack.
          </span>

        </h2>


        <div className="stackGrid">

          {Object.entries(technologies).map(
            ([category, items]) => (

              <div
                className="stackGroup"
                key={category}
              >

                <span>
                  {category}
                </span>


                {items.map((item) => (

                  <div key={item}>
                    {item}
                  </div>

                ))}

              </div>

            )
          )}

        </div>

      </section>


      {/* ==================================================
          CONTATO
      ================================================== */}

      <section
        className="contact"
        id="contact"
      >

        <p>
          TEM UMA IDEIA, PROJETO OU OPORTUNIDADE?
        </p>


        <h2>

          VAMOS CRIAR

          <br />

          ALGO{" "}

          <span>
            JUNTOS.
          </span>

        </h2>


        <p className="contactText">

          Estou aberto a oportunidades como
          Desenvolvedor Júnior e a novos projetos
          de desenvolvimento.

        </p>


        <div className="contactLinks">


          <a
            href="mailto:edwynws77@gmail.com"
            data-cursor="MAIL ↗"
          >
            E-mail ↗
          </a>


          <a
            href="https://github.com/EdwynWs"
            target="_blank"
            rel="noreferrer"
            data-cursor="CODE ↗"
          >
            GitHub ↗
          </a>


          <a
            href="https://www.linkedin.com/in/edwyn-wylly-8754562b5/"
            target="_blank"
            rel="noreferrer"
            data-cursor="CONNECT ↗"
          >
            LinkedIn ↗
          </a>


        </div>

      </section>


      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer>

        <a
          href="#home"
          className="logo"
          data-cursor="TOP ↑"
        >
          &lt;EW<span>/</span>&gt;
        </a>


        <p>
          Edwyn Wylly © 2026
        </p>


        <p>
          Built with Next.js
        </p>

      </footer>

    </main>
  );
}