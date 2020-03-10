import React from "react";
import Type from "Atoms/Type";
import Colors from "Constants/Colors";

import "./Styles/TableCell.css";

const TableCell = ({ className, header, children }) => {
    if (header) {
        return (
            <th
                className={
                    className
                        ? `${className} ch-table-cell ch-table-header`
                        : "ch-table-cell ch-table-header"
                }
            >
                <Type size="h5" bold color={Colors.WHITE} align="center">
                    {children}
                </Type>
            </th>
        );
    } else {
        return (
            <td
                className={
                    className
                        ? `${className} ch-table-cell ch-table-normal`
                        : "ch-table-cell ch-table-normal"
                }
            >
                <Type size="p" color={Colors.DARK_BLUE} align="center">
                    {children}
                </Type>
            </td>
        );
    }
};

export default TableCell;
