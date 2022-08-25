# Personal Blog Web

https://serene-everglades-37897.herokuapp.com/


Conclusion

This project took me 72 hours no sleep to complete. The part of ejs code and css just took one day and last 2 day all spend on connect with mongoDB and heroku.
I build a full stack project before, name to-do list web, so I know how to connect to mongodb.
I did this before and it connect with mongodb successfully.

go to the project file and 
mongo "mongodb+srv://cluster0.jnxzx3s.mongodb.net/blogDB" --apiVersion 1 --username 123

but it appear error that say mongo shall has been superseded by mongosh.
But I am confused mongo shall and mongsoh isn't they are the same thing? And the solution told me that they are not same thing and mogo will be replace by mongosh.

![mongodb](https://user-images.githubusercontent.com/79159894/186591806-7477a78b-e051-4de3-a521-45cd9b9b91d5.png)

So the solution of this problem is 
1. downolad the mongosh from mongodb web
2. enter the connection string : 27017

![image](https://user-images.githubusercontent.com/79159894/186603301-b1ae124f-1552-476d-8ecf-5f1a065e7424.png)
3. Then use the same command in the blog file
![image](https://user-images.githubusercontent.com/79159894/186603786-4f441ffc-1d91-4ccf-827a-19888d2f7297.png)
mongosh "mongodb+srv://cluster0.jnxzx3s.mongodb.net/blogDB" --apiVersion 1 --username 123

then we can successfully connected with mongodb!

