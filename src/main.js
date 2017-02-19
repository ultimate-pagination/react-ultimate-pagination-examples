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

    this.onInputChange = this.onInputChange.bind(this);
    this.onPageChangeFromPagination = this.onPageChangeFromPagination.bind(this);

    this.state = {
      currentPage: 50,
      totalPages: 100,
      boundaryPagesRange: 1,
      siblingPagesRange: 1,
      hidePreviousAndNextPageLinks: false,
      hideFirstAndLastPageLinks: false,
      hideEllipsis: false
    };
  }

  onInputChange(name) {
    return (event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : +target.value;
      this.setState({[name]: value})
    };
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
              onChange={this.onInputChange('totalPages')}
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
              onChange={this.onInputChange('currentPage')}
            />
          </div>

          <div>
            <label htmlFor="boundaryPagesRange" style={styles.label}>
              Boundary pages range:
            </label>
            <input
              type="number"
              id="boundaryPagesRange"
              style={styles.input}
              value={this.state.boundaryPagesRange}
              min="0"
              onChange={this.onInputChange('boundaryPagesRange')}
            />
          </div>

          <div>
            <label htmlFor="siblingPagesRange" style={styles.label}>
              Sibling pages range:
            </label>
            <input
              type="number"
              id="siblingPagesRange"
              style={styles.input}
              value={this.state.siblingPagesRange}
              min="0"
              onChange={this.onInputChange('siblingPagesRange')}
            />
          </div>

          <div>
            <label style={styles.label}>
              <input
                type="checkbox"
                id="hidePreviousAndNextPageLinks"
                checked={this.state.hidePreviousAndNextPageLinks}
                onChange={this.onInputChange('hidePreviousAndNextPageLinks')}
              />
              Hide previous and next page links
            </label>
          </div>

          <div>
            <label style={styles.label}>
              <input
                type="checkbox"
                id="hideFirstAndLastPageLinks"
                checked={this.state.hideFirstAndLastPageLinks}
                onChange={this.onInputChange('hideFirstAndLastPageLinks')}
              />
              Hide first and last page links
            </label>
          </div>

          <div>
            <label style={styles.label}>
              <input
                type="checkbox"
                id="hideEllipsis"
                checked={this.state.hideEllipsis}
                onChange={this.onInputChange('hideEllipsis')}
              />
              Hide ellipsis
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Live example</legend>

          <pre>{this.state.hidePreviousAndNextPageLinks}</pre>

          <UltimatePagination
            currentPage={this.state.currentPage}
            totalPages={this.state.totalPages}
            boundaryPagesRange={this.state.boundaryPagesRange}
            siblingPagesRange={this.state.siblingPagesRange}
            hidePreviousAndNextPageLinks={this.state.hidePreviousAndNextPageLinks}
            hideFirstAndLastPageLinks={this.state.hideFirstAndLastPageLinks}
            hideEllipsis={this.state.hideEllipsis}
            onChange={this.onPageChangeFromPagination}
          />
        </fieldset>
      </div>
    );
  }
}

ReactDom.render(<MuiThemeProvider muiTheme={lightMuiTheme}><App /></MuiThemeProvider>, document.getElementById('main'));
