import React from 'react';
import './ContactUs.css';

function ContactUs() {
    return (
        <section className="contact">
            <div className="content">
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div >
                <div>
                    <div><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                    <div>
                        <h3>Address</h3>
                        <p>Dergaon, Danichapori, 123-street</p>
                    </div>
                </div>
                <div>
                    <div><i class="fa fa-phone" aria-hidden="true"></i></div>
                    <div>
                        <h3>Phone</h3>
                        <p>0123456789</p>
                    </div>
                </div>
                <div>
                    <div><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
                    <div>
                        <h3>Email</h3>
                        <p>user@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ContactUs;

