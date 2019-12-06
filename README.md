# GPMD Front-End task -Responsive image grid

Live version - [https://gpmd-recruitment-task.netlify.com/](https://gpmd-recruitment-task.netlify.com/)



#### Project description

What is worth to say at start - I decided to go simplicity instead of combining with Javascript - I mean the grid system. I used `CSS grid` property with `minmax()` method to create responsive layout based on images sizes. I added `object-fit` property just to be sure that image will scale/change accordingly.  Also in my project there are `ES6+` standards - `Async/Await, arrow functions, template strings, fetch API, let/const instead of var` . Regarding to the JavaScript architecture, I put emphasis on the maximum simplicity - few functions with simple relations. 



### Git flow/Continuous deployment

I didn't use any `git flow`, I created `develop` branch for developing & tests, and of course there is a `master` branch for stable version. Moreover I used `netlify` for continuous deployment service. 



### Functionality

- API error handling by `try/catch` in the async `fetchImagesData()` function

- Render blocks of `HTML` by  template strings method - `renderGrid(data, targetDOMElement)` function

- Responsive image grid by `CSS Grid` & `object-fit` properties.

- Each pictuture has 2 links - author profile (`bottom of the image`) & image respective page  on `Unsplash` page (`whole picture instead of bottom part`)



### Technologies/Languages I used to create this task

- HTML5

- CSS3/SCSS

- Webpack

- JavaScript (ES6+)

- Unplash REST API



### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```
