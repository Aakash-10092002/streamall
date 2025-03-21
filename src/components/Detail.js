import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import ReactPlayer from "react-player";
import { CloseCircleOutlined,CloseOutlined ,DeleteOutlined } from '@ant-design/icons';
import { Button ,Tooltip} from "antd";

const Detail = (props) => {
    const {id}=useParams();
    const[detail,setDetail]=useState({});
    const setTrailer=props.setTrailer;

    const trailer=props.trailer;
    const handleTrailer=()=>{
      setTrailer(true);
      console.log(trailer)
    }
    const handleClose=()=>{
      setTrailer(false);
    }
   console.log(trailer)
    useEffect(() => {
        db.collection("movies")
          .doc(id)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setDetail(doc.data());
            } else {
              console.log("no such document in firebase ");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
        
      }, [id]);
      return (
        <Container>
          {trailer && trailer === true ? (
            <>
            {/* <Button > */}
            <Tooltip title="Close">
           {/* <CloseButton onClick={handleClose} icon={<CloseOutlined />} /> */}
           <TitleClose>close</TitleClose>
           <LALA onClick={handleClose}></LALA>
           </Tooltip>
           
           {/* </Button> */}
           <vid >
           <ReactPlayer url={detail.trailer }                                              
             width="100%" // Set width to 100% to match the background width
                        height="90vh" // Set height to fill the remaining space
                        controls={false}
                        playing={true}
                        />
                        </vid>
           </>
          ) : (
            <>
              <Background>
                <img alt={detail.title} src={detail.backgroundImg} />
              </Background>
    
              <ImageTitle>
                <Title>{detail.title}</Title>
              </ImageTitle>
    
              <ContentMeta>
                <Controls>
                  <Player >
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>Play</span>
                  </Player>
                  <Trailer onClick={handleTrailer}>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>Trailer</span>
                  </Trailer>
                  <AddList>
                    <span />
                    <span />
                  </AddList>
                  <GroupWatch>
                    <div>
                      <img src="/images/group-icon.png" alt="" />
                    </div>
                  </GroupWatch>
                </Controls>
                <SubTitle>{detail.subTitle}</SubTitle>
                <Description>{detail.description}</Description>
              </ContentMeta>
            </>
          )}
        </Container>
      );
    
}
// const VideoContainer = styled.div`
//     position: relative;
//     width: 100%;
//     height: 80vh;
//     z-index: 1;
// `;
const vid = styled.div`

min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
position: fixed;
top: 50px;

padding: 75px calc(3.5vw + 5px) 0; /* Add top padding here */
`;

const LALA=styled(CloseOutlined)`
cursor: pointer;
position: absolute;
top: 15px;
right: 180px;
background: rgba(0, 0, 0, 0.8);
// padding: 20px;
// border-radius: 5px;
color: white;
// font-size:30px;
@media (max-width: 768px) {
  top: 55px;
right: 18%;
} 
`;
const TitleClose=styled.div`
position: absolute;
top: 42px;
right: 170px;
color: #e6e6e6;
@media (max-width: 768px) {
  top: 10%;
right: 16%;
} 
`;
// const CloseButton = styled(Button)`
// cursor: pointer;
// position: absolute;
// top: 12px;
// right: 180px;
// background: rgba(0, 0, 0, 0.8);
// // padding: 20px;
// // border-radius: 5px;
// color: white;
// // font-size:30px;
// `;

const Container=styled.div`
position:relative;
min-height:calc(100vh-250px);
overflow-x:hidden;
display:block;
top:72px;
padding 50 calc(3.5vw + 5px);
`;

const Background=styled.div`
left:0px;
opacity:0.8;
position:fixed;
right:0px;
top:0px;
z-index:-1;

img{
    width:100vw;
    height:100vh;
    @media (max-width: 768px) {
        width: initial;
}
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 25vw;
  min-height: 170px;
  padding-bottom: 0px;
  width: 100%;

`;

const Title = styled.h1`
//   max-width: 726px;
//   min-width: 200px;
//   width: 100%;
  font-size: 67.19px; /* Set the font size to match the desired dimensions */
  font-weight: bold; /* Make the text bold */
  padding-left: 20px;
`;

const ContentMeta=styled.div`
max-width:874px;
`;

const Controls=styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
margin: 24px 0px;
min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  margin-left:20px;

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 0px 0px 10px;

    img {
      width: 25px;
    }
  }

`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
 
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 20px;
  min-height: 20px;
  margin-left:20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 25px;
  padding: 30px 0px;
  color: rgb(249, 249, 249);
  margin-left:20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;