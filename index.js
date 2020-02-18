function produceDrivingRange(blockRange){
    return function range(block1, block2){
        const block1Int = parseInt(block1.slice(0,2)); 
        const block2Int = parseInt(block2.slice(0,2)); 
        const blockDifference = Math.abs(block1Int - block2Int);
        const blockRangeDifference = blockRange - blockDifference;
        if (blockRangeDifference <= 0){
            return `${Math.abs(blockRangeDifference)} blocks out of range`;
        }else {
            return `within range by ${Math.abs(blockRangeDifference)}`;
        }
    }
}

function produceTipCalculator(percent){
    return function anotherFun(num){
        return num * percent; 
    }
}

function createDriver(){
    let driverId = 0; 

    return class {
        constructor(name){
            this.name = name, 
            this.id = ++driverId
        }
    }
}