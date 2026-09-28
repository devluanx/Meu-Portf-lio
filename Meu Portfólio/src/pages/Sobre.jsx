function Sobre() {
  return (
    <section className="section sobre" id="sobre">

      <div className="section-title">
        <span>01</span>
        <h2>Sobre Mim:</h2>
      </div>

      <div className="sobre-grid">

        <div className="sobre-texto">

          <p>
            Nome: Luan Santos da Silva
          </p>

          <p>
            Curso: DESI
          </p>

          <p>
            Localidade: Nova Palhoça, Santa Catarina
          </p>

          <p>
            Áreas que eu gosto: Desenvolvimento web, Front-end e criação
            de sistemas
          </p>

          <p>
            Tecnologias que eu conheço: HTML, CSS, JavaScript, SGBD´s, react
          </p>

          <p>
            Tecnologias que eu gostaria de aprender: PHP, C#, C++, Python
            entre outras voltadas a desenvolvimento web.
          </p>

        </div>

        <div className="skills">

          <div className="skill-card">
            <span>01</span>
            <h3>HTML</h3>
          </div>

          <div className="skill-card">
            <span>02</span>
            <h3>CSS</h3>
          </div>

          <div className="skill-card">
            <span>03</span>
            <h3>JavaScript</h3>
          </div>

          <div className="skill-card">
            <span>04</span>
            <h3>React</h3>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Sobre;