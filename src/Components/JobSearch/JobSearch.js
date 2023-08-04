import './JobSearch.css'

const JobSearch = () => {
    return (
        <div className="jobSearch">
            <h2 className="text-center font font-black mb-5 fs-1">Search Your Job</h2>
            <form className="d-flex flex-column justify-content-start g-3 p-4">
                <div className="d-flex align-items-center align-items-start justify-content-center">
                    <input type="text" className="form-control job-type mb-5" id="staticEmail2" placeholder="Job Type"/>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <input type="text" className="form-control job-type mb-5" id="inputPassword2" placeholder="Job Location"/>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary mb-3 w-50">Search</button>
                </div>
            </form>
        </div>
    )
};

export default JobSearch;