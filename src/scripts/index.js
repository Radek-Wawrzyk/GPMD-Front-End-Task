import '../styles/index.scss';

const API_KEY = '7c511c48c59d892d7a703f33e465470c3958fbbbc57a5f32c5cf1320f4f72e11';

const applicationInit = () => {
  fetchImagesData();
};

const renderGrid = (data, DOMElement) => {
  const markup = `
    <ul class="grid__list">
      ${data.map(item => 
        `<li class="grid__element">
            <a href="${item.links.html}" class="grid__element-link" aria-label="${item.alt_description}">
              <img class="grid__element-image" alt="${item.alt_description}" src="${item.urls.regular}" />
            </a>
            
            <div class="grid__element-bottom">
              <a href="${item.user.links.html}" class="grid__element-author-link">
                ${item.user.first_name}
              </a>
            </div>
        </li>`
      ).join('')}
    </ul>
  `;

  DOMElement.innerHTML = markup;
};

const disablePreloader = () => {
  const preloaderBody = document.querySelector('#preloader');
  const body = document.querySelector("body");

  preloaderBody.classList.add('preloader--loaded');
  preloaderBody.addEventListener("transitionend", () => {
    body.removeChild(preloaderBody);
  });
};

const notifcationError = (errorText) => {
  const body = document.querySelector("body");

  const markup = `
    <section class="error-notification">
      <h3 class="error-notification__heading">
        Fetching Error 
      </h3>
      <p class="error-notification__description">
        ${errorText}
      </p>
    </section>
  `;

  // I used timeout to be sure that preloader animation ends
  setTimeout(() => {
    body.innerHTML += markup;
  }, 500);
  
};

const fetchImagesData = async () => {
  const gridWrapper = document.querySelector('#grid-wrapper');

  try {
    const response = await fetch(`https://api.unsplash.com/photos/?client_id=${API_KEY}`);
    const fetchedData = await response.json();

    renderGrid(fetchedData, gridWrapper);
    disablePreloader();
  } catch (err) {
    console.log(err);
    disablePreloader();
    notifcationError(err);
  }
};

applicationInit();
