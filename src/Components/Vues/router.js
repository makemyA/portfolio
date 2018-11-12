import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './HomePage/Home'
import Project from './ProjectPage/Project'
import '../../App.scss';

export default function MainRouter () {
    return(
        <Router>
            <div>
                <Route exact path ="/" component={HomePage} />
                <Route path ={"/project/:id"} component={Project} />
            </div>
        </Router>
    )
}