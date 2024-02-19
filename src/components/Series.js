

import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSerie } from "../features/movie/movieSlice";

const Series = () => {
  const movies = useSelector(selectSerie);

  return (
    <Container>
      <h2>Series for You</h2>
      <Content>
        {movies &&
          movies.map((movie, key) => (

            <Wrap key={key}>
              {movie.id}
 <Link to={`/detail/` + movie.id}>
<img src={movie.cardImg} alt={movie.title} />
<HoverText>
  <Description>{movie.title} ‧ {movie.subTitle}</Description>
</HoverText>
</Link> 
            </Wrap>
          ))}
         
      </Content>
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  display: block;
  top: 72px;
 
  padding: 0 calc(3.5vw + 5px);
  // background-color:#090b13;
  // background-color: #181b29;

  &:after {
    // background: url("/images/home-background.png") center center / cover
    //   no-repeat fixed;
    // background-color:#090b13;
    // background-color: #181b29;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }`;
 
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
padding-top:56.25%;
  position: relative;
  margin: 0 10px;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
border: 4px solid rgba(249, 249, 249, 0.1);

  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  img {
    inset: 0px;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    width: 100%;
    z-index: 1;
    top: 0;
    transition: opacity 500ms ease-in-out 0s;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  transform: scale(1.05);
  border-color: rgba(249, 249, 249, 0.8);
    overflow: visible;
  }
`;
const HoverText = styled.div`
padding-top:66%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.3s;
  text-align: center;
  color: white;



  ${Wrap}:hover & {
    opacity: 1;
  }
`;



const Description = styled.div`
  font-size: 14px;
  font-weight: lighter;
  box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
  rgb(0 0 0 / 72%) 0px 30px 22px -10px;
 transform: scale(1.02);
 border-color: rgba(249, 249, 249, 0.8);
// border: 4px solid rgba(249, 249, 249, 0.1);
background-color:grey;
border-radius: 10px;

`;

export default Series;
