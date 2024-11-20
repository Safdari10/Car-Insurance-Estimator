# Car Insurance Premium Estimator

This application allows users to upload a photo of their car, and it predicts the car type using Azure Custom Vision. Based on the car type, the app provides a premium estimate for insurance.

---

## Project Structure

The project is organized into two main folders:

- **`server`**: Handles backend functionalities, including Azure Custom Vision API integration for image prediction.
- **`client`**: The frontend application built with React, TypeScript, and Tailwind CSS.

---

## Features

1. **Image Upload**: Users can upload a photo of their car through the frontend.
2. **Car Type Prediction**: The backend uses Azure Custom Vision to identify the car type and confidence level.
3. **Premium Estimation**: The frontend calculates an estimated insurance premium based on the car type.
4. **Simple and Responsive Design**: Built with Tailwind CSS for a modern UI.

---

## Prerequisites

- **Node.js**: Ensure you have Node.js installed.
- **Azure Custom Vision**: A trained Azure Custom Vision model and its prediction endpoint and key.
- **.env file**: Add the following keys in the root of the project:
```
     AZURE_CUSTOM_VISION_ENDPOINT=<your_endpoint> AZURE_CUSTOM_VISION_KEY=<your_prediction_key>
```

---

## Installation

1. Clone the repository:
```
    git clone <repository-url>
    cd <repository-folder> 
```

2. Install dependencies for bothe server and client:
```
   cd server
   npm install
   cd ../client
   npm install
```
---
## Running the Project

1. Start the backend server:
```
   cd server
   npm run start
```
2. Start the frontend:
```
   cd client
   npm run dev
```
3. Open the app in your browser at http://localhost:5173.

---
## API Details

### POST/upload
 * Description: Accepts an image file, sends it to Azure Custom Vision, and returns the predicted car type and confidence level.
 * Response Example:
 ```
   {
   "carType": "sedan",
   "confidence": 0.89
   }
```
### Frontend Logic
  * The frontend takes the user uploaded file and sends to the backend server and recieves the car type and confidence level from the backend server and calculates the premium estimate on the car type.

### Backend Logic
   *  The backend takes the user uploaded file and sends to the azure custom vision API and retrieves the car type and confidence levels. The confidence level is filtered and the highest confidence level is is sent to the front end along with the vahicle type.
---
## Technologies Used

#### Frontend
  * React
  * TypeScript
  * Vite
  * Tailwind CSS

  #### Backend
  * Node.js
  * Express
  * Azure Custom Vision API

---
### Future Enhancements
* Support for more detailed predicitons e.g car make and model.
* Refine premium estimation logic based on additional car details.
* connect to a insurance provider and allow user to apply for insurance for their car.

### License

This project is licensed under the MIT.

Feel free to adjust the content as per your project specificss!