import * as $ from "jquery"; // loads the installed npm module called "jquery" as variable $

import {stuff} from "./data"; // import the named export "data" from the file data.ts

$("#container").html(`
  <h1>${stuff.title}</h1>
  <p>${stuff.content}</p>
  <img class="nicepic" src="./finbild.jpg">
`);
