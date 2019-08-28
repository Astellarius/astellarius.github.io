## Nav 

So the current problem is: 
1. Navigation controls Component Render, but is on the same level as Components.

What we could do is move it up to Body, where it can directly control the components. 

1. How do we get NAV to control Component Render? 

https://react-bootstrap.github.io/components/navbar/  
https://react-bootstrap.github.io/components/navs/

Nav has build in activeKey and eventKey methods.  
We store the activeKey in STATE and change every onSelect. (handle_navOnSelect)

When rendering, we display state.activekey's corresponding component. (display_activeKeyComponent)

Easy! 