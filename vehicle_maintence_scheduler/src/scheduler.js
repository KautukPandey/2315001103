function scheduleVehicles(vehicles, mechanicHours) {
    const sortedVehicles = [...vehicles].sort(
        (a, b) => b.Impact - a.Impact
    );

    let totalImpact = 0;
    let usedHours = 0;
    let selectedVehicles = [];

    for (const vehicle of sortedVehicles) {
        if (usedHours + vehicle.Duration <= mechanicHours) {
            selectedVehicles.push(vehicle);
            usedHours += vehicle.Duration;
            totalImpact += vehicle.Impact;
        }
    }

    return {
        selectedVehicles,
        totalImpact,
        usedHours,
    };
}

module.exports = scheduleVehicles;