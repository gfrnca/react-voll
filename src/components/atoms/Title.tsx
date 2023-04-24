// General
import styled from "styled-components";

// Assets
import rating from "../../assets/icons/rating.png";
import graphic from "../../assets/icons/graphic.png";
import conference from "../../assets/icons/conference.png";

interface Props {
  image?: string;
  children?: React.ReactNode;
}

interface IImages {
  rating: string;
  graphic: string;
  conference: string;
}

const IconSpan = styled.span<Props>`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 25px;
  height: 25px;
  background-image: ${(props) =>
    props.image ? `url(${props.image})` : "none"};
`;

const IconTitle = styled.h2`
  color: var(--light-blue);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Title = ({ image, children }: Props) => {
  const assetsList: IImages = {
    rating: rating,
    graphic: graphic,
    conference: conference,
  };

  return (
    <Container>
      {image && <IconSpan image={assetsList[image as keyof IImages]} />}
      <IconTitle>{children}</IconTitle>
    </Container>
  );
};

export default Title;
