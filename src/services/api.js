export const calculateTotalCost = async costs => {
  try {
    const response = await fetch("/api/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(costs)
    });

    const data = await response.json();
    return data.totalCost;
  } catch (error) {
    console.error("Error calculating total cost:", error);
    return 0;
  }
};
