const Employee = require("../lib/Employee");

test("Test initiate questions", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("Test Employee Name", () => {
    const name = "My Name";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Test Employee ID ", () => {
    const testjob = 1;
    const e = new Employee("My Name", testjob);
    expect(e.id).toBe(testjob);

});


test("Test Employee Email", () => {
    const testjob = "name@email.com";
    const e = new Employee("My Name", 1, testjob);
    expect(e.email).toBe(testjob);
});

test("Test getName", () => {
    const testjob = "My Name";
    const e = new Employee(testjob);
    expect(e.getName()).toBe(testjob);
});

test("Test getID", () => {
    const testjob = 1;
    const e = new Employee("My Name", testjob);
    expect(e.getId()).toBe(testjob);
});

test("Test getEmail", () => {
    const testjob = "name@email.com";
    const e = new Employee("My Name", 1, testjob);
    expect(e.getEmail()).toBe(testjob);
});

test("getjob() should return \"Employee\"", () => {
    const testjob = "Employee";
    const e = new Employee("My Name", 1, "name@email.com", "Employee");
    expect(e.getjob()).toBe(testjob);
});

test("Test Employee Queries", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("Test Set Email function", () => {
    const testjob = "name@email.com";
    const e = new Employee("My Name", 1, testjob);
    expect(e.email).toBe(testjob);
});

test("Test getName function", () => {
    const testjob = "My Name";
    const e = new Employee(testjob);
    expect(e.getName()).toBe(testjob);
});

test("Test getID function", () => {
    const testjob = 1;
    const e = new Employee("My Name", testjob);
    expect(e.getId()).toBe(testjob);
});

test("Test getEmail function", () => {
    const testjob = "name@email.com";
    const e = new Employee("My Name", 1, testjob);
    expect(e.getEmail()).toBe(testjob);
});

test("getjob() should return \"Employee\"", () => {
    const testjob = "Employee";
    const e = new Employee("My Name", 1, "name@email.com", "Employee");
    expect(e.getjob()).toBe(testjob);
});