const Employee = require ("./Employee");

class Manager extends Employee {
    constructor (name, id, email, phoneNo) {
        super (name, id, email);
        this.phoneNo = phoneNo;
    }
    getjob() {
        return "Manager";
    }
    getPhoneNo() {
        return this.phoneNo;
    }
}

module.exports = Manager;