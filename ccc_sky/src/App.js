import logo from './logo.svg';
import './css/styles.css';
import happyPhoto from './assets/happy-photo.jpeg';

function App() {
  return (
    <>
      {/* Responsive navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
          <a className="navbar-brand" href="#!">Cloud Care Counseling</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-dark py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-6">
              <div className="text-center my-5">
                
                <h1 className="display-3 fw-bolder text-white mb-3">
                  Cloud Care Counseling
                </h1>
                <h1 className="mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="white"
                  className="bi bi-clipboard"
                  viewBox="0 0 16 16"
                  >
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                  </svg>

                </h1>
                <h1 className="display-6 fw-bolder text-white mb-2">
                  Rebuilding Lives. <br></br> Restoring Hope.
                </h1>
                <p className="lead text-white-50 mb-4">
                  Empowering inviduals to combat substance use. <br></br>
                  Let's take the first step together!
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                  <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Learn More</a>
                  <a className="btn btn-outline-light btn-lg px-4" href="#contact">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

{/* Hero Section */}
<section className="py-5 bg-light">
  <div className="container px-5 my-5">
    <div
      className="position-relative overflow-hidden rounded-3"
      style={{
        backgroundImage: `url(${happyPhoto})`, // Dynamically resolved
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
      }}
    >
      <div className="position-absolute top-50 start-50 translate-middle text-center text-white bg-dark bg-opacity-50 rounded p-4">
        <h2 className="fw-bold">A happier life and community awaits</h2>
        <p className="lead mb-4">
          Together, we can create brighter futures for you and your loved ones.
        </p>
      </div>
    </div>
  </div>
</section>


{/* Features section */}
<section className="py-5 border-bottom" id="features">
  <div className="container px-5 my-5">
    <div className="row gx-5">
      {/* Feature Cards */}
      {[
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-clipboard"
              viewBox="0 0 16 16"
            >
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
            </svg>
          ),
          title: "Counseling Services",
          description: "Tailored support to help you navigate life's challenges and achieve clarity.",
          linkText: "Learn More",
          link: "#!"
        },
        {
          icon: (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              fill="currentColor" 
              class="bi bi-prescription" 
              viewBox="0 0 16 16"
            >
              <path d="M5.5 6a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V9h.293l2 2-1.147 1.146a.5.5 0 0 0 .708.708L9 11.707l1.146 1.147a.5.5 0 0 0 .708-.708L9.707 11l1.147-1.146a.5.5 0 0 0-.708-.708L9 10.293 7.695 8.987A1.5 1.5 0 0 0 7.5 6zM6 7h1.5a.5.5 0 0 1 0 1H6z"/>
              <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v10.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 14.5V4a1 1 0 0 1-1-1zm2 3v10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V4zM3 3h10V1H3z"/>
          </svg>
        ),
          title: "Medication-Assisted Treatment (MAT) Services",
          description: "Professional advice to elevate your business and reach new heights.",
          linkText: "Get Started",
          link: "#!"
        },
        {
          icon: (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              fill="currentColor" 
              class="bi bi-journal" 
              viewBox="0 0 16 16"
            >
              <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
              <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
        </svg>
          ),
          title: "Education Services",
          description: "Custom solutions designed to meet your technical and strategic goals.",
          linkText: "Explore Now",
          link: "#!"
        }
      ].map((card, index) => (
        <div key={index} className="col-lg-4 mb-5 mb-lg-0">
          <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
            {card.icon}
          </div>
          <h2 className="h4 fw-bolder">{card.title}</h2>
          <p>{card.description}</p>
          <a className="text-decoration-none" href={card.link}>
            {card.linkText} <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      ))}
    </div>
  </div>
</section>





      {/* Footer */}
      <footer className="py-5 bg-dark">
        <div className="container px-5">
          <p className="m-0 text-center text-white">Cloud Care Counseling &copy; 2024</p>
          <p className="m-0 text-center text-white">Powered by Core Codex</p>
          <p className="m-0 text-center text-white">Core Codex: Original. Powerful. Websites.</p>
        </div>
      </footer>
    </>
  );
}

export default App;

