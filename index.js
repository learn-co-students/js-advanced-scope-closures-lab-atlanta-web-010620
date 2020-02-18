function produceDrivingRange(range) {
    return function (firstst, secondst) {
        let distance = Math.abs(parseInt(firstst) - parseInt(secondst));
        let difference = distance - range
        if (distance < range) {
            return `within range by ${-difference}`
        } else {
            return `${difference} blocks out of range`
        }
    }
}

function produceTipCalculator(percentage) {
    return function (fare) {
        return fare * percentage;
    }
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