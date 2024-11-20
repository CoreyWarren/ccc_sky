import logo from './logo.svg';
import './css/styles.css';
import happyPhoto from './assets/happy-photo.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';



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
                <i className="bi bi-clipboard" style={{ fontSize: "64px", color: "white" }}></i>
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
          icon: (<i className="bi bi-clipboard" style={{ fontSize: "28px", color: "white" }}></i>),
          title: "Counseling Services",
          description: "Tailored support to help you navigate life's challenges and achieve clarity.",
          linkText: "Learn More",
          link: "#!"
        },
        {
          icon: (<i className="bi bi-prescription" style={{ fontSize: "28px", color: "white" }}></i>),
          title: "Medication-Assisted Treatment (MAT) Services",
          description: "Professional advice to elevate your business and reach new heights.",
          linkText: "Get Started",
          link: "#!"
        },
        {
          icon: (<i className="bi bi-journal" style={{ fontSize: "28px", color: "white" }}></i>),
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

