import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'
export default class AboutComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>About Us</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <h1 className="text-center font-weight-bold">We are reimagining learning so that everyone can dare to dream, and create their own paths to follow their passions</h1><br /> <br />
                    <h2 className="text-center font-weight-bold text-danger">OUR STORY</h2><br />
                    <h4 className="text-secondary">Back in 1995, Naveen joined a small playschool his mother founded, called Headstart Nursery and Primary School. Soon, Raaji joined hands. What started out as small trials in classrooms there led to the school growing into Headstart Learning Centre, India’s first Ashoka Changemaker school.</h4><br /><br />
                    <h4 className="text-secondary">The school they founded bloomed into a social incubation centre for new initiatives. And, over the years, the incubation centre has nurtured numerous ventures until each became a market facing business. Naveen and Raaji spent the better part of the next two decades evaluating what is taught and learnt in class rooms across the country and brought their best new ideas in reimagining education for social transformation.</h4><br /><br />
                    <h4 className="text-secondary">It is their conviction that such transformation must happen because of the education we impart our children and young adults and not in spite of it, that led to the development of Beyond 8. Beyond 8 is made up of all their good ideas, collectively offered in a manner that can suit every learner in creating their own learning journeys. At Beyond 8, Naveen works closely with industry leaders in developing partnerships, while Raaji brings together all the building blocks of a 'real' education - one that can serve young learners in their adult life.</h4><br /><br />
                </div>
            </React.Fragment>
        )
    }
}
