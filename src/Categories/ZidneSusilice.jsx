import { useEffect } from "react";
import "../Styles/Category.scss";
import VanillaTilt from "vanilla-tilt";
import Swiper from "../Components/SwiperComponent";

const ZidneSusilice = () => {
  useEffect(() => {
    let elements = document.querySelectorAll(".single-product");
    VanillaTilt.init(elements, {
      max: 5,
      speed: 1000,
      scale: 1.1,
      glare: true,
    });

    return () => {
      elements.forEach((element) => {
        element.vanillaTilt.destroy();
      });
    };
  }, []);

  const products = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22,
  ];

  const containerMotion = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const productMotion = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <div className="page category four">
      <h1>Zidne sušilice za veš</h1>
      <h3>
        Praktično rešenje za sušenje veša u vašem domu uz našu zidnu sušilicu za
        veš!
      </h3>
      <p>
        Naša zidna sušilica za veš je idealan dodatak za svaki dom, pružajući
        vam efikasno i prostorno rešenje za sušenje odeće. Sa elegantnim
        dizajnom i funkcionalnim karakteristikama, ovo je savršeni proizvod za
        maksimalnu upotrebu prostora u vašem kupatilu, hodniku ili bilo kojoj
        drugoj prostoriji.
      </p>
      <h5>Karakteristike proizvoda:</h5>
      <ul>
        <li>
          Kompaktan dizajn: Zidna montaža omogućava vam da oslobodite dragoceni
          podni prostor i maksimalno iskoristite dostupne zidne površine.
        </li>
        <li>
          Prilagodljivost: Može se lako sklopiti kada nije u upotrebi, čime se
          dodatno štedi prostor.
        </li>
        <li>
          Snažna konstrukcija: Izrađena od visokokvalitetnih materijala otpornih
          na vlagu, koja obezbeđuje dugotrajnu izdržljivost i stabilnost.
        </li>
        <li>
          Jednostavna ugradnja: Uključuje sve potrebne delove i uputstva za
          jednostavnu montažu na zid.
        </li>
        <li>
          Efikasno sušenje: Omogućava optimalan razmak za veš, poboljšavajući
          protok vazduha i ubrzavajući proces sušenja.
        </li>
      </ul>
      <h5>Zašto odabrati našu zidnu sušilicu za veš?</h5>
      <ul>
        <li>
          Ušteda prostora: Idealno rešenje za manje stanove ili sobe gde je
          svaki kvadratni metar važan.
        </li>
        <li>
          Jednostavno korišćenje: Brza ugradnja i lak pristup vašem vešu čine
          sušenje jednostavnim i efikasnim.
        </li>
        <li>
          Moderni dizajn: Elegantan i funkcionalan izgled koji se uklapa u
          različite stilove enterijera.
        </li>
      </ul>
      <h5>
        Naručite sada i unapredite organizaciju i efikasnost sušenja veša u
        vašem domu uz našu zidnu sušilicu!
      </h5>
      <div className="swiper-part">
        <Swiper number={3} productName={"ZIDNE SUŠILICE ZA VEŠ"} />
      </div>
    </div>
  );
};

export default ZidneSusilice;
