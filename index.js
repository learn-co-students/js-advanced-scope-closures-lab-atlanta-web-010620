function produceDrivingRange(blockRange) {
    return function (block1, block2) {
        let distance = Math.abs(parseInt(block1) - parseInt(block2));
        let length = distance - blockRange
        if (distance < blockRange) {
            return `within range by ${-length}`
        } else {
            return `${length} blocks out of range`
        }
    }
}

function produceTipCalculator(price) {
    return function (percentage) {
        return price * percentage;
    };
}

function createDriver() {
    let driverId = 0;
    return class {
        constructor(name) {
            this.name = name;
            this.id = ++driverId;
        }

    }
}
