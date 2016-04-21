import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import React from 'react';
import ReactDom from 'react-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import UltimatePagination from 'react-ultimate-pagination-material-ui';

const lightMuiTheme = getMuiTheme(lightBaseTheme);

const styles = {
  label: {
    display: 'block'
  },
  input: {
    width: 100
  }
};


class App extends React.Component {
  constructor() {
    super();

    this.onTotalPagesChange = this.onTotalPagesChange.bind(this);
    this.onCurrentPageChange = this.onCurrentPageChange.bind(this);
    this.onPageChangeFromPagination = this.onPageChangeFromPagination.bind(this);

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

  onPageChangeFromPagination(newPage) {
    this.setState({currentPage: newPage});
  }

  render() {
    return (
      <div>
        <h1>Ultimate Pagination</h1>
        <fieldset>
          <legend>Component configuration</legend>
          <div>
            <label htmlFor="totalPages" style={styles.label}>
              Total pages:
            </label>
            <input
              type="number"
              id="totalPages"
              style={styles.input}
              value={this.state.totalPages}
              min="1"
              onChange={this.onTotalPagesChange}
            />
          </div>


          <div>
            <label htmlFor="currentPage" style={styles.label}>
              Current page:
            </label>
            <input
              type="number"
              id="currentPage"
              style={styles.input}
              value={this.state.currentPage}
              min="1"
              max={this.state.totalPages}
              onChange={this.onCurrentPageChange}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Live example</legend>

          <UltimatePagination
            currentPage={this.state.currentPage}
            totalPages={this.state.totalPages}
            onChange={this.onPageChangeFromPagination}
          />
        </fieldset>
      </div>
    );
  }
}

ReactDom.render(<MuiThemeProvider muiTheme={lightMuiTheme}><App /></MuiThemeProvider>, document.getElementById('main'));
