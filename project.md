# Project Info

## Work In Progress

- Projects Page
- Font not working on other peoples laptops.
- mobile nav

## Management

Deploy to astellarius.github.io : npm run deploy  

Start Locally : npm start  

Push Code onto Non-Build
- git add .
- git commit -m "Message"
- git push 
- (pwd: lower chill)

## React Components

index.js > body.js
- hero.js
  - intro div
  - status div
  - footer div
- about.js
- patch.js
  - patches folder
    - y#m#d#
- project.js

h5 > p

### Navigation

1. How do we get NAV to control Component Render? 

https://react-bootstrap.github.io/components/navbar/  
https://react-bootstrap.github.io/components/navs/

Nav has build in activeKey and eventKey methods.  
We store the activeKey in STATE and change every onSelect. (handle_navOnSelect)

When rendering, we display state.activekey's corresponding component. (display_activeKeyComponent)

### Styling
Don't make your classnames the same as bootstrap components. 