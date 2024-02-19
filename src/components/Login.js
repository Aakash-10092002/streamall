import styled from 'styled-components';
import {auth,provider} from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory ,Link} from "react-router-dom";
import {
    selectUserName,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState,
  } from "../features/user/userSlice";
  import { useEffect } from "react";
  // import Footer from './Footer';


const Login = (props) => {

const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
      auth.onAuthStateChanged(async (user) => {
        console.log(userName,"its redirecting")
        if (user) {
          setUser(user);
          history.push("/home");
        }
      });
    }, [userName]);

    const handleAuth=()=>{
        if(!userName){
        auth.signInWithPopup(provider).then((result)=>{
            console.log(result)
            setUser(result.user);
        }).catch((error)=>{
            alert(error.message)
        })
    }
    else if(userName){
        auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));

    }
    };

    const setUser = (user) => {
        if (user) {
          const action1 = setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          });
          dispatch(action1);
        }
      };
      
      const hanldeAdmin=()=>{
        const action1 = setUserLoginDetails({
          name: "Aakash Kapoor",
          email: "firesage66@gmail.com",
          photo: "https://lh3.googleusercontent.com/a/ACg8ocLZMkyIgunc43DndRV93GPEZAer3OHr7f1drxGLTATaBwg=s96-c",
        });
        dispatch(action1);

        history.push("/home");
      }

  return (
    <>
    <Container>
      <Content>
        <CTA>
          <Heading>Welcome to Streamall</Heading>
          <Description>Watch anything and everything</Description>
          <Signup onClick={handleAuth}>Start now</Signup>
        </CTA>
    
        <StyledFooter 
        //onClick={hanldeAdmin} for easier login
        >
      
        Made with ❤️ by Aakash Kapoor
     
    </StyledFooter>
 
      </Content>
      <BgImage />
    </Container>

   
    </>
  );
}
const StyledFooter = styled.footer`
color: #fff;
position: absolute;
bottom: 0;
left: 50%;
transform: translateX(-50%);
font-size: 1rem;



@media (max-width: 768px) {
  font-size: 1.1rem;
  width:100%;

} 
`;



const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  z-index:-1;
 
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 150px 40px;
  height: 100%;
 
`;

const BgImage = styled.div`
   background-image: url("/images/login-background.jpg");
   background-image: url("/images/wallpaperflare.com_wallpaper.jpg");
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  opacity:0.3;

  img{
    opacity:1;
  }
`;

const CTA = styled.div`
  max-width: 1920px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding-top:5%;


  // max-width:650px;
  // display:flex; flex-wrap:wrap; flex-direction:column; justify-content:center;
  // align-items:center; text-align:center;
  // margin:0 auto 2vw auto;
  // transition:opacity 200ms ease-out;
  // width:100%;
  
`;

const Heading = styled.p`
  margin: 0;
  font-size: 48px;
  margin-bottom: 30px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 24px;
  } 
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 24px;
  margin: 0; /* Remove all margins */
  width: 100%; /* Take up full width */
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide overflow text */
  margin-bottom: 15px; /* Add margin to the bottom */
  // text-align: left;

  @media (max-width: 768px) {
    font-size: 20px;
  } 
`;

const Signup = styled.a`
  color: #f9f9f9;
  background-color: #0f79af;
  margin-bottom: 12px;
  width: 25%;
  font-size: 17px;
  padding: 14px 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor:pointer;

  &:hover {
    background-color: #0483ee;
  }


  @media (max-width: 768px) {
    font-size: 15px;
    width:50%;
  } 
`;


export default Login;
