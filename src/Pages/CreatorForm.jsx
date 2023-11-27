import React, { useState } from 'react';
import styled from 'styled-components';

import { useForm, ValidationError } from '@formspree/react';
import image from '../public/background-img.png'
const FormContainer = styled.div`
  display: flex;
  max-width: 600px;
  margin: 2rem auto;

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

const CreatorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country:"",
    city:'',
    insta_followers:'',
    username:'',
    twitter_link:'',
    twitter_follower:'',
    insta_id_link:'',
    youtube_post_charge:"",
    YT_Channel_link:"",
    Youtube_subscriber:"",
    amazon_profile:'',
    igtv_post_price:'',
    reel_post_charge:'',
    static_post_charge:"",
    address:'',
    number:'',
    short_app_id:'',
    short_video_app:'',
    profession:'',
    dropdown1: 'Male',
    dropdown2: '25-30',
    dropdown3:"Yes",
    dropdown4:"Yes",
    dropdown5:'Single',
    dropdown6:'Fashion Influencer',
    dropdown7:'Yes'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData); // You can perform further actions here
  // };

  const data=["Consumer","Technology","Food & Beverages","Personal Care","Beauty","Travel","Telecom","Consumer Packaged Food","Media & Entertainment","Sports","Alcohol","Fashion","Government","Charity","Education","Finance","Hospital","Quick Service Restaurant"]
  const gender=["Male","Female","Prefer NOt To Say"];
  const age=["Less Than 18","18-25","25-30","30-35","35-40","40-50","Above 50"];
  const marital_status=["Single","Married"];
  const categories=[
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
    "Moto vlogging",]

    const [state, handleSubmit] = useForm("xeqbdyad");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <>
    <h2>CREATOR'S FORM</h2>
    
    <FormContainer style={{backgroundImage:`url(${image})`,marginTop:"3rem"}}>
      <Column>
        <form onSubmit={handleSubmit}action="https://formspree.io/f/xeqbdyad" method="POST">
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Gender</Label>
            <Select name="dropdown1" value={formData.dropdown1} onChange={handleChange}>
             {
              gender.map((item)=>{
                return( <option value={item}>{item}</option>
               )
              })
             }
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Age</Label>
            <Select name="dropdown2" value={formData.dropdown2} onChange={handleChange}>
             {
              age.map((item)=>{
                return( <option value={item}>{item}</option>
               )
              })
             }
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Country</Label>
            <Input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>City</Label>
            <Input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Work Profession</Label>
            <Input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Instagram Followers</Label>
            <Input
              type="text"
              name="insta_followers"
              value={formData.insta_followers}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Your UserName</Label>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            /> </FormGroup>
          <FormGroup>
            <Label>Twitter Link</Label>
            <Input
              type="text"
              name="twitter_link"
              value={formData.twitter_link}
              onChange={handleChange}
            /></FormGroup>
          <FormGroup>
            <Label>LinkedIn Link</Label>
            <Input
              type="text"
              name="linkedin_link"
              value={formData.linkedin_link}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Youtube Channel Link</Label>
            <Input
              type="text"
              name="YT_Channel_link"
              value={formData.YT_Channel_link}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Do You Deal In Amazon Reviews</Label>
            <Select name="dropdown3" value={formData.dropdown3} onChange={handleChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
               </Select>
          </FormGroup>
          <FormGroup>
            <Label>Are you a creator in a short video app</Label>
            <Select name="dropdown4" value={formData.dropdown4} onChange={handleChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
               </Select>
          </FormGroup>
          <FormGroup>
            <Label>If yes, then name the short video app.</Label>
            <Input
              type="text"
              name="short_video_app"
              value={formData.short_video_app}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Link of the short app id. </Label>
            <Input
              type="text"
              name="short_app_id"
              value={formData.short_app_id}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>How much do you charge for the video post?  </Label>
            <Input
              type="text"
              name="Video_post_price"
              value={formData.Video_post_price}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>How much do you charge for the ig tv post?</Label>
            <Input
              type="text"
              name="igtv_post_price"
              value={formData.igtv_post_price}
              onChange={handleChange}
            />
          </FormGroup>
        </form>
      </Column>

      <Column>
      
        <form onSubmit={handleSubmit}>
        <FormGroup>
            <Label>Full Name</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            
            </FormGroup>
            <FormGroup>
            <Label>WhatsApp Number</Label>
            <Input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
            </FormGroup>
            {/* <FormGroup>
            <Label>Calling Number</Label>
            <Input
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
            />
            </FormGroup> */}
            <FormGroup>
            <Label>Marital Status</Label>
            <Select name="dropdown5" value={formData.dropdown5} onChange={handleChange}>
             {
              marital_status.map((item)=>{
                return( <option value={item}>{item}</option>
               )
              })
             }
            </Select>
            </FormGroup>
            <FormGroup>
            <Label>State</Label>
            <Input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
            </FormGroup>
            
            <FormGroup>
            <Label>Address</Label>
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            </FormGroup>
            <FormGroup>
            <Label>Categories</Label>
            <Select name="dropdown6" value={formData.dropdown6} onChange={handleChange}>
             {
              categories.map((item)=>{
                return( <option value={item}>{item}</option>
               )
              })
             }</Select>
            </FormGroup>
            <FormGroup>
            <Label>Instagram Profile Blue Tik Verified?</Label>
            <Select name="dropdown7" value={formData.dropdown7} onChange={handleChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
               </Select>
            </FormGroup>
            <FormGroup>
            <Label>Instagram Id Link </Label>
            <Input
              type="text"
              name="insta_id_link"
              value={formData.insta_id_link}
              onChange={handleChange}
            />
            </FormGroup>
            <FormGroup>
            <Label>Twitter Id Followers </Label>
            <Input
              type="text"
              name="twitter_follower"
              value={formData.twitter_follower}
              onChange={handleChange}
            />
            </FormGroup>
            <FormGroup>
            <Label>LinkedIn Id Followers</Label>
            <Input
              type="text"
              name="Linked_id_follower"
              value={formData.Linked_id_follower}
              onChange={handleChange}
            />
            </FormGroup><FormGroup>
            <Label>YouTube subscriber (Optional)</Label>
            <Input
              type="text"
              name="Youtube_subscriber"
              value={formData.Youtube_subscriber}
              onChange={handleChange}
            />
            </FormGroup>
            <FormGroup>
            <Label>Pls Mention your Amazon Profile URL
</Label>
            <Input
              type="text"
              name="amazon_profile"
              value={formData.amazon_profile}
              onChange={handleChange}
            />
            </FormGroup>
            <FormGroup>
            <Label>If yes, then name the short video app</Label>
            <Input
              type="text"
              name="short_video_app"
              value={formData.short_video_app}
              onChange={handleChange}
            />
            </FormGroup>
            <FormGroup>
            <Label>How much do you charge for the static post?</Label>
            <Input
              type="text"
              name="static_post_charge"
              value={formData.static_post_charge}
              onChange={handleChange}
            />
            </FormGroup>
            <FormGroup>
            <Label>How much do you charge for the reel post? </Label>
            <Input
              type="text"
              name="reel_post_charge"
              value={formData.reel_post_charge}
              onChange={handleChange}
            />
            </FormGroup>
            <FormGroup>
            <Label>How much do you charge for YouTube collaboration ?  </Label>
            <Input
              type="text"
              name="youtube_post_charge"
              value={formData.youtube_post_charge}
              onChange={handleChange}
            />
            </FormGroup>
            <br/><br/><br/>
          <Button type="submit">Submit</Button>
        </form>
      </Column>
    </FormContainer>
    </>
  );
};

export default CreatorForm;
