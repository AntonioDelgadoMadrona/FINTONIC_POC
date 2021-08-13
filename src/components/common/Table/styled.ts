import { device } from "../../../utils/breakpoints";
// DEPENDENCIES
import styled from "styled-components";

export const StyledTable = styled.div`
  width: 100%;
  height: auto;
`;

export const StyledTableContainer = styled.div`
  min-height: 500px;
  background-color: #1b1b1b;
  display: block;
  overflow-x: auto;
  box-sizing: content-box;
  border: 1px solid #464545;
  margin-bottom: 20px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #464545;
  }
  &::-webkit-scrollbar-thumb {
    background: #00dba3;
  }

  & table {
    margin-bottom: 0;
    width: 100%;
    border-collapse: collapse;
  }

  & table td {
    @media ${device.tabletM} {
      min-width: 120px;
    }
  }

  & table th,
  & table td {
    vertical-align: middle;
    border: 1px solid #464545;
  }
`;

export const StyledTHead = styled.thead`
  color: #fff;
  background-color: #2c2c2c;
`;

export const StyledTHRow = styled.tr`
  & th span {
    width: max-content;
    display: block;
  }
  & th {
    padding: 6px 12px;
    background-color: transparent;
    text-align: center;
  }
`;

export const StyledTRow = styled.tr``;

export const StyledTBody = styled.tbody`
  font-weight: 400;
`;

export const StyledTd = styled.td`
  padding: 6px 12px;
`;
