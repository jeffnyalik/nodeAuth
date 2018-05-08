*Node js authentication project using JWT token for authentication of a logged in user.

To run the project download and run npm install to install the dependecies.

make sure you have node js installed in your machine

*npm install

*npm install mocha chai --save-dev

*npm install request --save-dev

*I have tested the API Requests using Postman client for chrome.

*Description of the project, here is a simple get request 
![](images/one.png)

*user authentication,generates the token to be used for authentication
![](images/3.png)

*protecting the public post routes, if not authenticated  validates with  404 forbiden.
![](images/two.png)

*using the generated tokens to log in the user.
![](images/bear.png)

*Finally user authenticated after using the tokens.
![](images/logged.png)

*Testing the app using Mocha and Chai
![](images/test.png)


***Thats it, Happy Coding
