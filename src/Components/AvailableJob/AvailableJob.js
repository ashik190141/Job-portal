import './AvailableJob.css'

const AvailableJob = () => {
    return (
        <div className='banner-card'>
            <div className="border-top  border-bottom text-center banner-font padding">
                <p className='text-primary fs-1 font font-bold'>130k +</p>
                <p className='text-primary fs-3 font font-bold'>Tech Jobs</p>
            </div>
            <div className="border text-center banner-font padding">
                <p className='text-danger  fs-1 font font-bold'>8M +</p>
                <p className='text-danger fs-3 font font-bold'>Candidates</p>
            </div>
            <div className="border-top text-center banner-font border-bottom padding">
                <p className='text-success fs-1 font'>30k +</p>
                <p className='text-success fs-3 font'>Companies</p>
            </div>
        </div>
    )
};

export default AvailableJob;