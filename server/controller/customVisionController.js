const axios = require("axios");
require("dotenv").config();

const analyyzeImage = async (req, res) => {
  try {
    const endpoint = process.env.AZURE_CUSTOM_VISION_ENDPOINT;
    const predictionKey = process.env.AZURE_CUSTOM_VISION_PREDICTION_KEY;
    const projectId = process.env.AZURE_CUSTOM_VISION_PROJECT_ID;
    const publishName = process.env.AZURE_CUSTOM_VISION_PUBLISH_NAME;

    const image = req.file.buffer;
    const response = await axios.post(
      `${endpoint}/customvision/v3.0/Prediction/${projectId}/classify/iterations/${publishName}/image`,
      image,
      {
        headers: {
          "Content-Type": "application/octet-stream",
          "Prediction-Key": predictionKey,
        },
      }
    );

    res.json(response.data)
  } catch (error) {
    console.error('Error in Custom Vision API:', error);
    res.status(500).json({message: 'Error analyzing image'})
  }
};

module.exports = { analyyzeImage }
