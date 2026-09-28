function Home() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="tag">
          DESENVOLVIMENTO DE SISTEMAS
        </span>

        <h1>
          Meu <span>Portfólio</span>
        </h1>

        <div className="hero-text">
          <p>
            Sou estudante de Desenvolvimento de Sistemas.
          </p>

          <p>
            Áreas de interesse: Desenvolvimento web, Front-end, JavaScript,
            e React.
          </p>

          <p>
            Conheça o meu trabalho: Olhe os meus projetos, veja o que eu
            estou aprendendo e acompanhe a minha evolução em
            desenvolvimentos de sites.
          </p>
        </div>

        <div className="hero-buttons">
          <a href="#projetos" className="btn primary">
            Ver meus projetos
          </a>

          <a href="#contato" className="btn secondary">
            Meios de contato
          </a>
        </div>

      </div>

      <div className="hero-image">
        <div className="image-glow"></div>

        <img
          src="/src/assets/hero.png"
          alt="Imagem do portfólio"
        />
      </div>

    </section>
  );
}

export default Home;