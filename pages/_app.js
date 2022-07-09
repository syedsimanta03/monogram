/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Script
          src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js'
          strategy="beforeInteractive"
        />
        <Component {...pageProps} />
  </>
)}

export default MyApp
