import { useEffect } from 'react';
import { useState } from 'react';
import './Companies.css';

const Companies = () => {
    const [companies, setCompanies] = useState([]);
    useEffect(() => {
        fetch('/company.json')
            .then(res => res.json())
            .then(data => setCompanies(data));
    },[])
    return (
        <div>
            <p className='fs-1 font font-bold text-center mb-5 mt-5'>Top Companies</p>
            <div className='companies'>
            {
                companies.map(company => <div key={company.id} className="d-flex gap-3 align-items-center justify-content-center">
                    <div>
                        <img src={company.Image} alt="" className='company-img'/>
                    </div>
                    {/* <div>
                        <p className='font font-bold'>{company.Name}</p>
                    </div> */}
                </div>)
            }
            </div>
        </div>
    )
};

export default Companies;