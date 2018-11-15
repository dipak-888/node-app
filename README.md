# web crawler node-app

Node js REST service app.

How to setup:
Git clone the current repo on you local machine.

Execute below step to download depedencies:
npm install

Once downloads done, Set NODE_ENV to production using below command:
Set NODE_ENV=production

Execute below command to start production server:
npm run start

Execute Test cases :
npm run test

Start process using pm2:
pm2 start process.json

REST API call details:

1. Crawler :
    This api get the url from user and crawls the all links and returns the unique urls , social urls, images etc.
   GET : http://localhost:3001/api/crawl?url=https://wiprodigital.com

2. Non Repeat char:
    This api get the query string from user and returns the first non repeating char from string.
    GET : http://localhost:3001/api/non-repeat-char?string=amol

3. File :
   This apis allows get and post call. In get call it reads data from local directory and return to user. 
   In post call it will accept in body content and that will append to file and get the whole file data and body data.

   GET : http://localhost:3001/api/file
   POST : http://localhost:3001/api/file
   body with data param in x-www-form-urlencoded .

4. Product:
   This api accept two GET params like name and price and it returns the productName and productPrice details.

   GET : http://localhost:3001/api/product?name=Screen&price=1234
   
