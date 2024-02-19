import styled from "styled-components";
import {auth,provider} from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory ,Link} from "react-router-dom";
import {
    selectUserName,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState,
  } from "../features/user/userSlice";
  import { useEffect, useState } from "react";


const Header = (props) => {

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

      const[signout,setsignout]=useState(false);

      const handleButton=()=>{
        setsignout(!signout);
      }


      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      useEffect(() => {
        // Detect screen size changes and set mobileMenuOpen accordingly
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setMobileMenuOpen(true);
          } else {
            setMobileMenuOpen(false);
          }
        };
    
        // Add event listener for window resize
        window.addEventListener("resize", handleResize);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
      return ( 
    <Nav>
        <Logo >
          {/* <Link to="/home">
            <img src="/images/logo-transparent-png.png" alt="primevideo"/>
            </Link> */}
            {userName? <Link to="/home">
            <img src="/images/logo-transparent-png.png" alt="primevideo"/>
            </Link>: 
            <Link to="/">
            <img src="/images/logo-transparent-png.png" alt="primevideo"/>
            </Link>}
        </Logo>

        {
            !userName?<Login onClick={handleAuth} >LOGIN</Login>:(
            <>
   
    
        <NavMenu>
        <Link to="/home">
            <img src="/images/home-icon.svg" alt="HOME"/>
            <span>HOME</span>
        </Link>
        <a >
            <img src="/images/search-icon.svg" alt="SEARCH"/>
            <span>SEARCH</span>
        </a>
        <a >
            <img src="/images/watchlist-icon.svg" alt="WATCHLIST"/>
            <span>WATCHLIST</span>
        </a>        
        <Link to="/movie">
            <img src="/images/movie-icon.svg" alt="MOVIES"/>
            <span>MOVIES</span>
            </Link>
            <Link to="/series">
            <img src="/images/series-icon.svg" alt="SERIES"/>
            <span>SERIES</span>
            </Link >
            {/* <Link to="/originals">
            <img src="/images/original-icon.svg" alt="ORIGINAL"/>
            <span>ORIGINALS</span>
            </Link> */}
       </NavMenu>
       <SignOut>
         <UserImg onClick={handleButton} src={userPhoto} alt={userName}/>
         {signout && signout===true  && (         
         <DropDown>
            <span onClick={handleAuth}>Sign Out</span>
         </DropDown>)}
         {signout && signout===true &&mobileMenuOpen &&mobileMenuOpen===true && (         
         <DropDown>
            
            
                  
                 <Link to="/home">
            {/* <img src="/images/home-icon.svg" alt="HOME"/> */}
            <span>HOME</span>
        </Link>
        <br/> <br/> 
        <span>
        <Link to="/movie">
            {/* <img src="/images/movie-icon.svg" alt="MOVIES"/> */}
            <span>MOVIES</span>
            </Link></span>
            <br/> <br/> 
            <span>
            <Link to="/series">
            {/* <img src="/images/series-icon.svg" alt="SERIES"/> */}
            <span>SERIES</span>
            </Link >
            </span>
            <br/> <br/> 
            <span>WATCHLIST</span>
            <br/> <br/> 
            <span>SEARCH</span>
            <br/> <br/> 
            <span onClick={handleAuth}>Sign Out</span>

        
       
         </DropDown>)}
         

       </SignOut>
       </>)
      }
       {/* <Login onClick={handleAuth}>LOGIN</Login> */}
     </Nav> 
        );
}
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;

  @media (max-width: 768px) {
    height: auto;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
  }
`;

const Logo = styled.a`
  padding: 0;
  width: 10%;
  margin-top: 10px;
  max-height: 35px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100px;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  // margin-right: 30%;
  // margin-left: 25%;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
      @media (max-width: 768px) {
        height: 20px;
        min-width: 20px;
        width: 20px;
      } 
    }


    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
      @media (max-width: 768px) {
        font-size:10px;
      } 
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

   @media (max-width: 768px) {
    display: none;
  } 
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor:pointer;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
  }
