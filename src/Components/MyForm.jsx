import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  max-width: 600px;
  margin: 0 auto;

  textarea{
    width: 100%;
  padding: 8px;
  min-height:3.75rem;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
  color:#000
  }
`;

const Column = styled.div`
  flex: 1;
  padding: 16px;
`;

const FormGroup = styled.div`
  margin-bottom: 40px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  min-height:2.75rem;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
  color:#000
`;

const Select = styled.select`
width: 100%;
padding: 8px;
min-height:2.75rem;
border: 1px solid #e7e7e7;
border-radius: 4px;
color:#000
`;

const Button = styled.button`
  padding: 10px 20px;
  width:100%;
  margin-left:-100px;
  background-color: #593C8F;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const MyForm = () => {
  const [formData, setFormData] = useState({
    fname:'',
    last_name:'',
    job_title:'',
    email:'',
    number:'',
    company_name:'',
    budget:'',
    dropdown1: 'Commercial Enquiry',
    dropdown2: 'Consumer',
    dropdown3:'1-5',
    dropdown4:'LinkedIn'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can perform further actions here
  };

  const data=["Consumer","Technology","Food & Beverages","Personal Care","Beauty","Travel","Telecom","Consumer Packaged Food","Media & Entertainment","Sports","Alcohol","Fashion","Government","Charity","Education","Finance","Hospital","Quick Service Restaurant"]

  return (
    <FormContainer>
      <Column>
        <form onSubmit={handleSubmit}>
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
            <Label>Email</Label>
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
            <Select name="dropdown1" value={formData.dropdown1} onChange={handleChange}>
             {
              data.map((item)=>{
                return( <option value={item}>{item}</option>
               )
              })
             }
            </Select>
          </FormGroup>
          <FormGroup>
            <Label>Campaign Budget</Label>
            <textarea placeholder='Write your Budget and Campaign Description' value={formData.budget} onChange={handleChange}/>
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
            <Select name="dropdown1" value={formData.dropdown1} onChange={handleChange}>
              <option value="Option 1">Executive</option>
              <option value="Option 2">Manager</option>
              <option value="Option 3">Senior Manager</option>
              <option value="Option 3">Director</option>
              <option value="Option 3">C-Suite</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label>Reason For Contact</Label>
            <Select name="dropdown2" value={formData.dropdown2} onChange={handleChange}>
              <option value="Option 1">Commercial Enquiry</option>
              <option value="Option 2">Press Enquiry</option>
              <option value="Option 3">Recruitment Enquiry</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label>Company Size</Label>
            <Select name="dropdown3" value={formData.dropdown3} onChange={handleChange}>
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
            <Select name="dropdown4" value={formData.dropdown4} onChange={handleChange}>
              <option value="Option A">LinkedIn</option>
              <option value="Option B">Social Media</option>
              <option value="Option C">Word Of Mouth</option>
            </Select>
          </FormGroup>

          <Button type="submit">Submit</Button>
        </form>
      </Column>
    </FormContainer>
  );
};

export default MyForm;
