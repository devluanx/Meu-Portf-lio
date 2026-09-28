import Instagram from "../assets/logo ig.png";
import Email from "../assets/email logo.png";

function Contato() {
  return (
    <section className="section contato-section" id="contato">

      <div className="section-title">
        <span>03</span>
        <h2>Meios de contato</h2>
      </div>

      <div className="contatos">

        <a
          href="https://www.instagram.com/santosdev._"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <img src={Instagram} alt="Instagram" />

          <div>
            <small>INSTAGRAM</small>
            <span>@santosdev._</span>
          </div>

          <strong>↗</strong>
        </a>

        <a
          href="mailto:luan_santos-silva@estudante.sesisenai.org.br"
          className="contact-card"
        >
          <img src={Email} alt="Email" />

          <div>
            <small>EMAIL</small>
            <span>
              luan_santos-silva@estudante.sesisenai.org.br
            </span>
          </div>

          <strong>↗</strong>
        </a>

      </div>

    </section>
  );
}

export default Contato;