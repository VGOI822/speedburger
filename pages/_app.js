// pages/_app.js
import '../styles/globals.css'; // CSS global importado aqui!

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
