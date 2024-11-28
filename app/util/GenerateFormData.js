export default function generateFormData(inputData) {
  const formData = new FormData();
  // creating complex form data because multipart-form-data cannot be send as json
  // it only supports text and blob

  for (let key in inputData) {
    if (key === "coverImage") {
      console.log(inputData[key][0]);
      formData.append(key, inputData[key][0]);
    } else if (key === "guides") {
      inputData[key]?.forEach((item, i) => {
        formData.append(`${key}[${i}]`, item);
      });
    } else if (key === "locations") {
      console.log(inputData[key], "item locaiton ");
      formData.append(key, JSON.stringify(inputData[key]));
      inputData[key]?.forEach((item, i) => {
        delete item?._d;
        delete item?.type;
        // for individual location setting the form data as required
        for (let locationKey in item) {
          if (locationKey === "images") {
            // newly added location is going to be file list
            // so converting it to an array
            [...item[locationKey]]?.forEach((locationImage, imageIndex) => {
              formData.append(
                `${key}[${i}]${locationKey}[${imageIndex}]`,
                locationImage
              );
            });
          }
        }
      });
    } else if (key === "images") {
      inputData[key]?.forEach((item, i) => {
        formData.append(`${key}[${i}]`, item);
      });
    } else {
      formData.append(key, inputData[key]);
    }
  }

  // return form-data
  return formData;
}
