"use strict";
let { dataTypes, coreContext, extensionRecords } = require("spawn-extension");
let extension = require("./extension");

// These constants are irrelevant. Used in server for deconflicting.
const name = "extensionName";
const version = "extensionVersion";
let coreFunctions = coreContext(name, version);

extension(coreFunctions, dataTypes);

console.log(extensionRecords.getAllFVG());
console.log(
  extensionRecords.run(name, version, "Test FVG", { id: 4, rand: 0.6523 })
);
