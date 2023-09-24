"use strict";(self.webpackChunkreact_bootstrap_table_nextgen_example=self.webpackChunkreact_bootstrap_table_nextgen_example||[]).push([[332],{"./src/stories/WorkOnRows.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomizeRowClass:()=>CustomizeRowClass,CustomizeRowStyle:()=>CustomizeRowStyle,HideRows:()=>HideRows,RowEvent:()=>RowEvent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>WorkOnRows_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),common=__webpack_require__("./src/utils/common.ts"),lib=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("../react-bootstrap-table-nextgen/lib/index.js")),code_block=__webpack_require__("./src/components/common/code-block.tsx"),jsx_runtime=(__webpack_require__("../react-bootstrap-table-nextgen-filter/style/react-bootstrap-table-nextgen-filter.scss"),__webpack_require__("../react-bootstrap-table-nextgen-paginator/style/react-bootstrap-table-nextgen-paginator.scss"),__webpack_require__("../react-bootstrap-table-nextgen-toolkit/style/react-bootstrap-table-nextgen-toolkit.scss"),__webpack_require__("../react-bootstrap-table-nextgen/style/react-bootstrap-table-nextgen.scss"),__webpack_require__("./src/stories/stylesheet/storybook.scss"),__webpack_require__("./src/stories/stylesheet/tomorrow.min.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));try{WorkOnRows.displayName="WorkOnRows",WorkOnRows.__docgenInfo={description:"",displayName:"WorkOnRows",props:{mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"any"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"any"}},sourceCode:{defaultValue:null,description:"",name:"sourceCode",required:!0,type:{name:"any"}},sourceCode1:{defaultValue:null,description:"",name:"sourceCode1",required:!0,type:{name:"any"}},sourceCode2:{defaultValue:null,description:"",name:"sourceCode2",required:!0,type:{name:"any"}},rowStyle1:{defaultValue:null,description:"",name:"rowStyle1",required:!0,type:{name:"any"}},rowStyle2:{defaultValue:null,description:"",name:"rowStyle2",required:!0,type:{name:"any"}},rowClasses1:{defaultValue:null,description:"",name:"rowClasses1",required:!0,type:{name:"any"}},rowClasses2:{defaultValue:null,description:"",name:"rowClasses2",required:!0,type:{name:"any"}},hiddenRows:{defaultValue:null,description:"",name:"hiddenRows",required:!0,type:{name:"any"}},rowEvents:{defaultValue:null,description:"",name:"rowEvents",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/WorkOnRows.tsx#WorkOnRows"]={docgenInfo:WorkOnRows.__docgenInfo,name:"WorkOnRows",path:"src/stories/WorkOnRows.tsx#WorkOnRows"})}catch(__react_docgen_typescript_loader_error){}var _CustomizeRowStyle$pa,_CustomizeRowStyle$pa2,_CustomizeRowStyle$pa3,_CustomizeRowClass$pa,_CustomizeRowClass$pa2,_CustomizeRowClass$pa3,_HideRows$parameters,_HideRows$parameters2,_HideRows$parameters3,_RowEvent$parameters,_RowEvent$parameters2,_RowEvent$parameters3,bootstrap_style=__webpack_require__("./src/stories/bootstrap-style.tsx");const WorkOnRows_stories={title:"Work On Rows",component:function(_ref){var mode=_ref.mode,data=_ref.data,columns=_ref.columns,sourceCode=_ref.sourceCode,sourceCode1=_ref.sourceCode1,sourceCode2=_ref.sourceCode2,rowStyle1=_ref.rowStyle1,rowStyle2=_ref.rowStyle2,rowClasses1=_ref.rowClasses1,rowClasses2=_ref.rowClasses2,hiddenRows=_ref.hiddenRows,rowEvents=_ref.rowEvents;return"customize"===mode?(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(lib.default,{keyField:"id",data,columns,rowStyle:rowStyle1,rowClasses:rowClasses1}),(0,jsx_runtime.jsx)(code_block.Z,{children:sourceCode1}),(0,jsx_runtime.jsx)(lib.default,{keyField:"id",data,columns,rowStyle:rowStyle2,rowClasses:rowClasses2}),(0,jsx_runtime.jsx)(code_block.Z,{children:sourceCode2})]}):(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(lib.default,{keyField:"id",data,columns,hiddenRows,rowEvents}),(0,jsx_runtime.jsx)(code_block.Z,{children:sourceCode})]})},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{mode:{control:"text",description:"mode"},data:{control:"object",description:"table data"},columns:{control:"object",description:"table columns"},sourceCode:{control:"text",description:"source code of the table"}},decorators:[function(Story){return(0,bootstrap_style.Z)()(Story)}]};var CustomizeRowStyle={name:"Customize row style",args:{mode:"customize",columns:common.zF,data:(0,common.bG)(),sourceCode1:"    import BootstrapTable from 'react-bootstrap-table-nextgen';\n\n    const columns = [{\n      dataField: 'id',\n      text: 'Product ID'\n    }, {\n      dataField: 'name',\n      text: 'Product Name'\n    }, {\n      dataField: 'price',\n      text: 'Product Price'\n    }];\n\n    const rowStyle = { backgroundColor: '#c8e6c9' };\n\n    <BootstrapTable keyField='id' data={ products } columns={ columns } rowStyle={ rowStyle } />\n    ",rowStyle1:{backgroundColor:"#c8e6c9"},sourceCode2:"    const columns = [{\n      dataField: 'id',\n      text: 'Product ID'\n    }, {\n      dataField: 'name',\n      text: 'Product Name'\n    }, {\n      dataField: 'price',\n      text: 'Product Price'\n    }];\n\n    const rowStyle2 = (row, rowIndex) => {\n      const style = {};\n      if (row.id > 3) {\n        style.backgroundColor = '#c8e6c9';\n      } else {\n        style.backgroundColor = '#00BFFF';\n      }\n\n      if (rowIndex > 2) {\n        style.fontWeight = 'bold';\n        style.color = 'white';\n      }\n\n      return style;\n    };\n\n    <BootstrapTable keyField='id' data={ products } columns={ columns } rowStyle={ rowStyle2 } />\n    ",rowStyle2:function rowStyle2(row,rowIndex){var style={backgroundColor:"",fontWeight:"",color:""};return row.id>3?style.backgroundColor="#c8e6c9":style.backgroundColor="#00BFFF",rowIndex>2&&(style.fontWeight="bold",style.color="white"),style}}},CustomizeRowClass={name:"Customize row class",args:{mode:"customize",columns:common.zF,data:(0,common.bG)(),sourceCode1:"    import BootstrapTable from 'react-bootstrap-table-nextgen';\n\n    const columns = [{\n      dataField: 'id',\n      text: 'Product ID'\n    }, {\n      dataField: 'name',\n      text: 'Product Name'\n    }, {\n      dataField: 'price',\n      text: 'Product Price'\n    }];\n\n    const rowClasses = 'custom-row-class';\n\n    <BootstrapTable keyField='id' data={ products } columns={ columns } rowClasses={ rowClasses } />\n    ",rowClasses1:"custom-row-class",sourceCode2:"    const columns = [{\n      dataField: 'id',\n      text: 'Product ID'\n    }, {\n      dataField: 'name',\n      text: 'Product Name'\n    }, {\n      dataField: 'price',\n      text: 'Product Price'\n    }];\n\n    const rowClasses = (row, rowIndex) => {\n      let classes = null;\n\n      if (rowIndex > 2) {\n        classes = 'index-bigger-than-two';\n      }\n\n      return classes;\n    };\n\n    <BootstrapTable keyField='id' data={ products } columns={ columns } rowClasses={ rowClasses } />\n    ",rowClasses2:function rowClasses2(row,rowIndex){var classes=null;return rowIndex>2&&(classes="index-bigger-than-two"),classes}}},HideRows={name:"Hide rows",args:{columns:common.zF,data:(0,common.bG)(),sourceCode:"    import BootstrapTable from 'react-bootstrap-table-nextgen';\n\n    const columns = [{\n      dataField: 'id',\n      text: 'Product ID'\n    }, {\n      dataField: 'name',\n      text: 'Product Name'\n    }, {\n      dataField: 'price',\n      text: 'Product Price'\n    }];\n\n    const hiddenRowKeys = [1, 3];\n\n    <BootstrapTable keyField=\"id\" data={ products } columns={ columns } hiddenRows={ hiddenRowKeys } />\n    ",hiddenRows:[1,3]}},RowEvent={name:"Row event",args:{columns:common.zF,data:(0,common.bG)(),sourceCode:"    import BootstrapTable from 'react-bootstrap-table-nextgen';\n\n    const columns = [{\n      dataField: 'id',\n      text: 'Product ID'\n    }, {\n      dataField: 'name',\n      text: 'Product Name'\n    }, {\n      dataField: 'price',\n      text: 'Product Price'\n    }];\n\n    const rowEvents = {\n      onClick: (e, row, rowIndex) => {\n        console.log(`clicked on row with index: ${rowIndex}`);\n      },\n      onMouseEnter: (e, row, rowIndex) => {\n        console.log(`enter on row with index: ${rowIndex}`);\n      }\n    };\n\n    <BootstrapTable keyField='id' data={ products } columns={ columns } rowEvents={ rowEvents } />\n    ",rowEvents:{onClick:function onClick(e,row,rowIndex){console.log("clicked on row with index: ".concat(rowIndex))},onMouseEnter:function onMouseEnter(e,row,rowIndex){console.log("enter on row with index: ".concat(rowIndex))}}}};CustomizeRowStyle.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},CustomizeRowStyle.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_CustomizeRowStyle$pa=CustomizeRowStyle.parameters)||void 0===_CustomizeRowStyle$pa?void 0:_CustomizeRowStyle$pa.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  name: \"Customize row style\",\n  args: {\n    mode: \"customize\",\n    columns: columns,\n    data: productsGenerator(),\n    sourceCode1: `\\\n    import BootstrapTable from 'react-bootstrap-table-nextgen';\n\n    const columns = [{\n      dataField: 'id',\n      text: 'Product ID'\n    }, {\n      dataField: 'name',\n      text: 'Product Name'\n    }, {\n      dataField: 'price',\n      text: 'Product Price'\n    }];\n\n    const rowStyle = { backgroundColor: '#c8e6c9' };\n\n    <BootstrapTable keyField='id' data={ products } columns={ columns } rowStyle={ rowStyle } />\n    `,\n    rowStyle1: {\n      backgroundColor: '#c8e6c9'\n    },\n    sourceCode2: `\\\n    const columns = [{\n      dataField: 'id',\n      text: 'Product ID'\n    }, {\n      dataField: 'name',\n      text: 'Product Name'\n    }, {\n      dataField: 'price',\n      text: 'Product Price'\n    }];\n\n    const rowStyle2 = (row, rowIndex) => {\n      const style = {};\n      if (row.id > 3) {\n        style.backgroundColor = '#c8e6c9';\n      } else {\n        style.backgroundColor = '#00BFFF';\n      }\n\n      if (rowIndex > 2) {\n        style.fontWeight = 'bold';\n        style.color = 'white';\n      }\n\n      return style;\n    };\n\n    <BootstrapTable keyField='id' data={ products } columns={ columns } rowStyle={ rowStyle2 } />\n    `,\n    rowStyle2: (row: any, rowIndex: number) => {\n      const style = {\n        backgroundColor: \"\",\n        fontWeight: \"\",\n        color: \"\"\n      };\n      if (row.id > 3) {\n        style.backgroundColor = '#c8e6c9';\n      } else {\n        style.backgroundColor = '#00BFFF';\n      }\n      if (rowIndex > 2) {\n        style.fontWeight = 'bold';\n        style.color = 'white';\n      }\n      return style;\n    }\n  }\n}"},null===(_CustomizeRowStyle$pa2=CustomizeRowStyle.parameters)||void 0===_CustomizeRowStyle$pa2||null===(_CustomizeRowStyle$pa3=_CustomizeRowStyle$pa2.docs)||void 0===_CustomizeRowStyle$pa3?void 0:_CustomizeRowStyle$pa3.source)})}),CustomizeRowClass.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},CustomizeRowClass.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_CustomizeRowClass$pa=CustomizeRowClass.parameters)||void 0===_CustomizeRowClass$pa?void 0:_CustomizeRowClass$pa.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  name: \"Customize row class\",\n  args: {\n    mode: \"customize\",\n    columns: columns,\n    data: productsGenerator(),\n    sourceCode1: `\\\n    import BootstrapTable from 'react-bootstrap-table-nextgen';\n\n    const columns = [{\n      dataField: 'id',\n      text: 'Product ID'\n    }, {\n      dataField: 'name',\n      text: 'Product Name'\n    }, {\n      dataField: 'price',\n      text: 'Product Price'\n    }];\n\n    const rowClasses = 'custom-row-class';\n\n    <BootstrapTable keyField='id' data={ products } columns={ columns } rowClasses={ rowClasses } />\n    `,\n    rowClasses1: 'custom-row-class',\n    sourceCode2: `\\\n    const columns = [{\n      dataField: 'id',\n      text: 'Product ID'\n    }, {\n      dataField: 'name',\n      text: 'Product Name'\n    }, {\n      dataField: 'price',\n      text: 'Product Price'\n    }];\n\n    const rowClasses = (row, rowIndex) => {\n      let classes = null;\n\n      if (rowIndex > 2) {\n        classes = 'index-bigger-than-two';\n      }\n\n      return classes;\n    };\n\n    <BootstrapTable keyField='id' data={ products } columns={ columns } rowClasses={ rowClasses } />\n    `,\n    rowClasses2: (row: any, rowIndex: number) => {\n      let classes: string | null = null;\n      if (rowIndex > 2) {\n        classes = 'index-bigger-than-two';\n      }\n      return classes;\n    }\n  }\n}"},null===(_CustomizeRowClass$pa2=CustomizeRowClass.parameters)||void 0===_CustomizeRowClass$pa2||null===(_CustomizeRowClass$pa3=_CustomizeRowClass$pa2.docs)||void 0===_CustomizeRowClass$pa3?void 0:_CustomizeRowClass$pa3.source)})}),HideRows.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},HideRows.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_HideRows$parameters=HideRows.parameters)||void 0===_HideRows$parameters?void 0:_HideRows$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  name: \"Hide rows\",\n  args: {\n    columns: columns,\n    data: productsGenerator(),\n    sourceCode: `\\\n    import BootstrapTable from 'react-bootstrap-table-nextgen';\n\n    const columns = [{\n      dataField: 'id',\n      text: 'Product ID'\n    }, {\n      dataField: 'name',\n      text: 'Product Name'\n    }, {\n      dataField: 'price',\n      text: 'Product Price'\n    }];\n\n    const hiddenRowKeys = [1, 3];\n\n    <BootstrapTable keyField=\"id\" data={ products } columns={ columns } hiddenRows={ hiddenRowKeys } />\n    `,\n    hiddenRows: [1, 3]\n  }\n}"},null===(_HideRows$parameters2=HideRows.parameters)||void 0===_HideRows$parameters2||null===(_HideRows$parameters3=_HideRows$parameters2.docs)||void 0===_HideRows$parameters3?void 0:_HideRows$parameters3.source)})}),RowEvent.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},RowEvent.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_RowEvent$parameters=RowEvent.parameters)||void 0===_RowEvent$parameters?void 0:_RowEvent$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  name: \"Row event\",\n  args: {\n    columns: columns,\n    data: productsGenerator(),\n    sourceCode: `\\\n    import BootstrapTable from 'react-bootstrap-table-nextgen';\n\n    const columns = [{\n      dataField: 'id',\n      text: 'Product ID'\n    }, {\n      dataField: 'name',\n      text: 'Product Name'\n    }, {\n      dataField: 'price',\n      text: 'Product Price'\n    }];\n\n    const rowEvents = {\n      onClick: (e, row, rowIndex) => {\n        console.log(\\`clicked on row with index: \\${rowIndex}\\`);\n      },\n      onMouseEnter: (e, row, rowIndex) => {\n        console.log(\\`enter on row with index: \\${rowIndex}\\`);\n      }\n    };\n\n    <BootstrapTable keyField='id' data={ products } columns={ columns } rowEvents={ rowEvents } />\n    `,\n    rowEvents: {\n      onClick: (e: any, row: any, rowIndex: number) => {\n        console.log(`clicked on row with index: ${rowIndex}`);\n      },\n      onMouseEnter: (e: any, row: any, rowIndex: number) => {\n        console.log(`enter on row with index: ${rowIndex}`);\n      }\n    }\n  }\n}"},null===(_RowEvent$parameters2=RowEvent.parameters)||void 0===_RowEvent$parameters2||null===(_RowEvent$parameters3=_RowEvent$parameters2.docs)||void 0===_RowEvent$parameters3?void 0:_RowEvent$parameters3.source)})});var __namedExportsOrder=["CustomizeRowStyle","CustomizeRowClass","HideRows","RowEvent"]}}]);