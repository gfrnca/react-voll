// General
import styled from "styled-components";

// Assets
import rating from "../../assets/icons/avaliacao.png";

interface Props {
  imagem?: string;
  children?: React.ReactNode;
}

interface IImagens {
  rating: string;
}

const Title = ({ imagem, children }: Props) => {
  return (
    <div>
      <span />
      <h2>{children}</h2>
    </div>
  );
};

export default Title;
