import "../Styles/Category.scss";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import Swiper from "../Components/SwiperComponent";

const MetalneOgrade = () => {
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
      <h1>Metalne ograde</h1>
      <h3>Dobrodošli u svet metalnih ograda</h3>
      <p>
        Dobrodošli na našu web stranicu posvećenu izradi i ugradnji vrhunskih
        metalnih ograda. U našem proizvodnom prostoru, s pažnjom i preciznošću,
        kreiramo elegantna i sigurna rešenja za vaš dom, poslovni prostor,
        dvorišta, terase. Bez obzira da li tražite klasičan ili moderni dizajn,
        kod nas ćete pronaći širok spektar opcija koje će zadovoljiti vaše
        potrebe.
      </p>
      <h5>Naše Usluge</h5>

      <ul>
        <li>
          <span>Izrada po meri:</span> Svaka ograda koju stvaramo je unikatna,
          prilagođena vašim specifičnim zahtevima. Kombinujemo vrhunsku izradu
          sa kvalitetnim materijalima kako bismo osigurali dugovečnost i
          estetski ugodan izgled.
        </li>

        <li>
          <span>Montaža i ugradnja:</span> Naš tim stručnjaka garantuje
          profesionalnu montažu svake ograde, uz poštovanje dogovorenih rokova i
          visoke standarde sigurnosti.
        </li>

        <li>
          <span>Vrhunski materijali:</span> Koristimo samo najkvalitetnije
          metale, čelične legure otporne na vremenske uslove, kako bismo
          osigurali dugotrajnost naših proizvoda.
        </li>

        <li>
          <span>Raznovrsnost dizajna:</span> Bez obzira da li preferirate
          klasične kovane elemente ili savremene minimalističke linije, naša
          ponuda dizajna obuhvata širok spektar opcija koje će se uklopiti u vaš
          prostor.
        </li>
      </ul>

      <h5>Zašto izabrati nas?</h5>
      <ul>
        <li>
          <span>Iskustvo i stručnost:</span> Sa godinama iskustva, naš tim
          garantuje vrhunsku izradu i montažu.
        </li>
        <li>
          <span>Kvalitet materijala:</span> Samo najbolji materijali osiguravaju
          trajnost i pouzdanost naših proizvoda.
        </li>
        <li>
          <span>Korisnička podrška:</span> Naš tim je uvek tu da odgovori na
          vaša pitanja i pruži savet prilagođen vašim potrebama.
        </li>
      </ul>

      <h5>Kontaktirajte nas</h5>
      <p>
        Želite li više informacija ili procenu za vaš projekat? Kontaktirajte
        nas danas i rado ćemo vam pomoći u ostvarenju vaših planova. Vaše
        zadovoljstvo je naša najveća nagrada!
      </p>
      <div className="swiper-part">
        <Swiper number={29} productName={"METALNE OGRADE"} />
      </div>
    </div>
  );
};

export default MetalneOgrade;
