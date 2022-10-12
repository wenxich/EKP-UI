import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Home from './components/Home';
import ExpertFinder from './components/ExpertFinder';
import ProductivityReport from './components/ProductivityReport';

const Navigation = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink> | <NavLink to="/expert_finder">Expert Finder</NavLink> | <NavLink to="/productivity_report">Productivity Report</NavLink>
        </div>
    );
}

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/expert_finder" element={<ExpertFinder />}/>
                        <Route path="/productivity_report" element={<ProductivityReport />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;