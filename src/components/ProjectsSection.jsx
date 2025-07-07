import { ArrowRight, ExternalLink, Github } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Fashion Store ",
        description: "A sleek and modern fashion eCommerce platform built with Next.js and Tailwind CSS. It features responsive design, dynamic routing, and an elegant user interface tailored for a smooth shopping experience.",
        image: "/projects/project1.png",
        tags: ["React", "Next.js", "Tailwind CSS","mongoDB"],
        demoUrl: "#",
        githubUrl: "#",
        
    },

    {
        id: 2,
        title: "second project",
        description: "A sleek and modern fashion eCommerce platform built with Next.js and Tailwind CSS. It features responsive design, dynamic routing, and an elegant user interface tailored for a smooth shopping experience.",
        image: "/projects/project2.png",
        tags: ["React", "Next.js", "Tailwind CSS","mongoDB"],
        demoUrl: "#",
        githubUrl: "#",
        
    },

    {
        id: 3,
        title: "third project",
        description: "A sleek and modern fashion eCommerce platform built with Next.js and Tailwind CSS. It features responsive design, dynamic routing, and an elegant user interface tailored for a smooth shopping experience.",
        image: "/projects/project3.png",
        tags: ["React", "Next.js", "Tailwind CSS","mongoDB"],
        demoUrl: "#",
        githubUrl: "#",
        
    },
];

export const ProjectsSection = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured<span className="text-primary">Projects</span></h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                    Explore a selection of my recent work — from fast, responsive eCommerce experiences to beautifully designed landing pages. These projects highlight my skills in building scalable, high-performance web applications.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                            <div className="h-48 overflow-hidden"> 
                                <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span  className="px-2 py-1 text-xs font-medium border rounded-full bg-primary text-secondary-foreground ">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                            <div className="flex justify-between items-center ">
                                <div className="flex space-x-3">
                                    <a
                                    target="_blank"
                                    href={project.demoUrl}
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a
                                    target="_blank"
                                    href={project.githubUrl}
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                    <div className="text-center mt-12">
                        <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/HeshamHana" >
                            check My Github <ArrowRight size={16} />
                        </a>
                    </div>

            </div>

        </section>
    );
}