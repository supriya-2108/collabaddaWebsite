import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles/Buttons";
import image from "./bg-img.png";
import { useEffect, useState } from "react";
import InstagramCarousel from "./InstagramCarousel";
import { head } from "lodash";
const full_bg_img = "Images/bg_img.png";
const HeroSection = () => {
  const headings = ["Branding", "Marketing", "Tech"];
  const [heading, setHeading] = useState("");
  let index = 1;
  let inc = 0;

  const showHeadings = () => {
    let newTitle = headings[inc].slice(0, index);

    setHeading(newTitle.toUpperCase());
    if (index > headings[inc].length) {
      if (inc !== headings.length - 1) {
        inc++;
      } else {
        inc = 0;
      }
      index = 1;
    } else {
      index++;
    }

    setTimeout(() => {
      showHeadings();
    }, 300);
  };

  useEffect(() => {
    showHeadings();
  }, []);

  return (
    <Wrapper>
      <div>
        <div
          className=" h-[105vh] w-[100vw] absolute -top-2 text-white"
          style={{
            background: "radial-gradient(circle at 0% 0%, #442063, #593c8f)",
          }}
        >
          <div className=" xl:mt-[6%] md:mt-[15%] mt-[17%] sm:mt-[15%]  [word-spacing:2px] px-10">
            <p className=" py-5">We deliver unparalleled </p>
            <div className=" flex text-center">
              <h1
                className={`${
                  heading.startsWith("T")
                    ? " xl:ml-[37%] md:ml-[32%] ml-[15%] text-white"
                    : "xl:ml-[30%] md:ml-[27%] sm:ml-[20%] ml-[-8%]  text-white"
                } 2xl:text-[40px] xl:text-[35px] lg:text-[30px] md:text-[25px] sm:text-[20px] text-[22px]
                `}
              >
                {heading}
              </h1>
              <h1
                className={`${
                  heading.startsWith("T")
                    ? " absolute left-[48%] sm:left-[45%] left-[42%] text-white"
                    : " absolute left-[53%] sm:left-[47%] left-[40%] text-white"
                }  2xl:text-[40px] xl:text-[35px] lg:text-[30px] md:text-[25px] sm:text-[20px] text-[22px]`}
              >
                {" "}
                SOLUTION
              </h1>
            </div>
            <p className=" mt-10">redefine your business's digital presence</p>
            <p className="">
              Elevate Indian brands to global prominence, setting a benchmark in
              every sector that others aspire to reach.
            </p>
            <div className="buttons">
              <NavLink to="/contactus">
                <Button>Brands</Button>
              </NavLink>
              <NavLink to="/creatorform">
                <Button style={{ marginLeft: "1rem" }}>Creators</Button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className=" h-[75vh] w-[80vw] xl:mt-[31rem] mt-[35rem]">
          <InstagramCarousel />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  overflow-x: hidden !important;
  @media screen and (max-width: 500px) {
    h1 {
      color:green
      font-size: 15px;
    }
  }
  p {
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 1rem;
    z-index: 1;
  }
  .hero-section-div {
    display: flex;

    overflow-x: hidden !important;
    flex-direction: column;
  }

  .buttons {
    margin: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
    @media screen and (max-width: 1260px and min-width:800px) {
      width: 100%;
    }
  }

  .second-div {
   
  }
`;

export default HeroSection;
