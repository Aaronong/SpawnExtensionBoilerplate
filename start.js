"use strict";
let { dataTypes, coreFunctions } = require("spawn-extension");
let extension = require("./extension");

// These constants are irrelevant. Used in server for deconflicting.
const name = "extensionName";
const version = "extensionVersion";

extension(coreFunctions(name, version), dataTypes);
