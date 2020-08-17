import React, { Component } from 'react';
import Routes from './Routes';
import Navbar from './Navbar';
import cDis from './images/children-disability.jpg';
import russia from './images/wheel-chair-stairs-russia(1).jpg';
import blind from './images/blind-darfur(1).jpg';
import leg from './images/p-leg.jpg';
import school from './images/school(1).jpg';
import woman from './images/woman-bike(1).jpg';
import './App.css';

class App extends Component {
  static defaultProps = {
    facts: [
      {
        name: 'Einberger',
        age: 5,
        src: cDis,
        facts: [
          'Over a billion people have disabilities.',
          `About 15% of the world's population.`,
          'Rates of disability are increasing!',
        ],
      },
      {
        name: 'Gonzalez',
        age: 49,
        src: blind,
        facts: [
          'People with disabilities are vulnerable to poverty!',
          'They have worse living conditions and poor housing.',
          'Extra costs such as medial care and assistive devices.',
        ],
      },
      {
        name: 'Volkov',
        age: 30,
        src: russia,
        facts: [
          'Disabling barriers can be overcome.',
          'Promote access to mainstream services.',
          'Provide adequate funding.',
        ],
      },
      {
        name: 'Bode',
        age: 35,
        src: leg,
        facts: [
          'Often do not recieve needed health care.',
          'Half of disabled people cannot afford health care.',
          'They are four times more likely to report being treated badly.',
        ],
      },
      {
        name: 'Farran',
        age: 15,
        src: school,
        facts: [
          'Education completion gaps are found across all age groups.',
          'Less likely to attend school than non-disabled.',
          'This pattern is more pronunced in poorer countries.',
        ],
      },
      {
        name: 'Trey',
        age: 40,
        src: woman,
        facts: [
          'More likely to be unemployed than non-disabled people.',
          'Employment rates are lower for men (53%) and women(20%), globally.',
          'In OECD Countries it is 44% vs 75% of people without disabilities.',
        ],
      },
    ],
  };
  render() {
    return (
      <div>
        <Navbar facts={this.props.facts} />
        <div className='container'>
          <Routes facts={this.props.facts} />
        </div>
      </div>
    );
  }
}

export default App;
