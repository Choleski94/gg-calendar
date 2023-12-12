import styled from 'styled-components';

export const TableWrapper = styled.div`
  width: 100%;
  display: table;
`;

export const TableContainer = styled.div`
  ${({ hasQuickView }) => hasQuickView ? `
    width: 40%;
    display: table-cell;
  ` : ''}

  ${({ height }) => !!height ? `
    & {
      overflow-y: auto;
      height: ${height};

      & thead th {
        top: 0;
        z-index: 1;
        background: #fff;
        position: sticky;
      }

      & table {
        border-collapse: collapse;        
        width: 100%;
      }
    }
  ` : ''}
`;

export const TableComponent = styled.table`
  margin: 0;
  clear: both;
  width: 100%;
  border-spacing: 0;
  max-width: none !important;
  border-collapse: separate !important;

  & > thead > tr,
  & > tbody > tr {
    margin-bottom: 3px;
    border-radius: 4px;
    position: relative;
    background: transparent;

    color: #0a0a0a; 
    font-size: 9px; 
    text-align: left; 
    font-weight: 700; 
    line-height: 20px; 
    letter-spacing: 0.1em; 
    box-sizing: content-box; 
    border-bottom: 1 px solid #e6e6e6; 
    padding: 0.25rem 0.625rem 0.625rem;

    & > th {
      color: #0a0a0a;
      font-size: 9px;
      text-align: left;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 0.1em;
      box-sizing: content-box;
      text-transform: uppercase;
      border-bottom: 1px solid #e6effb;

      & > button {
        border: none;
        margin-left: 10px;
        background: transparent;
      }

    }

    & > td {
      color: #555552;
      box-sizing: content-box;
      border-bottom: 1px solid #e6effb;

      &,
      & span {
        font-size: 14px;
        font-weight: 400;
      }
    }
  }

`;

export const TableQuickViewContainer = styled.div`
  overflow: hidden;
`

export const TableQuickView = styled.div`
  vertical-align: top;
  ${({ hasQuickView }) => hasQuickView ? `
    width: 35%;
    border: 1px solid #e6effb;
    display: table-cell;
  ` : 'display: none;'}
`;

export const TableQuickViewHeader = styled.div`
  color: #0a0a0a;
  font-size: 9px;
  height: 24.97px;
  padding: 0 10px;
  line-height: 2.7;
  text-align: left;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0.1em;
  box-sizing: content-box;
  text-transform: uppercase;
  border-bottom: 1px solid #e6effb;

  && .table__quick__view_x {
	float: right;
  	color: #0a0a0a;
  	font-size: 8px;
	cursor: pointer;
  	font-weight: 700;
  	line-height: 25px;
	padding: 0 0 0 10px; 
  }
`;

export const TableQuickViewSection = styled.section`
  padding: 0 10px;
`;

