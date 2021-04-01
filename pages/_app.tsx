
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    window.addEventListener('load', () => {
      const body = document.getElementsByTagName("body")[0] as HTMLBodyElement;
      if (body)
        body.classList.add("loaded")
    })
  })

  return (
   <Component {...pageProps} />
  )
}

export default MyApp