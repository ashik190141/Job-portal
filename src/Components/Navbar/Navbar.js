import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg title-text">
        <div className="container-fluid">
          <div className='navStart'>
            <p className="navbar-brand navTitle">Coursify</p>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse navEnd" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                  Resources
                </button>
                <ul className="dropdown-menu rounded-4">
                  <li><button className="dropdown-item">Blog</button></li>
                  <li><button className="dropdown-item">Job Description</button></li>
                  <li><button className="dropdown-item">Case Studies</button></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                  Hiring Features
                </button>
                <ul className="dropdown-menu rounded-4">
                  <li><button className="dropdown-item">Trust Score</button></li>
                  <li><button className="dropdown-item">Resume score checker</button></li>
                </ul>
              </li>

              <li className="">
                <button className="nav-link">For Job Seekers</button>
              </li>
              <li className="">
                <button className="nav-link">For Companies</button>
              </li>
              <li className="">
                <button type="button" className="btn btn-light title-text">Log in</button>
              </li>
              <li className="">
                <button type="button" className="btn btn-primary text-white">Sign Up</button>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;