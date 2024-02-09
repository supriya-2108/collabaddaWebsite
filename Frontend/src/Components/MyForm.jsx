import React, { useEffect, useState } from "react";
import styled from "styled-components";
const bg_img = "Images/form_bg_img.png";
const FormContainer = styled.div`
  display: flex;
  // background-image:url(${bg_img});
  max-width: 600px;
  margin: 2rem auto;
  margin-left: 7rem;
  textarea {
    width: 100%;
    padding: 8px;
    min-height: 3.75rem;
    border-radius: 4px;
    color: #000;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 770px) {
    max-width: 100%;
    flex-direction: column;
    margin-left: -15%;
    justify-content: center;
    text-align: center;
    align-items: center;
    textarea {
      width: 80%;
    }
    @media (max-width: 460px) {
      max-width: 150%;
    }
  }
`;

const Column = styled.div`
  flex: 1;
  padding: 16px;
`;

const FormGroup = styled.div`
  margin-bottom: 40px;
  .description {
    width: 210%;
  }

  @media (max-width: 770px) {
    width: 60%;
    margin: 2rem auto;
    .description {
      width: 30rem;
    }
  }
`;

const Label = styled.label`
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
`;

const Input = styled.input`
  height: auto;
  width: 15rem;
  min-height: 2.75rem;
  // color: rgba(0,0,0,0.6)
  border-radius: 0.45rem;
  margin-top: 0;
  margin-bottom: 0;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-left: 0;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.6 @media (max-width: 770px) {
    width: 40%;
  }
`;

const Select = styled.select`
  width: 15rem;
  padding: 8px;
  min-height: 2.75rem;
  // border-radius: 4px;
  color: #000;
  border-radius: 0.45rem;
  margin-top: 0;
  margin-bottom: 0;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-left: 0;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.6rem;
`;

const Button = styled.button`
  padding: 10px 20px;
  width: 20%;
  margin-left: 50%;
  margin-top: -30%;
  background-color: #593c8f;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  @media (max-width: 770px) {
    margin-left: 20%;
    margin-top: 10%;
    width: 60%;
  }
`;
const para = styled.p`
  padding: 10px 20px;
  width: 100%;
  margin-left: -100px;
  margin-top: 60%;
  @media (max-width: 770px) {
    margin-left: 20%;
    margin-top: 10%;
    width: 60%;
  }
`;

const MyForm = () => {
  const [isFormValid, setFormValid] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    last_name: "",
    job_title: "",
    email: "",
    number: "",
    company_name: "",
    budget: "",
    dropdown1: "Commercial Enquiry",
    dropdown2: "Consumer",
    dropdown3: "1-5",
    dropdown4: "LinkedIn",
    dropdown5: "Campaign Budget",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    for (const field of Object.values(formData)) {
      if (field.trim === "") {
        setFormValid(false);
        return;
      }
    }
    setFormValid(true);
    return;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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

  return (
    <>
      <FormContainer>
        <Column>
          <form>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Email ID</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Job Title</Label>
              <Input
                type="text"
                name="job_title"
                value={formData.job_title}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Company Name</Label>
              <Input
                type="text"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Industry</Label>
              <Select
                name="dropdown1"
                value={formData.dropdown1}
                onChange={handleChange}
              >
                {data.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>Campaign Budget</Label>
              <Select
                name="dropdown5"
                value={formData.dropdown5}
                onChange={handleChange}
              >
                <option value="Under ₹1,00,000">Under ₹1,00,000</option>
                <option value="₹1,00,000-₹5,00,000">₹1,00,000-₹5,00,000</option>
                <option value="₹5,00,000-₹10,00,000">
                  ₹5,00,000-₹10,00,000
                </option>
                <option value="₹10,00,000-₹20,00,000">
                  ₹10,00,000-₹20,00,000
                </option>
                <option value="Above ₹20,00,000">Above ₹20,00,000</option>
              </Select>
            </FormGroup>

            <FormGroup className="description">
              <Label>Campaign Description</Label>
              <textarea
                placeholder="Write your Campaign Description"
                name="budget"
                style={{ height: window.innerWidth > 770 ? "7rem" : "" }}
                value={formData.budget}
                onChange={handleChange}
              />
            </FormGroup>
          </form>
        </Column>

        <Column>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Phone Number</Label>
              <Input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Job Level</Label>
              <Select
                name="dropdown1"
                value={formData.dropdown1}
                onChange={handleChange}
              >
                <option value="Option 1">Executive</option>
                <option value="Option 2">Manager</option>
                <option value="Option 3">Senior Manager</option>
                <option value="Option 3">Director</option>
                <option value="Option 3">C-Suite</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>Reason For Contact</Label>
              <Select
                name="dropdown2"
                value={formData.dropdown2}
                onChange={handleChange}
              >
                <option value="Option 1">Commercial Enquiry</option>
                <option value="Option 2">Press Enquiry</option>
                <option value="Option 3">Recruitment Enquiry</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>Company Size</Label>
              <Select
                name="dropdown3"
                value={formData.dropdown3}
                onChange={handleChange}
              >
                <option value="Option 1">1-5</option>
                <option value="Option 2">6-11</option>
                <option value="Option 3">12-21</option>
                <option value="Option 2">22-51</option>
                <option value="Option 3">51-100</option>
                <option value="Option 3">100-500</option>
                <option value="Option 3">500-1000</option>
                <option value="Option 3">1000+</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>From where did you hear about CollabAdda</Label>
              <Select
                name="dropdown4"
                value={formData.dropdown4}
                onChange={handleChange}
              >
                <option value="Option A">LinkedIn</option>
                <option value="Option B">Social Media</option>
                <option value="Option C">Word Of Mouth</option>
              </Select>
            </FormGroup>
          </form>
        </Column>
      </FormContainer>
      {!isFormValid ? (
        <>
          <p className=" text-center text-red-800">Fill All the Form details</p>
          <Button type="button" onClick={validate}>
            check
          </Button>
        </>
      ) : (
        <Button type="submit">Submit</Button>
      )}
    </>
  );
};

export default MyForm;
