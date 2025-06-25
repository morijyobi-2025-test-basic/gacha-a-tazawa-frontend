const resultColor = (result) => {
    switch (result) {
        case "S":
            return "#ff0000";
        case "A":
            return "#0000ff";
        case "B":
            return "#00ff00";
        case "C":
            return "#666666";
        default:
            return "#000000";
    }
};

export default resultColor;