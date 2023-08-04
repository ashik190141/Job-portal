import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className='d-flex align-items-center justify-content-center pt-5'>
                <div className="flex gap-5 align-items-center">
                    {/* <img src={websiteImg} alt="" className="w-32 bg-white rounded-xl" /> */}
                    <p className="font font-bold fs-2 text-white">Coursify</p>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center gap-4 mt-3'>
                <FaFacebook className='me-2 text-white fs-2' />
                <FaGoogle className='me-2 text-white fs-2' />
                <FaGithub className='mr-2 text-white fs-2' />
                <FaInstagram className='mr-2 text-white fs-2' />
                <FaTwitter className='mr-2 text-white fs-2' />
            </div>
            {/* <div className='support-class mt-5'>
                <div className='text-white'>
                    <p className='font font-bold fs-3'>Top Companies Hiring</p>
                    <p>Meesho Jobs</p>
                    <p>Paytm Jobs</p>
                    <p>Vedandu Jobs</p>
                    <p>MX Player Jobs</p>
                    <p>Truemeds Jobs</p>
                </div>
                <div className='text-white'>
                    <p className='font font-bold fs-3'>Popular Collections</p>
                    <p>Video Editing Jobs</p>
                    <p>Write Content Jobs</p>
                    <p>Data Science Jobs</p>
                    <p>Startups Jobs</p>
                    <p>IOT Jobs</p>
                </div>
            </div> */}
            <div>
                
            </div>
            <div className='text-white support-class mt-3'>
                <p className='text-center' >Support:<br></br> coursify@gmail.com</p>
                <p className='text-center'>Help Line:<br></br> +88 01*********54</p>
                <p className='text-center'>Available:<br></br> 11am to 4pm</p>
            </div>
            <div className='text-white support-class mt-2'>
                <button className='font font-bold btn btn-link'>For Job Seekers</button>
                <button className='font font-bold btn btn-link'>For Companies</button>
            </div>
            <div className='text-white support-class mt-3'>
                <p>Advertising</p>
                <p>Terms and Condition</p>
                <p>Hosted by ashik190141</p>
            </div>
            <div className='text-white support-class mt-3 pb-5'>
                <p>@copyright 2023</p>
                <p>Developed by: Ahsan Mahmud Ashik</p>
            </div>
        </div>
    )
};

export default Footer;