`;

const UserImg = styled.img`
  height: 100%;
  @media (max-width: 768px) {
    height: 40px;
  }
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 2px;
  width: 100px;
  opacity: 1;
img{
  @media (max-width: 768px) {
    height: 18px;
    min-width: 20px;
    width: 20px;
  } 
}
@media (max-width: 768px) {
  font-size:10px;
} 
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

const MobileMenuIcon = styled.div`
  display: none;

  /* Show the menu icon on mobile */
  @media (max-width: 768px) {
    display: block;
    font-size: 24px;
    cursor: pointer;
    margin-right: 16px;
  }
`;

const MobileMenu = styled.div`
  display: none;

  /* Show the mobile menu when mobileMenuOpen is true */
  @media (max-width: 768px) {
    display: block;
    /* Add styling for the mobile menu */
  }
`;

 

// const Nav=styled.nav`
// position:fixed;
// top:0;
// left:0;
// right:0;
// height:70px;
// background-color:#090b13;
// display:flex;
// justify-contnt:space-between;
// align-items:center;
// padding:0 36px;
// // letter-spacing:16px;
// z-index:3;
// `;

// const Logo=styled.a`
// padding:0;
// width:140px;
// margin-top:10px;
// max-height:40px;
// font-size:0;
// display:inline-block;
// margin-right:70px;

// img{
//     display:block;
//     width:100%;
// }
// `;

// const NavMenu=styled.div`
// align-items:center;
// display:flex;
// flex-flow:row nowrap;
// height:100%;
// justify-content:flex-end;
// margin:0px;
// padding:0px;
// position:relative;
// margin-right:auto;
// margin-left:120px;

// a{
//     display:flex;
//     align-items:center;
//     padding:0 30px;

//     img{
//         height:25px;
//         min-width:20px;
//         width:25px;
//         z-index:auto;
//     }
//     span{
//         color:rgb(249,249,249);
//         font-size:20px;
//         letter-spacing:5px
//         padding:5px 0px;
//         line-height:1.08;
//         white-space:nowrap;
//         position:relative;
    

//     &:before{
//         background-color:rgb(249,249,249);
//         border-radius: 0px 0px 4px 4px;
//         bottom:-6px;
//         content:"";
//         height:2px;
//         left:0px;
//         opacity:0;
//         position:absolute;
//         right:0px;
//         transform-origin:left center;
//         transform:scaleX(0);
//         transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
//         visibilty:hidden;
//         width:auto;
//     }
// }
// &:hover{
//     span:before{
//         transform:scaleX(1);
//         visibilty:visible;
//         opacity:1 !important;
//     }
// }
 
// }


// // @media(max-width:768px){
// //     display:none;
// // }

// `;

// const Login=styled.a`
// background-color:rgba(0,0,0,0.6);
// padding:8px 16px;
// text-transform:uppercase;
// letter-spacing:1.5px;
// border:1px solid #f9f9f9;
// boreder-radius:4px;
// transition:all 0.2s ease 0s;



// &:hover{
//     background-color:#f9f9f9;
//     color:#000;
//     border-color:transparent;
// }

// `;

// const UserImg=styled.img`
// height:100%;
// `;

// const DropDown = styled.div`
// position: absolute;
// top:60px;
// right:0px;
// background:rgb(19,19,19);
// border:1px solid rgba(151,151,151,0.34);
// border-radius:4px;
// box-shadow:rgba(0 0 0/50%) 0px 0px 18px 0px;
// padding:10px;
// font-size:14px;
// letter-spacing:2px;
// width:100px;
// opacity:0;
// `;

// const SignOut = styled.div`
// position: relative;
//   height: 48px;
//   width: 48px;
//   display: flex;
//   cursor: pointer;
//   align-items: center;
//   justify-content: center;

//   ${UserImg} {
//     border-radius: 50%;
//     width: 100%;
//     height: 100%;
//   }

//   &:hover {
//     ${DropDown} {
//       opacity: 1;
//       transition-duration: 1s;
//     }
//   }
// `;
export default Header;