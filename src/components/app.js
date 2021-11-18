import styles from './app.styles';
import '@fontsource/roboto'

import {Redirect, Route, Switch} from "react-router-dom";
import {renderRoutes} from "react-router-config";

import {Header, Footer} from "components/common";

function App({route}) {
    const classes = styles();

    return (
        <div className={classes.root}>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Redirect to={'/home'}/>
                </Route>
                {renderRoutes(route.routes)}
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
