import { Link } from "react-router-dom";
import "../Styles/Products.scss";
import { motion } from "framer-motion";
import Swiper from "../Components/SwiperComponent";

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

  return (
    <div className="page products">
      <motion.section
        className="vanilla-section"
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
      >
        <h1>Garnišne za zavese</h1>
        <h3>
          Ukrasne garnišne za zavese - elegancija i funkcionalnost u vašem
          enterijeru.
        </h3>
        <p>
          Dodajte dašak sofisticiranosti i stila vašem prostoru uz naše predivne
          ukrasne garnišne za zavese. Naša kolekcija garnišni nudi savršenu
          kombinaciju estetike i funkcionalnosti, pružajući ne samo podršku
          vašim zavesama već i ističući jedinstven karakter vašeg enterijera.
        </p>
        <h5>Zašto izabrati naše garnišne?</h5>
        <ul>
          <li>
            Kvalitetan materijal: Naše garnišne izrađene su od visokokvalitetnih
            materijala koji osiguravaju dugotrajnu izdržljivost i stabilnost.
          </li>
          <li>
            Elegantan dizajn: S širokim spektrom dizajna i završnih obrada, od
            klasičnih do modernih stilova, pronaći ćete garnišne koje se
            savršeno uklapaju u svaki prostor.
          </li>
          <li>
            Jednostavna instalacija: Dizajnirane za jednostavnu i brzu montažu,
            naše garnišne omogućavaju lako postavljanje i prilagođavanje.
          </li>
          <li>
            Funkcionalnost i stvaranje atmosfere: Osim što podržavaju vaše
            zavese, naš izbor garnišni doprinosi stvaranju željene atmosfere,
            bilo da se radi o sofisticiranom, minimalističkom ili rustikalnom
            izgledu.
          </li>
        </ul>
        <h5>Pretražite našu ponudu</h5>
        <p>
          Istražite našu kolekciju i pronađite savršene ukrasne garnišne za
          zavese koje će unaprediti izgled vašeg prostora. Uz kvalitet i dizajn
          koji su u centru naše ponude, garantujemo da ćete pronaći rešenje koje
          odgovara vašim potrebama i estetskim željama.
        </p>
        <h5>Kontaktirajte nas</h5>
        <p>
          Imate pitanja ili vam treba pomoć u odabiru? Naš tim stručnjaka je
          ovde da vam pomogne.
        </p>
        <div className="swiper-part">
          <Swiper number={11} productName={"UKRASNE GARNIŠNE"} />
        </div>
      </motion.section>
      <motion.section
        className="vanilla-section"
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
      >
        <h1>Nosači za zavesu za kadu</h1>
        <h3>
          Transformišite svoje kupatilo uz naš visokokvalitetan nosač za zavesu
          za kadu!
        </h3>
        <p>
          Naš nosač za zavesu dizajniran je da unapredi funkcionalnost i
          estetiku vašeg kupatila. Izrađen od izdržljivih materijala, garantuje
          dugotrajnu upotrebu i otpornost na vlagu. Elegantnog i modernog
          dizajna, savršeno se uklapa u svaki stil kupatila, bilo da je klasičan
          ili savremen.
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
            Podesiva dužina: Omogućava vam da prilagodite nosač veličini vaše
            kade i prostora.
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
          Imate pitanja ili vam treba pomoć u odabiru? Naš tim stručnjaka je
          ovde da vam pomogne.
        </p>
        <div className="swiper-part">
          <Swiper number={8} productName={"NOSAČI ZAVESA"} />
        </div>
      </motion.section>
      <motion.section
        className="vanilla-section"
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
      >
        <h1>Kupatilska galanterija</h1>
        <h3>
          Otkrijte savršenu kombinaciju funkcionalnosti i stila uz našu
          kupatilsku galanteriju!
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
            Elegantni detalji: Naša ponuda uključuje sofisticirane elemente
            poput modernih čaša za četkice i po vašoj želji dizajniranih držača
            za toalet papir i sapun, koji dodaju dašak luksuza vašem prostoru.
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
      </motion.section>
      <motion.section
        className="vanilla-section"
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
      >
        <h1>Zidne sušilice za veš</h1>
        <h3>
          Praktično rešenje za sušenje veša u vašem domu uz našu zidnu sušilicu
          za veš!
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
            Kompaktan dizajn: Zidna montaža omogućava vam da oslobodite
            dragoceni podni prostor i maksimalno iskoristite dostupne zidne
            površine.
          </li>
          <li>
            Prilagodljivost: Može se lako sklopiti kada nije u upotrebi, čime se
            dodatno štedi prostor.
          </li>
          <li>
            Snažna konstrukcija: Izrađena od visokokvalitetnih materijala
            otpornih na vlagu, koja obezbeđuje dugotrajnu izdržljivost i
            stabilnost.
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
      </motion.section>
      <motion.section
        className="vanilla-section"
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
      >
        <h1>Izrada metalnog nameštaja</h1>
        <h3>
          Otkrijte izdržljivost i eleganciju uz našu kolekciju metalnog
          nameštaja!
        </h3>
        <p>
          Naša ponuda metalnog nameštaja kombinuje vrhunski dizajn i izuzetnu
          funkcionalnost, pružajući savršeno rešenje za vaš dom, poslovni
          prostor i terasni ili baštenski prostor. Bilo da tražite moderne
          komade za dnevnu sobu, elegantne stolice za trpezariju, čvrste komode
          za kancelariju, set za terasu ili baštu, naš metalni nameštaj nudi
          kvalitet koji traje.
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
            komada nameštaja, uključujući stolove, stolice, police, komode, kao
            i specijalne komade po vašoj specifikaciji.
          </li>
          <li>
            Kvalitet Materijala: Koristimo samo najkvalitetnije metale i legure,
            što osigurava trajnost, otpornost na habanje i lako održavanje naših
            proizvoda.
          </li>
          <li>
            Personalizovani Pristup: Naš tim vam stoji na raspolaganju da
            zajedno kreiramo jedinstvene komade koji će savršeno odgovarati
            vašem prostoru i stilu.
          </li>
          <li>
            Funkcionalnost: Prilagodljivi i praktični komadi nameštaja koji
            zadovoljavaju vaše potrebe, bilo da se radi o skladištenju, sedenju
            ili dekoraciji.
          </li>
          <li>
            Lako održavanje: Metalne površine su otporne na mrlje i lako se
            čiste, čineći održavanje jednostavnim.
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
            Posvećenost klijentima: Vaše zadovoljstvo je naš prioritet. Trudimo
            se da pružimo personalizovan pristup i podršku tokom svake faze
            projekta.
          </li>
          <li>
            Inovacija i estetika: Nudimo inovativna rešenja i pažljivo biramo
            materijale i detalje kako bismo stvorili estetski privlačne komade
            nameštaja.
          </li>
        </ul>

        <h5>
          Naručite sada i oplemenite svoj prostor uz naš metalni nameštaja!
        </h5>
        <div className="swiper-part">
          <Swiper number={29} productName={"METALNI NAMEŠTAJ"} />
        </div>
      </motion.section>
    </div>
  );
};

export default Products;
