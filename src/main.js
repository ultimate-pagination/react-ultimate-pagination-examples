import React from 'react';
import ReactDom from 'react-dom';
import {UltimatePagination} from 'react-ultimate-pagination';

ReactDom.render(<UltimatePagination currentPage={1} totalPages={10}/>, document.getElementById('main'));
