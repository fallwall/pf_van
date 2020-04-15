import React from 'react';
import Work1 from './Work1';
import Work2 from './Work2';
import Work3 from './Work3';
import Work4 from './Work4';
import Work5 from './Work5';
import { Pager } from "react-bootstrap";
import ReactPageScroller from '../ReactPageScroller';

import './Frame.css';

export default class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number });
  };

  getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(
        <Pager.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
          {i}
        </Pager.Item>,
      );
    }

    return [...pageNumbers];
  };

  render() {
    const pagesNumbers = this.getPagesNumbers();

    return (
      <div className="demo-page-contain">
        <h3 className="demo-page-contain__hint">
          You need to focus or hover page scroller to make scroll, keys or touch
          work
        </h3>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          containerWidth={window.innerWidth * 0.4}
          containerHeight={window.innerHeight * 0.5}
          customPageNumber={this.state.currentPage}
        >
          <Work1 />
          <Work2 />
          <Work3 />
          <Work4 />
          <Work5 />
        </ReactPageScroller>
        <Pager className="pagination-additional-class" bsSize="large">
          {pagesNumbers}
        </Pager>
      </div>
    );
  }
}

