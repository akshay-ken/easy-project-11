import mobileBg from "../src/assets/images/image-header-mobile.jpg";
import desktopBg from "../src/assets/images/image-header-desktop.jpg";
import { CardImage } from "./components/CardImage";
import { CardText } from "./components/CardText";

function App() {
  return (
    <>
      <main className="flex flex-col-reverse md:flex-row mx-auto my-28 w-full max-w-sm md:max-w-4xl">
        <CardText />
        <CardImage />
      </main>
    </>
  );
}

export default App;
