import React from 'react';
import { Accordion } from 'react-bootstrap';
import logoquestions from '../../images/FAQimage/faqimage1.jpg';

const FAQ = () => {
    return (
        <div className="row d-flex mt-5">
            <h1 className="text-warning mt-4 mb-5"> Frequently Ask Questions</h1>
            <div className="col-md-5">
                <img className="logoquestions w-100 mx-2" src={logoquestions} alt="" />
            </div>

            <div className="col-md-7">


                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>About Drone Products?</Accordion.Header>
                        <Accordion.Body>Drones are equipped with a GPS module that allows them to know their location relative to a network of orbiting satellites. Connecting to signals from these satellites allows the drone to perform functions such as position hold, autonomous flight, return to home, and waypoint navigation.


                        </Accordion.Body>


                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What is The purpose of Drone Products?</Accordion.Header>
                        <Accordion.Body>
                            While drones serve a variety of purposes, such as recreational, photography, commercial and military, their two basic functions are flight and navigation. To achieve flight, drones consist of a power source, such as battery or fuel, rotors, propellers and a frame.

                        </Accordion.Body>
                    </Accordion.Item>



                    <Accordion.Item eventKey="2">
                        <Accordion.Header> Drone Product Delivery Option?</Accordion.Header>
                        <Accordion.Body>
                            <h1> Online payment </h1>
                            <h1> Offline payment </h1>
                            <h1> Qurier Service </h1>
                            <h1> Emergency Delivery </h1>
                            <h1> Drone Bangladesh Community </h1>
                            <h1> Drone Uses  </h1>
                            <h1> Drone Air Security  </h1>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header> Our Speciality about our?</Accordion.Header>
                        <Accordion.Body>
                            The latest drones from DJI, Walkera, Yuneec and other manufacturers now include cameras, which can shoot film in 4k video and can take 12 megapixel stills. The earlier drones used cameras, which were not fully suitable for aerial filming. These aerial shots had barrel distortion because of the wide angle lens                                              </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default FAQ;