const { getDepots, getTasks } = require("./api");

(async () => {
  try {
    await Log(
        "backend",
        "info",
        "utils",
        "Calling depot API"
    );
    const depots = await getDepots();
    const tasks = await getTasks();

    console.log("DEPOTS:");
    console.dir(depots, { depth: null });

    console.log("TASKS:");
    console.dir(tasks, { depth: null });
  } catch (err) {
    console.error(err.response?.data || err.message);
    
  }
})();