import React from 'react'
import {
  TooplateWrapper, TooplateSidebar, SiteTitle,
  TooplateMenu, Twitter, TooplateMain, MainBox, GlobalStyle, ListDiaries
} from './Styled'
import ItemDiary from '../../components/ItemDiary'
import ModalDiary from '../../components/ModalDiary'
import toogleModalViewDiary from '../../utils/toggleModalViewDiary'

const Diary: React.FC = () => {

  const tempListDiaries = [
    {
      title: 'How do you feel today?',
      color: '#f8f7f7'
    },
    {
      title: 'How do you feel today?',
      color: '#f6faf5'
    },
    {
      title: 'How do you feel today?',
      color: '#f5f6f8'
    },
    {
      title: 'How do you feel today?',
      color: '#f4f7f8'
    }
  ]

  return (
    <TooplateWrapper id="tooplate_wrapper">
      <GlobalStyle />
      <TooplateSidebar id="tooplate_sidebar">
        <SiteTitle id="site_title"><a href="#">Diary</a></SiteTitle>
        <TooplateMenu id="tooplate_menu">
          <ul>
            <li><a className="all-diaries"><span />All Diaries</a></li>
            <li><a className="categories-label"><span />Categories</a></li>
            <li><a className="back-home"><span />Back Home</a></li>
          </ul>
          <div className="cleaner" />
        </TooplateMenu> {/* END of */}
        <Twitter id="twitter">
          <h3>Twitter</h3>
        </Twitter>
      </TooplateSidebar>
      <TooplateMain id="tooplate_main">
        <h2>LIST DIARIES</h2>
        <ListDiaries>
          {
            tempListDiaries.map( (item,index) => {
              return(
                <div onClick={toogleModalViewDiary} style={{cursor:'pointer'}}>
                <ItemDiary title={item.title} color={item.color} key={index}/>
                </div>
              )
            })
          }
        </ListDiaries>
      </TooplateMain> {/* END of main */}
      <div className="cleaner" />
      <ModalDiary/>
    </TooplateWrapper>

  )
}

export default Diary