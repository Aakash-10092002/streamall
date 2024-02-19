import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommended from "./Recommended";
import Netflix from "./Netflix";
import Trending from "./Trending";
import Prime from "./Prime";
import Anime from "./Anime";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";


const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const setTrailer=props.setTrailer;
  setTrailer(false);
  useEffect(() => {
    console.log("hello, we are fetching at home");
  
    let recommendeds = [];
    let trendings = [];
    let netflixs = [];
    let primes = [];
    let animes = [];
    let movies=[];
    let series=[];
    let originals=[];
  
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        switch (doc.data().type) {
          case "recommended":
            recommendeds.push({ id: doc.id, ...doc.data() });
            break;
  
          case "netflix":
            netflixs.push({ id: doc.id, ...doc.data() });
            break;
  
          case "prime":
            primes.push({ id: doc.id, ...doc.data() });
            break;
  
          case "trending":
            trendings.push({ id: doc.id, ...doc.data() });
            break;
  
          case "anime":
            animes.push({ id: doc.id, ...doc.data() });
            break;

            case "movie":
              movies.push({ id: doc.id, ...doc.data() });
              break;
              case "serie":
                series.push({ id: doc.id, ...doc.data() });
                break;

                case "original":
                  originals.push({ id: doc.id, ...doc.data() });
                  break;
        }
      });
  
      dispatch(
        setMovies({
          recommended: recommendeds,
          trending: trendings,
          netflix: netflixs,
          prime: primes,
          anime: animes,
          serie:series,
          original:originals,
          movie:movies
        })
      );
    });
  }, [userName]);
  
  // useEffect(() => {
  //   console.log("hello , we r fetching at home");
  //   db.collection("movies").onSnapshot((snapshot) => {
  //     snapshot.docs.map((doc) => {
  //       console.log(recommendeds,"we r circling at home");
  //       switch (doc.data().type) {
  //         case "recommended":
  //           recommendeds = [...recommendeds, { id: doc.id, ...doc.data() }];
  //           break;

  //         case "netflix":
  //           netflixs = [...netflixs, { id: doc.id, ...doc.data() }];
  //           break;

  //         case "prime":
  //           primes = [...primes, { id: doc.id, ...doc.data() }];
  //           break;

  //         case "trending":
  //           trendings = [...trendings, { id: doc.id, ...doc.data() }];
  //           break;

  //           case "anime":
  //            animes = [...animes, { id: doc.id, ...doc.data() }];
  //             break;
  //       }
  //     });

  //     dispatch(
  //       setMovies({
  //         recommended: recommendeds,
  //         trending: trendings,
  //         netflix:netflixs,
  //         prime:primes,
  //         anime:animes
  //       })
  //     );
  //   });
  // }, [userName]);
    return ( 
<Container>
        <ImgSlider/>
        <Viewers/>
        <Recommended/>
        <Trending/>
        <Netflix/>
        <Prime/>
        <Anime/>

</Container>
     );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  // background-color:#090b13;
  background-color: #181b29;

  &:after {
    // background: url("/images/home-background.png") center center / cover
    //   no-repeat fixed;
    // background-color:#090b13;
    background-color: #181b29;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }`;
 
export default Home;