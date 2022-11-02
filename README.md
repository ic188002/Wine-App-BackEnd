# Wine-App-BackEnd
<h1>WineApp<h1>
<br>
<hr>
<h2>Description</h2>
The end application is a marketplace that provides the user with a platform to find wine, add them to a wish list and follow the link to a buying page. 
<hr>

<h2>Deployment link</h2>
https://wineappsei66.herokuapp.com/

<hr>


Getting Started/Code Installation


<hr>


<h2>Timeframe & Working Team </h2>

We Had only 6 days to complete this project working in a team of three. For this project I work alongside Helene van Besouw and Rob Sesemann and working as team leader

<hr>

<h2>Technologies Used</h2>

<h3>Front End</h3>

<ul>
<li>React</li>
<li>CSS</li>
<li>HTML</li>
<li>JavaScript</li>
</ul>

<h3>Back End</h3>
<ul>
<li>Express</li>
<li>MongoDB/Mongoose</li>
<li>HTML</li>
<li>JavaScript</li>
</ul>

<h3>Developer Tools</h3>
<ul>
<li>AJAX</li>
<li>JWT(JSON Web Token)</li>
<li>Spoonacular API</li>
<li>Node<li>
<li>Postman</li>
<li>ProCreate</li>
</ul>
<hr>

<h2>Brief</h2>
The brief outlined the requirements stating  that and we must make a MERN stack application  utilising MongoDB/Mongoose, Express, React and Node as well as having a well styled interactive frontend. Furthermore the application needs to communicate with the Express backend via AJAX as well as using token based authentication.
<hr>
<h2>Planning</h2>

We started off the planning stage by brain storming through ideas then moving onto early wireframes and ERD.

<img  src="/photos/11.png" width="100%"/>

This diagram created in Figma shows the relationship in the database as well how we would be accessing the information in React. As shown above, one user can have many WineList and many WineList can have many Wines; giving use a visual diagrams on how to design and build the application.We also mapped out our plans on Trello adding cards for each aspect of the project allowing us to track our progress.


<img  src="/photos/22.png" width="100%"/>

<hr>
<h2>Wireframe</h2>
This was our first wireframe and it outlined the design principle we wanted to follow as well as providing us with a clear idea on how we would need to implicate React to achieve our desired look. 

As this was our first application in React we decided from the off to work on that aspect as a team, in this case we could all learn and help each other's code, I would then spend the evening styling the application as that's my strongest skill. 



<hr>


<h2>Build/Code Process</h2>

<img  src="/photos/33.png" width="100%"/>

This Code block was added first. Once we decided on our idea we needed to find an API that would give us the information that we required. After testing a couple of different options we settled on the Spoonacular, the information came back to use to the form below 

<img  src="/photos/44.png" width="100%"/>

This Provided us with an issue the main issue would be our index page, we could not access and display a full list of the wine available. However this led us down a better path, as we found that if we map through a list of our chosen wine types we could then take the user to a new index page just display all the wines under that type


This is a small snippet of the Wine Classification Data shows how the API would find the data for that wine type then assign it a type which we could then render. 

<img  src="/photos/55.png" width="100%"/>






This is the else if statement that we used to assign the classes and render the bottles unique images.

Below is the mapping function that go through the data from the API then renders the Wine Card as well as the providing the Link tag to bring up the full Index of the wine category 

<img  src="/photos/66.png" width="100%"/>

Our favourite wine schema is below, as the database has a nested object of user, this assigns the users id to the create wine list as well and stores the Wine Id from Spoonacular

<img  src="/photos/77.png" width="100%"/>

The create post below creates the new Favourite Wine, it gets the user id from the form then saves the id and pushes the favourite wine through to the user list

<img  src="/photos/88.png" width="100%"/>


<hr>


<h2>Challenges</h2>



A challenging part of code we had to write was the filter function for the wise, even though I look back and can clearly see the path at the time it did stump me as this was the first filter function that I have added to a site. 

<img  src="/photos/99.png" width="100%"/>

This filter occurs when one of the images above is clicked, then an event is triggered, which sets a variable called “type” And after runs an arrow function to filter the wines that are equal to the chosen type. The main issue I was stuck on was setting the filter and running the function in the filterWine variable, but after gathering back as a team for our end of day rundown we managed to work it out and implement it into our site. 

<hr>
<h2>Wins</h2>


I believe that there are 3 main wins that I have taken away from this project. Firstly, how much I enjoyed leading this fantastic team, from the start I suggested a path to go down and all of us working as a team and an application we all feel proud of. Secondly, this was my first application using React and by the end I found myself understanding the principles of the library.  The third is the design and the functionality of the application, having created a classic and warm user experience with a clear aesthetic vision.


<hr>

<h2>Key Learnings/Takeaways</h2>


Insert your Key Learnings/Takeaways here:
There are a number of key learnings that I have taken away from this project, this was my first application that worked using a separate front and back end using AJAX. This was also the first time I have implemented JWT authorization and used the React Library to build the site. And while I found aspects of the project challenging, I will take away from import finding, for example how to pass down props, how to set states using useEffect for authorization and many more .  
