const Log = require("./src/logger");

(async () => {
  await Log(
    "backend",
    "info",
    "utils",
    "Logger initialized successfully"
  );
})();