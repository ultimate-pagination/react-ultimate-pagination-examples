import React from 'react';
import ReactDom from 'react-dom';
import {UltimatePagination} from 'react-ultimate-pagination';

class App extends React.Component {
  constructor() {
    super();

    this.onTotalPagesChange = this.onTotalPagesChange.bind(this);
    this.onCurrentPageChange = this.onCurrentPageChange.bind(this);

    this.state = {
      currentPage: 1,
      totalPages: 10
    };
  }

  onTotalPagesChange(event) {
    this.setState({totalPages: +event.target.value});
  }

  onCurrentPageChange(event) {
    this.setState({currentPage: +event.target.value});
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="totalPages">Total pages:</label>
          <input
            type="number"
            id="totalPages"
            value={this.state.totalPages}
            min="1"
            onChange={this.onTotalPagesChange}
          />
        </div>


        <div>
          <label htmlFor="currentPage">Current page:</label>
          <input
            type="number"
            id="currentPage"
            value={this.state.currentPage}
            min="1"
            max={this.state.totalPages}
            onChange={this.onCurrentPageChange}
          />
        </div>

        <UltimatePagination currentPage={this.state.currentPage} totalPages={this.state.totalPages}/>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('main'));
