import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <main className="min-h-screen">
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
