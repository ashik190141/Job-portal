import './ContactUs.css';
import contactImage from '../../images/Contact_us_icons.webp';

const ContactUs = () => {
    return (
        <div className='contact'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-6'>
                    <img src={contactImage} class="img-fluid rounded-start" alt="..." />
                </div>
                <div className='col-12 col-md-6'>
                <h2 className='font font-size font-bold'>Contact Us</h2>
                    <form class="row g-3 others-font contact-form mt-5">
                        <div class="col-12 col-md-6 fs-3">
                            <input type="text" placeholder='First Name' class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-12 col-md-6">
                            <input type="text" placeholder='Last Name' class="form-control" id="inputPassword4" />
                        </div>
                        <div class="col-12">
                            <input type="email" placeholder='Email' class="form-control" id="inputAddress" />
                        </div>
                        <div class="col-12">
                            <textarea type="text" placeholder='Your Message' class="form-control height" id="inputAddress" />
                        </div>
                        <div class="col-12 mt-5 d-flex align-items-start  ">
                            <button type="submit" class="btn btn-warning w-25 mb-10">Send</button>
                        </div>
                    </form>
                </div>

            </div>
           
        </div>
    )
};

export default ContactUs;