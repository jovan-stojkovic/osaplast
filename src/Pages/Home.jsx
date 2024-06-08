import Slider from "../Components/Slider";

const Home = ({ slides }) => {
  return (
    <div className="page home">
      <Slider slides={slides} />
      <div className="page-cont">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <div className="horizontal-separator"></div>
        <h4>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
          repellat accusamus minima assumenda tempora error dolor modi
          blanditiis consequuntur obcaecati.
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eius
          dolorem quam doloremque vel sit explicabo error aliquam placeat ea
          quis in velit commodi modi provident, culpa necessitatibus tempora
          deserunt perspiciatis! Ab culpa dicta eum fugit deleniti magnam totam
          harum, vero maxime numquam fuga quasi ipsa voluptate mollitia fugiat
          neque quod, sed sit omnis. Sequi, eum quis corporis blanditiis soluta
          cumque ea molestiae doloribus placeat eveniet nobis facere facilis
          explicabo in aliquid enim incidunt officiis repudiandae quae
          asperiores quod modi iusto pariatur repellendus. Commodi officia
          beatae ratione quae at ullam fuga ea soluta? Illum, cumque a quis
          nesciunt cum reprehenderit architecto nam expedita magni et inventore.
          Quidem impedit, quasi deserunt delectus facere fugit aspernatur quam
          vero, voluptas accusamus nisi quisquam necessitatibus dignissimos.
          Itaque atque doloremque rem ipsum quos omnis voluptates minus
          eligendi, inventore neque officiis tempore, quibusdam sequi saepe
          possimus dolor explicabo laboriosam quasi temporibus optio odio?
          Delectus, similique sunt!
        </p>

        <div className="grid">
          <div className="cell one"></div>
          <div className="cell two"></div>
          <div className="cell three"></div>
          <div className="cell four"></div>
          <div className="cell five"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
