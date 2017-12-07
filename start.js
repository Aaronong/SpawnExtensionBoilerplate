"use strict";
let { dataTypes, coreFunctions } = require("spawn-extension");
let extension = require("./extension");

extension(coreFunctions, dataTypes);
