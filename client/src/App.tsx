import ImageUploadFrom from "./components/ImageUploadFrom"
import { ImageUploadProvider } from "./context/ImageUploadContext"

const App = () => {
  return (
    <ImageUploadProvider>
        <div>
      <h1>Image Upload</h1>
      <ImageUploadFrom/>
    </div>
    </ImageUploadProvider>
  )
}

export default App
