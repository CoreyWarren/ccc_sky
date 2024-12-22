import happyPhoto from './assets/happyPhoto1.jpeg';
import happyPhoto2 from './assets/happyPhoto2.jpg';
import logo from './assets/frontpagelogo.png';
import cloud_hd_bg from './assets/clouds_hd_bg.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/styles.css';
import InteractiveTabs from './components/tabPopUp';


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
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

{/* Header Section */}
<section className="header-section" id="home">
  <div className="header-box">
    <h1 className="display-3 fw-bolder mb-2">Cloud Care Counseling</h1>
    <img className="ccclogo mb-0" src={logo} alt="logo" />
    <h2 className="display-6 fw-bolder mb-2">Rebuilding Lives. Restoring Hope.</h2>
    <p className="lead mb-3 strong">
      Empowering individuals to combat substance use. <br />
      Let's take the first step together!
    </p>
    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
      <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#learn_more">Learn More</a>
      <a className="btn btn-outline-light btn-lg px-4" href="#contact">Contact</a>
    </div>
  </div>
</section>


{/* Hero Section */}
<section className="py-5 bg-light" id="hero">
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

{/* About/Mission Statement Section:
The mission of Cloud Care Counseling is to empower individuals
and communities to combat substance use disorder by delivering
compassionate, evidence-based services tailored to the 
unique needs of each client. Our purpose is to align our
care with the principles of harm reduction, trauma-informed
support, and holistic recovery.

We are committed to providing focused attention to addiction
through personalized one-on-one counseling, group counseling,
and Medication-Assisted Treatment (MAT) services. By
combining therapeutic support with evidence-based medication
options, we address both the physical and emotional aspects
of recovery.

Additionally, we prioritize equipping staff and clients with
critical education and resources, including overdose
prevention tools, access to life-saving interventions like
naloxone, and connections to NA/AA meetings. We also foster
peer-to-peer mentorship by introducing clients to individuals
who have successfully overcome addiction.

Through these comprehensive services, Cloud Care Counseling
strives to create a safe, supportive, and inclusive
environment where individuals can achieve long-term recovery,
regain their independence, and lead fulfilling lives.

The purpose of Cloud Care Counseling is to provide services
that seamlessly align with the mission and operations of 
your transitional homes by supporting those in need through
evidence-based, compassionate care. Our goal is to become
an extension of your efforts, offering added resources
and support that not only enhance the services you
already provide but also create a potential additional 
revenue stream.

By addressing substance use disorder through counseling,
Medication-Assisted Treatment (MAT), overdose prevention
resources, and peer support, we aim to strengthen your
impact within the community while highlighting your
organization’s commitment to making a meaningful difference.
Together, we can build a stronger, healthier community 
that uplifts and empowers individuals on their path to 
recovery.
*/}
<section className="py-5" id="about">
  <div className="container px-5 my-5">
    <div className="row gx-5 align-items-center">
      <div className="col-lg-6">
        <h2 className="fw-bolder">About Us</h2>
        <p className="lead mb-4">
          The mission of Cloud Care Counseling is to empower individuals and communities to combat substance use disorder by delivering compassionate, evidence-based services tailored to the unique needs of each client. Our purpose is to align our care with the principles of harm reduction, trauma-informed support, and holistic recovery.
        </p>
        <p className="lead mb-4">
          We are committed to providing focused attention to addiction through personalized one-on-one counseling and group counseling services. Through therapeutic support, we address the overarching emotional aspects of recovery.
        </p>
        <p className="lead mb-4">
          Additionally, we prioritize equipping staff and clients with critical education and resources, including overdose prevention tools, access to life-saving interventions like naloxone, and connections to NA/AA meetings. We also foster peer-to-peer mentorship by introducing clients to individuals who have successfully overcome addiction.
        </p>
        <p className="lead mb-4">
          Through these comprehensive services, Cloud Care Counseling strives to create a safe, supportive, and inclusive environment where individuals can achieve long-term recovery, regain their independence, and lead fulfilling lives.
        </p>
      </div>
      <div className="col-lg-6">
        <div
          className="position-relative overflow-hidden rounded-3"
          style={{
            backgroundImage: `url(${happyPhoto2})`, // Dynamically resolved
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
          }}
        ></div>
      </div>
    </div>
  </div>

</section>

{/* Interactive Tabs Section */}
<InteractiveTabs />


{/* Contact Us Section */}
<section id="contact" className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center fw-bold mb-4">Contact Us</h2>
    <p className="text-center mb-5">
      Have questions or need support? Fill out the form below, and we’ll get back to you!
    </p>

    <div className="row justify-content-center">
      <div className="col-lg-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const email = e.target.email.value;
            const message = e.target.message.value;

            // Build a properly formatted mailto link
            const mailtoLink = `mailto:info@cloudcarecounseling.com?subject=New%20Inquiry%20from%20${encodeURIComponent(
              name
            )}&body=${encodeURIComponent(
              `Name:\n${name}\n\nEmail:\n${email}\n\nMessage:\n${message}`
            )}`;

            // Open the user's email client
            window.location.href = mailtoLink;
          }}
          className="p-4 border rounded shadow-sm bg-white"
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Your Full Name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Your Email Address"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary px-4">
              Send Message
            </button>
          </div>
        </form>
      </div>
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

