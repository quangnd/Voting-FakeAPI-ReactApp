# Voting-Fullstack-App
A fullstack React web app with NodeJS and its ecosystem. In this project, I don't use a backend system, I used fakeAPI for demo.

Please visit [Link] to see Fullstack app.

Visit /src/api/userData.js to get login information.

*(I don't validate data enough for this project, and also don't Unit Test to keep it simple. So don't blame me ^^)*

##Tech stacks
Frontend
    + ReactJS
    + Bootstrap
    + Jquery
    + Toastr
    + Chart.js
    
##User stories
1. As an authenticated user, I can keep my polls and come back later to access them.

2. As an authenticated user, I can share my polls with my friends.

3. As an authenticated user, I can see the aggregate results of my polls.

4. As an authenticated user, I can delete polls that I decide I don't want anymore.

5. As an authenticated user, I can create a poll with any number of possible items.

6. As an unauthenticated or authenticated user, I can see and vote on everyone's polls.

7. As an unauthenticated or authenticated user, I can see the results of polls in chart form. (This could be implemented using Chart.js or Google Charts.)

8. As an authenticated user, if I don't like the options on a poll, I can create a new option.

**A simple UseCase diagram**

![UseCase](Documents/Simple_UseCase.jpg?raw=true "Title")

##Note about ReactJS
+ React-Router with param need original link before (if not, eror did not match any route)
    + For example: `<Route path='/details/:id' component={PollViewPage}/>`
    + Need `<Route path='/details' component={PollViewPage}/>`
+ If id is int type, need parseInt after get from query string.
+ To change Component state on the same page, need look into componentWillReceiveProps() life cycle.
