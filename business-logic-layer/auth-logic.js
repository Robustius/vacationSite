const { response } = require("express");
const jwt = require("jsonwebtoken");
const dal = require("../data-access-layer/dal");

async function loginAsync(credentials) {
    const user = await dal.executeQueryAsync(
        `
            select * from members 
            where username='${credentials.username}'
            and password='${credentials.password}'
        `
    );
    if (!user || user.length < 1) return null;
    delete user[0].password;
    // user.token = jwt.sign({ user }, config.jwtKey, { expiresIn: "5h" });

    user[0].token = jwt.sign({ user: user[0] }, "zot hahizdamnut lenasot et jey dablyou tea", { expiresIn: "5 minutes" });
    return user[0];
}

async function registerAsync(reg) {

    const usertaken = await dal.executeQueryAsync(`
        select username from members where username='${reg.username}'`
    );
    if (usertaken.length >= 1) {
        return (`${reg.username} is already Taken!`)
    } else
        try {
            const result = await dal.executeQueryAsync(
                `
            insert into members 
            (firstName,lastName,username,password)
            values
            ('${reg.firstName}','${reg.lastName}', '${reg.username}','${reg.password}')
        `
            );
            return result;
        }
        catch (error) {
            return error;
        }
}



module.exports = {
    //  isUsernameTaken,
    registerAsync,
    loginAsync
};