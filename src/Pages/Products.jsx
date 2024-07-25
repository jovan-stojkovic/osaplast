import { Link } from "react-router-dom";
import "../Styles/Products.scss";
import { motion } from "framer-motion";

const Products = () => {
  const sectionMotion = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4,
        duration: 0.2,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <div className="page products">
      <motion.section
        className="vanilla-section"
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
      >
        <div className="text-part">
          <h1>Garnišne za zavese</h1>
          <h3>
            Ukrasne garnišne za zavese - elegancija i funkcionalnost u vašem
            enterijeru.
          </h3>
          <p>
            Dodajte dašak sofisticiranosti i stila vašem prostoru uz naše
            predivne ukrasne garnišne za zavese. Naša kolekcija garnišni nudi
            savršenu kombinaciju estetike i funkcionalnosti, pružajući ne samo
            podršku vašim zavesama već i ističući jedinstven karakter vašeg
            enterijera.
          </p>
          <h5>Zašto izabrati naše garnišne?</h5>
          <ul>
            <li>
              Kvalitetan materijal: Naše garnišne izrađene su od
              visokokvalitetnih materijala koji osiguravaju dugotrajnu
              izdržljivost i stabilnost.
            </li>
            <li>
              Elegantan dizajn: S širokim spektrom dizajna i završnih obrada, od
              klasičnih do modernih stilova, pronaći ćete garnišne koje se
              savršeno uklapaju u svaki prostor.
            </li>
            <li>
              Jednostavna instalacija: Dizajnirane za jednostavnu i brzu
              montažu, naše garnišne omogućavaju lako postavljanje i
              prilagođavanje.
            </li>
            <li>
              Funkcionalnost i stvaranje atmosfere: Osim što podržavaju vaše
              zavese, naš izbor garnišni doprinosi stvaranju željene atmosfere,
              bilo da se radi o sofisticiranom, minimalističkom ili rustikalnom
              izgledu.
            </li>
          </ul>
          <h5>Pretražite našu ponudu</h5>
          <p>
            Istražite našu kolekciju i pronađite savršene ukrasne garnišne za
            zavese koje će unaprediti izgled vašeg prostora. Uz kvalitet i
            dizajn koji su u centru naše ponude, garantujemo da ćete pronaći
            rešenje koje odgovara vašim potrebama i estetskim željama.
          </p>
          <h5>Kontaktirajte nas</h5>
          <p>
            Imate pitanja ili vam treba pomoć u odabiru? Naš tim stručnjaka je
            ovde da vam pomogne.
          </p>

          {/* <Link
            to="/proizvodi/kategorija-jedan"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Pogledaj kompletnu ponudu
          </Link> */}
        </div>
        <div className="img-part"></div>
      </motion.section>
      <motion.section
        className="vanilla-section"
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
      >
        <div className="text-part">
          <h1>Category 2</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <p>
            Lorem ipsum dolor sit amet consect etur adipis icing elit. Qui quis
            officiis, iure debitis ipsam laboriosam error obca ecati bland itiis
            sapiente dolorum. Est repellat sapiente, itaque nisi quasi at cumque
            nemo ipsa. Possimus esse omnis commodi hic volupt atibus? Ipsa
            repudi andae sint, aperiam incidunt distinctio tempora tempor ibus
            perfere ndis magnam pariatur facilis non reic iendis! Kitaque nisi
            quasi at cumque nemo ipsa. Possimus esse omnis commodi hic volupt
            atibus? Ipsa repudi andae sint, aperiam incidunt distinctio tempora
            tempor ibus perfere ndis magnam pariatur facilis non reic iendis!
          </p>
          <Link
            to="/proizvodi/kategorija-dva"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Pogledaj kompletnu ponudu
          </Link>
        </div>
        <div className="img-part"></div>
      </motion.section>
      <motion.section
        className="vanilla-section"
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
      >
        <div className="text-part">
          <h1>Category 3</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <p>
            Lorem ipsum dolor sit amet consect etur adipis icing elit. Qui quis
            officiis, iure debitis ipsam laboriosam error obca ecati bland itiis
            sapiente dolorum. Est repellat sapiente, itaque nisi quasi at cumque
            nemo ipsa. Possimus esse omnis commodi hic volupt atibus? Ipsa
            repudi andae sint, aperiam incidunt distinctio tempora tempor ibus
            perfere ndis magnam pariatur facilis non reic iendis! Kitaque nisi
            quasi at cumque nemo ipsa. Possimus esse omnis commodi hic volupt
            atibus? Ipsa repudi andae sint, aperiam incidunt distinctio tempora
            tempor ibus perfere ndis magnam pariatur facilis non reic iendis!
          </p>
          <Link
            to="/proizvodi/kategorija-tri"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Pogledaj kompletnu ponudu
          </Link>
        </div>
        <div className="img-part"></div>
      </motion.section>
      <motion.section
        className="vanilla-section"
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
      >
        <div className="text-part">
          <h1>Category 4</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <p>
            Lorem ipsum dolor sit amet consect etur adipis icing elit. Qui quis
            officiis, iure debitis ipsam laboriosam error obca ecati bland itiis
            sapiente dolorum. Est repellat sapiente, itaque nisi quasi at cumque
            nemo ipsa. Possimus esse omnis commodi hic volupt atibus? Ipsa
            repudi andae sint, aperiam incidunt distinctio tempora tempor ibus
            perfere ndis magnam pariatur facilis non reic iendis! Kitaque nisi
            quasi at cumque nemo ipsa. Possimus esse omnis commodi hic volupt
            atibus? Ipsa repudi andae sint, aperiam incidunt distinctio tempora
            tempor ibus perfere ndis magnam pariatur facilis non reic iendis!
          </p>
          <Link
            to="/proizvodi/kategorija-cetiri"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Pogledaj kompletnu ponudu
          </Link>
        </div>
        <div className="img-part"></div>
      </motion.section>
    </div>
  );
};

export default Products;
