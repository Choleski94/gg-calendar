import React from 'react';
import { FormattedMessage } from 'react-intl';

class PaginationNavigation extends React.Component {
  state = {
    elements: [],
    // Pagination
    pageBound: 3,
    currentPage: 1,
    upperPageBound: 3,
    lowerPageBound: 0,
    elementsPerPage: 50, // 10
    isNextBtnActive: '',
    isPrevBtnActive: 'disabled'
  };

  componentWillMount() {
    this.setDefaultData();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.resetPage) {
      this.setDefaultData();
    }
  }

  setDefaultData = () => {
    const { options, elementsPerPage } = this.props;
    this.setState({
      currentPage: 1,
      elements: options,
      elementsPerPage: Number(elementsPerPage) ? elementsPerPage : 50
    });
  };

  handleClick = e => {
    let listid = Number(e.target.id);
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  };

  setPrevAndNextBtnClass = listid => {
    let totalPage = Math.ceil(
      this.state.elements.length / this.state.elementsPerPage
    );
    this.setState({
      isNextBtnActive: 'disabled',
      isPrevBtnActive: 'disabled'
    });

    if (totalPage === listid && totalPage > 1) {
      this.setState({ isPrevBtnActive: '' });
    } else if (listid === 1 && totalPage > 1) {
      this.setState({ isNextBtnActive: '' });
    } else if (totalPage > 1) {
      this.setState({
        isNextBtnActive: '',
        isPrevBtnActive: ''
      });
    }
  };

  btnIncrementClick = () => {
    this.setState({
      upperPageBound: this.state.upperPageBound + this.state.pageBound,
      lowerPageBound: this.state.lowerPageBound + this.state.pageBound
    });

    let listid = this.state.upperPageBound + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  };

  btnDecrementClick = () => {
    this.setState({
      upperPageBound: this.state.upperPageBound - this.state.pageBound,
      lowerPageBound: this.state.lowerPageBound - this.state.pageBound
    });

    let listid = this.state.upperPageBound - this.state.pageBound;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  };

  btnPrevClick = () => {
    if ((this.state.currentPage - 1) % (this.state.pageBound === 0)) {
      this.setState({
        upperPageBound: this.state.upperPageBound - this.state.pageBound,
        lowerPageBound: this.state.lowerPageBound - this.state.pageBound
      });
    }

    let listid = this.state.currentPage - 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  };

  btnNextClick = () => {
    if (this.state.currentPage + 1 > this.state.upperPageBound) {
      this.setState({
        upperPageBound: this.state.upperPageBound + this.state.pageBound,
        lowerPageBound: this.state.lowerPageBound + this.state.pageBound
      });
    }

    let listid = this.state.currentPage + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  };

  render() {
    const {
      currentPage,
      elementsPerPage,
      upperPageBound,
      lowerPageBound,
      isPrevBtnActive,
      isNextBtnActive
    } = this.state;
    const elements = this.props.options;

    // Logic for displaying current elements list
    const indexOfLastItem = currentPage * elementsPerPage;
    const indexOfFirstItem = indexOfLastItem - elementsPerPage;
    const currentItems = elements.slice(indexOfFirstItem, indexOfLastItem);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(elements.length / elementsPerPage); i += 1) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      var pageNum;
      if (number === 1 && currentPage === 1) {
        pageNum = (
          <li key={number} className="page-item active">
            {/* <a id={number} className="page-link" href onClick={this.handleClick}> */}
            <a className="page-link" href>
              {number}
            </a>
          </li>
        );
      } else if (number < upperPageBound + 1 && number > lowerPageBound) {
        pageNum = (
          <li
            key={number}
            className={`page-item ${
              this.state.currentPage === number ? "active" : ""
            }`}
          >
            <a
              id={number}
              className="page-link"
              href
              onClick={this.handleClick}
            >
              {number}
            </a>
          </li>
        );
      }
      return pageNum;
    });

    let pageIncrementBtn = null;
    if (pageNumbers.length > upperPageBound) {
      pageIncrementBtn = (
        <li className="page-item">
          <a className="page-link" href onClick={this.btnIncrementClick}>
            <span aria-hidden="true">&hellip;</span>
            <span className="sr-only">&hellip;</span>
          </a>
        </li>
      );
    }

    let pageDecrementBtn = null;
    if (lowerPageBound >= 1) {
      pageDecrementBtn = (
        <li className="page-item">
          <a className="page-link" href onClick={this.btnDecrementClick}>
            <span aria-hidden="true">&hellip;</span>
            <span className="sr-only">&hellip;</span>
          </a>
        </li>
      );
    }

    let renderPrevBtn = null;
    if (isPrevBtnActive === "disabled") {
      renderPrevBtn = (
        <li className={`page-item ${isPrevBtnActive}`}>
          <a className="page-link" href aria-label="Previous">
            <span aria-hidden="true">«</span>
            <span className="sr-only">
              <FormattedMessage id="page.activity.text.prev" default="Prev" />
            </span>
          </a>
        </li>
      );
    } else {
      renderPrevBtn = (
        <li className={`page-item ${isPrevBtnActive}`}>
          <a
            className="page-link"
            href
            aria-label="Previous"
            id="btnPrev"
            onClick={this.btnPrevClick}
          >
            <span aria-hidden="true">«</span>
            <span className="sr-only">
              <FormattedMessage id="page.activity.text.prev" default="Prev" />
            </span>
          </a>
        </li>
      );
    }

    let renderNextBtn = null;
    if (isNextBtnActive === "disabled") {
      renderNextBtn = (
        <li className="page-item">
          <a className={`page-link ${isNextBtnActive}`} href aria-label="Next">
            <span aria-hidden="true">»</span>
            <span className="sr-only">
              <FormattedMessage id="page.activity.text.next" default="Next" />
            </span>
          </a>
        </li>
      );
    } else {
      renderNextBtn = (
        <li className="page-item">
          <a
            className={`page-link ${isNextBtnActive}`}
            href
            aria-label="Next"
            id="btnNext"
            onClick={this.btnNextClick}
          >
            <span aria-hidden="true">»</span>
            <span className="sr-only">
              <FormattedMessage id="page.activity.text.next" default="Next" />
            </span>
          </a>
        </li>
      );
    }

    this.props.currentPage(currentPage);

    return (
      <nav
        className="nav justify-content-center mt-5"
        aria-label="Page navigation"
      >
        <ul className="pagination">
          {renderPrevBtn}
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
          {renderNextBtn}
        </ul>
      </nav>
    );
  }
}

export default PaginationNavigation;
