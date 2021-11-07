function assignGrade(score) {
    if (i > 90) {
      return "A";
    } else if (i > 80) {
      return "B";
    } else if (i > 70) {
      return "C";
    } else if (i > 65) {
      return "D";
    } else {
      return "E";
    }
};

for (i=60; i<=100; i++) {
    const result = assignGrade(i);
    console.log("For scoring", i, "points, you get an", result);
}

console.log("Gefeliciteerd, u bent geslaagd!");
