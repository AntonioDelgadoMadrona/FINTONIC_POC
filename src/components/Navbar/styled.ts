import { device } from "../../utils/breakpoints";
import styled from "styled-components";

export const StyledNavbar = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  background: #262a35;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 70px;
  color: #fef6b9;
  box-sizing: border-box;
`;

export const ImgContainer = styled.div`
  width: 100px;
  height: auto;
  display: flex;
  align-items: center;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const LinksContainer = styled.div`
  width: auto;
  text-align: right;
  justify-content: right;

  & > ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    & > li {
      cursor: pointer;
      margin-right: 8px;
      padding: 5px 15px;
      color: #fff;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      line-height: 21px;

      :hover {
        background: #5c6378;
      }

      & > svg {
        margin-right: 5px;
        font-size: 13px;
      }

      & span {
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 700; 
      }

    }

  }
`;
