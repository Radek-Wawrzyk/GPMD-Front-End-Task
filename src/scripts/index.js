import '../styles/index.scss';

const API_KEY = '7c511c48c59d892d7a703f33e465470c3958fbbbc57a5f32c5cf1320f4f72e11';

const applicationInit = () => {
  fetchImagesData();
};

const fetchImagesData = async () => {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/?client_id=${API_KEY}`);
    const fetchedData = await response.json();

    console.log(fetchedData);
  } catch (err) {
    console.log(err);
  }
};

applicationInit();
