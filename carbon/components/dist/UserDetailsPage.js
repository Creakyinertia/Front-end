"use strict";
exports.__esModule = true;
var react_1 = require("react");
var userdetails_json_1 = require("../userdetails.json");
var react_2 = require("@carbon/react");
var Table = react_2.DataTable.Table, TableBody = react_2.DataTable.TableBody, TableCell = react_2.DataTable.TableCell, TableHead = react_2.DataTable.TableHead, TableHeader = react_2.DataTable.TableHeader, TableRow = react_2.DataTable.TableRow;
var UserDetailsPage = function () {
    var headers = ['id', 'first_name', 'last_name', 'Email', 'Gender'];
    return react_1["default"].createElement(Table, { size: "lg", useZebraStyles: false, "aria-label": "sample table" },
        react_1["default"].createElement(TableHead, null,
            react_1["default"].createElement(TableRow, null, headers.map(function (header) { return react_1["default"].createElement(TableHeader, { id: header, key: header }, header); }))),
        react_1["default"].createElement(TableBody, null, userdetails_json_1["default"].map(function (row) { return react_1["default"].createElement(TableRow, { key: row.id }, headers.map(function (header) { return (react_1["default"].createElement(TableCell, { key: header }, row[header.toLowerCase()])); })); })));
};
exports["default"] = UserDetailsPage;
