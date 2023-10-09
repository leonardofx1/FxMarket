import { BsInstagram } from "react-icons/bs";
import {AiFillGithub} from "react-icons/ai"
import * as S from "./style";

const Footer = () => {
  return (
    <S.Rodape>
      <a href="http://" target="_blank" >
        <BsInstagram />
        Fxmarket2gmail.com
      </a>
      <a href="https://github.com/leonardofx1"><AiFillGithub/> leonardofx1
      
      
      </a>
    </S.Rodape>
  );
};

export default Footer;
