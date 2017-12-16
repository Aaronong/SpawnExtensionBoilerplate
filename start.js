"use strict";
let { dataTypes, coreContext, extensionRecords } = require("spawn-extension");
let extension = require("./extension");

// These constants are irrelevant. Used in server for deconflicting.
const name = "extensionName";
const version = "extensionVersion";
let coreFunctions = coreContext("extName", "extVersion");

extension(coreFunctions, dataTypes);
