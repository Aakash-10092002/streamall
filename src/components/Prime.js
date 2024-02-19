import styled from "styled-components";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPrime } from "../features/movie/movieSlice";

const Prime = () => {
  const movies = useSelector(selectPrime);
  console.log(movies, ":🛢️running in prime");
    return ( 
        <Container>
           <h2>Prime Exclusive</h2>
           <Content>
           {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
            {/* <Wrap>
                <Link to="/">
                    <img src="https://images8.alphacoders.com/111/thumbbig-1116551.webp" alt=""/>
                </Link>
            </Wrap>
            <Wrap>
                <Link to="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcmKCb-vUBGh0lG4FX-NZBRXgMCPcVOFv23w&usqp=CAU" alt=""/>
                </Link>
            </Wrap>
            <Wrap>
                <Link to="/">
                    <img src="https://c4.wallpaperflare.com/wallpaper/649/1012/960/john-wick-movie-poster-wallpaper-preview.jpg" alt=""/>
                </Link>
            </Wrap>
            <Wrap>
                <Link to="/">
                    <img src="https://images.alphacoders.com/127/1272475.jpg" alt=""/> 
                    </Link>
            </Wrap> */}

           </Content>
        </Container>

     );
}
const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap=styled.div`
padding-top:56.25%;
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor: pointer;
overflow: hidden;
position: relative;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
border: 4px solid rgba(249, 249, 249, 0.1);

img {
  inset: 0px;
  display: block;
  height: 100%;
  width:100%;
  object-fit: cover;
  opacity: 1;
  position: absolute;
  transition: opacity 500ms ease-in-out 0s;
  width: 100%;
  z-index: 1;
  top: 0;
}

&:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
export default Prime;