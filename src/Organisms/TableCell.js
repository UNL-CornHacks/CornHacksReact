import React from "react";
import Type from "Atoms/Type";
import Colors from "Constants/Colors";

import "./Styles/TableCell.css";

const TableCell = ({ className, header, children, yes, no }) => {
    let classNames = className ? `${className} ch-table-cell` : "ch-table-cell";

    console.log(yes, no);
    if (yes) classNames += " ch-table-yes-styling";
    if (no) classNames += " ch-table-no-styling";
    if (header) classNames += " ch-table-header";
    else classNames += " ch-table-normal";

    if (header) {
        return (
            <th className={classNames}>
                <Type size="h5" bold color={Colors.WHITE} align="center">
                    {children}
                </Type>
            </th>
        );
    } else {
        return (
            <td className={classNames}>
                <Type
                    className={className ? `${className}-text` : false}
                    size="p"
                    color={yes || no ? Colors.WHITE : Colors.DARK_BLUE}
                    align="center"
                    bold
                >
                    {children}
                </Type>
            </td>
        );
    }
};

export default TableCell;
