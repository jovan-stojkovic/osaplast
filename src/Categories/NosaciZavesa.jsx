import "../Styles/Category.scss";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import Swiper from "../Components/SwiperComponent";

const NosaciZavesa = () => {
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
    <div className="page category two">
      <h1>Nosači za zavesu za kadu</h1>
      <h3>
        Transformišite svoje kupatilo uz naš visokokvalitetan nosač za zavesu za
        kadu!
      </h3>
      <p>
        Naš nosač za zavesu dizajniran je da unapredi funkcionalnost i estetiku
        vašeg kupatila. Izrađen od izdržljivih materijala, garantuje dugotrajnu
        upotrebu i otpornost na vlagu. Elegantnog i modernog dizajna, savršeno
        se uklapa u svaki stil kupatila, bilo da je klasičan ili savremen.
      </p>
      <h5>Karakteristike proizvoda:</h5>
      <ul>
        <li>
          Kvalitetna izrada: Napravljen od čvrstih i otpornih materijala koji
          osiguravaju dug vek trajanja.
        </li>
        <li>
          Laka instalacija: Jednostavno se montira uz pomoć priloženih
          instrukcija, uz minimalnu upotrebu dodatnog alata.
        </li>
        <li>
          Podesiva dužina: Omogućava vam da prilagodite nosač veličini vaše kade
          i prostora.
        </li>
        <li>
          Stabilnost i sigurnost: Pruža čvrstu podršku za zavese, sprečavajući
          njihovo klizanje ili padanje.
        </li>
        <li>
          Elegantan dizajn: Sa glatkim završnim obradama i modernim izgledom,
          dodatno obogaćuje prostor vaše kupatilske oaze.
        </li>
      </ul>
      <p>
        Obezbedite sebi praktičnost i stil uz naš držač za zavesu za kadu.
        Idealan je za svaki dom, omogućavajući vam da uživate u opuštanju pod
        tušem ili u kadi uz dodatni komfor.
      </p>
      <h5>Kontaktirajte nas</h5>
      <p>
        Imate pitanja ili vam treba pomoć u odabiru? Naš tim stručnjaka je ovde
        da vam pomogne.
      </p>
      <div className="swiper-part">
        <Swiper number={8} productName={"NOSAČI ZAVESA"} />
      </div>
    </div>
  );
};

export default NosaciZavesa;
