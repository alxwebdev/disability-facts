import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FactList.css';

class FactList extends Component {
  render() {
    return (
      <div className='FactList'>
        <h1 className='display-1 text-center mt-3 mb-5'>Disability Facts!</h1>
        <div className='row'>
          {this.props.facts.map(f => (
            <div className='Fact col-lg-4 text-center' key={f.name}>
              <img src={f.src} alt={f.name} />
              <h3 className='mt-3'>
                <Link className='underline' to={`/facts/${f.name}`}>
                  {f.name}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default FactList;
