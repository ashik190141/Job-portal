import './Banner.css'
import img1 from '../../images/resume.png';
import img2 from '../../images/find_job.png';
import img3 from '../../images/dream_job.jpeg'

const Banner = () => {
    return (
        <div className="backGround">
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <div className='font font-bold banner-title mb-3'>Find Your Tech Job</div>
                <div className='font fs-4 banner-des-width text-center'>
                    Look beyond the obvious. Use Coursify to easily get discovered by awesome companies and get referred to job positions very few know about.
                </div>
            </div>
            <div className='mt-4 d-flex align-items-center justify-content-center'>
                <button className='btn btn-dark me-5'>Find Your Next Job</button>
                <button className='btn btn-dark'>Find Your Next Hire</button>
            </div>
            <div className='banner-card mx-4 mt-5 d-flex flex-col flex-md-row gap-5 align-items-center justify-content-center'>
                <div className="d-flex flex-column banner-card-bg  align-items-center justify-content-center">
                    <img src={img1} className="card-img mb-2" alt="..."/>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <button className="btn btn-outline-dark font fs-4">Build Resume</button>
                        <p className='font w-75 mt-4 text-center fs-5'>
                            Once you build resume, we showcase you to leading Indian technology startups
                        </p>
                    </div>
                </div>
                <div className="banner-card-bg d-flex flex-column align-items-center justify-content-center ">
                    <img src={img2} className="card-img mb-2" alt="..."/>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <button className="btn btn-outline-dark font fs-4">Find Jobs</button>
                        <p className='font w-75 mt-4 text-center fs-5'>
                            You start sending interview requests and show your skill. Talk to only the ones you like.
                        </p>
                    </div>
                </div>
                <div className="banner-card-bg d-flex flex-column align-items-center justify-content-center">
                    <img src={img3} className="card-img mb-2" alt="..."/>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <button className="btn btn-outline-dark font fs-4">Get Dream Job</button>
                        <p className='font w-75 mt-4 text-center fs-5'>
                            After Interview you get your dream job and make your life more beautiful
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Banner;