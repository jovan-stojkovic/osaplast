import { Link } from "react-router-dom";
import "../Styles/Products.scss";
import { motion } from "framer-motion";
import Swiper from "../Components/SwiperComponent";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";

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

  useEffect(() => {
    let elements = document.querySelectorAll(".vanilla-section");
    VanillaTilt.init(elements, {
      max: 5,
      speed: 1000,
      scale: 1.05,
      glare: true,
      transition: true,
      "max-glare": 0.5,
    });

    return () => {
      elements.forEach((element) => {
        element.vanillaTilt.destroy();
      });
    };
  }, []);

  return (
    <div className="page products">
      <h1>Proizvodi</h1>

      <div className="products-wrap">
        <motion.section
          className="vanilla-section one"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
        >
          <Link to="/proizvodi/garnisne">
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
            <div className="img-grid">
              <div className="img-cont one"></div>
              <div className="img-cont two"></div>
              <div className="img-cont three"></div>
              <div className="img-cont four"></div>
            </div>
          </Link>
        </motion.section>

        <motion.section
          className="vanilla-section two"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
        >
          <Link to="/proizvodi/nosaci-zavesa">
            <h1>Nosači za zavese</h1>
            <h3>
              Transformišite svoje kupatilo uz naš visokokvalitetan nosač za
              zavesu za kadu!
            </h3>
            <p>
              Naš nosač za zavesu dizajniran je da unapredi funkcionalnost i
              estetiku vašeg kupatila. Izrađen od izdržljivih materijala,
              garantuje dugotrajnu upotrebu i otpornost na vlagu. Elegantnog i
              modernog dizajna, savršeno se uklapa u svaki stil kupatila, bilo
              da je klasičan ili savremen.
            </p>
            <div className="img-grid">
              <div className="img-cont one"></div>
              <div className="img-cont two"></div>
              <div className="img-cont three"></div>
              <div className="img-cont four"></div>
            </div>
          </Link>
        </motion.section>

        <motion.section
          className="vanilla-section three"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
        >
          <Link to="/proizvodi/kupatilska-galanterija">
            <h1>Kupatilska galanterija</h1>
            <h3>
              Otkrijte savršenu kombinaciju funkcionalnosti i stila uz našu
              kupatilsku galanteriju!
            </h3>
            <p>
              Naša kolekcija kupatilske galanterije obuhvata sve što vam je
              potrebno za stvaranje savršenog kupatila. Bilo da želite
              unaprediti estetiku prostora ili poboljšati njegovu
              funkcionalnost, naš širok asortiman proizvoda nudi rešenja za
              svaki deo vašeg kupatila.
            </p>
            <div className="img-grid">
              <div className="img-cont one"></div>
              <div className="img-cont two"></div>
              <div className="img-cont three"></div>
              <div className="img-cont four"></div>
            </div>
          </Link>
        </motion.section>

        <motion.section
          className="vanilla-section four"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
        >
          <Link to="/proizvodi/zidne-susilice">
            <h1>Zidne sušilice za veš</h1>
            <h3>
              Praktično rešenje za sušenje veša u vašem domu uz našu zidnu
              sušilicu za veš!
            </h3>
            <p>
              Naša zidna sušilica za veš je idealan dodatak za svaki dom,
              pružajući vam efikasno i prostorno rešenje za sušenje odeće. Sa
              elegantnim dizajnom i funkcionalnim karakteristikama, ovo je
              savršeni proizvod za maksimalnu upotrebu prostora u vašem
              kupatilu, hodniku ili bilo kojoj drugoj prostoriji.
            </p>
            <div className="img-grid">
              <div className="img-cont one"></div>
              <div className="img-cont two"></div>
              <div className="img-cont three"></div>
              <div className="img-cont four"></div>
            </div>
          </Link>
        </motion.section>

        <motion.section
          className="vanilla-section five"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
        >
          <Link to="/proizvodi/zidne-susilice">
            <h1>Izrada metalnog nameštaja</h1>
            <h3>
              Otkrijte izdržljivost i eleganciju uz našu kolekciju metalnog
              nameštaja!
            </h3>
            <p>
              Naša ponuda metalnog nameštaja kombinuje vrhunski dizajn i
              izuzetnu funkcionalnost, pružajući savršeno rešenje za vaš dom,
              poslovni prostor i terasni ili baštenski prostor. Bilo da tražite
              moderne komade za dnevnu sobu, elegantne stolice za trpezariju,
              čvrste komode za kancelariju, set za terasu ili baštu, naš metalni
              nameštaj nudi kvalitet koji traje.
            </p>
            <div className="img-grid">
              <div className="img-cont one"></div>
              <div className="img-cont two"></div>
              <div className="img-cont three"></div>
              <div className="img-cont four"></div>
            </div>
          </Link>
        </motion.section>

        <motion.section
          className="vanilla-section six"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
        >
          <Link to="/proizvodi/zidne-susilice">
            <h1>Metalne ograde</h1>
            <h3>Dobrodošli u svet metalnih ograda</h3>
            <p>
              Dobrodošli na našu web stranicu posvećenu izradi i ugradnji
              vrhunskih metalnih ograda. U našem proizvodnom prostoru, s pažnjom
              i preciznošću, kreiramo elegantna i sigurna rešenja za vaš dom,
              poslovni prostor, dvorišta, terase. Bez obzira da li tražite
              klasičan ili moderni dizajn, kod nas ćete pronaći širok spektar
              opcija koje će zadovoljiti vaše potrebe.
            </p>
            <div className="img-grid">
              <div className="img-cont one"></div>
              <div className="img-cont two"></div>
              <div className="img-cont three"></div>
              <div className="img-cont four"></div>
            </div>
          </Link>
        </motion.section>

        <motion.section
          className="vanilla-section four"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
        >
          <Link to="/proizvodi/zidne-susilice">
            <h1>Metalne konstrukcije</h1>
            <h3>Dobrodošli u Svet metalnih konstrukcija</h3>
            <p>
              Dobrodošli na našu web stranicu posvećenu izradi visokokvalitetnih
              metalnih konstrukcija za različite namene. Sa strašću i
              posvećenošću, u našem proizvodnom prostoru,stvaramo funkcionalna i
              estetski privlačna rešenja koja zadovoljavaju različite potrebe
              naših klijenata.
            </p>
            <div className="img-grid">
              <div className="img-cont one"></div>
              <div className="img-cont two"></div>
              <div className="img-cont three"></div>
              <div className="img-cont four"></div>
            </div>
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default Products;
