import '../styles/index.scss';

const API_KEY = '7c511c48c59d892d7a703f33e465470c3958fbbbc57a5f32c5cf1320f4f72e11';
const gridWrapper = document.querySelector('#grid-wrapper');

const applicationInit = () => {
  fetchImagesData();
};

const renderGrid = (images, DOMElement) => {
  const markup = `
    <ul class="grid__list">
      ${images.map(image => 
        `<li class="grid__element">
            <img class="grid__image" alt="${image.alt_description}" src="${image.urls.full}" />
        </li>`
      ).join('')}
    </ul>
  `;

  DOMElement.innerHTML = markup;
};

const fetchImagesData = async () => {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/?client_id=${API_KEY}`);
    const fetchedData = await response.json();
    renderGrid(fetchedData, gridWrapper);
  } catch (err) {
    console.log(err);
  }
};

applicationInit();
