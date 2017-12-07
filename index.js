function registerExtension(coreFunctions, dataTypes) {
  let {
    SpawnID,
    SpawnRandom,
    SpawnString,
    SpawnBoolean,
    SpawnFloat,
    SpawnInteger,
    SpawnLastN,
    SpawnFVG
  } = dataTypes;

  const FVGdescriptor = {
    name: "Test FVG",
    description: "A field value generator used to test input validation",
    arguments: {
      id: { type: SpawnID },
      rand: { type: SpawnRandom },
      str: { type: SpawnString, defaultValue: "" },
      bool: { type: SpawnBoolean, defaultValue: true },
      float: { type: SpawnFloat, defaultValue: 0.4 },
      int: { type: SpawnInteger, defaultValue: 1 },
      lastN: { type: SpawnLastN(5), defaultValue: ["Bob", "HOLLY", ""] }
    },
    output: {
      type: SpawnString
    },
    generator: ({ id, rand, str, bool, float, int, lastN }) => {
      return JSON.stringify({ id, rand, str, bool, float, int, lastN });
    }
  };

  let testFVG = SpawnFVG(FVGdescriptor);

  coreFunctions.registerFVG(testFVG);
}

module.exports = registerExtension;
