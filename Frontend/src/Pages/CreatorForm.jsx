import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { useForm, ValidationError } from "@formspree/react";

const Wrapper = styled.section`
  display: flex;
  width: 95vw;
  justify-content: space-between;
  margin: auto;
  position: relative;
  top: 5rem;
  margin-bottom: 10rem;
  // margin-top: 10rem;
  .changingdiv {
    margin-left: 3rem;
    word-spacing: 1rem;
    margin-top: 7rem;
    width: 40%;
  }
`;
const FormBox = styled.div`
  // background: radial-gradient(circle at 50% 50%, #e0d2fa, #ffffff);
  height: 110vh;
  width: 50vw;
  // margin-left: 6rem;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 600px;
  margin: 2rem auto;

  textarea {
    width: 100%;
    padding: 8px;
    min-height: 3.75rem;
    border: 1px solid #e7e7e7;
    border-radius: 4px;
    color: #000;
  }
`;

const Column = styled.div`
  padding: 16px;
`;

const FormGroup = styled.div`
  margin-bottom: 40px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 17rem;
  padding: 8px;
  min-height: 2.75rem;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
  color: #000;
`;

const Select = styled.select`
  width: 17rem;
  padding: 8px;
  min-height: 2.75rem;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
  color: #000;
`;

const Button = styled.button`
  padding: 10px 20px;
  width: 20%;
  background-color: #593c8f;
  color: #fff;
  justify-content: center;
  align-items: center;
  display: flex;
  border: none;
  margin-left: 40%;
  margin-top: -15%;
  border-radius: 4px;
  cursor: pointer;
`;

const data = [
  "Consumer",
  "Technology",
  "Food & Beverages",
  "Personal Care",
  "Beauty",
  "Travel",
  "Telecom",
  "Consumer Packaged Food",
  "Media & Entertainment",
  "Sports",
  "Alcohol",
  "Fashion",
  "Government",
  "Charity",
  "Education",
  "Finance",
  "Hospital",
  "Quick Service Restaurant",
];
const gender = ["Male", "Female", "Prefer NOt To Say"];
const age = [
  "Less Than 18",
  "18-25",
  "25-30",
  "30-35",
  "35-40",
  "40-50",
  "Above 50",
];
const marital_status = ["Single", "Married"];
const Options = ["Yes", "No"];

