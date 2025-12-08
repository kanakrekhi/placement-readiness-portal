// src/data/quizzesData.js
export const quizzes = {
  // 1. Software Engineer
  "Software Engineer": [
    { level: "Easy", question: "Which data structure follows FIFO?", options: ["Stack", "Queue", "Tree", "Graph"], answer: "Queue", explanation: "Queue uses First-In-First-Out ordering." },
    { level: "Easy", question: "Which programming paradigm focuses on objects?", options: ["Functional", "OOP", "Procedural", "Logic"], answer: "OOP", explanation: "Object-Oriented Programming uses objects and classes." },
    { level: "Easy", question: "Which of these is a high-level programming language?", options: ["Machine Code", "Assembly", "Python", "Binary"], answer: "Python", explanation: "Python is a widely used high-level language." },
    { level: "Medium", question: "Which algorithm is used to find the shortest path in weighted graphs?", options: ["DFS", "BFS", "Dijkstra", "Bubble Sort"], answer: "Dijkstra", explanation: "Dijkstra finds shortest weighted paths." },
    { level: "Medium", question: "Git is used for?", options: ["Design", "Version Control", "Testing", "Deployment"], answer: "Version Control", explanation: "Git tracks and manages source code changes." },
    { level: "Medium", question: "Which model follows requirement → design → build → test (sequential)?", options: ["Agile", "Waterfall", "RAD", "Spiral"], answer: "Waterfall", explanation: "Waterfall is a sequential development model." },
    { level: "Medium", question: "Big-O of binary search is?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], answer: "O(log n)", explanation: "Binary search halves the search space each step." },
    { level: "Hard", question: "Which design pattern ensures only one instance exists?", options: ["Factory", "Observer", "Singleton", "Strategy"], answer: "Singleton", explanation: "Singleton restricts class instantiation to one object." },
    { level: "Hard", question: "Deadlock occurs when:", options: ["Two processes share data", "Resources are unlimited", "Processes wait forever", "Memory gets cleared"], answer: "Processes wait forever", explanation: "Deadlock is circular wait with no release of resources." },
    { level: "Hard", question: "Which sorting algorithm is stable?", options: ["Quick Sort", "Heap Sort", "Merge Sort", "Binary Search"], answer: "Merge Sort", explanation: "Merge Sort preserves the order of equal elements (stable)." }
  ],

  // 2. Frontend Developer
  "Frontend Developer": [
    { level: "Easy", question: "CSS stands for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Custom Styling System", "Colorful Sheet Styles"], answer: "Cascading Style Sheets", explanation: "CSS is used for styling webpages." },
    { level: "Easy", question: "Which hook is used for state in React?", options: ["useState", "useEffect", "useMemo", "useRef"], answer: "useState", explanation: "useState manages state inside React components." },
    { level: "Easy", question: "HTML is mainly used for?", options: ["Styling", "Structure", "Backend logic", "Databases"], answer: "Structure", explanation: "HTML defines the structure and content of web pages." },
    { level: "Medium", question: "Which layout system provides two-dimensional layout control?", options: ["Flexbox", "Grid", "Float", "Positioning"], answer: "Grid", explanation: "CSS Grid allows arranging items in rows and columns." },
    { level: "Medium", question: "React updates the UI efficiently using what?", options: ["DOM Tree", "Shadow DOM", "Virtual DOM", "Layout Engine"], answer: "Virtual DOM", explanation: "Virtual DOM lets React compute minimal updates." },
    { level: "Medium", question: "Which attribute calls a JS function on click in plain HTML?", options: ["onclick", "trigger", "call", "press"], answer: "onclick", explanation: "onclick triggers JS code on element click." },
    { level: "Medium", question: "Bootstrap is primarily a library for?", options: ["Backend", "Styling/UI", "Hosting", "Database"], answer: "Styling/UI", explanation: "Bootstrap provides ready-made UI components and CSS." },
    { level: "Hard", question: "Which React feature avoids prop drilling?", options: ["State", "Props", "Context API", "Refs"], answer: "Context API", explanation: "Context shares values across the component tree." },
    { level: "Hard", question: "Which CSS construct is used to create animations?", options: ["keyframes", "selectors", "variables", "positions"], answer: "keyframes", explanation: "CSS @keyframes defines animation steps." },
    { level: "Hard", question: "What is reconciliation in React?", options: ["API communication", "Event binding", "Diffing the virtual DOM", "Styling components"], answer: "Diffing the virtual DOM", explanation: "Reconciliation finds changes between VDOMs to update the real DOM." }
  ],

  // 3. Backend Developer
  "Backend Developer": [
    { level: "Easy", question: "Which is a NoSQL database?", options: ["MySQL", "MongoDB", "Oracle", "PostgreSQL"], answer: "MongoDB", explanation: "MongoDB stores data as document-like JSON/BSON." },
    { level: "Easy", question: "Which protocol is commonly used for REST APIs?", options: ["HTTP", "FTP", "SMTP", "SSH"], answer: "HTTP", explanation: "REST APIs typically use HTTP methods." },
    { level: "Easy", question: "Node.js executes which language on the server?", options: ["Python", "Ruby", "JavaScript", "Java"], answer: "JavaScript", explanation: "Node.js is a JavaScript runtime on the server." },
    { level: "Medium", question: "ORM stands for?", options: ["Object Relational Mapping", "Offset Register Memory", "Online Resource Management", "Operations Role Module"], answer: "Object Relational Mapping", explanation: "ORM maps database tables to objects in code." },
    { level: "Medium", question: "JWTs are primarily used for?", options: ["File storage", "Authentication", "CSS styling", "Hosting"], answer: "Authentication", explanation: "JWT tokens securely carry user claims for authentication." },
    { level: "Medium", question: "Which tool auto-restarts Node server on code changes?", options: ["pm2", "nodemon", "forever", "pmrun"], answer: "nodemon", explanation: "nodemon watches files and restarts Node apps automatically." },
    { level: "Medium", question: "REST APIs should be what regarding client state?", options: ["Stateful", "Stateless", "Encrypted always", "Compiled"], answer: "Stateless", explanation: "REST principles prefer stateless requests." },
    { level: "Hard", question: "Which DB is known for strong ACID support?", options: ["MongoDB", "MySQL", "Redis", "Cassandra"], answer: "MySQL", explanation: "Relational DBs like MySQL support ACID transactions." },
    { level: "Hard", question: "Which HTTP method is idempotent?", options: ["POST", "PUT", "PATCH", "TRACE"], answer: "PUT", explanation: "PUT can be called multiple times with same effect." },
    { level: "Hard", question: "Load balancers primarily help with?", options: ["Speeding sorting", "Distributing traffic", "Caching CSS", "Cleaning logs"], answer: "Distributing traffic", explanation: "Load balancers distribute requests across servers." }
  ],

  // 4. Full Stack Developer
  "Full Stack Developer": [
    { level: "Easy", question: "MERN stands for?", options: ["Mongo Express React Node", "MySQL Express Ruby Node", "Mongo Ember React.Net", "None"], answer: "Mongo Express React Node", explanation: "MERN is a common JavaScript full-stack stack." },
    { level: "Easy", question: "Which language can be used both frontend and backend?", options: ["Java", "Python", "JavaScript", "C++"], answer: "JavaScript", explanation: "JS runs in browsers and Node.js on servers." },
    { level: "Easy", question: "Express.js is used for?", options: ["Frontend", "Server-side", "Designing", "AI"], answer: "Server-side", explanation: "Express simplifies building Node.js servers/APIs." },
    { level: "Medium", question: "Which DB stores document-like records?", options: ["MongoDB", "MySQL", "SQLite", "Oracle"], answer: "MongoDB", explanation: "Mongo stores BSON/JSON-like documents." },
    { level: "Medium", question: "React components typically return what syntax?", options: ["CSS", "XML", "JSX", "API"], answer: "JSX", explanation: "JSX mixes HTML-like markup with JS for React UI." },
    { level: "Medium", question: "API stands for?", options: ["Application Program Interface", "Applied Processing Input", "App Programming Internal", "None"], answer: "Application Program Interface", explanation: "APIs allow systems to interact programmatically." },
    { level: "Medium", question: "Which command initializes a Node project interactively?", options: ["node init", "npm init", "node start", "npm build"], answer: "npm init", explanation: "npm init creates package.json." },
    { level: "Hard", question: "Which architecture separates UI, logic, and data?", options: ["MVC", "DNS", "OSI", "FIFO"], answer: "MVC", explanation: "MVC = Model-View-Controller separates concerns." },
    { level: "Hard", question: "Which React hook helps memoize expensive calculations?", options: ["useEffect", "useMemo", "useState", "useContext"], answer: "useMemo", explanation: "useMemo caches compute results to avoid re-calculation." },
    { level: "Hard", question: "CORS errors typically occur due to?", options: ["Server overload", "Cross-origin restrictions", "CSS conflicts", "Router mismatch"], answer: "Cross-origin restrictions", explanation: "Browsers block cross-origin requests unless allowed." }
  ],

  // 5. Python Developer
  "Python Developer": [
    { level: "Easy", question: "Which keyword defines a function in Python?", options: ["func", "function", "def", "define"], answer: "def", explanation: "def is used to declare functions in Python." },
    { level: "Easy", question: "Which data type is ordered and mutable?", options: ["tuple", "list", "set", "frozenset"], answer: "list", explanation: "Lists are ordered and mutable in Python." },
    { level: "Easy", question: "Which operator is for exponentiation?", options: ["^", "**", "exp", "pow"], answer: "**", explanation: "**" + " is Python's exponent operator." },
    { level: "Medium", question: "Which module is used for virtual environments?", options: ["venv", "virtual", "envpy", "venvtool"], answer: "venv", explanation: "venv is Python's built-in virtual environment module." },
    { level: "Medium", question: "Which construct handles exceptions?", options: ["try/except", "if/else", "for/while", "switch"], answer: "try/except", explanation: "try/except catches and handles exceptions." },
    { level: "Medium", question: "Which of these is a Python web framework?", options: ["Django", "React", "Laravel", "Spring"], answer: "Django", explanation: "Django is a popular Python web framework." },
    { level: "Medium", question: "List comprehension is used for?", options: ["Faster loops", "Inline loops to create lists", "Styling", "Testing"], answer: "Inline loops to create lists", explanation: "List comprehensions create lists concisely." },
    { level: "Hard", question: "What does GIL stand for in Python?", options: ["Global Interpreter Lock", "Global Index List", "General I/O Library", "Global Interface Layer"], answer: "Global Interpreter Lock", explanation: "GIL prevents multi-threaded Python bytecode from executing in parallel in CPython." },
    { level: "Hard", question: "Which package manager is standard for Python?", options: ["pip", "npm", "gem", "composer"], answer: "pip", explanation: "pip installs Python packages from PyPI." },
    { level: "Hard", question: "Which method serializes Python objects to JSON?", options: ["json.dump", "pickle.load", "os.write", "sys.serialize"], answer: "json.dump", explanation: "json.dump/dumps convert Python objects to JSON strings." }
  ],

  // 6. Java Developer
  "Java Developer": [
    { level: "Easy", question: "Which keyword inherits a class in Java?", options: ["implements", "extends", "inherits", "uses"], answer: "extends", explanation: "extends is used to inherit from a superclass." },
    { level: "Easy", question: "Which method is the entry point of a Java program?", options: ["start()", "main()", "run()", "init()"], answer: "main()", explanation: "public static void main(String[] args) is the program entry point." },
    { level: "Easy", question: "Which is Java's memory management responsibility?", options: ["Garbage Collection", "Manual free", "delete operator", "malloc"], answer: "Garbage Collection", explanation: "JVM garbage collector reclaims unused memory." },
    { level: "Medium", question: "Which access modifier allows only same-package classes?", options: ["public", "private", "protected", "default (no modifier)"], answer: "default (no modifier)", explanation: "Default (package-private) restricts access to same package." },
    { level: "Medium", question: "Which collection allows duplicate elements?", options: ["Set", "Map", "List", "Queue"], answer: "List", explanation: "List allows duplicates and maintains insertion order." },
    { level: "Medium", question: "JVM stands for?", options: ["Java Virtual Machine", "Java Value Manager", "Just Virtual Machine", "Java Verified Model"], answer: "Java Virtual Machine", explanation: "JVM runs Java bytecode." },
    { level: "Medium", question: "Which keyword prevents method overriding?", options: ["final", "static", "volatile", "synchronized"], answer: "final", explanation: "final methods cannot be overridden by subclasses." },
    { level: "Hard", question: "What is the output ordering of a HashMap?", options: ["Insertion order", "Sorted order", "No guaranteed order", "Reverse order"], answer: "No guaranteed order", explanation: "HashMap does not guarantee iteration order." },
    { level: "Hard", question: "Which Java feature enables concurrent execution?", options: ["Threads", "Streams", "Generics", "Annotations"], answer: "Threads", explanation: "Threads allow concurrent execution in Java." },
    { level: "Hard", question: "Which keyword ensures a method can't be accessed by multiple threads simultaneously?", options: ["synchronized", "volatile", "transient", "native"], answer: "synchronized", explanation: "synchronized enforces mutual exclusion for threads." }
  ],

  // 7. Android Developer
  "Android Developer": [
    { level: "Easy", question: "Android apps are primarily written in which languages?", options: ["Kotlin & Java", "Swift & Objective-C", "C# & VB", "PHP & Ruby"], answer: "Kotlin & Java", explanation: "Android apps use Kotlin or Java." },
    { level: "Easy", question: "Which file declares app components and permissions?", options: ["AndroidManifest.xml", "config.json", "package.json", "app.properties"], answer: "AndroidManifest.xml", explanation: "Manifest declares app components and permissions." },
    { level: "Easy", question: "Which UI layout is recommended for flexible positioning?", options: ["LinearLayout", "RelativeLayout", "ConstraintLayout", "TableLayout"], answer: "ConstraintLayout", explanation: "ConstraintLayout is recommended for complex responsive UIs." },
    { level: "Medium", question: "Which lifecycle method is called when activity becomes visible?", options: ["onCreate", "onStart", "onPause", "onDestroy"], answer: "onStart", explanation: "onStart is called when Activity becomes visible." },
    { level: "Medium", question: "Which tool is used to debug Android applications?", options: ["Android Studio Profiler", "Xcode", "Visual Studio", "Eclipse only"], answer: "Android Studio Profiler", explanation: "Android Studio includes debugging & profiling tools." },
    { level: "Medium", question: "Which component is used for background work?", options: ["Activity", "Service", "Fragment", "Adapter"], answer: "Service", explanation: "Service runs long-running background operations." },
    { level: "Medium", question: "Which file contains Gradle build configuration?", options: ["build.gradle", "pom.xml", "package.json", "Makefile"], answer: "build.gradle", explanation: "Android uses Gradle for builds." },
    { level: "Hard", question: "Which architecture is recommended for maintainable Android apps?", options: ["MVC", "MVP", "MVVM", "Singleton"], answer: "MVVM", explanation: "MVVM with ViewModel and LiveData improves separation of concerns." },
    { level: "Hard", question: "Which Android component is lifecycle-aware for UI data?", options: ["ViewModel", "Activity", "Service", "BroadcastReceiver"], answer: "ViewModel", explanation: "ViewModel survives configuration changes to hold UI data." },
    { level: "Hard", question: "Which format is recommended for storing structured local data?", options: ["SharedPreferences", "Files", "SQLite/Room", "Cache only"], answer: "SQLite/Room", explanation: "Room is a SQLite abstraction for structured local storage." }
  ],

  // 8. Data Analyst
  "Data Analyst": [
    { level: "Easy", question: "Which tool is commonly used for dashboards and BI?", options: ["Power BI", "VS Code", "Linux", "MySQL"], answer: "Power BI", explanation: "Power BI builds interactive dashboards." },
    { level: "Easy", question: "What does CSV stand for?", options: ["Comma-Separated Values", "Computer Stored Variables", "Comma Stored Values", "Chart Separated Values"], answer: "Comma-Separated Values", explanation: "CSV files store tabular data with commas." },
    { level: "Easy", question: "Which function provides the average in Excel?", options: ["SUM", "AVERAGE", "COUNT", "MEDIAN"], answer: "AVERAGE", explanation: "AVERAGE calculates the arithmetic mean." },
    { level: "Medium", question: "Which SQL clause groups rows for aggregation?", options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"], answer: "GROUP BY", explanation: "GROUP BY groups rows to perform aggregate functions." },
    { level: "Medium", question: "Which visualization shows distribution of a single quantitative variable?", options: ["Bar chart", "Histogram", "Scatter plot", "Pie chart"], answer: "Histogram", explanation: "Histogram shows distribution across bins." },
    { level: "Medium", question: "Which Python library is mostly used for data manipulation?", options: ["Flask", "Pandas", "Django", "React"], answer: "Pandas", explanation: "Pandas provides DataFrame for easy data manipulation." },
    { level: "Medium", question: "Which metric measures centre of data not influenced by outliers?", options: ["Mean", "Median", "Mode", "Range"], answer: "Median", explanation: "Median is robust to extreme values." },
    { level: "Hard", question: "Which test checks difference between sample means (two groups)?", options: ["Chi-square", "t-test", "ANOVA", "Regression"], answer: "t-test", explanation: "t-test compares means of two groups." },
    { level: "Hard", question: "Which sampling technique ensures representation from each subgroup?", options: ["Simple random", "Stratified", "Convenience", "Snowball"], answer: "Stratified", explanation: "Stratified sampling samples within strata proportionally." },
    { level: "Hard", question: "Which metric indicates model's average squared error?", options: ["MAE", "MSE", "Accuracy", "Precision"], answer: "MSE", explanation: "MSE (Mean Squared Error) averages squared errors." }
  ],

  // 9. Data Scientist
  "Data Scientist": [
    { level: "Easy", question: "Which library is used for numerical arrays in Python?", options: ["Pandas", "NumPy", "Matplotlib", "Seaborn"], answer: "NumPy", explanation: "NumPy offers ndarray and fast numerical ops." },
    { level: "Easy", question: "Which library is used for data frames in Python?", options: ["NumPy", "Pandas", "TensorFlow", "Requests"], answer: "Pandas", explanation: "Pandas DataFrame is used for tabular data." },
    { level: "Easy", question: "Which plot shows relationship between two numeric variables?", options: ["Bar", "Histogram", "Scatter", "Pie"], answer: "Scatter", explanation: "Scatter plots show correlations between two variables." },
    { level: "Medium", question: "Which algorithm is used for supervised regression?", options: ["K-means", "Linear Regression", "PCA", "Apriori"], answer: "Linear Regression", explanation: "Linear regression models continuous target variables." },
    { level: "Medium", question: "Which technique reduces dimensionality?", options: ["PCA", "KNN", "Decision Tree", "Naive Bayes"], answer: "PCA", explanation: "PCA projects data into lower-dimensional components." },
    { level: "Medium", question: "Cross-validation is used to?", options: ["Increase training size", "Estimate model performance", "Scale features", "Reduce noise"], answer: "Estimate model performance", explanation: "Cross-validation assesses generalization performance." },
    { level: "Medium", question: "Which metric is used for classification imbalance?", options: ["Accuracy", "F1-score", "RMSE", "MSE"], answer: "F1-score", explanation: "F1 balances precision and recall for imbalanced data." },
    { level: "Hard", question: "Which method handles missing data by estimating values?", options: ["Deletion", "Imputation", "Scaling", "Encoding"], answer: "Imputation", explanation: "Imputation fills missing entries using statistical estimates." },
    { level: "Hard", question: "Which optimizer is commonly used in deep learning?", options: ["SGD", "Adam", "K-means", "PCA"], answer: "Adam", explanation: "Adam adapts learning rates for each parameter." },
    { level: "Hard", question: "Explain overfitting in one sentence", options: ["Model fits noise not signal", "Model is undertrained", "Model is perfect", "Model is biased"], answer: "Model fits noise not signal", explanation: "Overfitting means model captures noise and fails on new data." }
  ],

  // 10. Cybersecurity Analyst
  "Cybersecurity Analyst": [
    { level: "Easy", question: "Which is a type of malware?", options: ["Virus", "HTML", "SQL", "JSON"], answer: "Virus", explanation: "Virus is malicious software that replicates and spreads." },
    { level: "Easy", question: "What does CIA in security stand for?", options: ["Confidentiality, Integrity, Availability", "Control, Integrity, Access", "Confidentiality, Internet, Access", "Control, Isolation, Authorization"], answer: "Confidentiality, Integrity, Availability", explanation: "CIA is the core triad of security goals." },
    { level: "Easy", question: "Which protocol is secure for web traffic?", options: ["HTTP", "FTP", "HTTPS", "TELNET"], answer: "HTTPS", explanation: "HTTPS uses TLS/SSL to secure HTTP traffic." },
    { level: "Medium", question: "What is social engineering?", options: ["Network attack", "Psychological manipulation", "Database corruption", "Malware scan"], answer: "Psychological manipulation", explanation: "Social engineering tricks humans into giving sensitive info." },
    { level: "Medium", question: "What does SQL injection target?", options: ["Web APIs", "Database queries", "UI styling", "DNS records"], answer: "Database queries", explanation: "SQL injection injects malicious SQL through inputs." },
    { level: "Medium", question: "Which tool is used for packet capture?", options: ["Wireshark", "Photoshop", "Excel", "Node"], answer: "Wireshark", explanation: "Wireshark analyzes network traffic packets." },
    { level: "Medium", question: "Two-factor authentication adds:", options: ["Another password", "An additional verification factor", "More servers", "Faster login"], answer: "An additional verification factor", explanation: "2FA requires two forms of verification (e.g., password + OTP)." },
    { level: "Hard", question: "Which attack tries to overload a server with requests?", options: ["Phishing", "DDoS", "SQLi", "XSS"], answer: "DDoS", explanation: "DDoS floods targets with traffic to disrupt services." },
    { level: "Hard", question: "What is XSS (Cross-Site Scripting)?", options: ["Server-side exploit", "Client-side script injection", "Network sniffing", "Password brute force"], answer: "Client-side script injection", explanation: "XSS injects scripts into web pages to execute in user browsers." },
    { level: "Hard", question: "Which is a secure coding practice?", options: ["Trust user input", "Validate and sanitize inputs", "Store creds in plain text", "Use default passwords"], answer: "Validate and sanitize inputs", explanation: "Validating inputs helps prevent injection vulnerabilities." }
  ],

  // 11. Cloud Engineer
  "Cloud Engineer": [
    { level: "Easy", question: "What does EC2 in AWS stand for?", options: ["Elastic Compute Cloud", "Elastic Container Cloud", "Enterprise Cloud Controller", "Extended Compute Core"], answer: "Elastic Compute Cloud", explanation: "EC2 provides scalable virtual servers in AWS." },
    { level: "Easy", question: "Which cloud model offers shared resources over the internet?", options: ["On-premise", "Cloud", "Local", "Standalone"], answer: "Cloud", explanation: "Cloud provides shared on-demand resources via internet." },
    { level: "Easy", question: "S3 in AWS is used for?", options: ["Compute", "Object Storage", "Database", "Networking"], answer: "Object Storage", explanation: "S3 stores objects like files and media." },
    { level: "Medium", question: "What is Infrastructure as Code (IaC)?", options: ["Manual server setup", "Defining infra using code", "Design pattern", "Database schema"], answer: "Defining infra using code", explanation: "IaC allows provisioning via declarative scripts like Terraform." },
    { level: "Medium", question: "Which service runs containers serverlessly on AWS?", options: ["Lambda", "ECS Fargate", "EC2", "S3"], answer: "ECS Fargate", explanation: "Fargate runs containers without managing servers." },
    { level: "Medium", question: "Which database type is managed by Amazon RDS?", options: ["Relational Databases", "Object Storage", "Block Storage", "Key-value only"], answer: "Relational Databases", explanation: "RDS manages engines like MySQL, PostgreSQL, MSSQL." },
    { level: "Medium", question: "Which concept helps distribute traffic globally?", options: ["Load balancer", "Route 53 (DNS)", "S3", "IAM"], answer: "Route 53 (DNS)", explanation: "Route 53 provides DNS routing and health checks." },
    { level: "Hard", question: "What is a VPC in cloud services?", options: ["Virtual Private Cloud", "Virtual Public Cluster", "Very Private Container", "Virtual Processing Core"], answer: "Virtual Private Cloud", explanation: "VPC isolates cloud resources in a virtual network." },
    { level: "Hard", question: "Which pattern helps scale reads in databases?", options: ["Sharding", "Monolith", "Singleton", "Synchronous writes"], answer: "Sharding", explanation: "Sharding partitions data across multiple database servers." },
    { level: "Hard", question: "What does autoscaling primarily achieve?", options: ["Manual scaling", "Automatic resource scaling to demand", "Faster disks", "Security"], answer: "Automatic resource scaling to demand", explanation: "Autoscaling adjusts instances to match load." }
  ],

  // 12. DevOps Engineer
  "DevOps Engineer": [
    { level: "Easy", question: "What does CI/CD stand for?", options: ["Continuous Integration / Continuous Delivery", "Code Integration / Code Delivery", "Continuous Input / Continuous Debug", "Compile Integrate / Compile Deploy"], answer: "Continuous Integration / Continuous Delivery", explanation: "CI/CD automates building, testing and deploying code." },
    { level: "Easy", question: "Which tool is commonly used for CI pipelines?", options: ["Jenkins", "Photoshop", "Excel", "Word"], answer: "Jenkins", explanation: "Jenkins automates CI/CD workflows." },
    { level: "Easy", question: "Docker is used to create?", options: ["Virtual Machines", "Containers", "Databases", "Static sites"], answer: "Containers", explanation: "Docker packages apps with dependencies into containers." },
    { level: "Medium", question: "Kubernetes is for?", options: ["Container orchestration", "Image editing", "Document management", "Email service"], answer: "Container orchestration", explanation: "Kubernetes manages containers at scale." },
    { level: "Medium", question: "Which file stores Docker build instructions?", options: ["Dockerfile", "docker.json", "container.yml", "build.txt"], answer: "Dockerfile", explanation: "Dockerfile defines how to build a Docker image." },
    { level: "Medium", question: "Infrastructure testing often uses which approach?", options: ["Unit tests only", "Integration and acceptance tests", "No testing", "Manual testing only"], answer: "Integration and acceptance tests", explanation: "Infrastructure should be validated automatically." },
    { level: "Medium", question: "What does 'immutable infrastructure' imply?", options: ["Servers are changed in-place", "Replace rather than modify", "Use mutable VMs", "Manual patching"], answer: "Replace rather than modify", explanation: "Immutable infra means replacing instances instead of modifying them." },
    { level: "Hard", question: "Which tool is declarative for provisioning infrastructure?", options: ["Ansible (imperative)", "Terraform (declarative)", "Bash scripts", "Manual"], answer: "Terraform (declarative)", explanation: "Terraform uses declarative configuration to provision resources." },
    { level: "Hard", question: "Blue/Green deployment strategy is used to?", options: ["Test code only", "Reduce downtime during deployment", "Increase DB size", "Backup files"], answer: "Reduce downtime during deployment", explanation: "Blue/Green switches traffic between two environment versions." },
    { level: "Hard", question: "What is service mesh used for?", options: ["UI styling", "Inter-service communication management", "Database queries", "Image optimization"], answer: "Inter-service communication management", explanation: "Service meshes manage traffic, retries, observability between services." }
  ],

  // 13. AI/ML Engineer
  "AI/ML Engineer": [
    { level: "Easy", question: "Which library is commonly used for neural networks?", options: ["NumPy", "TensorFlow", "Flask", "React"], answer: "TensorFlow", explanation: "TensorFlow is a popular deep learning library." },
    { level: "Easy", question: "What is supervised learning?", options: ["Learning without labels", "Learning with labels", "Clustering only", "Data cleaning"], answer: "Learning with labels", explanation: "Supervised learning uses labeled data to train models." },
    { level: "Easy", question: "Which metric is common for regression?", options: ["Accuracy", "MSE", "F1-score", "Precision"], answer: "MSE", explanation: "Mean Squared Error measures average squared difference for regression." },
    { level: "Medium", question: "What does overfitting mean?", options: ["Model generalizes well", "Model fits noise and fails on new data", "No training", "Perfect model"], answer: "Model fits noise and fails on new data", explanation: "Overfitting captures noise; it's poor on unseen data." },
    { level: "Medium", question: "Which technique reduces overfitting?", options: ["Increase learning rate", "Dropout", "Remove activation functions", "Use raw data only"], answer: "Dropout", explanation: "Dropout randomly disables neurons to reduce overfitting." },
    { level: "Medium", question: "What is transfer learning?", options: ["Training from scratch every time", "Using pre-trained models and fine-tuning", "Ignoring pre-trained models", "Only using small datasets"], answer: "Using pre-trained models and fine-tuning", explanation: "Transfer learning adapts pre-trained models to new tasks." },
    { level: "Medium", question: "Which optimizer often works well out-of-the-box?", options: ["SGD", "Adam", "K-means", "PCA"], answer: "Adam", explanation: "Adam adapts learning rates and often converges faster." },
    { level: "Hard", question: "What is backpropagation used for?", options: ["Forward pass only", "Computing gradients to update weights", "Data preprocessing", "Feature extraction"], answer: "Computing gradients to update weights", explanation: "Backprop computes gradients for weight updates via chain rule." },
    { level: "Hard", question: "Which technique is used for sequence modelling?", options: ["CNN only", "RNN / LSTM / Transformer", "SVM", "KNN"], answer: "RNN / LSTM / Transformer", explanation: "RNN/LSTM/Transformers are used for sequential data." },
    { level: "Hard", question: "What does 'epoch' mean in training?", options: ["One forward pass", "One full pass over training data", "Number of layers", "Model size"], answer: "One full pass over training data", explanation: "An epoch means the model saw all training samples once." }
  ],

  // 14. UI/UX Designer
  "UI/UX Designer": [
    { level: "Easy", question: "Which tool is popular for UI design and prototyping?", options: ["Figma", "VS Code", "MySQL", "Docker"], answer: "Figma", explanation: "Figma is widely used for design and prototyping." },
    { level: "Easy", question: "What does UX stand for?", options: ["User Xperience", "User Experience", "User Extra", "Unique Experience"], answer: "User Experience", explanation: "UX refers to overall user experience with a product." },
    { level: "Easy", question: "Which principle deals with readable text and spacing?", options: ["Color theory", "Typography", "Versioning", "Networking"], answer: "Typography", explanation: "Typography concerns font, spacing and readability." },
    { level: "Medium", question: "What is wireframing?", options: ["Final design", "A low-fidelity layout sketch", "Database design", "Backend API design"], answer: "A low-fidelity layout sketch", explanation: "Wireframes show layout without detailed visuals." },
    { level: "Medium", question: "Which design system ensures consistent UI components?", options: ["Design System", "Database", "CI/CD", "Docker"], answer: "Design System", explanation: "Design systems provide reusable UI components and guidelines." },
    { level: "Medium", question: "What is 'affordance' in UI?", options: ["Server capacity", "Perceived function of an element", "Database schema", "Network speed"], answer: "Perceived function of an element", explanation: "Affordance suggests how an element should be used." },
    { level: "Medium", question: "Which color contrast guideline helps accessibility?", options: ["High contrast ratio", "Low contrast", "Random colors", "No contrast"], answer: "High contrast ratio", explanation: "High contrast improves readability for all users." },
    { level: "Hard", question: "What is usability testing?", options: ["Code testing", "Testing with real users to evaluate UI", "Database testing", "Automated UI rendering"], answer: "Testing with real users to evaluate UI", explanation: "Usability testing observes real users performing tasks." },
    { level: "Hard", question: "Which metric tracks user retention over time?", options: ["Bounce rate", "Cohort retention", "Response time", "Throughput"], answer: "Cohort retention", explanation: "Cohort retention measures how long users stay over periods." },
    { level: "Hard", question: "What does 'responsive design' mean?", options: ["Design that adapts to different screen sizes", "Design for one screen", "Backend scaling", "Animation only"], answer: "Design that adapts to different screen sizes", explanation: "Responsive design adapts layouts across devices." }
  ],

  // 15. Mobile App Developer
  "Mobile App Developer": [
    { level: "Easy", question: "Which cross-platform framework uses Dart?", options: ["React Native", "Ionic", "Flutter", "Xamarin"], answer: "Flutter", explanation: "Flutter is Google's UI toolkit using Dart." },
    { level: "Easy", question: "Which language is commonly used for Android native apps?", options: ["Kotlin", "Swift", "Ruby", "PHP"], answer: "Kotlin", explanation: "Kotlin is a primary language for Android development." },
    { level: "Easy", question: "What is an APK?", options: ["Android Package", "App Key", "Application Proxy", "API Key"], answer: "Android Package", explanation: "APK is the Android application package format." },
    { level: "Medium", question: "Which lifecycle method is called when activity is first created?", options: ["onStart", "onCreate", "onResume", "onPause"], answer: "onCreate", explanation: "onCreate initializes the activity." },
    { level: "Medium", question: "Which UI thread handles interactions in Android?", options: ["Background thread", "Main (UI) thread", "Worker thread", "I/O thread"], answer: "Main (UI) thread", explanation: "UI updates must occur on the main thread." },
    { level: "Medium", question: "Which tool helps with app performance profiling?", options: ["Android Profiler", "Xcode Instruments", "Photoshop", "Excel"], answer: "Android Profiler", explanation: "Android Studio includes profilers for CPU, memory, etc." },
    { level: "Medium", question: "Which storage is best for structured local data?", options: ["SharedPreferences", "Files", "SQLite/Room", "Cache only"], answer: "SQLite/Room", explanation: "Room provides an abstraction over SQLite for structured data." },
    { level: "Hard", question: "Which pattern helps separate UI and business logic on Android?", options: ["MVC", "MVVM", "MVP", "Singleton"], answer: "MVVM", explanation: "MVVM with ViewModel separates UI from logic." },
    { level: "Hard", question: "What is Codename for Jetpack Compose?", options: ["Legacy UI", "Declarative UI toolkit for Android", "Imperative UI", "XML based UI"], answer: "Declarative UI toolkit for Android", explanation: "Jetpack Compose enables declarative UI development." },
    { level: "Hard", question: "Which file declares Android app permissions and components?", options: ["AndroidManifest.xml", "build.gradle", "settings.json", "app.config"], answer: "AndroidManifest.xml", explanation: "Manifest declares permissions, activities and services." }
  ],

  // 16. Database Administrator
  "Database Administrator": [
    { level: "Easy", question: "Which SQL command retrieves data?", options: ["SELECT", "INSERT", "UPDATE", "DELETE"], answer: "SELECT", explanation: "SELECT fetches rows from database tables." },
    { level: "Easy", question: "What does ACID stand for (in databases)?", options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Consistency, Integrity, Durability", "Atomic, Clustered, Indexed, Distributed", "Access, Control, Integrity, Durability"], answer: "Atomicity, Consistency, Isolation, Durability", explanation: "ACID properties ensure reliable transactions." },
    { level: "Easy", question: "Which SQL clause filters rows?", options: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"], answer: "WHERE", explanation: "WHERE filters rows before grouping/aggregation." },
    { level: "Medium", question: "What is database normalization primarily for?", options: ["Speed up queries", "Reduce redundancy & improve integrity", "Create backups", "Scale horizontally"], answer: "Reduce redundancy & improve integrity", explanation: "Normalization organizes schema to reduce duplication." },
    { level: "Medium", question: "Which index type speeds up exact-match queries?", options: ["B-tree index", "Bitmap index", "Full-text index", "No index"], answer: "B-tree index", explanation: "B-tree is a general-purpose index for lookups." },
    { level: "Medium", question: "What is a database backup?", options: ["Copy of data for recovery", "Query", "Index", "Schema"], answer: "Copy of data for recovery", explanation: "Backups allow restoring data after failures." },
    { level: "Medium", question: "Which command removes duplicates from query results?", options: ["SELECT DISTINCT", "SELECT UNIQUE", "SELECT REMOVE", "SELECT DELETE"], answer: "SELECT DISTINCT", explanation: "DISTINCT removes duplicate rows from results." },
    { level: "Hard", question: "Which isolation level is most strict?", options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"], answer: "Serializable", explanation: "Serializable prevents phenomena like phantom reads." },
    { level: "Hard", question: "What is replication in databases?", options: ["Copying data across multiple servers", "Deleting old data", "Indexing", "Querying"], answer: "Copying data across multiple servers", explanation: "Replication ensures availability and redundancy." },
    { level: "Hard", question: "Which tool helps manage database migrations programmatically?", options: ["Flyway / Liquibase", "Photoshop", "Excel", "Word"], answer: "Flyway / Liquibase", explanation: "Flyway and Liquibase provide schema migration tools." }
  ],

  // 17. QA Tester
  "QA Tester": [
    { level: "Easy", question: "What does STLC stand for?", options: ["Software Testing Life Cycle", "System Test Learning Cycle", "Software Technical Logic Cycle", "None"], answer: "Software Testing Life Cycle", explanation: "STLC describes testing phases from planning to closure." },
    { level: "Easy", question: "Which type of testing checks individual units of code?", options: ["Integration", "Unit", "System", "Acceptance"], answer: "Unit", explanation: "Unit testing validates small units/components." },
    { level: "Easy", question: "What is regression testing?", options: ["Testing new features only", "Re-running tests to ensure existing features still work", "Performance testing", "Security testing"], answer: "Re-running tests to ensure existing features still work", explanation: "Regression testing checks that changes don't break existing behavior." },
    { level: "Medium", question: "Which tool is popular for web automation testing?", options: ["Selenium", "Photoshop", "Excel", "Notepad"], answer: "Selenium", explanation: "Selenium automates browser interactions for testing." },
    { level: "Medium", question: "What is test case?", options: ["Requirement doc", "Detailed steps to verify a feature", "Design pattern", "Database schema"], answer: "Detailed steps to verify a feature", explanation: "Test cases define steps, inputs and expected results." },
    { level: "Medium", question: "What is a bug report important for?", options: ["Prioritization and reproduction", "Design", "Coding", "Marketing"], answer: "Prioritization and reproduction", explanation: "Bug reports help developers reproduce and fix issues." },
    { level: "Medium", question: "Which testing focuses on system performance under load?", options: ["Unit testing", "Performance/Load testing", "UI testing", "Smoke testing"], answer: "Performance/Load testing", explanation: "Load testing checks behavior under expected or peak load." },
    { level: "Hard", question: "Which test technique uses equivalence partitions?", options: ["Boundary value analysis", "Equivalence partitioning", "Decision table", "State transition"], answer: "Equivalence partitioning", explanation: "It reduces test cases by grouping inputs with similar behavior." },
    { level: "Hard", question: "Which is used for API testing?", options: ["Postman", "MS Paint", "Notepad", "Excel"], answer: "Postman", explanation: "Postman facilitates sending requests and validating responses." },
    { level: "Hard", question: "What does 'test automation ROI' consider?", options: ["Time and maintenance vs manual effort saved", "Only number of tests", "Only bugs found", "Only test coverage"], answer: "Time and maintenance vs manual effort saved", explanation: "ROI balances automation cost against saved manual effort and faster cycles." }
  ],

  // 18. Product Manager
  "Product Manager": [
    { level: "Easy", question: "What is an MVP in product development?", options: ["Most Valuable Product", "Minimum Viable Product", "Maximum Valid Product", "Minimum Valid Prototype"], answer: "Minimum Viable Product", explanation: "MVP is a minimal version to validate assumptions with users." },
    { level: "Easy", question: "Which document captures feature requirements?", options: ["Design assets", "PRD (Product Requirements Document)", "Codebase", "Marketing plan"], answer: "PRD (Product Requirements Document)", explanation: "PRD outlines features, goals and success metrics." },
    { level: "Easy", question: "What is a user story?", options: ["Detailed spec", "Short description of user need", "Test case", "Design asset"], answer: "Short description of user need", explanation: "User stories describe functionality from a user's perspective." },
    { level: "Medium", question: "Which metric measures user engagement over time?", options: ["Cohort analysis", "CSS", "CPU usage", "DB size"], answer: "Cohort analysis", explanation: "Cohort analysis shows retention and engagement trends." },
    { level: "Medium", question: "What is product-market fit?", options: ["Perfect UI", "When customers value your product for a market need", "Zero bugs", "High revenue only"], answer: "When customers value your product for a market need", explanation: "Product-market fit means the product satisfies a market demand." },
    { level: "Medium", question: "Which prioritization technique uses value vs effort?", options: ["MoSCoW", "RICE", "Kano", "Value-Effort matrix"], answer: "Value-Effort matrix", explanation: "Value-Effort matrix helps prioritize based on impact and effort." },
    { level: "Medium", question: "What is A/B testing used for?", options: ["Comparing two versions to see which performs better", "Designing UI only", "Coding", "Deployment"], answer: "Comparing two versions to see which performs better", explanation: "A/B tests measure impact of changes on user behavior." },
    { level: "Hard", question: "Which metric indicates long-term profitability of customers?", options: ["CAC", "LTV (Lifetime Value)", "Bounce rate", "Pageviews"], answer: "LTV (Lifetime Value)", explanation: "LTV estimates revenue a customer generates over their lifecycle." },
    { level: "Hard", question: "What is 'product discovery' stage?", options: ["Shipping features", "Finding problems worth solving and solutions to test", "Bug fixing", "Marketing only"], answer: "Finding problems worth solving and solutions to test", explanation: "Discovery validates ideas before building." },
    { level: "Hard", question: "What does 'North Star metric' represent?", options: ["A vanity metric", "The core metric that best captures product value to customers", "Only revenue", "Only DAU"], answer: "The core metric that best captures product value to customers", explanation: "North Star centers the team on a single leading metric of product value." }
  ],

  // 19. Business Analyst
  "Business Analyst": [
    { level: "Easy", question: "What is a stakeholder?", options: ["Only the CEO", "Anyone affected by the project", "Only developers", "Only users"], answer: "Anyone affected by the project", explanation: "Stakeholders include users, sponsors, and impacted parties." },
    { level: "Easy", question: "What does SWOT stand for?", options: ["Strengths, Weaknesses, Opportunities, Threats", "System, Workflow, Operations, Tactics", "Sales, Workforce, Output, Targets", "None"], answer: "Strengths, Weaknesses, Opportunities, Threats", explanation: "SWOT analyses internal and external factors affecting a business." },
    { level: "Easy", question: "What is requirement elicitation?", options: ["Collecting user and stakeholder needs", "Coding features", "Testing only", "Marketing"], answer: "Collecting user and stakeholder needs", explanation: "Elicitation gathers accurate requirements to build the right solution." },
    { level: "Medium", question: "What is a use case?", options: ["User interaction scenario describing steps to achieve a goal", "Database schema", "Test script", "Design asset"], answer: "User interaction scenario describing steps to achieve a goal", explanation: "Use cases illustrate how users interact with a system." },
    { level: "Medium", question: "Which modeling technique captures processes?", options: ["UML diagrams", "BPMN", "CSS grid", "Dockerfile"], answer: "BPMN", explanation: "BPMN models business processes with standardized notation." },
    { level: "Medium", question: "What is gap analysis used for?", options: ["Identify differences between current and desired states", "Code review", "Deployment", "Design"], answer: "Identify differences between current and desired states", explanation: "Gap analysis helps plan steps to reach goals." },
    { level: "Medium", question: "Which artifact represents functional requirements?", options: ["User stories", "Design mockups", "Marketing copy", "Server configs"], answer: "User stories", explanation: "User stories convey functional needs in simple language." },
    { level: "Hard", question: "What is stakeholder analysis?", options: ["Listing all dev tasks", "Assessing influence and interest of stakeholders", "Testing plan", "Release schedule"], answer: "Assessing influence and interest of stakeholders", explanation: "Stakeholder analysis guides engagement strategies." },
    { level: "Hard", question: "Which method helps prioritize requirements by value and risk?", options: ["MoSCoW", "Agile Sprints", "Waterfall", "CI/CD"], answer: "MoSCoW", explanation: "MoSCoW categorizes requirements into Must/Should/Could/Won't." },
    { level: "Hard", question: "What is a BRD (Business Requirements Document)?", options: ["Design file", "High-level document capturing business goals and requirements", "Test plan", "User manual"], answer: "High-level document capturing business goals and requirements", explanation: "BRD outlines business needs to inform solution design." }
  ],

  // 20. Game Developer
  "Game Developer": [
    { level: "Easy", question: "Which engine is commonly used for indie games?", options: ["Unity", "Photoshop", "Excel", "Word"], answer: "Unity", explanation: "Unity is a popular game engine for 2D/3D games." },
    { level: "Easy", question: "What is a sprite in game development?", options: ["Network packet", "2D image used in games", "Database row", "Audio file"], answer: "2D image used in games", explanation: "Sprites are 2D graphic objects in games." },
    { level: "Easy", question: "Which language is used for scripting in Unity?", options: ["C#", "Java", "Swift", "Kotlin"], answer: "C#", explanation: "Unity uses C# for game scripts." },
    { level: "Medium", question: "What is a game loop?", options: ["A design document", "A loop that updates and renders the game repeatedly", "UI layout", "Database query"], answer: "A loop that updates and renders the game repeatedly", explanation: "Game loop drives updates, physics and rendering." },
    { level: "Medium", question: "Which concept handles collision detection?", options: ["Raycasting / physics engine", "CSS", "SQL", "HTTP"], answer: "Raycasting / physics engine", explanation: "Physics engines detect and resolve collisions." },
    { level: "Medium", question: "Which asset pipeline is important for games?", options: ["Graphics, audio, animation import workflow", "SQL scripts", "Server configs", "Email templates"], answer: "Graphics, audio, animation import workflow", explanation: "Asset pipelines manage importing and optimizing resources." },
    { level: "Medium", question: "Which term describes player progression mechanics?", options: ["Game loop", "Leveling / progression system", "Database index", "Caching"], answer: "Leveling / progression system", explanation: "Progression systems reward players and increase challenge." },
    { level: "Hard", question: "What is occlusion culling?", options: ["Removing invisible objects from rendering", "Sound mixing", "Database cleanup", "Memory leak fixing"], answer: "Removing invisible objects from rendering", explanation: "Occlusion culling optimizes rendering by skipping hidden objects." },
    { level: "Hard", question: "Which rendering technique simulates realistic lighting?", options: ["Rasterization only", "Ray tracing", "Text rendering", "SQL rendering"], answer: "Ray tracing", explanation: "Ray tracing simulates light trajectories for realism." },
    { level: "Hard", question: "Which design pattern is common for game entities?", options: ["Singleton only", "Component-based architecture", "Monolithic classes", "Factory only"], answer: "Component-based architecture", explanation: "Components allow flexible entity composition." }
  ],

  // 21. Network Engineer
  "Network Engineer": [
    { level: "Easy", question: "Which device forwards packets between networks?", options: ["Switch", "Router", "Repeater", "Hub"], answer: "Router", explanation: "Routers forward packets between different networks." },
    { level: "Easy", question: "What does IP stand for?", options: ["Internet Protocol", "Internal Process", "Input Packet", "Interface Program"], answer: "Internet Protocol", explanation: "IP identifies network hosts and routes packets." },
    { level: "Easy", question: "Which layer of OSI handles routing?", options: ["Data Link", "Network", "Transport", "Application"], answer: "Network", explanation: "Network layer (Layer 3) is responsible for routing." },
    { level: "Medium", question: "Which protocol resolves hostnames to IP addresses?", options: ["DHCP", "DNS", "FTP", "SMTP"], answer: "DNS", explanation: "DNS translates domain names into IP addresses." },
    { level: "Medium", question: "What does DHCP provide to hosts?", options: ["IP addresses automatically", "Static routing only", "Firewall rules", "User accounts"], answer: "IP addresses automatically", explanation: "DHCP leases IPs and network config to clients." },
    { level: "Medium", question: "Which device operates primarily at Layer 2?", options: ["Router", "Switch", "Firewall", "Load balancer"], answer: "Switch", explanation: "Switches forward frames based on MAC addresses." },
    { level: "Medium", question: "What is subnetting used for?", options: ["Splitting networks into smaller subnetworks", "Encrypting data", "Compressing packets", "Designing UI"], answer: "Splitting networks into smaller subnetworks", explanation: "Subnetting divides IP ranges to organize networks." },
    { level: "Hard", question: "What does BGP (Border Gateway Protocol) handle?", options: ["Routing between autonomous systems", "Local switching", "DNS resolution", "Email transport"], answer: "Routing between autonomous systems", explanation: "BGP manages routing across large networks on the internet." },
    { level: "Hard", question: "Which metric is used for link reliability in routing?", options: ["Bandwidth only", "Latency only", "Combination of metrics including hop count and bandwidth", "Display size"], answer: "Combination of metrics including hop count and bandwidth", explanation: "Routing protocols use multiple metrics to choose paths." },
    { level: "Hard", question: "Which protocol secures remote shell access?", options: ["Telnet", "SSH", "FTP", "HTTP"], answer: "SSH", explanation: "SSH encrypts remote terminal sessions." }
  ],

  // 22. IT Support Engineer
  "IT Support Engineer": [
    { level: "Easy", question: "Which tool is commonly used for remote desktop support?", options: ["TeamViewer / AnyDesk", "Photoshop", "Excel", "Word"], answer: "TeamViewer / AnyDesk", explanation: "Remote tools let technicians access user machines remotely." },
    { level: "Easy", question: "Which OS is developed by Microsoft?", options: ["macOS", "Linux", "Windows", "Android"], answer: "Windows", explanation: "Windows is Microsoft's desktop OS." },
    { level: "Easy", question: "What is a ticketing system used for?", options: ["Tracking user issues", "Editing images", "Coding", "Database"], answer: "Tracking user issues", explanation: "Ticketing systems record, assign and track incidents." },
    { level: "Medium", question: "Which command shows network configuration on Windows?", options: ["ifconfig", "ipconfig", "netstat -r", "route"], answer: "ipconfig", explanation: "ipconfig displays IP settings on Windows." },
    { level: "Medium", question: "What is a common first step in troubleshooting?", options: ["Rebooting the system", "Deleting user files", "Formatting the disk", "Changing hardware"], answer: "Rebooting the system", explanation: "Reboot often resolves transient errors." },
    { level: "Medium", question: "Which backup method copies only changed files since last full backup?", options: ["Full", "Incremental", "Differential", "Snapshot only"], answer: "Incremental", explanation: "Incremental backups save only changes since last backup." },
    { level: "Medium", question: "What does 'safe mode' do?", options: ["Loads minimal drivers and services", "Deletes user data", "Increases performance", "Installs updates only"], answer: "Loads minimal drivers and services", explanation: "Safe mode helps diagnose driver or software issues." },
    { level: "Hard", question: "Which step helps when diagnosing hardware vs software issues?", options: ["Replace hardware immediately", "Check logs and swap components systematically", "Ignore logs", "Format disk"], answer: "Check logs and swap components systematically", explanation: "Systematic diagnostics identify root causes reliably." },
    { level: "Hard", question: "What is disk fragmentation?", options: ["Data scattered across disk causing slower access", "A security feature", "File deletion", "Network issue"], answer: "Data scattered across disk causing slower access", explanation: "Defragmentation consolidates fragmented files for efficiency." },
    { level: "Hard", question: "Which authentication method uses username and password only?", options: ["Single factor", "Two factor", "Multi-factor", "Biometric only"], answer: "Single factor", explanation: "Single-factor uses only one authentication type, typically password." }
  ],

  // 23. Software Tester
  "Software Tester": [
    { level: "Easy", question: "What is a test case?", options: ["A set of steps to validate functionality", "A code module", "A server", "A database"], answer: "A set of steps to validate functionality", explanation: "Test cases define inputs, actions, and expected results." },
    { level: "Easy", question: "Which test ensures basic features work after a build?", options: ["Regression", "Sanity/Smoke", "Unit", "Load"], answer: "Sanity/Smoke", explanation: "Smoke tests check core functionality quickly after changes." },
    { level: "Easy", question: "Which document captures defects found during testing?", options: ["Bug report", "Design spec", "Marketing plan", "Server log"], answer: "Bug report", explanation: "Bug reports document issue details for developers to fix." },
    { level: "Medium", question: "What is boundary value analysis?", options: ["Testing at edges of input ranges", "Random testing", "Only unit testing", "Only UI testing"], answer: "Testing at edges of input ranges", explanation: "Boundary testing focuses on values at or near limits." },
    { level: "Medium", question: "Which is black-box testing technique?", options: ["Equivalence partitioning", "Code coverage analysis", "Unit testing", "Static code analysis"], answer: "Equivalence partitioning", explanation: "Black-box tests based on input/output behavior, not internals." },
    { level: "Medium", question: "What does test coverage measure?", options: ["Portions of code executed by tests", "Number of test cases", "Bug severity only", "Design completeness"], answer: "Portions of code executed by tests", explanation: "Coverage indicates how much code paths tests exercise." },
    { level: "Medium", question: "Which type of testing measures system behavior under heavy load?", options: ["Unit", "Integration", "Stress/Load", "Acceptance"], answer: "Stress/Load", explanation: "Load testing evaluates performance at scale." },
    { level: "Hard", question: "What is mutation testing used for?", options: ["Change code to test robustness of test suite", "Change UI colors", "Format code", "Backup databases"], answer: "Change code to test robustness of test suite", explanation: "Mutation testing introduces small changes to check if tests catch them." },
    { level: "Hard", question: "Which practice helps avoid flaky tests?", options: ["Introduce sleeps", "Isolate tests and mock external dependencies", "Rely on live services", "Randomize timing"], answer: "Isolate tests and mock external dependencies", explanation: "Isolation avoids external flakiness and unreliability." },
    { level: "Hard", question: "Which metric helps measure bug severity impact?", options: ["Priority and severity levels", "Number of lines of code", "Test cases count", "Branch coverage"], answer: "Priority and severity levels", explanation: "Severity indicates impact; priority indicates scheduling urgency." }
  ],

  // 24. Blockchain Developer
  "Blockchain Developer": [
    { level: "Easy", question: "What is a blockchain?", options: ["A centralized DB", "A distributed ledger of immutable blocks", "A UI framework", "A file system"], answer: "A distributed ledger of immutable blocks", explanation: "Blockchain records transactions in ordered, linked blocks across nodes." },
    { level: "Easy", question: "Which concept secures blockchain transactions?", options: ["Encryption only", "Hashing & digital signatures", "Compression", "Indexing"], answer: "Hashing & digital signatures", explanation: "Hashes and signatures ensure integrity and authenticity." },
    { level: "Easy", question: "Which platform is commonly used for smart contracts?", options: ["Ethereum", "MySQL", "React", "Docker"], answer: "Ethereum", explanation: "Ethereum supports smart contracts and decentralized apps." },
    { level: "Medium", question: "What is a smart contract?", options: ["A legal file", "Self-executing code on blockchain", "A database", "A UI component"], answer: "Self-executing code on blockchain", explanation: "Smart contracts automatically run when conditions are met." },
    { level: "Medium", question: "What does 'consensus mechanism' do?", options: ["Schedules backups", "Ensures nodes agree on ledger state", "Manages UI", "Handles styling"], answer: "Ensures nodes agree on ledger state", explanation: "Consensus algorithms like PoW/PoS ensure consistency across nodes." },
    { level: "Medium", question: "Which is Proof-of-Work example?", options: ["Ethereum 2.0", "Bitcoin", "SQL", "REST"], answer: "Bitcoin", explanation: "Bitcoin uses PoW to secure blocks through mining." },
    { level: "Medium", question: "What is gas in Ethereum?", options: ["Transaction fee measure", "Block size", "Node name", "Smart contract template"], answer: "Transaction fee measure", explanation: "Gas measures computation cost and fees on Ethereum." },
    { level: "Hard", question: "What is a 51% attack?", options: ["When majority controls network and can rewrite history", "A UI bug", "A DB crash", "A server overload"], answer: "When majority controls network and can rewrite history", explanation: "If attackers control >50% hashing power they can double-spend." },
    { level: "Hard", question: "Which property makes blockchain tamper-evident?", options: ["Encryption only", "Immutable chaining of block hashes", "Indexing", "Caching"], answer: "Immutable chaining of block hashes", explanation: "Each block links to previous hash; changes break the chain." },
    { level: "Hard", question: "Which language is used for Ethereum smart contracts?", options: ["Solidity", "Python", "JavaScript", "C#"], answer: "Solidity", explanation: "Solidity is the primary language for Ethereum smart contracts." }
  ]
};

