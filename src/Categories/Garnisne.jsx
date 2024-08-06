import "../Styles/Category.scss";
import Swiper from "../Components/SwiperComponent";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const Garnisne = ({ generalMotion, pMotion, swiperMotion }) => {
  const [showFirst, setShowFirst] = useState(false);

  return (
    <motion.div
      className="page category one"
      variants={generalMotion}
      initial="hidden"
      animate="visible"
    >
      <h1>Garnišne za zavese</h1>
      <motion.h3 variants={pMotion}>
        Ukrasne garnišne za zavese - elegancija i funkcionalnost u vašem
        enterijeru.
      </motion.h3>
      <motion.p variants={pMotion}>
        Dodajte dašak sofisticiranosti i stila vašem prostoru uz naše predivne
        ukrasne garnišne za zavese. Naša kolekcija garnišni nudi savršenu
        kombinaciju estetike i funkcionalnosti, pružajući ne samo podršku vašim
        zavesama već i ističući jedinstven karakter vašeg enterijera.
      </motion.p>
      <motion.h5
        className="h5-btn"
        variants={pMotion}
        onClick={() => setShowFirst(!showFirst)}
      >
        Zašto izabrati naše garnišne?
        <button className={showFirst && "show"}></button>
      </motion.h5>
      <ul className={showFirst && "show"}>
        <li>
          <span>Kvalitetan materijal:</span> Naše garnišne izrađene su od
          visokokvalitetnih materijala koji osiguravaju dugotrajnu izdržljivost
          i stabilnost.
        </li>
        <li>
          <span>Elegantan dizajn:</span> S širokim spektrom dizajna i završnih
          obrada, od klasičnih do modernih stilova, pronaći ćete garnišne koje
          se savršeno uklapaju u svaki prostor.
        </li>
        <li>
          <span>Jednostavna instalacija:</span> Dizajnirane za jednostavnu i
          brzu montažu, naše garnišne omogućavaju lako postavljanje i
          prilagođavanje.
        </li>
        <li>
          <span>Funkcionalnost i stvaranje atmosfere:</span> Osim što podržavaju
          vaše zavese, naš izbor garnišni doprinosi stvaranju željene atmosfere,
          bilo da se radi o sofisticiranom, minimalističkom ili rustikalnom
          izgledu.
        </li>
      </ul>
      <motion.h5 variants={pMotion}>Pretražite našu ponudu</motion.h5>
      <motion.p variants={pMotion}>
        Istražite našu kolekciju i pronađite savršene ukrasne garnišne za zavese
        koje će unaprediti izgled vašeg prostora. Uz kvalitet i dizajn koji su u
        centru naše ponude, garantujemo da ćete pronaći rešenje koje odgovara
        vašim potrebama i estetskim željama.
      </motion.p>
      <motion.p variants={pMotion} className="p-link">
        <Link
          to="/kontakt"
          target="_blank"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            handleMenu();
          }}
        >
          Kontaktirajte nas!
        </Link>{" "}
        Imate pitanja ili vam treba pomoć u odabiru? Naš tim stručnjaka je ovde
        da vam pomogne.
      </motion.p>
      <motion.div className="swiper-part" variants={swiperMotion}>
        <Swiper number={11} productName={"UKRASNE GARNIŠNE"} />
      </motion.div>
    </motion.div>
  );
};

export default Garnisne;
