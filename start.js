"use strict";
let { dataTypes, coreFunctions } = require("spawn-extension");
let extension = require("./index");

extension(coreFunctions, dataTypes);
