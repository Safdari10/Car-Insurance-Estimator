import Header from "./components/Header";
import Upload from "./components/UploadImage";
import { ImageUploadProvider } from "./context/ImageUploadContext";

const App = () => {
  return (
    <ImageUploadProvider>
      <div className="text-center">
        <Header />
        <h1 className="text-4xl text-center font-semibold m-2">
          Turner Insurance
        </h1>
      <Upload/>
      </div>
    </ImageUploadProvider>
  );
};

export default App;
