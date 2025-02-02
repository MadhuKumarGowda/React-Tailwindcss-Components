import CardImageBtn from "./components/CardImageBtn";
import { dimage, mountain1, mountain2 } from "./assets/index";
import ImageCard from "./components/ImageCard";

function App() {
  return (
    <>
      {/* Responsive Card with image, title, description with link button */}
      <div className="flex flex-col md:flex-row gap-5">
        <CardImageBtn
          title={"Card Heading"}
          imgSrc={dimage}
          btnLabel={"More..."}
          btnLink={"#"}
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt nobis
            deserunt accusantium tenetur doloremque laboriosam?
          </p>
        </CardImageBtn>

        <CardImageBtn
          title={"Card Heading 1"}
          imgSrc={dimage}
          btnLabel={"More..."}
          btnLink={"#"}
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt nobis
            deserunt accusantium tenetur doloremque laboriosam?
          </p>
        </CardImageBtn>
      </div>

      {/* Responsive ImageCard with background image, title, description with link button */}
      <div className="flex flex-col md:flex-row gap-6 p-4">
        <ImageCard title={"ImageBg Card 1"} bgImage={mountain1}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, earum!
          </p>
        </ImageCard>
        <ImageCard title={"ImageBg Card 2"} bgImage={mountain2}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, earum!
          </p>
        </ImageCard>
      </div>
    </>
  );
}

export default App;
