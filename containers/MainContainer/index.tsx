import React, { useEffect } from 'react'
import { useAppContext } from '../../contexts/AppContextProvider'
import TopContainer from '../../containers/TopContainer'
import ContentContainer from '../../containers/ContentContainer'
import BottomContainer from '../../containers/BottomContainer'
import { listBackgrounds, contentType } from '../../constants'

const MainContainer: React.FC = () => {
  const { currentContent } = useAppContext()

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    if (body) {
      let imgName = "";
      switch (currentContent) {
        case contentType.INTRO:
          imgName = listBackgrounds.INTRO
          break;
        case contentType.ME:
          imgName = listBackgrounds.ME
          break;
        case contentType.GALLERY:
          imgName = listBackgrounds.GALLERY
          break;
        case contentType.CONTACT:
          imgName = listBackgrounds.CONTACT
          break;
      }
      body.style.backgroundImage = `url(/img/${imgName})`;
    }
  }, [currentContent])

  return (
    <div className="tm-main-container">
      <TopContainer />
      <ContentContainer />
      <BottomContainer />
    </div>
  )
}

export default MainContainer