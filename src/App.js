import React from "react";
import Tree from "react-hook-tree";
import data from "./../data.json";
import lang from "./../lang.json";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Tree
        treeData={data}
        lang={lang}
        checkbox={true}
        count={true}
        lineStyle={{ color: "blue" /* ...*/ }}
        style={{ backgroundColor: "#09F00020" /* ...*/ }}
        compact={true}
        edit={true}
        remove={true}
        node={[
          {
            name: "title",
            type: "text-input",
            placeholder: "Title",
            class: "col-6"
          },
          {
            name: "active",
            type: "checkbox",
            value: 0,
            datatype: "int",
            label: "activé le type",
            class: "col-6"
          }
        ]}
      />
    </div>
  );
}
