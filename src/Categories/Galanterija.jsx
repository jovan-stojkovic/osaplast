import "../Styles/Category.scss";
import Swiper from "../Components/SwiperComponent";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const Galanterija = ({ generalMotion, pMotion, swiperMotion }) => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  return (
    <motion.div
      className="page category three"
      variants={generalMotion}
      initial="hidden"
      animate="visible"
    >
      <h1>Kupatilska galanterija</h1>
      <motion.h3 variants={pMotion}>
        Otkrijte savršenu kombinaciju funkcionalnosti i stila uz našu kupatilsku
        galanteriju!
      </motion.h3>
      <motion.p variants={pMotion}>
        Naša kolekcija kupatilske galanterije obuhvata sve što vam je potrebno
        za stvaranje savršenog kupatila. Bilo da želite unaprediti estetiku
        prostora ili poboljšati njegovu funkcionalnost, naš širok asortiman
        proizvoda nudi rešenja za svaki deo vašeg kupatila.
      </motion.p>
      <motion.h5 variants={pMotion}>
        Šta nudimo:
        <button
          className={showFirst && "show"}
          onClick={() => setShowFirst(!showFirst)}
        ></button>
      </motion.h5>
      <ul className={showFirst && "show"}>
        <li>
          <span>Funkcionalni dodaci:</span> Otkrijte visokokvalitetne držače za
          peškire, sapune, police i organizatore koji vam pomažu da održite red
          i organizaciju u vašem kupatilu.
        </li>
        <li>
          <span>Elegantni detalji:</span> Naša ponuda uključuje sofisticirane
          elemente poput modernih čaša za četkice i po vašoj želji dizajniranih
          držača za toalet papir i sapun, koji dodaju dašak luksuza vašem
          prostoru.
        </li>
        <li>
          <span>Izdržljivi materijali:</span> Sve proizvode izrađujemo od inoxa
          ili aluminijuma, kao pažljivo odabranih materijala koji garantuju
          dugotrajnu izdržljivost i lakoću održavanja, otporni su na vlagu i
          svakodnevno trošenje.
        </li>
        <li>
          <span>Jednostavna instalacija:</span> Svi naši proizvodi dolaze sa
          jasnim uputstvima za instalaciju, omogućavajući vam brzu i jednostavnu
          montažu.
        </li>
      </ul>

      <motion.h5 variants={pMotion}>
        Zašto odabrati nas?{" "}
        <button
          className={showSecond && "show"}
          onClick={() => setShowSecond(!showSecond)}
        ></button>
      </motion.h5>
      <ul className={showSecond && "show"}>
        <li>
          <span>Širok asortiman:</span> Bogata ponuda koja zadovoljava sve vaše
          potrebe, uz mogućnost da sami kreirate oblik i izgled uz dogovor sa
          nama.
        </li>
        <li>
          <span>Visok kvalitet:</span> Proizvodi koji kombinuju vrhunski dizajn
          i funkcionalnost.
        </li>
        <li>
          <span>Brza dostava i mogućnost ugradnje:</span> Efikasna usluga
          dostave koja vam omogućava da brzo uživate u novim dodacima za
          kupatilo. Na raspolaganju smo za ugradnju većih količina proizvoda, u
          dogovoru sa vama.
        </li>
      </ul>
      <motion.p variants={pMotion}>
        Poboljšajte svoje kupatilo sa našom galanterijom i transformišite ga u
        prostor savršen za opuštanje i uživanje. Istražite našu ponudu i
        pronađite proizvode koji odgovaraju vašem stilu i potrebama!
      </motion.p>
      <motion.p className="p-link" variants={pMotion}>
        <Link
          to="/kontakt"
          target="_blank"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            handleMenu();
          }}
        >
          Naručite sada
        </Link>{" "}
        i unapredite svoj prostor sa stilom!
      </motion.p>
      <motion.div className="swiper-part" variants={swiperMotion}>
        <Swiper number={18} productName={"KUPATILSKA GALANTERIJA"} />
      </motion.div>
    </motion.div>
  );
};

export default Galanterija;
