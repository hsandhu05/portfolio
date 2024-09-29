
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background-color: #333;
            color: white;
            padding: 10px 0;
            text-align: center;
        }
        nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
        }
        nav ul li {
            margin: 0 20px;
        }
        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: bold;
        }
        .container {
            max-width: 1200px;
            margin: 20px auto;
            padding: 0 20px;
        }
        .section-title {
            text-align: center;
            margin-bottom: 30px;
            color: #333;
        }
        .projects {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }
        .project {
            background-color: white;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            flex-basis: 48%;
            padding: 20px;
            transition: transform 0.2s ease;
        }
        .project:hover {
            transform: translateY(-5px);
        }
        .project img {
            max-width: 100%;
            border-radius: 5px;
        }
        .project h3 {
            margin-top: 10px;
            color: #333;
        }
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px 0;
            margin-top: 40px;
        }
    </style>
</head>
<body>

    <header>
        <h1>My Portfolio</h1>
        <nav>
            <ul>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="about" class="container">
        <h2 class="section-title">About Me</h2>
        <p>Welcome to my portfolio! I am an experienced IT specialist with over 7 years of experience in system administration, cloud services, networking, and more.</p>
    </section>

    <section id="projects" class="container">
        <h2 class="section-title">Projects</h2>
        <div class="projects">
            <div class="project">
                <img src="project1-image.jpg" alt="Project 1">
                <h3>Project 1</h3>
                <p>Designed and implemented a hybrid cloud environment for DevOps teams using Azure and AWS. Reduced deployment time by 30%.</p>
            </div>
            <div class="project">
                <img src="project2-image.jpg" alt="Project 2">
                <h3>Project 2</h3>
                <p>Managed the migration of company backups to AWS S3, improving storage efficiency and reducing costs.</p>
            </div>
        </div>
    </section>

    <section id="contact" class="container">
        <h2 class="section-title">Contact</h2>
        <p>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></p>
        <p>GitHub: <a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a></p>
    </section>

    <footer>
        <p>&copy; 2024 My Portfolio</p>
    </footer>

</body>
</html>
