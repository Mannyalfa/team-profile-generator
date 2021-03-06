const Manager = require("../lib/Manager");
//const Employee = require("../lib/Employee");

test("Test should provide phone number", () => {
    const testjob = 100;
    const e = new Manager("My Name", 1, "name@email.com", testjob, "Manager");
    expect(e.phoneNo).toBe(testjob);
});

test("Test getjob() to return \"Manager\"", () => {
    const testjob = "Manager";
    const e = new Manager("My Name", 1, "name@email.com", 100, "Manager");
    expect(e.getjob()).toBe(testjob);
});

test("Test should return getPhoneNo()", () => {
    const testjob = 1;
    const e = new Manager("My Name", 1, "name@email.com", testjob, "Manager");
    expect(e.getPhoneNo()).toBe(testjob);
});