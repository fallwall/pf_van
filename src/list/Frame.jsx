import React from 'react';
import Work from './Work';
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
          list of stuff
        </h3>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          containerWidth={window.innerWidth * 0.7}
          containerHeight={window.innerHeight * 0.8}
          customPageNumber={this.state.currentPage}
        >
          <Work num={1} />
          <Work num={2} />
          <Work num={3} />
          <Work num={4} />
          <Work num={5} />
        </ReactPageScroller>
        <Pager className="pagination-additional-class" bsSize="large">
          {pagesNumbers}
        </Pager>
      </div>
    );
  }
}

