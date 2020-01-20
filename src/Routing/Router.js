import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from '../components/Landing/Landing.jsx';
import FormContainer from '../components/Form/FormContainer.jsx';

const Routing = () => {
    return (
        <Router>
            <Route exact path="/" component={Landing} />
            <Route path="/admin" component={FormContainer} />
        </Router>
    );
}

export default Routing;