const categories = [
  "Fashion Influencer",
  "Mom Influencer",
  "Dad Influencer",
  "Dance Influencer",
  "Food Influencer",
  "Lifestyle Influencer",
  "Finance Influencer",
  "Fitness Influencer",
  "Comedy Influencer",
  "Model Influencer",
  " Beauty Influencer",
  "Motivational Influencer",
  "Meme page",
  "Pet",
  "Bollywood Page",
  "Not Decided",
  "Singer",
  "Sports",
  "Travel",
  "Tech Influencer",
  "ealState",
  "Entertainment",
  "AutoMobile",
  "Moto vlogging",
];
const CreatorForm = () => {
  const [heading, setHeading] = useState("");
  const [num, setNum] = useState(0);
  const [isFormValid, setFormValid] = useState(false);

  useEffect(() => {
    showHeadings();
  }, []);

  const [formData, setFormData] = useState({
    email: {
      label: "Email",
      required: "true",
      value: "",
    },
    dropdown1: {
      name: "Gender",
      data: gender,
      val: "Male",
      required: "true",
    },
    dropdown2: {
      name: "Age",
      data: age,
      val: "25-30",
      required: "true",
    },
    country: {
      label: "Country",
      required: "true",
      value: "",
    },
    city: {
      label: "city",
      required: "true",
      value: "",
    },
    profession: {
      label: "profession",
      required: "true",
      value: "",
    },
    insta_followers: {
      label: " insta_followers",
      required: "true",
      value: "",
    },
    username: {
      label: "username",
      required: "true",
      value: "",
    },
    twitter_link: "",
    linkedIn_link: "",
    YouTube_Channel_link: "",
    dropdown3: {
      name: "Do You Deal In Amazon Reviews",
      data: Options,
      required: "true",
    },

    dropdown4: {
      name: "Are you a creator in a short video app",
      data: Options,
    },

    short_video_app: {
      label: "If yes, then name the short video app",
      value: "",
    },
    short_app_id: {
      label: "If yes, then name the short video app",
      value: "",
    },
    Video_post_price: {
      label: " Video post price",
      data: Options,
      required: "true",
    },
    igtv_post_price: {
      label: " Igtv post price",
      data: Options,
      required: "true",
    },
  });
  const [formData1, setFormData1] = useState({
    name: {
      label: "Full Name",
      value: "",
      required: "true",
    },
    number: {
      label: "Whatsapp Number",
      value: "",
      required: "true",
    },
    dropdown5: {
      name: "Marital Status",
      data: marital_status,
      required: "true",
    },
    state: {
      label: "Your State",
      value: "",
      required: "true",
    },
    address: {
      label: "Address",
      value: "",
      required: "true",
    },
    dropdown6: {
      name: "Categories",
      data: categories,
      required: "true",
    },
    dropdown7: {
      name: "Instagram Profile Blue Tik Verified?",
      data: Options,
      required: "true",
    },
    instagram_id_link: {
      label: " instagram id link",
      data: Options,
      required: "true",
    },
    twitter_follower: "",
    Linked_In_follower: "",

    Youtube_subscriber: "",
    amazon_profile_url: "",
    static_post_charge: {
      label: "How much do you charge for the static post?",
      value: "",
      required: "true",
    },
    reel_post_charge: {
      label: "How much do you charge for the reel post?",
      value: "",
      required: "true",
    },
    youtube_post_charge: {
      label: "How much do you charge for YouTube collaboration ?",
      value: "",
      required: "true",
    },
  });
  // useEffect(() => {
  //   setFormValid(validate());
  // }, [formData, formData1]);

  const entriesPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (e, n) => {
    const { name, value } = e.target;
    if (n === 1) {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData1({
        ...formData1,
        [name]: value,
      });
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData); // You can perform further actions here
  // };

  // const [state, handleSubmit] = useForm("xeqbdyad");
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }

  const validate = () => {
    for (const field of Object.values(formData)) {
      if (field.trim === "") {
        setFormValid(false);
      }
    }
    setFormValid(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const nextPage = () => {
    if (num < 3) {
      setCurrentPage((prevPage) => prevPage + 1);
      setNum((prevNum) => prevNum + 1);
    }
  };

  const startIdx = (currentPage - 1) * entriesPerPage;
  const endIdx = startIdx + entriesPerPage;
  const visibleEntries = Object.entries(formData).slice(startIdx, endIdx);
  const visibleEntries1 = Object.entries(formData1).slice(startIdx, endIdx);
  const headings = ["We are Your collaboration buddies"];
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
  return (
    <Wrapper>
      <div className="changingdiv">
        <h1>{heading}</h1>
      </div>
      <FormBox>
        <h2>CREATOR'S FORM</h2>
        <form
          onSubmit={handleSubmit}
          //action="https://formspree.io/f/xeqbdyad"
          method="POST"
          style={{ borderLeft: "solid 1px black" }}
        >
          <FormContainer>
            <Column>
              {visibleEntries.map(([name, value]) => (
                <div key={name}>
                  {name.startsWith("dropdown") ? (
                    <FormGroup>
                      <Label>
                        <span
                          style={{
                            display:
                              formData[name].required === "true"
                                ? "inline"
                                : "none",
                          }}
                        >
                          *
                        </span>
                        {formData[name].name.toUpperCase()}
                      </Label>
                      <Select
                        name={formData[name].name}
                        value={formData.name}
                        onChange={(e) => handleChange(e, 1)}
                        required
                      >
                        {formData[name].data.map((item) => {
                          return <option value={item}>{item}</option>;
                        })}
                      </Select>
                    </FormGroup>
                  ) : (
                    <FormGroup>
                      <Label>
                        <span
                          style={{
                            display:
                              formData[name].required === "true"
                                ? "inline"
                                : "none",
                          }}
                        >
                          *
                        </span>
                        {typeof value === "object"
                          ? formData[name].label.toUpperCase()
                          : name.includes("_")
                          ? name.replace(/_/g, " ").toUpperCase()
                          : name.toUpperCase()}
                      </Label>
                      <Input
                        type="text"
                        name={name}
                        value={formData.name}
                        onChange={(e) => handleChange(e, 1)}
                        required
                      />
                    </FormGroup>
                  )}
                </div>
              ))}
            </Column>

            <Column>
              {visibleEntries1.map(([name, value]) => (
                <div key={name}>
                  {name.startsWith("dropdown") ? (
                    <FormGroup>
                      <Label>
                        <span
                          style={{
                            display:
                              formData1[name].required === "true"
                                ? "inline"
                                : "none",
                          }}
                        >
                          *
                        </span>
                        {formData1[name].name.toUpperCase()}
                      </Label>
                      <Select
                        name={formData1[name].name}
                        value={formData1.name}
                        onChange={handleChange}
                      >
                        {formData1[name].data.map((item) => {
                          return <option value={item}>{item}</option>;
                        })}
                      </Select>
                    </FormGroup>
                  ) : (
                    <FormGroup>
                      <Label>
                        <span
                          style={{
                            display:
                              formData1[name].required === "true"
                                ? "inline"
                                : "none",
                          }}
                        >
                          *
                        </span>
                        {typeof value === "object"
                          ? formData1[name].label.toUpperCase()
                          : name.includes("_")
                          ? name.replace(/_/g, " ").toUpperCase()
                          : name.toUpperCase()}
                      </Label>
                      <Input
                        type="text"
                        name={name}
                        value={
                          typeof value === "object"
                            ? formData1[name].value
                            : value
                        }
                        onChange={handleChange}
                      />
                    </FormGroup>
                  )}
                </div>
              ))}
              <br />
              <br />
              <br />
            </Column>
          </FormContainer>
          <Button
            type="button"
            style={{ display: num < 3 ? "block" : "none" }}
            onClick={nextPage}
          >
            Next
          </Button>

          {!isFormValid ? (
            <>
              <p className=" text-center text-red-800 -mt-20">
                Fill All the Form details
              </p>
              <Button
                type="button"
                onClick={validate}
                style={{
                  display: num === 3 ? "block" : "none",
                  marginTop: "5%",
                }}
              >
                check
              </Button>
            </>
          ) : (
            <Button
              type="submit"
              style={{ display: num === 3 ? "block" : "none", marginTop: "5%" }}
            >
              Submit
            </Button>
          )}
        </form>
      </FormBox>
    </Wrapper>
  );
};

export default CreatorForm;
