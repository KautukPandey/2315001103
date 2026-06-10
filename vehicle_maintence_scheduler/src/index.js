const { getDepots, getTasks } = require("./api");
const scheduleVehicles = require("./scheduler");
const Log = require("../../logging_middleware/src/logger");

(async () => {
    try {
        await Log(
            "backend",
            "info",
            "utils",
            "Vehicle scheduler started"
        );

        const depotData = await getDepots();
        const vehicleData = await getTasks();

        const depots = depotData.data;
        const vehicles = vehicleData.depot;

        for (const depot of depots) {
            const result = scheduleVehicles(
                vehicles,
                depot.MechanicHours
            );

            await Log(
                "backend",
                "info",
                "utils",
                `Processed depot ${depot.DepotID}`
            );

            console.log("Depot:", depot.DepotID);
            console.log("Available Hours:", depot.MechanicHours);
            console.log("Used Hours:", result.usedHours);
            console.log("Total Impact:", result.totalImpact);
            console.log(
                "Selected Vehicles:",
                result.selectedVehicles.length
            );
        }

        await Log(
            "backend",
            "info",
            "utils",
            "Vehicle scheduler completed"
        );

    } catch (error) {
        await Log(
            "backend",
            "error",
            "utils",
            error.message
        );

        console.log(error.message);
    }
})();