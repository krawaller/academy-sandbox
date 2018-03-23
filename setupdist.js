const fsx = require("fs-extra");
const path = require("path");

const output = path.resolve(__dirname, "dist");

fsx.removeSync(output);

fsx.copySync(path.resolve(__dirname, "static"), output);
