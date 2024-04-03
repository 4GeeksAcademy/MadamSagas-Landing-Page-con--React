import React from "react";
import NavBar from "./NavBar";
import Cards from "./Cards";
import Jumbo from "./Jumbo";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  let data = [
    {
      title: "Satart Me Up",
      description: `If you start me up
      If you start me up, I'll never stop
      You can start me up
      You can start me up, I'll never stop...`,
      imgURL:
        "https://upload.wikimedia.org/wikipedia/en/1/16/TattooYou81.jpg?20180511221546",
      buttonLabel: "Go to Start Me Up Lyrics",
    },
    {
      title: "Emotional Rescue",
      description: `I'll be your saviour, steadfast and true
      I'll come to your emotional rescue
      I'll come to your emotional rescue
      Ooh, ooh, ooh, ooh...`,
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-148230-emotional-rescue-1353363310.jpg?w=500",
      buttonLabel: "Go to Start Me Up Lyrics",
    },
    
    {
      title: "She's A Rainbow",
      description: `She comes in colours everywhere
      She combs her hair
      She's like a rainbow
      Coming, colours in the air
      Oh, everywhere
      She comes in...`,
      imgURL: `https://upload.wikimedia.org/wikipedia/ru/1/1d/Grrr_stones.jpg`,
      buttonLabel: "Go to Start Me Up Lyrics",
    },
    {
      title: `You Can't Always Get What You Want
      `,
      description: `You can't always get what you want
      But if you try sometimes, well, you might find
      You get what you need
      Ah, yeah
      Oh....`,
      imgURL: "https://upload.wikimedia.org/wikipedia/en/c/c0/LetitbleedRS.jpg",
      buttonLabel: "Go to Start Me Up Lyrics",
    },
  ];
  return (
    <>
      <NavBar />
      <Jumbo />
      <div className="container">
        <div className="text">
          <div className="row">
            {data.map((value, index, array) => {
              // return <Cards key={index} item= {value}/>
              return (
                <Cards
                  key={index}
                  title={value.title}
                  description={value.description}
                  imgURL={value.imgURL}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
