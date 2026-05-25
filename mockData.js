const mockBlogs = [
  {
    _id: "mock1",
    title: "The Future of AI Assistants",
    description: "Explore how AI is revolutionizing our daily workflows and enhancing productivity.",
    body: "Artificial Intelligence has come a long way. From simple rule-based chatbots to complex language models, the evolution is astonishing.\n\nIn this blog, we explore how AI assistants like ChatGPT, Claude, and Gemini are revolutionizing daily workflows, enhancing productivity, and fundamentally changing how we interact with technology. The future is here, and it's highly automated.\n\nKey trends to watch include:\n1. Better context retention.\n2. Multi-modal capabilities.\n3. Autonomous agents executing complex tasks.",
    coverImageURL: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
  },
  {
    _id: "mock2",
    title: "Mastering Full-Stack Development",
    description: "A comprehensive guide to building modern web applications with Node.js and React.",
    body: "Full-stack development requires a deep understanding of both front-end and back-end technologies. \n\nIn this guide, we dive into building modern web applications using Node.js for the backend and React for the frontend. We will cover state management, routing, database integrations with MongoDB, and deployment strategies on platforms like Render and Vercel.\n\nWhether you are a beginner or looking to sharpen your skills, mastering the full stack will make you a highly versatile engineer.",
    coverImageURL: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
  },
  {
    _id: "mock3",
    title: "Beautiful UI/UX Design Trends",
    description: "Discover the latest trends in user interface design that are captivating users.",
    body: "User interface and user experience (UI/UX) design are constantly evolving. This year, we are seeing a massive shift towards more immersive and dynamic interfaces.\n\nGlassmorphism, dark modes, and subtle micro-animations are no longer just trends; they are expectations.\n\nWe explore how to implement these design patterns effectively using CSS and modern JavaScript frameworks to create captivating user experiences that look and feel premium.",
    coverImageURL: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
  },
  {
    _id: "mock4",
    title: "Scaling Your MongoDB Database",
    description: "Best practices for schema design, indexing, and optimizing queries in NoSQL.",
    body: "MongoDB is a powerful NoSQL database, but scaling it requires careful planning. As your application grows, you must consider schema design, efficient indexing, and query optimization.\n\nThis article covers the best practices for scaling MongoDB, including when to use sharding versus replication, how to design for read-heavy vs write-heavy workloads, and the importance of analyzing your query execution plans with the `explain()` method.",
    coverImageURL: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
  },
  {
    _id: "mock5",
    title: "Introduction to React Native",
    description: "Learn how to build cross-platform mobile apps with JavaScript and React.",
    body: "React Native allows developers to build native mobile apps for iOS and Android using a single JavaScript codebase. In this post, we cover the core concepts of React Native, including components, styling, and navigation.\n\nBy leveraging your existing web development skills, you can drastically reduce the time to market for mobile applications while maintaining a high level of performance.",
    coverImageURL: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
  },
  {
    _id: "mock6",
    title: "Docker for Beginners",
    description: "Containerize your applications for consistent and scalable deployments.",
    body: "Docker has revolutionized the way we package and deploy software. By wrapping your application and its dependencies into a container, you ensure that it runs exactly the same everywhere.\n\nWe will walk through writing your first Dockerfile, building images, and running containers. Understanding Docker is a critical first step towards mastering modern DevOps practices.",
    coverImageURL: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=800&auto=format&fit=crop",
    createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
  },
  {
    _id: "mock7",
    title: "The Rise of TypeScript",
    description: "Why static typing is becoming the standard for large JavaScript projects.",
    body: "JavaScript is inherently dynamically typed, which can lead to runtime errors in large codebases. TypeScript solves this by adding static types to JavaScript, catching errors at compile time.\n\nIn this article, we explore the benefits of TypeScript, including better tooling, improved code readability, and easier refactoring. See why major frameworks and libraries are adopting TypeScript as their primary language.",
    coverImageURL: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop",
    createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
  },
  {
    _id: "mock8",
    title: "GraphQL vs REST",
    description: "Comparing the two most popular API paradigms and when to use them.",
    body: "When designing an API, the choice between REST and GraphQL is significant. REST relies on multiple endpoints and fixed data structures, while GraphQL provides a single endpoint and allows clients to request exactly the data they need.\n\nWe will compare their strengths and weaknesses, query complexities, and caching mechanisms to help you make the right architectural decision for your next project.",
    coverImageURL: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
  },
  {
    _id: "mock9",
    title: "Cybersecurity Basics for Devs",
    description: "Essential security practices every developer should implement to protect their apps.",
    body: "Security should never be an afterthought. Developers must actively protect their applications from threats like SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).\n\nThis guide covers fundamental cybersecurity principles, the importance of input validation, using prepared statements, and securing sensitive data using hashing and encryption.",
    coverImageURL: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
  },
  {
    _id: "mock10",
    title: "Understanding Cloud Computing",
    description: "A deep dive into AWS, Azure, and Google Cloud services for modern apps.",
    body: "Cloud computing has shifted the paradigm from maintaining on-premise servers to on-demand resources over the internet. \n\nWe will break down the differences between IaaS, PaaS, and SaaS, and explore core cloud services like compute, storage, and networking. Discover how to leverage the cloud to achieve high availability, fault tolerance, and global reach for your applications.",
    coverImageURL: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
  },
  {
    _id: "mock11",
    title: "Machine Learning with Python",
    description: "Get started with predictive modeling using scikit-learn and pandas.",
    body: "Python is the undisputed king of Machine Learning. Its rich ecosystem of libraries makes it accessible for both beginners and experts.\n\nThis post introduces basic concepts of supervised and unsupervised learning. We will walk through a practical example of training a regression model using scikit-learn, cleaning data with pandas, and evaluating model accuracy.",
    coverImageURL: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=800&auto=format&fit=crop",
    createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
  },
  {
    _id: "mock12",
    title: "The Art of Clean Code",
    description: "Write readable, maintainable, and elegant software that stands the test of time.",
    body: "Writing code that a machine can understand is easy; writing code that a human can understand is an art. Clean code is about intent, clarity, and simplicity.\n\nWe discuss naming conventions, function length, minimizing complexity, and the importance of writing self-documenting code. Learn why investing time in refactoring and clean architecture pays off massive dividends in the long run.",
    coverImageURL: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
    createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
  },
  {
    _id: "mock13",
    title: "WebAssembly: A New Era",
    description: "How WebAssembly is bringing near-native performance to web applications.",
    body: "WebAssembly (Wasm) is a binary instruction format that allows code written in languages like C, C++, and Rust to run in the web browser at near-native speed.\n\nThis technology is breaking the monopoly of JavaScript in the browser. We explore use cases for Wasm, such as complex 3D games, video editing tools, and heavy computational tasks running directly on the client side.",
    coverImageURL: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800&auto=format&fit=crop",
    createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
  },
  {
    _id: "mock14",
    title: "Building Microservices",
    description: "Deconstruct your monolith into scalable, independent, and resilient services.",
    body: "As applications grow, monolithic architectures can become slow to deploy and hard to maintain. Microservices solve this by breaking the application into smaller, loosely coupled services.\n\nWe discuss the challenges of distributed systems, service discovery, inter-service communication via APIs and message queues, and how to maintain data consistency across distributed databases.",
    coverImageURL: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
  },
  {
    _id: "mock15",
    title: "Introduction to Kubernetes",
    description: "Orchestrate your containers and automate deployment at massive scale.",
    body: "While Docker helps you containerize your application, Kubernetes helps you manage those containers at scale. It automates deployment, scaling, and operations of application containers across clusters of hosts.\n\nIn this overview, we explore core Kubernetes concepts like Pods, Services, Deployments, and Ingress. Discover how Kubernetes provides self-healing, load balancing, and rolling updates.",
    coverImageURL: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
    createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
  },
  {
    _id: "mock16",
    title: "Serverless Architecture",
    description: "Focus on your code, not your infrastructure, with serverless computing.",
    body: "Serverless computing allows developers to build and run applications without thinking about servers. The cloud provider automatically provisions, scales, and manages the infrastructure.\n\nWe look at popular serverless platforms like AWS Lambda and Google Cloud Functions, discuss event-driven architectures, and explore the benefits of paying only for the compute time you actually consume.",
    coverImageURL: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
  },
  {
    _id: "mock17",
    title: "Mastering CSS Grid and Flexbox",
    description: "Build complex, responsive layouts with ease using modern CSS modules.",
    body: "Gone are the days of hacking layouts with floats and clearfix. CSS Flexbox and Grid provide powerful tools for creating complex, responsive web designs natively.\n\nThis guide breaks down when to use Flexbox (for 1-dimensional layouts) vs Grid (for 2-dimensional layouts). We provide interactive examples of centering divs, creating holy-grail layouts, and building dynamic masonry galleries.",
    coverImageURL: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
  },
  {
    _id: "mock18",
    title: "Data Structures in JavaScript",
    description: "Understand the fundamentals of Computer Science applied in modern JS.",
    body: "A strong grasp of data structures is crucial for writing efficient algorithms. While JavaScript provides native Arrays and Maps, understanding how to implement custom structures is a valuable skill.\n\nWe explore the implementation and use cases for Linked Lists, Stacks, Queues, Trees, and Graphs in JavaScript. Learn how choosing the right data structure can drastically improve the performance of your application.",
    coverImageURL: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
  },
  {
    _id: "mock19",
    title: "The Importance of CI/CD",
    description: "Automate your testing and deployment pipelines for faster releases.",
    body: "Continuous Integration and Continuous Deployment (CI/CD) bridge the gap between development and operations. By automating the build, testing, and deployment phases, teams can release software faster and with fewer errors.\n\nWe cover the principles of CI/CD, popular tools like GitHub Actions, Jenkins, and GitLab CI, and how to build a robust pipeline that ensures code quality before it reaches production.",
    coverImageURL: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
    createdBy: { fullName: "BlogSpace Admin", profileImageURL: "https://ui-avatars.com/api/?name=Admin" }
  }
];

module.exports = mockBlogs;
