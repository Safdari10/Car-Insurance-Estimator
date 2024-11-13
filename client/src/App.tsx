import ImageUploadForm from "./components/ImageUploadForm"
import { ImageUploadProvider } from "./context/ImageUploadContext"

const App = () => {
  return (
    <ImageUploadProvider>
        <div className="text-center py-10">
      <h1 className="text-3xl py-10 underline font-bold">VEHICLE TYPE PREDICTOR</h1>
      <ImageUploadForm/>
    </div>
    </ImageUploadProvider>
  )
}

export default App
