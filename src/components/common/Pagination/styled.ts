import styled from "styled-components";
import { device } from "../../../utils/breakpoints";

export const PaginationContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
  align-items: center;
  width: 100%;
  color: #fff;
 justify-content: center;

  @media ${device.tabletL} {
    display: grid;
  }
`;

export const PaginationInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 10px auto;

  & div {
    margin-right: 20px;
  }
  & span {
    margin-right: 5px;

    @media ${device.mobileL} {
      font-size: 0.9rem;
    }
  }
  & strong {
    font-size: 1.3rem;
    margin-right: 5px;
    font-weight: bold;

    @media ${device.mobileL} {
      font-size: 1.2rem;
    }

  }

  @media ${device.tabletL} {
    position: relative;
    margin: auto;
  }
`;

export const PaginationPager = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: stretch;

  & > ul {
    align-items: center;
    margin: 0 auto;
    display: flex;
    list-style: none;
    padding: 0;
    box-sizing: border-box;
    border-radius: 5px;
    overflow: hidden;

    & > li {
      cursor: pointer;
      padding: 18px 27px;
      background: #00bc8c;
      color: #fff;
      height: 20px;
      
      &:hover {
        background: #00dba3;
      }

      &.active {
        pointer-events: none;
        background: #00dba3;
      }

      &.disabled {
        pointer-events: none;
        opacity: 0.8;
      }

      & > span,
      & > svg {
        font-weight: bold;
        font-size: 1.3rem;
      }
    }
  }

  @media ${device.tabletL} {
    display: flex;
    margin: auto;
    padding-top: 10px;
  }
`;
