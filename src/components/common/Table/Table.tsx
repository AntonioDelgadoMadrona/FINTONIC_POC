// DEPENDENCIES
import { memo } from "react";

// COMPONENTS
import { Pagination } from "../Pagination/Pagination";

// STYLED
import {
  StyledTable,
  StyledTableContainer,
  StyledTHead,
  StyledTHRow,
  StyledTRow,
  StyledTBody,
  StyledTd,
} from "./styled";

interface IProps {
  headers: Array<string>;
  items: any[];
  page: any;
  handlePage: any;
}

const Table = memo<IProps>(({ headers, items, page, handlePage }) => {
  return (
    <StyledTable>
      <StyledTableContainer>
        <table>
          {/* ----- HEADERS ------ */}
          <StyledTHead>
            <StyledTHRow>
              {headers.map((header: any, index: number) => (
                <th key={index}>
                  <span>{header}</span>
                </th>
              ))}
            </StyledTHRow>
          </StyledTHead>

          <StyledTBody>
            {/* ----- ITEMS ------ */}
            {items &&
              items.length > 0 &&
              items.map((item: any, index: any) => {
                return (
                  <StyledTRow key={index + 1000}>
                    {/* ----- ITEM PROPERTY ----- */}
                    {Object.keys(item).map((key, index) => {
                      return (
                        <StyledTd key={index + 20000}>
                          <span>{item[key]}</span>
                        </StyledTd>
                      );
                    })}
                  </StyledTRow>
                );
              })}
          </StyledTBody>
        </table>
      </StyledTableContainer>

      {/* ---- PAGINATION ---- */}
      {page && (
        <Pagination
          itemsPerPage={page.itemsPerPage}
          totalItems={page.totalItems}
          totalPages={page.totalPages}
          currentPage={page.currentPage}
          handlePage={handlePage}
        />
      )}
    </StyledTable>
  );
});

export { Table };
