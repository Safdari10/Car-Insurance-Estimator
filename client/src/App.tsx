import Header from "./components/Header";
import ImageUploadForm from "./components/ImageUploadForm";
import { ImageUploadProvider } from "./context/ImageUploadContext";

const App = () => {
  return (
    <ImageUploadProvider>
      <div className="text-center py-10">
        <Header />
        <h1 className="text-4xl text-center font-semibold m-2">
          Turner Insurance
        </h1>
        <ImageUploadForm />
      </div>
    </ImageUploadProvider>
  );
};

export default App;
