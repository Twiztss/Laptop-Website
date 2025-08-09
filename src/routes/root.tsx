import { Helmet } from "react-helmet-async";
import App from "../components/shared/App";

export default function Root() {
  return (
    <>
      <Helmet>
        <title>Laptop Website | Home</title>
        <meta name="description" content="Home" />
      </Helmet>
      <App />
    </>
  )
}
