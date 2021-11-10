import React from 'react';
import footerimage from '../../images/footerimages/footerimage.png'

const Footer = () => {
    return (
        <div className="bg-dark text-light text-center">
            <div className="d-flex  mt-4 ">
                <div className="col-md-5 mt-4 mx-3">
                    <h5> Best Drone Products</h5>
                    <p>
                        Drones are more formally known as unmanned aerial vehicles (UAVs) or unmanned aircraft systems (UASes). Essentially, a drone is a flying robot that can be remotely controlled or fly autonomously through software-controlled flight plans in their embedded systems, working in conjunction with onboard sensors and GPS                    </p>
                </div>
                <div className="mt-4 mx-5">
                    <h5>CONTACT US</h5>
                    <p><i class="far fa-envelope-open"></i> EMAIL:droneproducts@gmail.com</p>
                    <p><i class="fas fa-mobile-alt"></i> Phone:+8801871414746</p>
                    <p><i class="fas fa-map-marker-alt"></i> Address:Dhaka, Bangladesh</p>
                    <p><i class="fas fa-fax"></i> Fax:www.sayhemrahman.com</p>
                </div>
                <div className="mt-4 mx-4">
                    <h5>New Products</h5>
                    <p>Drone parts</p>
                    <p>Purchase Now</p>
                    <p>Drone</p>
                    <p>Drone price</p>

                </div>
                <div className="mt-4 mx-4">
                    <h5>COMPANY</h5>
                    <p>Latest Drone </p>
                    <p>Drone Community</p>
                    <p>Drone blogs</p>
                    <p>Drone flyzone</p>
                    <p>On Demand drone</p>
                </div>
                <div>
                    <img className="w-50 mt-5" src={footerimage} alt="" />
                </div>

            </div>
            <hr />
            <p>Created by © MD Mustafizur Rahman  All rights reserved</p>

        </div>
    );
};

export default Footer;