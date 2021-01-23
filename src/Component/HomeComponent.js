import React, { Component } from "react";
import data from "../Data/data.json";
let Originalclass = data.filter((ele, ind) => ind === data.findIndex(elem => elem.class === ele.class))
function RenderCourseItem({ course, topic }) {
    return (
        <div className="card bg-dark text-white" style={{ width: '350px', margin: "10px" }}>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <img src={course.image} alt="Pic of Instructor" className="card-img" style={{ height: '250px' }} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6"></div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6"><img src='assets/images/Beyond_8_logo.png' alt="Beyond 8" /></div>
                    </div>
                    <p className="text-center font-weight-bold">{course.subject}</p>
                    <p className="text-right mr-2">With</p>
                    <p className="text-right mr-2">{course.faculty}</p>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title text-center">Class {course.class}</h5>
                <p className="card-text">{course.description}</p>
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                        <p>{course.faculty}</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                        <p className="font-weight-bold text-primary">FREE</p>
                    </div>

                </div>
            </div>
            <div className="center card row col l12 s12" style={{ width: '350px', margin: "0px" }}>
                <div className="card-content">
                    <h4 className="col l12 s12 bold text-center text-dark">Topic</h4>
                    <div className="col s12 l12 flex-card">
                        {topic.map(topics => {
                            topics = topics.replace(/["']/g, "");
                            console.log("topic", topics)
                            return <div className="tag" style={{ display: "flex" }}>
                                <div className="row badge-line circle" >
                                    <span className="text-success font-weight-bold">&nbsp;&nbsp;{topics}</span>
                                </div>

                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}



export default class HomeComponet extends Component {
    state = {
        itemsToDisplay: [],
        itemsToUse: [],
        topics: []
    };
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h1 className="text-center text-bold">Discover Featured Courses</h1><br />
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-12 col-12">
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="form-group">
                                <label className="font-weight-bold">Class</label>
                                <select className="form-control" id="class_" onChange={this.classSelected}>
                                    <option value="any">Choose Any</option>
                                    {Originalclass.map(classess => {
                                        return <option value={classess.class}>{classess.class}</option>;
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-12 col-12">
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="form-group">
                                <label className="font-weight-bold">Course</label>
                                <select className="form-control" id="course" onChange={this.optionSelected}>
                                    <option value="any">Choose Any</option>
                                    {this.state.topics.map(topic => {
                                        return <option value={topic}>{topic}</option>;
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-12 col-12">
                        </div>
                    </div><br />
                    <div className="background">
                        {this.state.itemsToDisplay.map(rest => {
                            let topics = rest["topics style"]
                                .substring(1, rest["topics style"].length - 2)
                                .split(",");
                            return (
                                <RenderCourseItem topic={topics} course={rest} />
                            );
                        })}
                    </div>
                </div>
            </React.Fragment>
        );
    }

    filterOnSearch = event => {
        if (
            !event.target.value ||
            event.target.value === " " ||
            event.target.value === ""
        )
            this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
        else {
            let itemsToDisplay = [];
            itemsToDisplay = this.state.itemsToUse.filter(
                item =>
                    item["class"]
                        .toLowerCase()
                        .includes(event.target.value.toLowerCase()) ||
                    item["topics Style"]
                        .toLowerCase()
                        .includes(event.target.value.toLowerCase()) ||
                    item["subject"].toLowerCase().includes(event.target.value.toLowerCase())
            );
            this.setState({ itemsToDisplay });
        }
    };

    optionSelected = () => {
        var e = document.getElementById("course");
        var selected = e.options[e.selectedIndex].text;

        if (selected === "Choose Any")
            this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
        else {
            let itemsToDisplay = [];
            itemsToDisplay = this.state.itemsToUse.filter(item =>
                item["topics style"].toLowerCase().includes(selected.toLowerCase())
            );
            this.setState({ itemsToDisplay });
        }
    };

    classSelected = (event) => {
        console.log("Event", event.target)
        var e = document.getElementById("class_");
        var selected = e.options[e.selectedIndex].text;

        if (selected === "Choose Any")
            this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
        else {
            let itemsToDisplay = [];
            itemsToDisplay = this.state.itemsToUse.filter(item => item.class === selected * 1);
            this.setState({ itemsToDisplay });
        }
    };
    componentDidMount() {
        this.reRenderList();
    }

    reRenderList() {
        var topics = [];
        var itemsToDisplay = [];
        for (var i = 0; i < data.length; i++) {
            itemsToDisplay.push(data[i]);
            data[i]["topics style"]
                .substring(1, data[i]["topics style"].length - 2)
                .split(",")
                .forEach(cuisine => {
                    let c = cuisine.substring(1, cuisine.length - 1);
                    c = c.includes("'") ? c.substring(1, c.length) : c;
                    if (topics.indexOf(c) < 0) {
                        topics.push(c);
                    }
                });
        }

        this.setState({ topics });

        this.setState({ itemsToDisplay }, () => {
            this.setState({ itemsToUse: [...this.state.itemsToDisplay] });
        });
    }
}
