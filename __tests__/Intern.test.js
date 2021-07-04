const Intern = require("../lib/Intern");

test("Test should show School", () => {
    const testjob = "UCF";
    const e = new Intern("My Name", 1, "name@email.com", testjob, "Intern");
    expect(e.school).toBe(testjob);
});

test("Test getjob() should return \"Intern\"", () => {
    const testjob = "Intern";
    const e = new Intern("My Name", 1, "name@email.com", "SchoolName", "Intern");
    expect(e.getjob()).toBe(testjob);
});

test("Test should retrun getSchool", () => {
    const testjob = "SchoolName";
    const e = new Intern("My Name", 1, "name@email.com", testjob, "Intern");
    expect(e.getSchool()).toBe(testjob);
});