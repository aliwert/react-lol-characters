import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../../assets/logo.png";
import Switch from "../switch/Switch";


const Header = () => {
  return (
    <Container>
      <a
        href="https://www.leagueoflegends.com/en-us/"
        target="_blank"
      >
        <Image src={logo} width="200px" className="mx-auto" />
      </a>
      <br />
      <h1 className="my-2 title h1 dark:bg-gray-900">League Of Legends Characters <Switch /></h1>
    </Container>
  );
};

export default Header;
