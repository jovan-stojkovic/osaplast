import "../Styles/Category.scss";
import Swiper from "../Components/SwiperComponent";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const NosaciZavesa = ({ generalMotion, pMotion, swiperMotion }) => {
  const [showFirst, setShowFirst] = useState(false);

  return (
    <motion.div
      className="page category two"
      variants={generalMotion}
      initial="hidden"
      animate="visible"
    >
      <h1>Nosači za zavesu za kadu</h1>
      <motion.h3 variants={pMotion}>
        Transformišite svoje kupatilo uz naš visokokvalitetan nosač za zavesu za
        kadu!
      </motion.h3>
      <motion.p variants={pMotion}>
        Naš nosač za zavesu dizajniran je da unapredi funkcionalnost i estetiku
        vašeg kupatila. Izrađen od izdržljivih materijala, garantuje dugotrajnu
        upotrebu i otpornost na vlagu. Elegantnog i modernog dizajna, savršeno
        se uklapa u svaki stil kupatila, bilo da je klasičan ili savremen.
      </motion.p>
      <motion.h5 className="h5-btn" variants={pMotion} onClick={() => setShowFirst(!showFirst)}>
        Karakteristike proizvoda:
        <button
          className={showFirst && "show"}
        ></button>
      </motion.h5>
      <ul className={showFirst && "show"}>
        <li>
          <span>Kvalitetna izrada:</span> Napravljen od čvrstih i otpornih
          materijala koji osiguravaju dug vek trajanja.
        </li>
        <li>
          <span>Laka instalacija:</span> Jednostavno se montira uz pomoć
          priloženih instrukcija, uz minimalnu upotrebu dodatnog alata.
        </li>
        <li>
          <span>Podesiva dužina:</span> Omogućava vam da prilagodite nosač
          veličini vaše kade i prostora.
        </li>
        <li>
          <span>Stabilnost i sigurnost:</span> Pruža čvrstu podršku za zavese,
          sprečavajući njihovo klizanje ili padanje.
        </li>
        <li>
          <span>Elegantan dizajn:</span> Sa glatkim završnim obradama i modernim
          izgledom, dodatno obogaćuje prostor vaše kupatilske oaze.
        </li>
      </ul>
      <motion.p variants={pMotion}>
        Obezbedite sebi praktičnost i stil uz naš držač za zavesu za kadu.
        Idealan je za svaki dom, omogućavajući vam da uživate u opuštanju pod
        tušem ili u kadi uz dodatni komfor.
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
        <Swiper number={8} productName={"NOSAČI ZAVESA"} />
      </motion.div>
    </motion.div>
  );
};

export default NosaciZavesa;
