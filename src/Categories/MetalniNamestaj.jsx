import "../Styles/Category.scss";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import Swiper from "../Components/SwiperComponent";

const MetalniNamestaj = () => {
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
    <div className="page category">
      <h1>Izrada metalnog nameštaja</h1>
      <h3>
        Otkrijte izdržljivost i eleganciju uz našu kolekciju metalnog nameštaja!
      </h3>
      <p>
        Naša ponuda metalnog nameštaja kombinuje vrhunski dizajn i izuzetnu
        funkcionalnost, pružajući savršeno rešenje za vaš dom, poslovni prostor
        i terasni ili baštenski prostor. Bilo da tražite moderne komade za
        dnevnu sobu, elegantne stolice za trpezariju, čvrste komode za
        kancelariju, set za terasu ili baštu, naš metalni nameštaj nudi kvalitet
        koji traje.
      </p>
      <h5>Naša ponuda:</h5>

      <ul>
        <li>
          Prilagođeni komadi: Izrađujemo metalni nameštaj po meri, prilagođen
          vašim željama i potrebama. Bez obzira da li vam je potreban nameštaj
          za dom, kancelariju, restoran ili druge svrhe, garantujemo vrhunski
          kvalitet i izuzetan dizajn.
        </li>
        <li>
          Raznovrsnost dizajna: Naša ponuda obuhvata širok spektar metalnih
          komada nameštaja, uključujući stolove, stolice, police, komode, kao i
          specijalne komade po vašoj specifikaciji.
        </li>
        <li>
          Kvalitet Materijala: Koristimo samo najkvalitetnije metale i legure,
          što osigurava trajnost, otpornost na habanje i lako održavanje naših
          proizvoda.
        </li>
        <li>
          Personalizovani Pristup: Naš tim vam stoji na raspolaganju da zajedno
          kreiramo jedinstvene komade koji će savršeno odgovarati vašem prostoru
          i stilu.
        </li>
        <li>
          Funkcionalnost: Prilagodljivi i praktični komadi nameštaja koji
          zadovoljavaju vaše potrebe, bilo da se radi o skladištenju, sedenju
          ili dekoraciji.
        </li>
        <li>
          Lako održavanje: Metalne površine su otporne na mrlje i lako se čiste,
          čineći održavanje jednostavnim.
        </li>
        <li>
          Ekološki prihvatljivo: Održiv proizvodni proces i dugotrajni
          materijali doprinose smanjenju otpada i ekološkom pristupu.
        </li>
      </ul>

      <h5>Zašto izabrati nas?</h5>

      <ul>
        <li>
          Iskustvo i stručnost: Sa višegodišnjim iskustvom u izradi nameštaja,
          garantujemo vrhunski nivo kvaliteta i izrade.
        </li>
        <li>
          Posvećenost klijentima: Vaše zadovoljstvo je naš prioritet. Trudimo se
          da pružimo personalizovan pristup i podršku tokom svake faze projekta.
        </li>
        <li>
          Inovacija i estetika: Nudimo inovativna rešenja i pažljivo biramo
          materijale i detalje kako bismo stvorili estetski privlačne komade
          nameštaja.
        </li>
      </ul>

      <h5>Naručite sada i oplemenite svoj prostor uz naš metalni nameštaja!</h5>
      <div className="swiper-part">
        <Swiper number={29} productName={"METALNI NAMEŠTAJ"} />
      </div>
    </div>
  );
};

export default MetalniNamestaj;
