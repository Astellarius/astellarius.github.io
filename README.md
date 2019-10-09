# Astellarius

Andy Wang's Personal Portfolio!

Non-Build - git commits and source code pre-build
Master - Built and ready for astellarius.github.io

## Management

npm run deploy to deploy to astellarius.github.io.

npm start to start locally. 
push code onto Non-Build
- git add .
- git commit -m "Message"
- git push 

## Nav Explained

1. How do we get NAV to control Component Render? 

https://react-bootstrap.github.io/components/navbar/  
https://react-bootstrap.github.io/components/navs/

Nav has build in activeKey and eventKey methods.  
We store the activeKey in STATE and change every onSelect. (handle_navOnSelect)

When rendering, we display state.activekey's corresponding component. (display_activeKeyComponent)
