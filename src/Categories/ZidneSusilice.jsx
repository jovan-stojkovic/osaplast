import "../Styles/Category.scss";
import Swiper from "../Components/SwiperComponent";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const ZidneSusilice = ({ generalMotion, pMotion, swiperMotion }) => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  return (
    <motion.div
      className="page category four"
      variants={generalMotion}
      initial="hidden"
      animate="visible"
    >
      <h1>Zidne sušilice za veš</h1>
      <motion.h3 variants={pMotion}>
        Praktično rešenje za sušenje veša u vašem domu uz našu zidnu sušilicu za
        veš!
      </motion.h3>
      <motion.p variants={pMotion}>
        Naša zidna sušilica za veš je idealan dodatak za svaki dom, pružajući
        vam efikasno i prostorno rešenje za sušenje odeće. Sa elegantnim
        dizajnom i funkcionalnim karakteristikama, ovo je savršeni proizvod za
        maksimalnu upotrebu prostora u vašem kupatilu, hodniku ili bilo kojoj
        drugoj prostoriji.
      </motion.p>
      <motion.h5
        className="h5-btn"
        variants={pMotion}
        onClick={() => setShowFirst(!showFirst)}
      >
        Karakteristike proizvoda:
        <button className={showFirst && "show"}></button>
      </motion.h5>
      <ul className={showFirst && "show"}>
        <li>
          <span>Kompaktan dizajn:</span> Zidna montaža omogućava vam da
          oslobodite dragoceni podni prostor i maksimalno iskoristite dostupne
          zidne površine.
        </li>
        <li>
          <span>Prilagodljivost:</span> Može se lako sklopiti kada nije u
          upotrebi, čime se dodatno štedi prostor.
        </li>
        <li>
          <span>Snažna konstrukcija:</span> Izrađena od visokokvalitetnih
          materijala otpornih na vlagu, koja obezbeđuje dugotrajnu izdržljivost
          i stabilnost.
        </li>
        <li>
          <span>Jednostavna ugradnja:</span> Uključuje sve potrebne delove i
          uputstva za jednostavnu montažu na zid.
        </li>
        <li>
          <span>Efikasno sušenje:</span> Omogućava optimalan razmak za veš,
          poboljšavajući protok vazduha i ubrzavajući proces sušenja.
        </li>
      </ul>

      <motion.h5
        className="h5-btn"
        variants={pMotion}
        onClick={() => setShowSecond(!showSecond)}
      >
        Zašto odabrati našu zidnu sušilicu za veš?
        <button className={showSecond && "show"}></button>
      </motion.h5>
      <ul className={showSecond && "show"}>
        <li>
          <span>Ušteda prostora:</span> Idealno rešenje za manje stanove ili
          sobe gde je svaki kvadratni metar važan.
        </li>
        <li>
          <span>Jednostavno korišćenje:</span> Brza ugradnja i lak pristup vašem
          vešu čine sušenje jednostavnim i efikasnim.
        </li>
        <li>
          <span>Moderni dizajn:</span> Elegantan i funkcionalan izgled koji se
          uklapa u različite stilove enterijera.
        </li>
      </ul>

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
        i unapredite organizaciju i efikasnost sušenja veša u vašem domu uz našu
        zidnu sušilicu!
      </motion.p>
      <motion.div className="swiper-part" variants={swiperMotion}>
        <Swiper number={3} productName={"ZIDNE SUŠILICE ZA VEŠ"} />
      </motion.div>
    </motion.div>
  );
};

export default ZidneSusilice;
