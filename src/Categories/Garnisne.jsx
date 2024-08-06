import "../Styles/Category.scss";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import Swiper from "../Components/SwiperComponent";

const Garnisne = () => {
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
    <div className="page category one">
      <h1>Garnišne za zavese</h1>
      <h3>
        Ukrasne garnišne za zavese - elegancija i funkcionalnost u vašem
        enterijeru.
      </h3>
      <p>
        Dodajte dašak sofisticiranosti i stila vašem prostoru uz naše predivne
        ukrasne garnišne za zavese. Naša kolekcija garnišni nudi savršenu
        kombinaciju estetike i funkcionalnosti, pružajući ne samo podršku vašim
        zavesama već i ističući jedinstven karakter vašeg enterijera.
      </p>
      <h5>Zašto izabrati naše garnišne?</h5>
      <ul>
        <li>
          Kvalitetan materijal: Naše garnišne izrađene su od visokokvalitetnih
          materijala koji osiguravaju dugotrajnu izdržljivost i stabilnost.
        </li>
        <li>
          Elegantan dizajn: S širokim spektrom dizajna i završnih obrada, od
          klasičnih do modernih stilova, pronaći ćete garnišne koje se savršeno
          uklapaju u svaki prostor.
        </li>
        <li>
          Jednostavna instalacija: Dizajnirane za jednostavnu i brzu montažu,
          naše garnišne omogućavaju lako postavljanje i prilagođavanje.
        </li>
        <li>
          Funkcionalnost i stvaranje atmosfere: Osim što podržavaju vaše zavese,
          naš izbor garnišni doprinosi stvaranju željene atmosfere, bilo da se
          radi o sofisticiranom, minimalističkom ili rustikalnom izgledu.
        </li>
      </ul>
      <h5>Pretražite našu ponudu</h5>
      <p>
        Istražite našu kolekciju i pronađite savršene ukrasne garnišne za zavese
        koje će unaprediti izgled vašeg prostora. Uz kvalitet i dizajn koji su u
        centru naše ponude, garantujemo da ćete pronaći rešenje koje odgovara
        vašim potrebama i estetskim željama.
      </p>
      <h5>Kontaktirajte nas</h5>
      <p>
        Imate pitanja ili vam treba pomoć u odabiru? Naš tim stručnjaka je ovde
        da vam pomogne.
      </p>
      <div className="swiper-part">
        <Swiper number={11} productName={"UKRASNE GARNIŠNE"} />
      </div>
    </div>
  );
};

export default Garnisne;
