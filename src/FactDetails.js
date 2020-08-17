import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FactDetails.css';

class FactDetails extends Component {
  render() {
    let { fact } = this.props;
    return (
      <div className='FactDetails row justify-content-center mt-5'>
        <div className='col-11 col-lg-5'>
          <div className='FactDetails-card card'>
            <img className='card-img-top' src={fact.src} alt={fact.name} />
            <div className='card-body'>
              <h2 className='card-title'>{fact.name}</h2>
              <h4 className='card-subtitle text-muted'>{fact.age} years old</h4>
            </div>
            <ul className='list-group list-group-flush'>
              {fact.facts.map((fact, i) => (
                <li className='list-group-item' key={i}>
                  {fact}
                </li>
              ))}
            </ul>
            <div className='card-body'>
              <Link to='/facts' className='btn btn-info'>
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FactDetails;
