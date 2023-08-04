import './JobFeatures.css'
import software_engineer from '../../images/software_engineer.jpg';
import data_analyst from '../../images/data_analyst_1.jpg';
import web_developer from '../../images/web_developer.jpg';

const JobFeatures = () => {
    return (
        <div>
            <div className="jobFeatures">
                <h2 className="font font-bold text-center mb-5">High Demanded Job Positions</h2>
                <div>
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <div className='features-des'>
                            <div className='features'>
                                <div>
                                    <img src={software_engineer} alt="" className='feature-img' />
                                </div>
                                <div className='w-100'>
                                    <p className='font font-bold fs-3'>Software Engineer</p>
                                    <p className='font font-bold fs-4'>10k + Companies</p>
                                    <div className='d-flex gap-2'>
                                        <p className='bg-dark w-50 text-white text-center rounded-2 pt-2 pb-2 me-3 font-bold'>Onsite</p>
                                        <p className='bg-dark w-50 text-white text-center rounded-2 pt-2 pb-2 font-bold'>Remote</p>
                                    </div>
                                    {/* <div className='mt-2 d-flex gap-2'>
                                        <p className='bg-warning w-50 text-black text-center rounded-2 pt-2 pb-2 me-3 font'>Internship</p>
                                        <p className='bg-warning w-50 text-black text-center rounded-2 pt-2 pb-2 me-3 font'>Full Time</p>
                                    </div> */}
                                    <p className='font font-bold fs-4 mt-2'>Salary: 30k - 35k</p>
                                </div>
                            </div>
                            {/* <div className='d-flex justify-content-end mt-3'>
                                <button type="button" class="btn btn-outline-danger">Apply Now</button>
                            </div> */}
                        </div>

                        <div className='features-des mt-5'>
                            <div className='features'>
                                <div>
                                    <img src={data_analyst} alt="" className='feature-img' />
                                </div>
                                <div className='w-100'>
                                    <p className='font font-bold fs-3'>Full-Stack Developer</p>
                                    <p className='font font-bold fs-4'>15k + Companies</p>
                                    <div className='d-flex gap-2'>
                                        <p className='bg-dark w-50 text-white text-center rounded-2 pt-2 pb-2 me-3 font-bold'>Onsite</p>
                                        <p className='bg-dark w-50 text-white text-center rounded-2 pt-2 pb-2 font-bold'>Remote</p>
                                    </div>
                                    {/* <div className='mt-2 d-flex gap-2'>
                                        <p className='bg-warning w-50 text-black text-center rounded-2 pt-2 pb-2 me-3 font'>Internship</p>
                                        <p className='bg-warning w-50 text-black text-center rounded-2 pt-2 pb-2 me-3 font'>Full Time</p>
                                    </div> */}
                                    <p className='font font-bold fs-4 mt-2'>Salary: 40k - 55k</p>
                                </div>
                            </div>
                            {/* <div className='d-flex justify-content-end mt-3'>
                                <button type="button" class="btn btn-outline-danger">Apply Now</button>
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
            {/* For Window */}
            <div className='displayWindows'>
                <h2 className="font font-black text-center mb-5">High Demanded Job Positions</h2>
                <div className='ps-5 pe-5'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className="card mb-5">
                                <div className="row g-0 d-flex align-items-center">
                                    <div className="col-md-4">
                                        <img src={software_engineer} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8 d-flex align-items-center">
                                        <div className="card-body">
                                            <h5 className="card-title font font-bold fs-3">Software Engineer</h5>
                                            <p className='font font-bold fs-4'>10k + Companies</p>
                                            <div className='d-flex gap-2'>
                                                <p className='bg-dark ps-4 pe-4 pt-2 pb-2 text-white text-center rounded-2 font-bold'>Onsite</p>
                                                <p className='bg-dark ps-4 pe-4 pt-2 pb-2 text-white text-center rounded-2 font-bold'>Remote</p>
                                            </div>
                                            <div className='mt-2 d-flex gap-2'>
                                                <p className='bg-warning text-black text-center rounded-2 font ps-4 pe-4 pt-2 pb-2'>Internship</p>
                                                <p className='bg-warning text-black text-center rounded-2 font ps-4 pe-4 pt-2 pb-2'>Full Time</p>
                                                <p className='bg-warning text-black text-center rounded-2 font ps-4 pe-4 pt-2 pb-2'>Part Time</p>
                                            </div>
                                            <p className='font font-bold fs-4 mt-2'>Salary: 30k - 35k</p>
                                        </div>
                                        {/* <div className='card-body'>
                                    <div className='task'>
                                        <div className='font font-bold fs-3'>For Companies</div>
                                        <div>
                                            <li>Customized Job Descriptions</li>
                                            <li>Technology Tags and Filtering</li>
                                            <li>Developer Profiles and Portfolios</li>
                                            <li>Skills Assessment</li>
                                            <li>Remote Work Opportunities</li>
                                            <li>Company Culture and Values</li>
                                            <li>Interview Scheduling</li>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='task'>
                                        <div className='font font-bold fs-3'>For Job Seekers</div>
                                        <div>
                                            <li>Customized Job Search</li>
                                            <li>Developer Profiles and Portfolios</li>
                                            <li>Job Matching and Recommendations</li>
                                            <li>Skills Assessment and Coding Challenges</li>
                                            <li>Remote Work Filters</li>
                                            <li>Job Application Tracking</li>
                                            <li>Interview Preparation Resources</li>
                                        </div>
                                    </div>
                                </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6'></div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6'>
                        </div>
                        <div className='col-sm-6'>
                            <div className="card mb-5">
                                <div className="row g-0 d-flex align-items-center">
                                    <div className="col-md-4">
                                        <img src={data_analyst} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8 d-flex align-items-center">
                                        <div className="card-body">
                                            <h5 className="card-title font font-bold fs-3">Data Analyst</h5>
                                            <p className='font font-bold fs-4'>5k + Companies</p>
                                            <div className='d-flex gap-2'>
                                                <p className='bg-dark ps-4 pe-4 pt-2 pb-2 text-white text-center rounded-2 font-bold'>Onsite</p>
                                                <p className='bg-dark ps-4 pe-4 pt-2 pb-2 text-white text-center rounded-2 font-bold'>Remote</p>
                                            </div>
                                            <div className='mt-2 d-flex gap-2'>
                                                <p className='bg-warning text-black text-center rounded-2 font ps-4 pe-4 pt-2 pb-2'>Internship</p>
                                                <p className='bg-warning text-black text-center rounded-2 font ps-4 pe-4 pt-2 pb-2'>Full Time</p>
                                                <p className='bg-warning text-black text-center rounded-2 font ps-4 pe-4 pt-2 pb-2'>Part Time</p>
                                            </div>
                                            <p className='font font-bold fs-4 mt-2'>Salary: 40k - 45k</p>
                                        </div>
                                        {/* <div className='card-body'>
                                    <div className='task'>
                                        <div className='font font-bold fs-3'>For Companies</div>
                                        <div>
                                            <li>Customized Job Descriptions</li>
                                            <li>Data Visualization Portfolio</li>
                                            <li>Remote Work Opportunities</li>
                                            <li>Company Culture and Valuest</li>
                                            <li>Data Analyst Profiles</li>
                                            <li>Real-Time Chat Support</li>
                                            <li>Interview Scheduling</li>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='task'>
                                        <div className='font font-bold fs-3'>For Job Seekers</div>
                                        <div>
                                            <li>Customized Job Search</li>
                                            <li>Skills Assessment and Data Challenges</li>
                                            <li>Job Matching and Recommendations</li>
                                            <li>Skills Assessment and Coding Challenges</li>
                                            <li>Remote Work Filters</li>
                                            <li>Job Application Tracking</li>
                                            <li>Interview Preparation Resources</li>
                                        </div>
                                    </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6'>
                        <div className="card mb-3">
                        <div className="row g-0 d-flex align-items-center">
                            <div className="col-md-4">
                                <img src={web_developer} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8 d-flex align-items-center">
                                <div className="card-body">
                                    <h5 className="card-title font font-bold fs-3">Web Developer</h5>
                                    <p className='font font-bold fs-4'>15k + Companies</p>
                                    <div className='d-flex gap-2'>
                                        <p className='bg-dark ps-4 pe-4 pt-2 pb-2 text-white text-center rounded-2 font-bold'>Onsite</p>
                                        <p className='bg-dark ps-4 pe-4 pt-2 pb-2 text-white text-center rounded-2 font-bold'>Remote</p>
                                    </div>
                                    <div className='mt-2 d-flex gap-2'>
                                        <p className='bg-warning text-black text-center rounded-2 font ps-4 pe-4 pt-2 pb-2'>Internship</p>
                                        <p className='bg-warning text-black text-center rounded-2 font ps-4 pe-4 pt-2 pb-2'>Full Time</p>
                                        <p className='bg-warning text-black text-center rounded-2 font ps-4 pe-4 pt-2 pb-2'>Part Time</p>
                                    </div>
                                    <p className='font font-bold fs-4 mt-2'>Salary: 20k - 35k</p>
                                </div>
                                {/* <div className='card-body'>
                                    <div className='task'>
                                        <div className='font font-bold fs-3'>For Companies</div>
                                        <div>
                                            <li>Customized Job Descriptions</li>
                                            <li>Data Visualization Portfolio</li>
                                            <li>Remote Work Opportunities</li>
                                            <li>Company Culture and Valuest</li>
                                            <li>Data Analyst Profiles</li>
                                            <li>Real-Time Chat Support</li>
                                            <li>Interview Scheduling</li>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='task'>
                                        <div className='font font-bold fs-3'>For Job Seekers</div>
                                        <div>
                                            <li>Customized Job Search</li>
                                            <li>Skills Assessment and Data Challenges</li>
                                            <li>Job Matching and Recommendations</li>
                                            <li>Skills Assessment and Coding Challenges</li>
                                            <li>Remote Work Filters</li>
                                            <li>Job Application Tracking</li>
                                            <li>Interview Preparation Resources</li>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                        </div>
                        <div className='col-sm-6'>
                        </div>
                    </div>  



                    
                </div>
            </div>
        </div>
    )
};

export default JobFeatures;