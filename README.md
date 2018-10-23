# recipe_web_app
Fast start
clone the file from the github:

1. git clone https://github.com/McGradyhaha/recipe_web_app.git

2. make sure the npm works (node works)

3. run npm i 或者 npm install(it should automaticlly download dependencies)

4. npm start
open http://localhost:8080 (it should be automatically opened)



Front end tree Structure
.
├── assets
│   ├── logo.png
│   └── No-image-available.jpg
├── Documentations                                    --- some design stuff
│   ├── Basic Use Case Diagram.jpeg
│   ├── Entity Relationship Diagram.jpeg
│   └── System Design.jpeg
├── package.json                                      --- configure the dependencies in this project
├── public
│   └── index.html                                    --- html page
├── README.md
├── src
│   ├── actions
│   │   └── userinfo.js                               --- create a rule for user's action(a part of redux)
│   ├── components
│   │   ├── A.jsx
│   │   ├── B.jsx
│   │   ├── C.jsx
│   │   ├── Detail                                    --- recipe details component
│   │   │   ├── Detals
│   │   │   │   ├── index.jsx
│   │   │   │   └── style.css
│   │   │   └── index.jsx
│   │   ├── Footer                                    
│   │   │   └── index.jsx
│   │   ├── Header
│   │   │   ├── index.jsx
│   │   │   └── style.css
│   │   ├── LeftSider
│   │   │   └── index.jsx
│   │   ├── List                                      --- recipes list component
│   │   │   ├── index.jsx
│   │   │   ├── Item
│   │   │   │   ├── index.jsx
│   │   │   │   └── style.css
│   │   │   └── style.css
│   │   ├── RightSider
│   │   │   └── index.jsx
│   │   └── SwiperPic                                 
│   │       ├── index.jsx
│   │       └── style.css
│   ├── constants                                      --- some constants used in the front end
│   │   ├── carousel.js
│   │   ├── ingredients.js
│   │   └── userinfo.js
│   ├── containers                                     --- pages containers
│   │   ├── 404.jsx
│   │   ├── Category
│   │   │   ├── index.jsx
│   │   │   └── SubPages
│   │   │       └── index.jsx
│   │   ├── Detail                                     --- detail page
│   │   │   └── index.jsx
│   │   ├── Favourite                                  --- favourite page
│   │   │   └── index.jsx
│   │   ├── Hello.jsx
│   │   ├── Home                                        
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   ├── index.jsx
│   │   ├── Ingredient
│   │   │   └── index.jsx
│   │   ├── Login
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   ├── Register
│   │   │   └── index.jsx
│   │   ├── Search                                      --- the page after click the search button
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   └── User
│   │       └── index.jsx
│   ├── fetch                                           --- use fetch to sends request and get response
│   │   ├── data.js
│   │   ├── get.js
│   │   ├── post.js
│   │   ├── Search
│   │   │   ├── detail.js
│   │   │   └── search.js
│   │   ├── test.jsx
│   │   └── User
│   │       ├── favourite.js
│   │       ├── Login
│   │       │   └── login.js
│   │       └── Register
│   │           └── register.js
│   ├── index.jsx
│   ├── reducers                                         --- a part of the redux
│   │   ├── combine.js
│   │   └── userinfo.js
│   ├── router                                           --- pages' router
│   │   ├── README.md
│   │   └── routeMap.jsx
│   ├── store                                            --- a part of the redux
│   │   ├── configureStore.js
│   │   └── README.md
│   ├── tree.txt                                        
│   └── util
├── tree.txt
├── webpack.config.js                                    --- webpack config in development mode
└── webpack.prod.config.js                               --- webpack config in production mode

36 directories, 65 files


If you have any question, please contant the author, whose email is mcgradyhaha@gmail.com
