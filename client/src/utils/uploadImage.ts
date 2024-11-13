
export const uploadImageToCustomVision = async (file: File) => { 
   const formData = new FormData()
   formData.append('image', file)

   const response = await fetch(`https://localhost:5000/api/image/analyse`, {
    method: 'POST',
    body: formData
   })
   if (!response.ok) {
    throw new Error('Image upload failed')
   }

   return await response.json()
}
