const{ buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("StudentDBModule", (m)=>{
    const students=m.contract("StudentsDB");
    return{students};
});