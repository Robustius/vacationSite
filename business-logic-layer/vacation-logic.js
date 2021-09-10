const dal = require("../data-access-layer/dal");


async function getAllVacationsAsync() {
    try {
        const vacations = await dal.executeQueryAsync(
            `
            select * from vacations     
        `
        );
        return vacations
    } catch (error) {
        console.log(error.message)
    }
}
async function addVacationAsync(vac) {
    try {
        const result = await dal.executeQueryAsync(
            `
    insert into vacations 
    (description,destination,image,startDate,endDate,price)
    values
    ('${vac.description}','${vac.destination}','${vac.imageName}','${vac.date}','${vac.endDate}','${vac.price}')`
        );
        return result;
    }
    catch (error) {
        return error;
    }
}
module.exports = {
    getAllVacationsAsync,
    addVacationAsync,
}