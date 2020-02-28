import React from "react";
import Type from "Atoms/Type";
import Colors from "Constants/Colors";

const DesignSystemPage = () => (
  <div style={pageStyling}>
    <div style={pageContentStyling}>
      <Type size="h1">h1</Type>
      <Type size="h1">h1 bold</Type>
      <Type size="h2">Test h2</Type>
      <Type size="h3">Test h3</Type>
      <Type size="h4">Test h4</Type>
      <Type size="h5">Test h5</Type>
      <Type size="h6">Test h6</Type>
    </div>
  </div>
);

const pageStyling = {
  width: "100%",
  height: "100%",
  background: `radial-gradient(${Colors.BLUE}, ${Colors.DARK_BLUE})`,
  position: "fixed",
  display: "flex"
};

const pageContentStyling = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  textAlign: "center",
  flexDirection: "column"
};

export default DesignSystemPage;
