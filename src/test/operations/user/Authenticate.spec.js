const { expect } = require("chai");
const CreateAuthenticateOperation = require("../../../app/operations/authenticate/CreateAuthenticateOperation");
describe("Operations :: Authenticate :: Authenticate", () => {
    let createAuthenticateOperation;
    describe("Login", () => {
        context("when username and password are sent", () => {
            let createAuthenticateOperation;
            before(() => {
                const mockAuthenticateService = {
                    login: (user) =>
                        Promise.resolve({
                            token: "xyz",
                            id: "1",
                        }),
                };

                createAuthenticateOperation = CreateAuthenticateOperation({
                    authenticateService: mockAuthenticateService,
                });
            });
            it("return authenticate", async () => {
                const user = { email: "email@test.com", password: "123" };
                const authenticate = await createAuthenticateOperation.execute(
                    user
                );

                expect(authenticate.id).to.eql("1");
                expect(authenticate.token).to.eql("xyz");
            });
        });
    });
});
