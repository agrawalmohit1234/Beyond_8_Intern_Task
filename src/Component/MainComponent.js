import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import About from './AboutComponent';


class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <Switch location={this.props.location}>
                        <Route path='/home' component={() => <Home />} />
                        <Route exact path='/aboutus' component={() => <About />} />
                        <Route exact path='/contactus' component={() => <Contact />} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;