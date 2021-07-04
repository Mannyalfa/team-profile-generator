const Intern = require("../lib/Intern");

test("Should show School", () => {
    const testjob = "UCF";
    const e = new Intern("My Name", 1, "name@email.com", testjob, "Intern");
    expect(e.school).toBe(testjob);
});

test("getjob() should return \"Intern\"", () => {
    const testjob = "Intern";
    const e = new Intern("My Name", 1, "name@email.com", "SchoolName", "Intern");
    expect(e.getjob()).toBe(testjob);
});

test("Should provide School", () => {
    const testjob = "SchoolName";
    const e = new Intern("My Name", 1, "name@email.com", testjob, "Intern");
    expect(e.getSchool()).toBe(testjob);
});