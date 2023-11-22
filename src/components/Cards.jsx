import Card from "react-bootstrap/Card";
import { RiMedalLine } from "react-icons/ri";
import { RiBriefcase5Fill } from "react-icons/ri";
import { RiRouteLine } from "react-icons/ri";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

export const Cards = () => {
  return (
    <div className="bienvenida">
      <h2>Beneficios</h2>
      <hr />
      <p>
        Duis tincidunt ipsum a risus elementum fringilla. Fusce congue mauris
        suscipit, porttitor felis eu, aliquet justo. Integer sit amet ligula nec
        dolor vestibulum suscipit vel eu lorem. Nam maximus nisi mauris. Ut nec
        blandit enim. Morbi pellentesque molestie lacinia. Vestibulum porttitor
        enim et eros feugiat, quis volutpat felis imperdiet. Donec risus quam,
        imperdiet nec magna in, cursus rutrum lorem. Etiam eu placerat est, eu
        aliquet augue. Suspendisse potenti. Phasellus convallis, purus sit amet
        tincidunt semper, diam augue facilisis ante, nec gravida metus mi in
        nunc. Praesent vel ullamcorper sem. Vivamus malesuada massa ac
        condimentum ultricies. Vivamus hendrerit mauris id dolor pellentesque,
        non sagittis risus dignissim.
      </p>
      <div className="d-flex justify-content-evenly mt-5 container">
        <div className="row">
        <Card className="col-lg-3 col-md-12">
        <RiMedalLine className="cardIcons"/>
          <Card.Body>
            <Card.Title>Calidad</Card.Title>
            <Card.Text className="cardDescription">
              Unicamente trabajamos con material de primera
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="col-lg-3 col-md-12">
        <RiBriefcase5Fill className="cardIcons"/>
          <Card.Body>
            <Card.Title>Experiencia</Card.Title>
            <Card.Text className="cardDescription">
              Some quick example text to build on the card title and make up the
              bulk of.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="col-lg-3 col-md-12">
        <RiRouteLine className="cardIcons"/>
          <Card.Body >
            <Card.Title>Adaptabilidad</Card.Title>
            <Card.Text className="cardDescription">
              Some quick example text to build on the card title and make up the
              bulk of the cards content the cards content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="col-lg-3 col-md-12">
        <RiMoneyDollarCircleFill className="cardIcons"/>
          <Card.Body>
            <Card.Title>Economico</Card.Title>
            <Card.Text className="cardDescription">
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
      </div>
    </div>
  );
};
