# Blogspace ✍️ : Keep it Simple - Read, Write, Share

Welcome to Blogspace! This is a simple and intuitive platform where individuals can effortlessly publish their own blogs. Whether you're a seasoned writer or just starting out, Blogspace provides a space to share your voice. Visitors can explore a variety of blogs and connect with the content that interests them. Built using the EJS templating engine, Node.js framework, Express.js framework, and MongoDB database.

## Live Demo 👁️

A live demo of CozyQuest can be accessed [here](https://blogspace-9cer.onrender.com/).

## Features 🌟

- **User Authentication**: Secure registration and login system for users who want to create blogs.
- **Browse Blogs**: Users can browse through the latest or all available blog posts.
- **Individual Blog Pages**: Each blog post has its own dedicated page with a unique URL for easy sharing.
- **Blog Post Display**: Clear and readable display of blog posts for visitors.
- **Server-Side Validation**: Joi library is integrated for server-side validation to ensure data schema.
- **Server-Side Rendering**: EJS is used for rendering the page server-side and sending it to the user.
- **Image Storage**: Multer is used for uploading, MongoDB is utilized for image storage, allowing users to upload images of their properties.
- **Responsive Design**: The application is fully responsive, and well suited for mobile view too.

## Technologies Used 🛠️

- Node.js
- Express.js
- EJS (Embedded JavaScript)
- MongoDB
- Bootstrap
- HTML
- CSS
- JavaScript

## Other Dependencies 🖇️

- dotenv
- multer
- nodemon
- express-session
- cookie-parser
- mongoose


## Installation ⚡️
To run BlogSpace locally, follow these steps:

## 1. Clone the Repository

```bash
git clone https://github.com/Mangalam-17/BlogSpace
cd BlogSpace
```

## 2. Install dependencies

```bash
  npm install 
```

## 3. Environment Variables:

```bash
MONGO_URL=<your-mongodb-atlas-url>
PORT=<your-port-number-accordingly>
SECRET_KEY=<your-session-secret>
```

## 4. Run the application:

```bash
node app.js
```

## 5. Access the application in your web browser at 
```bash
http://localhost:3000
```


## Screenshots 👁️‍🗨️
1. Home Page


![Home Page](https://github.com/Mangalam-17/BlogSpace/blob/a5972971d89e4acfa3f75c42da9900d4877b9fb3/preview/home.png)

2. Signup Page


![Signup page](https://github.com/Mangalam-17/BlogSpace/blob/a5972971d89e4acfa3f75c42da9900d4877b9fb3/preview/signup.png)

3. Signin Page


![signin page](https://github.com/Mangalam-17/BlogSpace/blob/a5972971d89e4acfa3f75c42da9900d4877b9fb3/preview/signup.png)


4. Add a new Blog


![add blog](https://github.com/Mangalam-17/BlogSpace/blob/a5972971d89e4acfa3f75c42da9900d4877b9fb3/preview/addblog.png)

5. View Particular Blog


![particular blog](https://github.com/Mangalam-17/BlogSpace/blob/a5972971d89e4acfa3f75c42da9900d4877b9fb3/preview/viewblog.png)

6. Adding Comment on a particular blog 


![comment](https://github.com/Mangalam-17/BlogSpace/blob/a5972971d89e4acfa3f75c42da9900d4877b9fb3/preview/comment.png)


## Video Demonstration
Youtube - [blogspace](https://youtu.be/wTapjTrkiQM)


## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.
