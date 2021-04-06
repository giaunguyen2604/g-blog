import React from 'react'
import dynamic from 'next/dynamic'
import { TooplateWrapper, TooplateSidebar, SiteTitle, TooplateMenu, Twitter, TooplateMain, MainBox, GlobalStyle } from './Styled'


const Diary: React.FC = () => {

  const EditorDiary = dynamic(() => import("../../components/EditorDiary"), {
    ssr: false,
  });

  return (
    <TooplateWrapper id="tooplate_wrapper">
      <GlobalStyle />
      <TooplateSidebar id="tooplate_sidebar">
        <SiteTitle id="site_title"><a href="#">Simple Life</a></SiteTitle>
        <TooplateMenu id="tooplate_menu">
          <ul>
            <li><a href="#home" className="home"><span />Home</a></li>
            <li><a href="#about" className="about"><span />About</a></li>
            <li><a href="#portfolio" className="portfolio"><span />Portfolio</a></li>
            <li><a href="#services" className="services"><span />Services</a></li>
            <li><a href="#contact" className="contact"><span />Contact</a></li>
          </ul>
          <div className="cleaner" />
        </TooplateMenu> {/* END of */}
        <Twitter id="twitter">
          <h3>Twitter</h3>
          <p>Copyright © 2048 <a href="#">Company Name</a> <br />
        by <a href="http://www.tooplate.com/free-templates" target="_parent">Free Templates</a></p>
        </Twitter>
      </TooplateSidebar>
      <TooplateMain id="tooplate_main">
        <MainBox id="home" className="main_box">
          <EditorDiary/>
        </MainBox>
      </TooplateMain> {/* END of main */}
      <div className="cleaner" />
    </TooplateWrapper>

  )
}

export default Diary