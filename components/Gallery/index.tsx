import React, { useState, useRef, useEffect } from 'react'
import Slider from 'react-slick'
import { useAppContext } from '../../contexts/AppContextProvider'
import { contentType } from '../../constants'

interface ItemProps {
  text: string,
  hightlightText: string,
  mainContent: string,
  pathImg: string
}

const SingleItem: React.FC<ItemProps> = ({ text, hightlightText, mainContent, pathImg }) => {

  return (
    <figure className="effect-goliath tm-gallery-item">
      <img src={pathImg} alt="" />
      <figcaption>
        <h2>
          {text}
          <span>{hightlightText}</span>
        </h2>
        <p>{mainContent}</p>
        <a href={pathImg}>View more</a>
      </figcaption>
    </figure>
  )
}

const Gallery: React.FC = () => {
  const { updateCurrentContent } = useAppContext()
  const refSlider = useRef<Slider | null>(null)
  const [opacity, setOpacity] = useState<number>(0)
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    customPaging: function(i) {
      return (
        <a>{i+1}</a>
      );
    },
    dotsClass: "slick-dots slick-thumb",
  }

  const listItems: ItemProps[] = [
    {
      text: 'Thoughtful',
      hightlightText: 'Goliath',
      mainContent: 'When Goliath comes out, you should run.',
      pathImg: 'img/01.jpg'
    },
    {
      text: 'Pretty Girl',
      hightlightText: 'Picture',
      mainContent: 'Vivamus feugiat, neque sed.',
      pathImg: 'img/02.jpg'
    },
    {
      text: 'A bunch of',
      hightlightText: 'Red Flower',
      mainContent: 'Vivamus feugiat, neque sed.',
      pathImg: 'img/03.jpg'
    },
    {
      text: 'Pretty Girl',
      hightlightText: 'Picture',
      mainContent: 'Vivamus feugiat, neque sed.',
      pathImg: 'img/04.jpg'
    },
    {
      text: 'Thoughtful',
      hightlightText: 'Goliath',
      mainContent: 'When Goliath comes out, you should run.',
      pathImg: 'img/05.jpg'
    },
    {
      text: 'Thoughtful',
      hightlightText: 'Goliath',
      mainContent: 'When Goliath comes out, you should run.',
      pathImg: 'img/06.jpg'
    },
    {
      text: 'Pretty Girl',
      hightlightText: 'Picture',
      mainContent: 'Vivamus feugiat, neque sed.',
      pathImg: 'img/07.jpg'
    },
    {
      text: 'Pretty Girl',
      hightlightText: 'Picture',
      mainContent: 'Vivamus feugiat, neque sed.',
      pathImg: 'img/08.jpg'
    },
    {
      text: 'A bunch of',
      hightlightText: 'Red Flower',
      mainContent: 'Vivamus feugiat, neque sed.',
      pathImg: 'img/09.jpg'
    },
    {
      text: 'A bunch of',
      hightlightText: 'Red Flower',
      mainContent: 'Vivamus feugiat, neque sed.',
      pathImg: 'img/10.jpg'
    },

  ]

  const nextStep = () => {
    setOpacity(0);
    setTimeout(() => {
      updateCurrentContent(contentType.CONTACT)
    },1000)
  }
  
  useEffect(() => {
    setOpacity(1);
  },[])

  return (
    <section className="tm-section tm-section-2 mx-auto" style={{  opacity: opacity }}>
      <div className="grid tm-gallery">
        <Slider {...settings} ref={refSlider}>
          {listItems && listItems.map((item: ItemProps, index: number) => {
            return (
              <SingleItem
                text={item.text}
                hightlightText={item.hightlightText}
                mainContent={item.mainContent}
                pathImg={item.pathImg}
                key={index}
              />
            )
          })}
        </Slider>
      </div>
      <a  className="tm-link" onClick={nextStep}>Continue</a>
      
    </section>

  )
}

export default Gallery