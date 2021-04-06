import Styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(/images/tooplate_body.jpg);
    background-color: #a09c93;
	  background-repeat: repeat-y;
	  background-position: center;
  }
`

const TooplateWrapper = Styled.div`
  margin: 0;
	padding: 0;
	color: #302d26;
	font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
	font-size: 12px;
	line-height: 1.4em; 

  width: 1111px;
	padding: 0 10px;
	margin: 0 auto;
  .cleaner {
    clear: both;
  }
`;

const TooplateSidebar = Styled.div`
  position: fixed;
	width: 240px;
	text-align: right;
`;

const SiteTitle = Styled.div`
  display: block; text-align: right; margin: 80px 0 40px; width: 220px; height: 60px; padding: 20px 10px; background: url(/images/tooplate_header.jpg) no-repeat;
  a {
    font-size: 24px; font-family: Georgia, "Times New Roman", Times, serif; font-weight: 700; color: #fff
  }
  a span {
    display: block; margin-top: 5px; font-size: 12px; font-weight: 400; font-family: Tahoma, Geneva, sans-serif;
  }
`;

const TooplateMenu = Styled.div`
  width: 240px; 
  margin-bottom: 60px;
  ul {
    margin: 0; padding: 0; list-style: none;
  }
  ul li {
    margin: 0; padding: 0;
  }
  ul li a {
    clear: both; display: block; float: right; position: relative;  margin-bottom: 10px; letter-spacing: 3px; color: #432329; text-shadow: 1px 1px 1px #a46d77; padding: 0 60px 0 30px; height: 39px; line-height: 39px; background:url(/images/tooplate_menu_item_bgl.png) left no-repeat;
    &:hover{
      text-decoration: none; color: #fff; text-shadow: 1px 1px 1px #000;
    }
    span {
      position: absolute; width: 3px; height: 39px; top: 0; right: 0px; background: url(/images/tooplate_menu_item_bgr.png);
    }
  }

`;

const Twitter = Styled.div`
  padding-right: 10px;
  ul {
  margin: 0; padding: 0; list-style: none 
  }
  ul li {
  margin: 0 0 15px; padding: 0 0 15px; border-bottom: 1px dashed #665f51
  }
`;

const TooplateMain = Styled.div`
  width: 750px;
	padding: 60px 30px 60px 40px;
	float: right;
  h1 {
    font-size: 38px; padding-bottom: 30px; margin-bottom: 30px; background: url(/images/header.png) repeat-x bottom;
  }
`;

const MainBox = Styled.div`
  min-height: 600px; padding: 30px 0; margin-bottom: 30px;
`;

export {
  TooplateWrapper,
  TooplateSidebar,
  SiteTitle,
  TooplateMenu,
  Twitter,
  TooplateMain,
  MainBox,
  GlobalStyle
};
