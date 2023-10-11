// Code your solution in this file!

function distanceFromHqInBlocks(street) {
    if(street > 42) {
        return (street - 42)
    }
    return (42 - street)
}

function distanceFromHqInFeet(blocks) {
    if(blocks > 42) {
        return ((blocks - 42) * 264)
    }

    return ((42 - blocks) * 264)
}

function distanceTravelledInFeet(start, end) {
    if(start > end) {
        return (start - end) * 264
    } else {
        return (end - start) * 264
    }
}

function calculatesFarePrice(start, destination) {
    let diff = 0
    if(start > destination) {
        diff = start - destination
    } else if (start < destination) {
        diff = destination - start
    }

    let feet = diff * 264
    
    if(feet < 400) {
        return 0
    } else if(feet < 2000){
        return 2.56
    } else if(feet < 2500) {
        return 25
    } else if (feet > 2500) {
        const string = 'cannot travel that far'
        return string
    }
}
