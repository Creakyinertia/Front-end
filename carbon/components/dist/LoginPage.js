"use strict";
exports.__esModule = true;
var react_1 = require("react");
var formik_1 = require("formik");
var Yup = require("yup");
var LoginPage = function () {
    var formik = formik_1.useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            password: Yup.string().required('Password is required')
        }),
        onSubmit: function (values, actions) {
            // Simulate a login process (replace with actual authentication logic)
            if (values.username === 'yourUsername' && values.password === 'yourPassword') {
                // Successful login, perform necessary actions here (e.g., set authentication state)
                alert('Login successful');
            }
            else {
                // Failed login, handle the error (e.g., display an error message)
                alert('Login failed. Invalid username or password.');
            }
            actions.resetForm();
        }
    });
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h2", null, "Login"),
        react_1["default"].createElement("form", { onSubmit: formik.handleSubmit },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("label", { htmlFor: "username" }, "Username"),
                react_1["default"].createElement("input", { type: "text", id: "username", name: "username", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.username }),
                formik.touched.username && formik.errors.username ? (react_1["default"].createElement("div", null, formik.errors.username)) : null),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("label", { htmlFor: "password" }, "Password"),
                react_1["default"].createElement("input", { type: "password", id: "password", name: "password", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.password }),
                formik.touched.password && formik.errors.password ? (react_1["default"].createElement("div", null, formik.errors.password)) : null),
            react_1["default"].createElement("button", { type: "submit" }, "Login"))));
};
exports["default"] = LoginPage;
