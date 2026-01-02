import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "devicon/devicon.min.css";

function App() {
  return (
    <>
      <main className="mainContainer">
        <nav className="navContainer">
          <li className="liStyl ">
            <a className="nameText portfolioName">Neelam Raikwar</a>
          </li>

          <ul className="ulTContainer">
            <li className="liStyl">
              <a href="#projects" className="liTText active">
                Projects
              </a>
            </li>
            <li className="liStyl">
              <a href="#techStack" className="liTText active">
                Tech Stack
              </a>
            </li>
            <li className="liStyl">
              <a href="#connect" className="liTText active">
                Connect
              </a>
            </li>
          </ul>
        </nav>

        <div className="wholeContainer">
          <div className="introCon">
            <p className="name">
              <span stye={{ color: "white" }}>Hello,</span> This is Neelam
              Raikwar
            </p>
            <h1 className="role">
              The <span>Full Stack Developer</span>
            </h1>
            <hr style={{ marginBottom: "0rem", padding: "0rem" }} />
            <p className="about">
              {" "}
              A full-stack developer skilled in building modern web apps with
              React, Node.js, and MongoDB. Focused on solving technical
              challenges and delivering reliable end-to-end solutions.
            </p>

            <div className="btnContainer">
              <a href="#connect">
                <button className="button">Contact Me</button>
              </a>
              <a
                href="https://drive.google.com/file/d/1LFZyE5G5V65s3oJYPdb9h-Ij4e-RDmAw/view?usp=sharing"
                target="_blank"
              >
                <button className="button">Resume</button>
              </a>
            </div>
          </div>

          <section id="projects">
            <h1 className="role">Projects</h1>
            <p className="about">Creating technology with real-world impact</p>
            <hr />

            <div className="projectCont">
              <div className="projectBox">
                <img
                  src="https://res.cloudinary.com/dltfnhclh/image/upload/v1766084304/Screenshot_2025-12-18_201958_euyzbu.png"
                  alt="Book Readers App"
                  className="img"
                />
                <div className="projInfo">
                  <h2>Learn 'N' Fun</h2>
                  <p className="aboutProj">
                    Developed a full-stack web application for the LNF community
                    that enables learners to join the community by submitting a
                    registration form.
                  </p>
                  <div className="tecBtns">
                    <p>React</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>Express</p>
                    <p>Node.js</p>
                    <p>MongoDB</p>
                  </div>

                  <div className="demoCodeBtns">
                    <button className="btn">
                      <a
                        href="https://learn-n-fun-nine.vercel.app/"
                        target="_blank"
                      >
                        <i className="bi bi-eye"></i>Demo
                      </a>
                    </button>
                    <button className="btn">
                      <a
                        href="https://github.com/neelamraikwar9/LearnNFun"
                        target="_blank"
                      >
                        <i className="bi bi-code-slash"></i>Code
                      </a>
                    </button>
                  </div>
                </div>
              </div>

              <div className="projectBox">
                <img
                  src="https://res.cloudinary.com/dltfnhclh/image/upload/v1761305967/Screenshot_2025-10-24_170716_vabueg.png"
                  alt="Book Readers App"
                  className="img"
                />
                <div className="projInfo">
                  <h2>Book Readers</h2>
                  <p className="aboutProj">
                    A modern e-commerce website with features that allow users
                    to select books and add them to the cart or wishlist. It
                    includes a detailed product page, multiple filters for
                    refining book searches, and a price card that updates based
                    on the selected books and their quantities.
                  </p>
                  <div className="tecBtns">
                    <p>React</p>
                    <p>Bootstrap</p>
                    <p>JavaScript</p>
                    <p>Express</p>
                    <p>Node.js</p>
                    <p>MongoDB</p>
                  </div>

                  <div className="demoCodeBtns">
                    <button className="btn">
                      <a
                        href="https://my-book-lovers-shop.vercel.app/"
                        target="_blank"
                      >
                        <i className="bi bi-eye"></i>Demo
                      </a>
                    </button>
                    <button className="btn">
                      <a
                        href="https://github.com/neelamraikwar9/myBookLoversShop"
                        target="_blank"
                      >
                        <i className="bi bi-code-slash"></i>Code
                      </a>
                    </button>
                  </div>
                </div>
              </div>

              <div className="projectBox">
                <img
                  src="https://res.cloudinary.com/dltfnhclh/image/upload/v1761310235/Screenshot_2025-10-24_182014_mdb2s4.png"
                  alt="Book Readers App"
                  className="img"
                />
                <div className="projInfo">
                  <h2>Anvaya CRM Dashboard</h2>
                  <p className="aboutProj">
                    This app is designed and implemented as a full-stack CRM
                    dashboard for managing leads and sales agents. It also uses
                    Chart.js to provide visual insights into lead progress...
                  </p>
                  <div className="tecBtns">
                    <p>React</p>
                    <p>JavaScript</p>
                    <p>Express</p>
                    <p>Node.js</p>
                    <p>MongoDB</p>
                    <p>Chart.js</p>
                    <p>CSS3</p>
                  </div>

                  <div className="demoCodeBtns">
                    <button className="btn">
                      <a
                        href="https://anvaya-crm-app-azure.vercel.app/"
                        target="_blank"
                      >
                        <i
                          className="b
                      i bi-eye"
                        ></i>
                        Demo
                      </a>
                    </button>
                    <button className="btn">
                      <a
                        href="https://github.com/neelamraikwar9/AnvayaCRMApp"
                        target="_blank"
                      >
                        <i className="bi bi-code-slash"></i>Code
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="techStack">
            <h1 className="role">Tech Stack</h1>
            <p className="about">Technologies and tools I work with</p>
            <hr />

            <div className="tackStackCon">
              <div className="iconCon">
                <img src="/icons/react.png" alt="React" className="icon" />
                <p className="iconName">React</p>
              </div>

              <div className="iconCon">
                <img src="/icons/js.svg" alt="JavaScript" className="icon" />
                <p className="iconName">JavaScript</p>
              </div>

              <div className="iconCon">
                <img src="/icons/html5.png" alt="html5.png" className="icon" />
                <p className="iconName">HTML5</p>
              </div>

              <div className="iconCon">
                <img src="/icons/css3.png" alt="CSS3" className="icon" />
                <p className="iconName">CSS3</p>
              </div>

              <div className="iconCon">
                <img src="/icons/nodejs.png" alt="Node.js" className="icon" />
                <p className="iconName">Node.js</p>
              </div>

              <div className="iconCon">
                <img
                  src="/icons/express.png"
                  alt="Express"
                  className="icon expressIcon"
                />
                <p className="iconName">Express</p>
              </div>

              <div className="iconCon">
                <img
                  src="/icons/mongodb.png"
                  alt="MongoDB"
                  className="icon"
                  style={{ width: "2rem" }}
                />
                <p className="iconName">MongoDB</p>
              </div>

              {/* <div className="iconCon">
              <img src="/icons/git.png" alt="GIT" className="icon" />
              <p className="iconName">GIT</p>
            </div> */}

              <div className="iconCon">
                <img
                  src="/icons/image.png"
                  alt="GitHub"
                  className="icon gitIcon"
                />
                <p className="iconName">GitHub</p>
              </div>

              <div className="iconCon">
                <img
                  src="/icons/bootstrap5.png"
                  alt="Bootstrap"
                  className="icon"
                />
                <p className="iconName">Bootstrap</p>
              </div>

              <div className="iconCon vsIcon">
                <img src="/icons/vscode.svg" alt="VS Code" className="icon" />
                <p className="iconName">VS Code</p>
              </div>

              <div className="iconCon">
                <img
                  src="/icons/mongoose.png"
                  alt="Mongoose"
                  className="icon"
                />
                <p className="iconName">Mongoose</p>
              </div>

              <div className="iconCon">
                <img
                  src="/icons/vercel.png"
                  alt="Vercel"
                  className="icon vercelIcon"
                  style={{ height: "3rem" }}
                />
                <p className="iconName">Vercel</p>
              </div>

              <div className="iconCon">
                <img src="/icons/postman.png" alt="Postman" className="icon" />
                <h1 className="iconName">Postman</h1>
              </div>
            </div>
          </section>

          <section id="connect">
            <h1 className="role">Connect</h1>
            <p className="about">
              Let's collaborate on something amazing together
            </p>
            <hr />

            <div className="connectCon">
              <div className="connectContainer">
                <div className="connectBoxes">
                  <a href="mailto:neelam.raikwar.234303@gmail.com" target="_blank"
                    style={{ marginTop: "2rem" }}>
                    <i
                      className="bi bi-envelope-at-fill hoverStyl"
                      style={{
                        fontSize: "3.4rem",
                        margin: "2rem",
                        marginTop: "15rem",
                        color: "#f173c7ff",
                        // border: "1px solid red",
                        paddingLeft: "1rem",
                        padding: '0',
                      }}
                    ></i>
                  </a>
                  <h2 className="connHeadText">Email</h2>
                </div>
                <div>
                  <h3 className="connectext">
                    <a href="mailto:neelam.raikwar.234303@gmail.com">
                      neelam.raik9@gmail.com
                    </a>
                  </h3>
                </div>
              </div>

              <div className="connectContainer">
                <div className="connectBoxes">
                  <a
                    href="https://github.com/neelamraikwar9"
                    target="_blank"
                    style={{ marginTop: "2rem" }}
                  >
                    <i
                      className="devicon-github-original"
                      style={{
                        color: "#f173c7ff",
                        fontSize: "4rem",

                        margin: "2rem",
                        marginTop: "50rem",
                      }}
                    ></i>
                  </a>
                  <h2 className="connHeadText">GitHub</h2>
                </div>
                <div>
                  <h3 className="connectext">Follow on GitHub</h3>
                </div>
              </div>

              <div className="connectContainer">
                <div className="connectBoxes">
                  <a
                    href="https://www.linkedin.com/in/neelam-raikwar-204614250/"
                    target="_blank"
                    style={{ marginTop: "2rem" }}
                  >
                    <i
                      className="devicon-linkedin-plain colored"
                      style={{
                        color: "#f173c7ff",
                        fontSize: "3.5rem",
                        // border: "1px solid red",
                        margin: "2rem",
                        height: "4rem",
                      }}
                    ></i>
                  </a>
                  <h2 className="connHeadText">LinkedIn</h2>
                </div>
                <div>
                  <h4 className="connectext">Connect on LinkedIn</h4>
                </div>
              </div>

              <div className="connectContainer">
                <div className="connectBoxes">
                  <a
                    href="https://x.com/Neelam92004"
                    target="_blank"
                    alt="Twitter"
                    style={{ marginTop: "2rem" }}
                  >
                    <i
                      className="devicon-twitter-original"
                      style={{
                        color: "#f173c7ff",
                        fontSize: "3.5rem",
                        // border: "1px solid red",
                        margin: "2rem",
                        
                      }}
                    ></i>
                  </a>

                  <h2 className="connHeadText">Twitter</h2>
                </div>
                <h3 className="connectext" style={{margin: ""}}>Follow on Twitter</h3>
              </div>

              <div className="connectContainer">
                <div className="connectBoxes">
                  <a
                    href="https://medium.com/@neelam.raikwar.234303"
                    target="_blank"
                    alt="Twitter"
                    style={{ marginTop: "2rem" }}
                  >
                    <p
                      
                      style={{
                        color: "#f173c7ff",
                        fontSize: "3rem",
                        // border: "1px solid red",
                        margin: "2rem",
                        textDecoration: "none"
                        
                      }}
                    >Medium</p>
                  </a>

                  <h2 className="connHeadText"></h2>
                </div>
                <h3 className="connectext" style={{marginTop: "2rem"}}>Follow on Medium</h3>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footContainer">
        <div className="footerCon">
          <p>
            &copy; 2026 Neelam Raikwar - Built with using CSS3 and React.js.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
