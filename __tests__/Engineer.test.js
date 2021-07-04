const Engineer = require("../lib/Engineer");

test("This should show GitHub account", () => {
    const testjob = "GitHubUser";
    const e = new Engineer("My Name", 1, "name@email.com", testjob, "Engineer");
    expect(e.github).toBe(testjob);
});

test("getjob() should return \"Engineer\"", () => {
    const testjob = "Engineer";
    const e = new Engineer("My Name", 1, "name@email.com", "GitHub", "Engineer");
    expect(e.getjob()).toBe(testjob);
});

test("This should show GitHUb account via getGithub()", () => {
    const testjob = "GitHub";
    const e = new Engineer("My Name", 1, "name@email.com", testjob, "Engineer");
    expect(e.getGithub()).toBe(testjob);
});