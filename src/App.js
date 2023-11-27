import React from 'react'
import { GlobalStyle } from './GlobalStyle';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import Header from './Components/Header';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs'
import SignIn from './Pages/SignIn'
import Work from './Pages/Work'
import About from './Pages/About'
import Footer from './Components/Footer';
import WhatsappButton from './Components/WhatsappButton';
import Forms from './Pages/Forms';
import Services from './Pages/Services';
import CreatorForm from './Pages/CreatorForm';
import ServicesPage from './Pages/ServicesPage.jsx';
const App = () => {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29,29,29,0.8)",
      white: "#fff",
      black: "#212529",
      darkGrey:'#292e32',
      helper: "#593C8F",
      bg: "#F6F8FA",
      footer_bg: "0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" exact element= {<Home/>} />
        <Route path="/forms" element= {<Forms/>} />
        <Route path="/work" element= {<Work/>} />
        <Route path="/contactus" element= {<ContactUs/>} />       
        <Route path="/about" element= {<About/>} />
        <Route path="/SignIn" element= {<SignIn/>} />
        <Route path="/services" element= {<Services/>} />
        <Route path="/servicesPage/:servicename" element= {<ServicesPage/>} />
        <Route path="/creatorform" element= {<CreatorForm/>} />
      </Routes>
      <WhatsappButton/>
      <Footer/>
    </Router>
    </ThemeProvider> 
  )
}

export default App
