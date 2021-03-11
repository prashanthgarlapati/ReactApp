export const getUserDetails = async(data) => {
    const res = await fetch(`http://localhost:5000/${data}`);
    // console.log('res', res);
    return res.json();
}

// export const updateTasks = async(data) => {
//     const requestOptions = {
//         method: `POST`,
//         headers: {
//             'Content-type': `application/json`,
//         },
//         body: JSON.stringify(),
//     }
//     const res = await fetch(`http://localhost:5000/${data}`, requestOptions)
//     return res.json();
// }