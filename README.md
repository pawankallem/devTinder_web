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
