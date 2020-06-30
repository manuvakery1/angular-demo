# angular-demo
demo angular project

# how to run

clone this repo to local 

update the nginx configuration with following content
```
server {
    listen 80;
    ssi on;
    server_name localhost;

    location / {
        root <PATH_TO_PORJECT_DIR>;
        try_files $uri $uri/ /index.html;
    }
}
```

You will be able to access the application on http://localhost/login
