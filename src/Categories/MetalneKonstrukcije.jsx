import "../Styles/Category.scss";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import Swiper from "../Components/SwiperComponent";

const MetalneKonstrukcije = () => {
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
      <h1>Metalne konstrukcije</h1>
      <h3>Dobrodošli u Svet metalnih konstrukcija</h3>
      <p>
        Dobrodošli na našu web stranicu posvećenu izradi visokokvalitetnih
        metalnih konstrukcija za različite namene. Sa strašću i posvećenošću, u
        našem proizvodnom prostoru,stvaramo funkcionalna i estetski privlačna
        rešenja koja zadovoljavaju različite potrebe naših klijenata.
      </p>
      <h5>Naše usluge</h5>
      <ul>
        <li>
          <span> Prilagođene Metalne Konstrukcije:</span> Kreiramo metalne
          konstrukcije po meri, prilagođene specifičnim zahtevima i potrebama
          naših klijenata. Bez obzira da li vam je potrebna konstrukcija za
          industrijske, komercijalne ili privatne svrhe, garantujemo vrhunski
          kvalitet i trajnost naših proizvoda.
        </li>
        <li>
          <span>Projektovanje i Inženjering:</span> Naš tim stručnjaka poseduje
          dugogodišnje iskustvo u projektovanju metalnih konstrukcija. Uz
          upotrebu najnovijih tehnologija i softvera za projektovanje,
          osiguravamo efikasna rešenja koja odgovaraju vašim zahtevima i
          standardima.
        </li>
        <li>
          <span>Raznolikost namena:</span> Nudimo širok spektar metalnih
          konstrukcija, uključujući konstrukcije za skladišta, hale, lokale,
          garaže, nadstrešnice, platforme, stepeništa i druge industrijske i
          građevinske objekte.
        </li>
        <li>
          <span>Kvalitet materijala:</span> Koristimo samo visokokvalitetne
          metale i legure koji garantuju otpornost na koroziju i dugotrajnost
          naših proizvoda u svim vremenskim uslovima.
        </li>
      </ul>
      <h5>Zašto izabrati nas?</h5>
      <ul>
        <li>
          <span>Iskustvo i stručnost:</span> Sa višegodišnjim iskustvom, naš tim
          stručnjaka garantuje vrhunski nivo usluge i kvaliteta.
        </li>
        <li>
          <span>Posvećenost klijentima:</span> Stavljamo vaše potrebe i
          zadovoljstvo na prvo mesto, pružajući personalizovan pristup i
          pažljivu podršku tokom svake faze projekta.
        </li>
        <li>
          <span>Inovativna rešenja:</span> Sledimo najnovije trendove u
          industriji kako bismo ponudili inovativna i efikasna rešenja za vaše
          potrebe.
        </li>
      </ul>
      <h5>Kontaktirajte nas</h5>
      <p>
        Želite li više informacija ili procenu za vaš projekat? Kontaktirajte
        nas danas i rado ćemo vam pomoći u ostvarenju vaših planova. Vaše
        zadovoljstvo je naša najveća nagrada!
      </p>
      <div className="swiper-part">
        <Swiper number={29} productName={"METALNE KONSTRUKCIJE"} />
      </div>
    </div>
  );
};

export default MetalneKonstrukcije;
