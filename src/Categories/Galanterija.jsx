import "../Styles/Category.scss";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import Swiper from "../Components/SwiperComponent";

const Galanterija = () => {
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
    <div className="page category three">
      <h1>Kupatilska galanterija</h1>
      <h3>
        Otkrijte savršenu kombinaciju funkcionalnosti i stila uz našu kupatilsku
        galanteriju!
      </h3>
      <p>
        Naša kolekcija kupatilske galanterije obuhvata sve što vam je potrebno
        za stvaranje savršenog kupatila. Bilo da želite unaprediti estetiku
        prostora ili poboljšati njegovu funkcionalnost, naš širok asortiman
        proizvoda nudi rešenja za svaki deo vašeg kupatila.
      </p>
      <h5>Šta nudimo:</h5>
      <ul>
        <li>
          Funkcionalni dodaci: Otkrijte visokokvalitetne držače za peškire,
          sapune, police i organizatore koji vam pomažu da održite red i
          organizaciju u vašem kupatilu.
        </li>
        <li>
          Elegantni detalji: Naša ponuda uključuje sofisticirane elemente poput
          modernih čaša za četkice i po vašoj želji dizajniranih držača za
          toalet papir i sapun, koji dodaju dašak luksuza vašem prostoru.
        </li>
        <li>
          Izdržljivi materijali: Sve proizvode izrađujemo od inoxa ili
          aluminijuma, kao pažljivo odabranih materijala koji garantuju
          dugotrajnu izdržljivost i lakoću održavanja, otporni su na vlagu i
          svakodnevno trošenje.
        </li>
        <li>
          Jednostavna instalacija: Svi naši proizvodi dolaze sa jasnim
          uputstvima za instalaciju, omogućavajući vam brzu i jednostavnu
          montažu.
        </li>
      </ul>

      <h5>Zašto odabrati nas?</h5>
      <ul>
        <li>
          Širok asortiman: Bogata ponuda koja zadovoljava sve vaše potrebe, uz
          mogućnost da sami kreirate oblik i izgled uz dogovor sa nama.
        </li>
        <li>
          Visok kvalitet: Proizvodi koji kombinuju vrhunski dizajn i
          funkcionalnost.
        </li>
        <li>
          Brza dostava i mogućnost ugradnje: Efikasna usluga dostave koja vam
          omogućava da brzo uživate u novim dodacima za kupatilo. Na
          raspolaganju smo za ugradnju većih količina proizvoda, u dogovoru sa
          vama.
        </li>
      </ul>
      <p>
        Poboljšajte svoje kupatilo sa našom galanterijom i transformišite ga u
        prostor savršen za opuštanje i uživanje. Istražite našu ponudu i
        pronađite proizvode koji odgovaraju vašem stilu i potrebama!
      </p>
      <h5>Naručite sada i unapredite svoj prostor sa stilom!</h5>
      <div className="swiper-part">
        <Swiper number={18} productName={"KUPATILSKA GALANTERIJA"} />
      </div>
    </div>
  );
};

export default Galanterija;
