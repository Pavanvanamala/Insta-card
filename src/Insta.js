import React, { Fragment, useEffect, useState } from "react";
import { BiUserCircle, BiComment, BiShare } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";


// import 'bootstrap/dist/css/bootstrap.min.css';


const userData = [
  {
    userName: "Pavan Kumar",
    userImage: "./Images/Pavan bmw.jpg",
    userQuote: "Set Limits Not Everyone Deserves Your Vibes",
    like:false,
    doubleClick:false,
    count:0
   
  },
  {
    userName: "Rohit Sharma",
    userImage: "./Images/rohit.jpg",
    userQuote: "Indian Cricketer",
    like:false,
    doubleClick:false,
    count:0
  },
  {
    userName: "Ramesh",
    userImage: "./Images/ramesh.jpg",
    userQuote: "Brotherhood",
    like:false,
    doubleClick:false,
    count:0
    

  },
  {
    userName: "Sadiq",
    userImage: "./Images/sadiqq.jpg",
    userQuote: "Waise Toh Dost Bahut hai Par Tu Sab se Special Hai",
    like:false,
    doubleClick:false,
    count:0
  },
  {
    userName: "Narendra Modi",
    userImage: "./Images/modi.png",
    userQuote: "Prime minister of Bharat",
    like:false,
    doubleClick:false,
    count:0
  },


  {
    userName: "Coder",
    userImage: "./Images/fullstack.jpg",
    userQuote: "Full Stack Web Devlopment",
    like:false,
    doubleClick:false,
    count:0
  },
  {
    userName: "Hanuman",
    userImage: "./Images/hanuman.png",
    userQuote: "Bajrangbali Ki Jai",
    like:false,
    doubleClick:false,
    count:0
  },
  {
    userName: "Shivaji Maharaj",
    userImage: "./Images/shivaji.jpg",
    userQuote: "Chatrapathi Shivaji Maharaj Ki Jai",
    like:false,
    doubleClick:false,
    count:0
  },
]

function Insta() {
  // const [like, setLike] = useState(false);
  // const [count, setCount] = useState(0);
  // const [showlikeicon, setshowlikeicon] = useState(false)
  const [userState , setUserState] = useState(userData)
  const [currentCard,setCurrentCard]=useState(-1)


  //handle likes
  const handleLikes = (pIndex) => {
    setUserState((prevUser)=>{
       return prevUser.map((item ,index)=>{
            if(pIndex===index){
              return {...item ,count:item.like ? 0 : 1 , like: !item.like}
            }else{
              return item
            }
        })
    })
  }


  //double click

  const doubleClick = (pIndex) => {
    setUserState((prevUser)=>{
       return prevUser.map((item ,index)=>{
            if(pIndex===index){
              setCurrentCard(pIndex)
              return {...item ,count:1 , like: !item.like,doubleClick:true}
            }else{
              return item
            }
        })
    })
  }
    //removing double click

    useEffect (()=>{
      if(currentCard!==-1){
        setTimeout(()=>{
        setCurrentCard(-1)
        },1000)
      }


    },[currentCard])









  return (
    <>

      <div className="rootContainer bg-info-subtle" >
      <h1 className="text-danger fst-italic text-center ">INSTAGRAM FEEDS</h1>
        
        {userState.map((user, index) => {
          return (
            <Fragment key={index} className="col-md-6 col-lg-4 mb-4" >
              <div className="main-container h-50">
                <h4 className="text-danger-emphasis font-monospace m-2" > Likes Count : {user.count}</h4> 
                
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-header fw-bold" >
                    <BiUserCircle size={30} /> {user.userName}
                  </div>

                  <img
                    title={user.userImage}
                    src={user.userImage}
                    alt="post-img"
                    height={"300px"}
                    width="100%"
                    onDoubleClick={()=>{doubleClick(index)}}

                  />
                  { user.doubleClick && currentCard===index && (<AiFillHeart className="text-danger like-icon" size={60} style={{ position: "absolute", top: "50%", left: "50%", transform: 'translate(-50%, -50%)' }} />)}

                  <div className="card-footer ">
                    {user.like ? (
                      <AiFillHeart
                        size={30}
                        className="text-danger"
                        onClick={()=>{handleLikes(index)}}
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        onClick={()=>{handleLikes(index)}}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                    &nbsp;
                    <BiComment size={30} />
                    &nbsp;
                    <BiShare size={30} />
                    <p className="fst-italic ">{user.userQuote}</p>
                  </div>
                </div>
              </div>

            </Fragment>
          )

        })

        }
      </div>

    </>
  );
}

export default Insta;



// .rootDivContainer {
//   display: grid;
//   grid-template-rows: auto auto;
// }



      


