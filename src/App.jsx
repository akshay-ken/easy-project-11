import mobileBg from "../src/assets/images/image-header-mobile.jpg";
import desktopBg from "../src/assets/images/image-header-desktop.jpg";
import { CardImage } from "./components/CardImage";
import { CardText } from "./components/CardText";
import { useState } from "react";

const statData = [
  { numbers: "10k+", statName: "COMPANIES" },
  { numbers: "314", statName: "TEMPLATES" },
  { numbers: "12m+", statName: "QUERIES" },
];

function App() {
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  function handleNextStat() {
    setCurrentStatIndex((currentIndex) => {
      if (currentIndex === 0) {
        return 1;
      } else if (currentIndex === 1) {
        return 2;
      } else {
        return 0;
      }
    });
  }

  function handlePreviousStat() {
    setCurrentStatIndex((currentIndex) => {
      if (currentIndex === 0) {
        return 2;
      } else if (currentIndex === 1) {
        return 0;
      } else {
        return 1;
      }
    });
  }

  return (
    <>
      <main className="flex flex-col-reverse md:flex-row mx-auto my-28 w-full max-w-sm md:max-w-4xl">
        <CardText
          currentStatIndex={currentStatIndex}
          statData={statData}
          onChangeClick={handleNextStat}
          onChangeClickPrev={handlePreviousStat}
        />
        <CardImage />
      </main>
    </>
  );
}

export default App;
