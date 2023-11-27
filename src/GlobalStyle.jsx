import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Georgia, Times, "Times New Roman", serif
  overflow-x: hidden !important;


html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden !important;

}

body {
  overflow-x: hidden !important;


}

body::-webkit-scrollbar {
  width: 1.5rem;
  overflow-x: hidden !important;

}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}


h1,
h2,
h3,
h4 {
  font-family: Georgia, Times, "Times New Roman", serif;

}

h1 {
  color: ${({ theme }) => theme.colors.heading};
  font-size: 2.5rem;
  text-transform: capitalize;
  font-weight: bold;
  line-height: 1.1;
  padding-left:30px;
  letter-spacing: -.05em;
}

 h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 2rem;
   margin:30px 0px;
   font-weight: 700;
   display: flex;
    justify-content: center;
    align-items: center;
   white-space: normal;
  }

h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p{
  color: ${({ theme }) => theme.colors.darkGrey}
  font-size: 1rem;
  line-height: 1.5;
  font-weight:400;
}


a {
  text-decoration: none;
}

li {
  list-style: none;
}

.contentInWorkSection{
  display:flex;
  position:absolute;
  top:80px;
  color:#292e32;
  font-weight:700;
  font-size:1rem,
  line-height:1;
  background-color:rgba(0,0,0,0.35) ;
  width:98%;margin-left:-3rem;
  border-radius:10px;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-left:0px;
    padding:0;
    margin:0;
  }
}

.innercontent{
  display:flex;
}


${"" /* resuable code section  */}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 9rem;
}
.grid-1{
  display:grid;
  gap:0rem;
}

.grid--buttons {
  display: grid;
  gap: 1rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);

}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr 0.4fr 0.8fr ;
}

.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}

  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }


   .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }

input, textarea{
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
   box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    }

@media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
    max-width: 130rem;
    padding: 0 3.2rem;
  }
  }

   @media (max-width: ${({ theme }) => theme.media.mobile}) {
       html {
      font-size: 50%;
    }
    p{
      font-size:1.3rem;
    }
    .contentInWorkSection{
      font-size:1.5rem;
    }
.grid{
  gap: 3.2rem;
}
      .grid-two-column , .grid-three-column, .grid-four-column{
          grid-template-columns: 1fr;
        }
    }

`;