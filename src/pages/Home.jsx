import Hero from "../components/Hero";
import Specializations from "../components/Specializations";
import { specializations } from "../data/specializations";

// do podjebania
// https://github.com/mui/material-ui/blob/v5.14.18/docs/data/material/getting-started/templates/blog/Blog.js

export default function Home() {
  return (
    <main>
      <Hero imgSrc="src/assets/home.jpg" imgYOffset="14%" title="Kancelaria Prawna" description={"Polska Kancelaria, Globalny Zasięg, Indywidualne Podejście"} />
      <Specializations specList={specializations} />
    </main>
  );
}
