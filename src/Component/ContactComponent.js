import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'
export default class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                    <div className="row row-content">
                        <div className="col-12">
                            <h3>Location Information</h3>
                        </div>
                        <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                                abc, def ghi knl Road<br />
                            anb erf yhg, Delhi<br />
                            India<br />
                                <i className="fa fa-phone"></i>: +91 1234 5678 1234<br />
                                <i className="fa fa-fax"></i>: +91 8765 4321 1234<br />
                                <i className="fa fa-envelope"></i>: <a href="mailto:abc@def.net">abc@def.net</a>
                            </address>
                        </div>
                        <div className="col-12 col-sm-6 offset-sm-1">
                            <h5>Map of our Location</h5>
                        </div>
                        <div className="col-12 col-sm-11 offset-sm-1">
                            <div className="btn-group" role="group">
                                <a role="button" className="btn btn-primary" href="tel:+912312345678"><i className="fa fa-phone"></i> Call</a>
                                <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                                <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <form method="GET">
                            <div className="form-group row">
                                <label for="firstname" className="col-md-2 col-form-label">First Name</label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control" id="firstname" name="firstname" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="lastname" className="col-md-2 col-form-label">Last Name</label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control" id="lastname" name="lastname" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="telnum" className="col-12 col-md-2 col-form-label">Contact Tel.</label>
                                <div className="col-5 col-md-3">
                                    <input type="tel" className="form-control" id="areacode" name="areacode" placeholder="Area code" />
                                </div>
                                <div className="col-7 col-md-7">
                                    <input type="tel" className="form-control" id="telnum" name="telnum" placeholder="Tel. number" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="emailid" className="col-md-2 col-form-label">Email</label>
                                <div className="col-md-10">
                                    <input type="email" className="form-control" id="emailid" name="emailid" placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-6 offset-md-2">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" name="approve" id="approve" value="" />
                                        <label className="form-check-label" for="approve">
                                            <strong>May we contact you?</strong>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-3 offset-md-1">
                                    <select className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="feedback" className="col-md-2 col-form-label">Your Feedback</label>
                                <div className="col-md-10">
                                    <textarea className="form-control" id="feedback" name="feedback" rows="12"></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="offset-md-2 col-md-10">
                                    <button type="submit" className="btn btn-primary">Send Feedback</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
