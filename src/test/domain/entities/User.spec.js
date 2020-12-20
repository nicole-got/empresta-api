const { expect } = require("chai");
const User = require("../../../domain/entitities/User");
describe("Domain :: Entities :: User", () => {
    describe("new User", () => {
        context("when we create a new User", () => {
            it("return User", () => {
                const userDomain = new User(
                    "1",
                    "Test",
                    "Test",
                    "Test",
                    "Test"
                );
                expect(userDomain.id).to.eql("1");
                expect(userDomain.name).to.eql("Test");
                expect(userDomain.email).to.eql("Test");
                expect(userDomain.password).to.eql("Test");
                expect(userDomain.active).to.eql("Test");
            });
        });
        context("when we change a created Users", () => {
            it("return User", () => {
                const userDomain = new User(
                    "1",
                    "Test",
                    "Test",
                    "Test",
                    "Test"
                );
                userDomain.id = "2";
                userDomain.name = "Test";
                expect(userDomain.id).to.eql("2");
                expect(userDomain.name).to.eql("Test");
                expect(userDomain.email).to.eql("Test");
                expect(userDomain.password).to.eql("Test");
                expect(userDomain.active).to.eql("Test");
            });
        });
    });
});
