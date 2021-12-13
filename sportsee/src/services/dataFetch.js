
async function getData() {
    let userData =  await fetch("http://localhost:4000/user/12/")
        .then(response => response.json())
        .then(responseData => { return responseData.data })
    return userData;
}

async function getActivity() {
    let userActivity = await fetch("http://localhost:4000/user/12/activity")
        .then(response => response.json())
        .then(responseData => { return responseData.data })
    return userActivity;
}

async function getPerformance() {
    let userPerformance = await fetch("http://localhost:4000/user/12/performance")
        .then(response => response.json())
        .then(responseData => { return responseData.data })
    return userPerformance;
}

async function getAverageSession() {
    let userAverage = await fetch("http://localhost:4000/user/12/average-sessions")
        .then(response => response.json())
        .then(responseData => { return responseData.data })
    return userAverage;
}

export { getActivity, getAverageSession, getData, getPerformance }