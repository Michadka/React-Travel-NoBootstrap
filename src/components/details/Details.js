import React, { Component } from 'react';
import './Details.css';

class Details extends Component {
  render() {
    return (
      <div id="travel-table-container" className="container-fluid">
        <h3 className="text-center">Some information about the places I would like to visit</h3>
          <table className="table table-bordered table-striped">
              <tr>
                  <th>Destination</th>
                  <th>Capital</th>
                  <th>Official Language</th>
                  <th>Population (aprox.)</th>
                  <th>National Bird</th>
              </tr>
              <tr>
                  <td>Spain</td>
                  <td>Madrid</td>
                  <td>Spanish</td>
                  <td>46.77 million</td>
                  <td>Eagle</td>
              </tr>
              <tr>
                  <td>Italy</td>
                  <td>Rome</td>
                  <td>Italian</td>
                  <td>59.83 million</td>
                  <td>Bluebirds</td>
              </tr>
              <tr>
                  <td>Aruba</td>
                  <td>Oranjestad</td>
                  <td>Dutch</td>
                  <td>102,911</td>
                  <td>Aruban Burrowing Owl</td>
              </tr>
              <tr>
                  <td>Chile</td>
                  <td>Santiago</td>
                  <td>Spanish</td>
                  <td>17.62 million</td>
                  <td>Andean condor</td>
              </tr>
          </table>
      </div>
    );
  }
}

export default Details;
