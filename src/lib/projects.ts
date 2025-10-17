const projects: array = [
    {
        title: 'Portfolio Site',
        type: 'personal',
        tech: ['Next.js', 'JavaScript', 'Tailwind', 'CSS'],
        description: "A personal portfolio, which you are currently viewing. This project was created to help brush up on my React.js/Next.js skills, and to help collate my projects in one place.",
        link: '/',
        githubLink: 'https://github.com/JFCarson/web-portfolio',
        featured: true
    },
    {
        title: 'Insurance Web Applications',
        type: 'commercial',
        for: 'Cheshire Datasystems Ltd.',
        tech: ['JSP', 'Bootstrap', 'LESS', 'JavaScript', 'JQuery', 'AWS', 'React.js', 'Next.js', 'XML', 'JSON'],
        description: "My main responsibility at CDL was to maintain and develop the front end of several insurance user portals. Over the course of my employment, I have worked on products for the Markerstudy Group, Sainsbury's, and a number of other independent brokers. These applications were spread across both legacy and modern codebases.",
        featured: true
    },
    {
        title: 'Cypress Test Suite',
        type: 'commercial',
        for: 'Cheshire Datasystems Ltd.',
        tech: ['Cypress', 'JavaScript', 'JSON', 'YAML'],
        description: "While working at CDL, I designed an implementation for a Cypress End-to-End test suite around the principal of ease of implementation, use, and maintainability. This was achieved primarily through the use of config-driven code, prioritising readability for a developer or QA that might find themselves working on it.",
    },
    {
        title: 'CandyScore',
        type: 'commercial',
        for: 'Freelance Project',
        tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
        description: "A project commissioned by an individual to create a private web application for a small indie team to use for the creation of storyboards for use in animated film.",
    },
    {
        title: 'In-House CRM',
        type: 'commercial',
        for: 'Child Guidance UK Ltd.',
        tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
        description: "While working at CGUK, I created a CRM system bespoked to the needs of the business, which was used to help develop marketing strategies for the team, as well as having a task service akin to Jira or Trello integrated directly.",
    }
]

export default projects
