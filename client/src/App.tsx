import Header from "./components/Header";
import Upload from "./components/UploadImage";
import { ImageUploadProvider } from "./context/ImageUploadContext";

const App = () => {
  return (
    <ImageUploadProvider>
      <div className="text-center">
        <Header />
        <h1 className="text-blue-500 text-6xl text-center font-bold m-10">
          Turners Car Insurance
        </h1>
      <Upload/>
      </div>
    </ImageUploadProvider>
  );
};

export default App;
