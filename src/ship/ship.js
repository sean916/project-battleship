const ship = (x) => {
    const length = x;
    const positions = [];

    for (let i = 0; i < length; i++) {
        positions.push("untouched");
    }
    const hit = (y) => {
        positions[y] = "hit";
        return positions;
    }

    const isSunk = () => {
        const checkHit = (x) => {
            return x == "hit";
        }
        return positions.every(checkHit);
    }

    const coordinates = [];
    
    return { length, positions, hit, isSunk, coordinates };
};

export { ship };
