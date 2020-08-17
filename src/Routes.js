import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import FactList from './FactList';
import FactDetails from './FactDetails';

class Routes extends Component {
  render() {
    const getFact = props => {
      let name = props.match.params.name;
      let currentFact = this.props.facts.find(
        fact => fact.name.toLowerCase() === name.toLowerCase()
      );
      return <FactDetails {...props} fact={currentFact} />;
    };
    return (
      <Switch>
        <Route
          exact
          path='/facts'
          render={() => <FactList facts={this.props.facts} />}
        />
        <Route exact path='/facts/:name' render={getFact} />
        <Redirect to='/facts' />
      </Switch>
    );
  }
}
export default Routes;
