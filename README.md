# Personal Blog Web
## Description

- Project link: https://serene-everglades-37897.herokuapp.com/
- This is a personal blog project developed by node.js, ejs and connected with mongodb and deployed at Heroku.
- It implement the function add article, delete article and store the article in the mongodb.

![image](https://user-images.githubusercontent.com/79159894/186642083-30917e39-5c12-4428-ac4b-0845605b4147.png)


## node js 
### 1. template
- template(every node.js project need it)
```
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

// for render ejs page
const homeStartingContent = "";
const aboutContent = "";
const contactContent = "";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// connect with mongoose MongoDB
mongoose.connect("mongodb+srv://123:123@cluster0.jnxzx3s.mongodb.net/blogDB", {
  useNewUrlParser: true
});


const postSchema = {
  title: String,
  content: String
};

const Post = mongoose.model("Post", postSchema);

// add some get, post request here




// list on local host 3000(website) for connection
app.listen(process.env.PORT || 3000, function () {

  console.log("Server started on port 3000");

});
```
### 2. functions
- This project has function below
1. (get request)render home page(root page)
2. (get request)render about page
3. (get request)render contact page
4. (get request)render compose page
5. (get request)render every differnt post by use their id
6. (post request)save the post in the compose page and render back to the home page
7. (post request)delete the post in the compose page and redirect back to home page
8. (listen request)call back function from the port 3000 to check connection is successfully

## EJS
- Use ejs to decrease the same html code
- we can use ejs to seperate header and footer because they are the same in every page
- In ejs, we need to add <%= xxx %> for javascript code
- and <%- include("partials/header"); -%> to include the same page
- ![image](https://user-images.githubusercontent.com/79159894/186638697-ca83cae9-f10c-4ca0-a6e7-1eba5dd24421.png)

## CSS
- Building the css framework is the part I most like because use bootstrap it's so easy to get the beautiful layout.
### 1. footer position
- One problem is that because the footer position is absoulte
- so if I make the class card has the margin-left:10% and margin-right:10%
- the footer will move to right and left side has lots of white space
- so the class can not have the margin-left and margin-right if the footer position is absoulte
### 2. <div></div> div tag to add white space
- One tip I found out is if we want a space between the two class
- We can add one class that has property like padding-top: 20px or margin top: 5 % and we can reuse this div class in lots of place.
- such as give some white space between 2 col so add div class b that padding-top: 20px 
- ![image](https://user-images.githubusercontent.com/79159894/186613316-b35a4b5b-e4c5-4abd-8c27-389b7142cb8a.png)

- ![personalb2](https://user-images.githubusercontent.com/79159894/186612811-918ce150-6ea4-4e9d-b99d-1d43f0fba9b8.png)
### 3. font awesome link update
- And about the font awesome, first my font awesome is like the square can not appear correctly.
- But after I update the import link from font awesome, it appear right.
- ![image](https://user-images.githubusercontent.com/79159894/186619302-ef7c7e2f-2839-4281-b5dd-48c7dcfeebca.png)
### 4. <a></a> a tag can be button
- And the i tag is for the url link but we can use as a button we link by using the boostrap btn class.
- such as this read more button has the url link to compose page
- ![image](https://user-images.githubusercontent.com/79159894/186620252-00c816fe-053a-492d-a723-ec2b72050b16.png)

- ![image](https://user-images.githubusercontent.com/79159894/186619893-c0c9d5ed-c44c-45e6-91ac-c73d92aea439.png)
but it need to add in the first position of the a tag.
### 5. button display horizontally
- And if we want 2 button order horizontally
- we can add a div class with property display: flex;

- ![image](https://user-images.githubusercontent.com/79159894/186621491-c75996a3-e10f-40a8-9678-63375b4bc51c.png)
- ![image](https://user-images.githubusercontent.com/79159894/186621592-6964578b-c586-4b00-a8f5-bcbba62384c6.png)
- ![personalb3](https://user-images.githubusercontent.com/79159894/186623305-1f1065cc-6431-47fd-a4eb-6d3f0d78fcfd.png)

### 6. picture path
- About the picture on the card
- the path of the picure need to add upper path, otherwise the picture would not show.
- And the picture file need to at the same file(public) with css.
- ![image](https://user-images.githubusercontent.com/79159894/186622914-2c65edd5-811f-4a1f-8b1d-4fed9ed9d74b.png)

## Connect with MongoDB and Heroku

- This project took me 72 hours no sleep to complete. The part of node.js code and css just took one day and last 2 day all spend on connect with mongoDB and heroku.
- I built a full stack project before, named to-do list web, so I think I know how to connect to mongodb.
- I did this before and it connect with mongodb successfully:

go to the project file and 
mongo "mongodb+srv://cluster0.jnxzx3s.mongodb.net/blogDB" --apiVersion 1 --username 123

- but now it appear error that say mongo shall has been superseded by mongosh.
- But I am confused mongo shall and mongsoh isn't they are the same thing? And the solution told me that they are not the same thing and mogo will be replaced by mongosh.

- ![mongodb](https://user-images.githubusercontent.com/79159894/186591806-7477a78b-e051-4de3-a521-45cd9b9b91d5.png)

- So the solution of this problem is 
1. downolad the mongosh from mongodb web
2. move the mongosh to mongodb bin file
- ![image](https://user-images.githubusercontent.com/79159894/186622201-d71bef18-020e-4741-a87a-e807547ed4c9.png)

3. enter the connection string : 27017

- ![image](https://user-images.githubusercontent.com/79159894/186603301-b1ae124f-1552-476d-8ecf-5f1a065e7424.png)
4. Then use the same command in the blog file
- ![image](https://user-images.githubusercontent.com/79159894/186603786-4f441ffc-1d91-4ccf-827a-19888d2f7297.png)
mongosh "mongodb+srv://cluster0.jnxzx3s.mongodb.net/blogDB" --apiVersion 1 --username 123

- Then we can successfully connected with mongodb!


- After that, we can start connect with heroku application to let the website release at the internet.
- At the project file
1. git init
2. git add * (start add numerous node module files)
3. git commit -m "first initial"
4. heroku login (the login web pop out)
5. heroku create
6. touch Procfile
7. modify Procfile by vs code
- ![image](https://user-images.githubusercontent.com/79159894/186606063-b5fbfbbd-3b35-42d4-959a-9c2e3b726301.png)


9. node --version(check node version and modify json file node version)
10. git add *
11. git commit -m "update"
- ![image](https://user-images.githubusercontent.com/79159894/186606276-4996f1d3-a9b1-4717-bd4a-1b85e5c562ba.png)

13. git push heroku master
14. Then web be deployed on the heroku app
- ![image](https://user-images.githubusercontent.com/79159894/186608379-7f59922a-c86f-4cd5-b776-44081e3c54cf.png)


## Update the heroku app
- If we modify the code, we need to update the heroku, and the process be like
1. git add * 
2. git commit -m "update"
3. git push heroku
4. done update


- And because I add my blog progect in the github respositary
- So I need to update the repositary, but I encounter some probelem that first I push the project to master but now I want project been push to main
- so I need to
1. git fetch orign
2. git merge origin main
3. git push
- otherwise it will appear error said fail to push some refer to https://github.com/52147/<repository name>/git.
![image](https://user-images.githubusercontent.com/79159894/186609145-fdb72c7c-95f3-47e6-b013-0122edfaf214.png)

