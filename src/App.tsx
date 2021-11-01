import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import 'lazysizes';

function App() {
    return (
        <Suspense fallback={<div />}>
            <BrowserRouter basename='/picsearch'>
                <Switch>
                    <Route component={lazy(() => import('./pages/home'))} exact path='/home' />
                    <Route component={lazy(() => import('./pages/list'))} exact path='/list' />
                    <Redirect exact from='/' to='/home' />
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
