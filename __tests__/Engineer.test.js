const Engineer = require("../lib/Engineer");

test("Test GitHub account", () => {
    const testjob = "GitHubUser";
    const e = new Engineer("My Name", 1, "name@email.com", testjob, "Engineer");
    expect(e.github).toBe(testjob);
});

test("Test getjob() to return \"Engineer\"", () => {
    const testjob = "Engineer";
    const e = new Engineer("My Name", 1, "name@email.com", "GitHub", "Engineer");
    expect(e.getjob()).toBe(testjob);
});

test("Test should return getGithub()", () => {
    const testjob = "GitHub";
    const e = new Engineer("My Name", 1, "name@email.com", testjob, "Engineer");
    expect(e.getGithub()).toBe(testjob);
});