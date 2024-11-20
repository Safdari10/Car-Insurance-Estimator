import Header from "./components/Header";
import Upload from "./components/UploadImage";
import { ImageUploadProvider } from "./context/ImageUploadContext";

const App = () => {
  return (
    <ImageUploadProvider>
      <div className="text-center">
        <Header />
        <h1 className="text-blue-600 text-6xl text-center underline font-semibold m-10">
          TURNERS CAR INSURANCE
        </h1>
      <Upload/>
      </div>
    </ImageUploadProvider>
  );
};

export default App;
