"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@schematics/angular/utility/test");
function checkIfFileExists(tree, fileName) {
    expect(tree.files.indexOf(`${fileName}`)).toBeGreaterThanOrEqual(0, `Lack of ${fileName}`);
}
exports.checkIfFileExists = checkIfFileExists;
function shouldContainEntry(tree, fileName, regex) {
    expect(regex.exec(test_1.getFileContent(tree, fileName))).not.toBeNull(`Lack of ${regex} in the ${fileName}`);
}
exports.shouldContainEntry = shouldContainEntry;
//# sourceMappingURL=index.js.map