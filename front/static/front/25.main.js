(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./src/components/views/projects/ProjectUploadDocs.js":
/*!************************************************************!*\
  !*** ./src/components/views/projects/ProjectUploadDocs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/taras/simple2b/FOX/front/src/components/views/projects/ProjectUploadDocs.js: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (112:10)\n\n\u001b[0m \u001b[90m 110 | \u001b[39m            downloadFile\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdownloadFile}\u001b[0m\n\u001b[0m \u001b[90m 111 | \u001b[39m          \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 112 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33mCFormGroup\u001b[39m key\u001b[33m=\u001b[39m{\u001b[32m`fg-${document.id}`\u001b[39m}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 113 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33mCLabel\u001b[39m key\u001b[33m=\u001b[39m{\u001b[32m`lb-${document.id}`\u001b[39m} htmlFor\u001b[33m=\u001b[39m{document\u001b[33m.\u001b[39mid}\u001b[33m>\u001b[39m{document\u001b[33m.\u001b[39mname}\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mCLabel\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 114 | \u001b[39m            {document\u001b[33m.\u001b[39murl_to_doc \u001b[33m?\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 115 | \u001b[39m              \u001b[33m<\u001b[39m\u001b[33mCLink\u001b[39m\u001b[0m\n    at Object._raise (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:757:17)\n    at Object.raiseWithData (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:750:17)\n    at Object.raise (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:744:17)\n    at Object.jsxParseElementAt (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:4626:18)\n    at Object.jsxParseElement (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:4636:17)\n    at Object.parseExprAtom (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:4643:19)\n    at Object.parseExprSubscripts (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:9688:23)\n    at Object.parseMaybeUnary (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:9668:21)\n    at Object.parseExprOps (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:9538:23)\n    at Object.parseMaybeConditional (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:9511:23)\n    at Object.parseMaybeAssign (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:9466:21)\n    at Object.parseParenAndDistinguishExpression (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:10313:28)\n    at Object.parseExprAtom (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:10042:21)\n    at Object.parseExprAtom (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:4648:20)\n    at Object.parseExprSubscripts (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:9688:23)\n    at Object.parseMaybeUnary (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:9668:21)\n    at Object.parseExprOps (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:9538:23)\n    at Object.parseMaybeConditional (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:9511:23)\n    at Object.parseMaybeAssign (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:9466:21)\n    at Object.parseExpression (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:9418:23)\n    at Object.parseReturnStatement (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:11577:28)\n    at Object.parseStatementContent (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:11258:21)\n    at Object.parseStatement (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:11210:17)\n    at Object.parseBlockOrModuleBlockBody (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:11785:25)\n    at Object.parseBlockBody (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:11771:10)\n    at Object.parseBlock (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:11755:10)\n    at Object.parseFunctionBody (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:10758:24)\n    at Object.parseArrowExpression (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:10727:10)\n    at Object.parseParenAndDistinguishExpression (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:10341:12)\n    at Object.parseExprAtom (/home/taras/simple2b/FOX/front/node_modules/@babel/parser/lib/index.js:10042:21)");

/***/ })

}]);
//# sourceMappingURL=25.main.js.map