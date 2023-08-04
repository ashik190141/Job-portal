import './Task.css'

const Task = () => {
    return (
        <div className='displayTasks'>
            <div className='full-task mt-5'>
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
            </div>
        </div>
    )
};

export default Task;