import { FaGithub } from "react-icons/fa6";

// Replace the projects inside the myProjects array with your own projects. Right now the array has sample data. You can add as many projects as you want. Each project should be an object with the following
// properties:
// - title: The title of the project
// - description: A description of the project
// - repositoryLink: A link to the GitHub repository of the project
// You can also add more properties if you want to display more information about your projects.
const myProjects = [
  {
    title: 'HTML Npower project',
    description: 'Here the task was to create a IT team member table using HTML',
    repositoryLink: 'https://github.com/Spannter/path2tech_HTML_homework',
  },
  {
    title: 'CSS Npower project',
    description: 'Here the task was to create an email UI using CSS',
    repositoryLink: 'https://github.com/Spannter/CSS-Npower-project',
  },
  {
    title: 'JS Npower project',
    description: 'Here the task was to create a todo list using JS that would mark a task as complete or not',
    repositoryLink: 'https://github.com/Spannter/js-project/tree/master',
  },
  {
    title: 'DOM Npower project',
    description: 'As a team, the task was to complete a table for books and to be able to delete them from the table. I was responsible for the css design of the table',
    repositoryLink: 'https://github.com/Spannter/Path2Tech-DOM-Project',
  },
  {
    title: 'React Weather app',
    description: 'Here the task was to create a weather app using react to accurately report live weather at a city in the world',
    repositoryLink: 'https://github.com/Spannter/Weather-App',
  },
];
const Projects = () => {
  return (
    <main className="projects-container">
      {myProjects.map((project) => (
        <section key={project.title} className="project-item border border-2 rounded-lg">
          <section className="project-image-container">
            <FaGithub />
          </section>
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-lg">{project.description}</p>
          <p>Check out the link to the project repository <a href={project.repositoryLink} target="_blank">Here</a> </p>

        </section>
      ))}
    </main>
  )
}

export default Projects