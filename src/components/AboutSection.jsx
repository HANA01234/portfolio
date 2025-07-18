import {Briefcase, Code ,User, Download} from "lucide-react";
export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container max-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" >
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Building Scalable Web Solutions
                        </h3>

                        <p className="text-muted-foreground">
                            I'm a passionate full stack developer with 2 years of hands-on experience building robust, end-to-end web applications using the MERN stack (MongoDB, Express.js, React, and Node.js). I specialize in turning complex problems into clean, scalable solutions
                        </p>
                        <p className="text-muted-foreground">
                            Whether it's designing dynamic frontends with React or architecting efficient backend APIs with Node.js and Express, I take pride in writing clean, maintainable code and delivering user-focused digital products that perform at scale.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>

                            <a
                href="/Hana CV.pdf"
                download="HanaCV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
                >
                <Download className="w-4 h-4" />
                Download CV
                </a>

                        </div>
                    </div>


                    <div className="grid grid-cols-1 gap-6">

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg t-semibold">Full Stack Development</h4>
                                    <p className="text-muted-foreground">
                                        I build full stack web apps using MongoDB, Express.js, React, and Node.js with a strong focus on performance and scalability.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg t-semibold">UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                        I create clean, user-focused interfaces with attention to accessibility and responsive design.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg t-semibold">Project Management</h4>
                                    <p className="text-muted-foreground">
                                        I manage full project lifecycles — from initial planning and design to deployment and iterations.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};