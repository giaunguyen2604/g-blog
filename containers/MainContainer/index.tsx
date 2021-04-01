import React from 'react'
import TopContainer from '../../containers/TopContainer'
import ContentContainer from '../../containers/ContentContainer'
import BottomContainer from '../../containers/BottomContainer'

const MainContainer: React.FC = () => {
  return (
    <div className="tm-main-container">
      <TopContainer />
      <ContentContainer />
      <BottomContainer />
    </div>
  )
}

export default MainContainer