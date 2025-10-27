import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "devicon/devicon.min.css";

function App() {
  return (
    <main className="mainContainer">
      <nav className="navContainer">
        {/* <ul className="ulOContainer"> */}
        {/* <li className="liStyl">
            <a href="" className="liO1Text">
              Neelam Raikwar
            </a>
          </li> */}
        <li className="liStyl">
          <a href="" className="liOText portfolio">
            Portfolio
          </a>
        </li>
        {/* </ul> */}

        <ul className="ulTContainer">   
          <li className="liStyl">
            <a href="#projects" className="liTText">
              Projects
            </a>
          </li>
          <li className="liStyl tecStack">
            <a href="#techStack" className="liTText">
              Tech Stack
            </a>
          </li>
          <li className="liStyl">
            <a href="#connect" className="liTText">
              Connect
            </a>
          </li>
        </ul>
      </nav>

      <div className="wholeContainer">
        <div className="introCon">
          <p className="name">Hi, I am Neelam Raikwar</p>
          <h1 className="role">
            The <span>Full Stack Developer</span>
          </h1>
          <p className="about">
            {" "}
            An enthusiastic full-stack developer creating effective digital
            websites with modern technologies. Specializing in React,
            Node.js, and MongoDB to build scalable and user-centered
            applications.
          </p>

          <div className="btnContainer">
            <button className="button">Contact Me</button>
            <button className="button">Resume</button>
          </div>
        </div>

        <section id="projects">
          <h1 className="role">Projects</h1>
          <p className="about">
            Building solutions that solve real-world problems
          </p>
          <hr/>

          <div className="projectCont">
            <div className="projectBox">
              <img
                src="https://res.cloudinary.com/dltfnhclh/image/upload/v1761305967/Screenshot_2025-10-24_170716_vabueg.png"
                alt="Book Readers App"
                className="img"
              />
              <div className="projInfo">
                <h2>Book Readers</h2>
                <p className="aboutProj">
                  A modern e-commerce web for buying books with the feature add to cart, wishlist and detail page, to filter books by categories, price, ratings and sorting option with price. Created with React.js, Bootstrap, MongoDB, Express, Node.js
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
                  <a href="https://my-book-lovers-shop.vercel.app/" target="_blank">
                    <i class="bi bi-eye"></i>Demo
                  </a>
                  </button>
                  <button className="btn">
                  <a href="https://github.com/neelamraikwar9/myBookLoversShop" target="_blank">
                    <i class="bi bi-code-slash"></i></a>Code
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
                   A CRM app to manage Leads with Sales Agent. It provide a best user performance. It has a feature to track leads by statuses and it provides add new lead and sales agents with the edit leads option and the comments.  
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
                    <i class="bi bi-eye"></i>Demo
                  </button>
                  <button className="btn">
                    <i class="bi bi-code-slash"></i>Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>


        
        <section id="techStack">
        <h1 className="role">Tech Stack</h1>
        <p className="about">Technologies and tools I work with</p>
        <hr/>

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
            <img
              src="/icons/html5.png"
              alt="html5.png"
              className="icon"
            />
            <p className="iconName">HTML5</p>
          </div>

          <div className="iconCon">
            <img src="/icons/css3.png" alt="CSS3" className="icon" />
            <p className="iconName">CSS3</p>
          </div>

          <div className="iconCon">
            <img
              src="/icons/nodejs.png"
              alt="Node.js"
              className="icon"
            />
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

          <div className="iconCon">
            <img src="/icons/git.png" alt="GIT" className="icon" />
            <p className="iconName">GIT</p>
          </div>

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
            <img
              src="/icons/vscode.svg"
              alt="VS Code"
              className="icon"
            />
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
            <img
              src="/icons/postman.png"
              alt="Postman"
              className="icon"
            />
            <h1 className="iconName">Postman</h1>
          </div>
        </div>
        </section>


        <section id="connect">
        <h1 className="role">Connect</h1>
        <p className="about">Let's collaborate on something amazing together</p>
        <hr />
        
        <div className="connectCon">

        <div className="connectContainer">
          <div className="connectBoxes">
          <img src="/socialIcons/email2.png" alt="Email Box" style={{width: '4rem', height: '4rem', margin: '2rem'}}/>
            <h1>Email</h1>
          </div>
          <div>
              <h2 className="connectext"><a href="neelam.raikwar.234303@gmail.com">neelam.raikwar.234303@gmail.com</a></h2>
            </div>
          </div>

          <div className="connectContainer">
            <div className="connectBoxes">
            <a href="https://github.com/neelamraikwar9" target="_blank" style={{marginTop: '2rem'}}>
              <i
                class="devicon-github-original"
                style={{
                  color: "#f173c7ff",
                  fontSize: "4rem",
                  // border: "1px solid red",
                  margin: "2rem",
                  marginTop: '50rem'
                  
                }}
              ></i>
              </a>
              <h1>GitHub</h1>
            </div>
            <div>
              <h3 className="connectext">Follow on GitHub</h3>
            </div>
          </div>




          <div className="connectContainer">
          <div className="connectBoxes">
          <a href="https://www.linkedin.com/in/neelam-raikwar-204614250/" target="_blank"  style={{marginTop: '2rem'}}>
            <i
              class="devicon-linkedin-plain colored"
              style={{
                color: "#f173c7ff",
                fontSize: "4rem",
                // border: "1px solid red",
                margin: "2rem",
                height: "4rem",
              }}
            ></i>
            </a>
            <h1>LinkedIn</h1>
            </div>
            <div>
              <h3 className="connectext">Connect on LinkedIn</h3>
            </div>
          </div>








           <div className="connectContainer">
          <div className="connectBoxes">
          <a href="https://x.com/Neelam92004" alt="Twitter"  style={{marginTop: '2rem'}}>
            <i
              class="devicon-twitter-original"
              style={{
                color: "#f173c7ff",
                fontSize: "4rem",
                // border: "1px solid red",
                margin: "2rem",
                height: "4rem",
              }}
            ></i>
            </a>
            
            <h1>Twitter</h1>
          </div>
          <h2 className="connectext">Follow on Twitter</h2>
          </div>
        </div>
        </section>
      </div>
      
      

      <footer className="footContainer">
      <div className="footerCon">
        <p>&copy; 2025 Neelam Raikwar • All right reserved</p>
        <p><strong>Built with using CSS3 and React.js</strong></p>
        <p>Learning full stack development at neog.camp🩷</p>
      </div>
      </footer>

    </main>

    
  );
}

export default App;
