<h1 align="center" id="title">DevTinder</h1>

<br>

<p align="center"><img src="https://socialify.git.ci/pawankallem/devTinder_web/image?language=1&amp;owner=1&amp;name=1&amp;stargazers=1&amp;theme=Light" alt="project-image"></p>

### Our site is deployed here https://codehub.world/ Please Check it out

<br>

<p id="description">DevTinder is a developer networking platform inspired by Tinder’s interaction model allowing developers to connect collaborate and build meaningful professional relationships. The frontend is built using React Redux Toolkit Tailwind CSS and DaisyUI ensuring a seamless and responsive user experience.</p>

<br>

# Uses :

We can sign in Login, Signup, User Feed, Connection Requests, Current Connectioins, Logout

# Pages Build

<br>

<h2>Project Screenshots:</h2>

<br>

# Funtionallity Added

<br>

- Signup

![Screenshot 2025-03-11 003817](https://github.com/user-attachments/assets/5d19d7e4-d276-4d69-a281-5e570ea53ca2)

- Edit Profile

![Screenshot 2025-03-11 004006](https://github.com/user-attachments/assets/50998bdf-5f82-4303-a014-79a14eb62c89)

- Login
  ![Screenshot 2025-03-11 004102](https://github.com/user-attachments/assets/43f1dd73-486d-4325-aa98-d6e33ef98018)

- Users Feed

![Screenshot 2025-03-11 004034](https://github.com/user-attachments/assets/20281deb-1b95-4785-bc3d-a0589f9e7ea4)

- Connection Requests Recieved

![Screenshot 2025-03-11 004243](https://github.com/user-attachments/assets/2186c505-577b-48ed-80cd-b0734b4dca86)

- Connection list

![Screenshot 2025-03-11 004228](https://github.com/user-attachments/assets/c35c417b-18fb-49c4-aa69-491ac035634a)

- Logout
- Routing and Authentication

<br>

# Tech Stack Used

<br>

- Reactjs
- Redux-Toolkit
- Daisy UI
- Tailwind
- Nodejs
- Expressjs
- Mongodb

<br>

# How To Clone Our Project

```
$ Open GitBash
$ git clone https://github.com/pawankallem/devTinder_web
$ cd devTinder_web
$ npm install
$ npm build
$ npm run preview
```

<br>

# Note

All the images and icon links have been taken from main website and some other internet sources and may be subject to copyright so try not to use the images or icons for business purposes or reproduce them without their approval on the owner of the images and icons used here are just for the making this project and for learning purpose.

<br>
<br>
<br>

# Below How I planned to develope code in frontend

<!-- ------------------------------------------ -->

# DevTinder

- Create a Vite + React application
- Remove unnecessary code and create a Hello world app
- Install Tailwind css
- Install Daisy UI
- Add navbar component to app.jsx
- Create a Navbar.jsxc separate component file
- Install react router dom
- create an outlet in your body component
- cr4aete a footer
- Create a Login page
- Install axios
- CORS - instalol cors in backend => add middleware to with configurations: origin, creadentials: true.
- Whenever you're making api call so pass axios { withCredentials: true}
- install react-redux + @redux/tolkit - https://redux ....
- configureStore => Provider => createSlice => add reducer to store
- Add redux devtools in chrome
- Login and see if your data is coming properly in the store
- Navbar should update as soon as user logs in
- Refactor our code to add constants file + create a components folder
- You should not be access other routes without login
- if token is not present, redirect user to login page
- if token is there upon refresh make api call and update the store
- logout feature
- Get the feed and add the feed in the store
- Build the user card on feed
- Edit profile feature
- sho Toast message on save of profile
- Send / Ignore the user card from the feed
- new page - see all my connections
- New Page - see all my connection request
- Feature - accept / reject connections request
- Signup New User
- End to End testing
<!-- // Pending after this line -->

# FEATURES:

### Login

### Signup

### Feed

### Profile_Edit

### Requests

### Connections

### Logout

# Deployment

- Signup on AWS
- Launch instance
- chmod 400 <secret>.pem
- ssh -i <pemkey path> username@ip
- Install Nodejs
- Clone projects using git in instance
- Frontend:

  - npm install -> for all dependencies in frontend and backend
  - npm run build in frontend for dist folder which bundles code
  - sudo apt update
  - sudo apt install nginx
  - sudo systemctl start nginx
  - sudo systemctl enable nginx
  - Copy dist folder code to /var/www/html/
  - sudo scp -r dist/\* /var/www/html/
  - Enable port :80 of instance in aws

- Backend:
  - Update DB password
  - allow / update EC2 instance public IP in Mongo Atlas
  - install PM2 ( process manager ) => npm install pm2 -g
  - pm2 start npm --name "devTinder-backend" -- start
  - pm2 logs
  - pm2 list, pm2 flush <name>, pm2 stop <name>, pm2 delete <name>
  - config nginx - /etc/nginx/sites - available default ( sudo nano /etc/nginx/sites-available/default )
  - restart nginx - sudo systemctl restart nginx

# Nginx Config:

    Frontend = http://<ip>/
    Backend = http://<ip>:5005/

    Domain name = devtinder.com => 43.204.96.49

    Frontend = devtinder.com
    Backend = devtinder.com:7777 => devtinder.com/api

    =>

    server {
            listen 80 default_server;
            listen [::]:80 default_server;

            root /var/www/html;

            # Add index.php to the list if you are using PHP
            index index.html index.htm index.nginx-debian.html;

            server_name 65.1.111.63;

            location /api/ {
                    proxy_pass http://localhost:5005/;
                    proxy_set_header Host $host;
                    proxy_set_header X-Real-IP $remote_addr;
                    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                    proxy_set_header X-Forwarded-Proto $scheme;
            }

            location / {
                    # First attempt to serve request as file, then
                    # as directory, then fall back to displaying a 404.
                    try_files $uri /index.html;
                    #try_files $uri $uri/ =404;
            }



    }

# Addming a Custom Domain name

    - Purchased a domain anme from GoDaddy
    - Signup on Cloudflare and add a existing / purchased domain name
    - change the Nameservers on Godaddy and point it to Cloudflare
    - wait for sometime till the nameservers are updated ( mine took 20 mins)
    - DNS record: A codehub.world map to <ip> with ( A ) name
    - there are ( CName ) also

# Sending Emails via SES

        - Create a IAM user
        - Give access to AmazonSES full access
        - Amazon SES: Create an Identity
        - Verify your Domain name
        - Verify an Email Address
        - Install AWS SDK - v3
        - code examples :- https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/javascriptv3/example_code/ses/src/ses_sendemail.js
        - Setup SESClient
        - Access Credentials should be created in IAM > under security credentials Tab
        - Add the credentials to the .env file
        - write code for sesClient
        - write code for sending email address
        - Make the email dynamic by passing more params to the run functions

<!-- ------------------------------------------ -->
