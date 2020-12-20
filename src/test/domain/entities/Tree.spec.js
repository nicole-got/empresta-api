const { expect } = require("chai");
const Tree = require("../../../domain/entitities/Tree");
describe("Domain :: Entities :: Tree", () => {
    describe("new Tree", () => {
        context("when we create a new Tree", () => {
            it("return Tree", () => {
                const treeDomain = new Tree("1", "Teste", "Teste", "Teste");
                expect(treeDomain.code).to.eql("1");
                expect(treeDomain.description).to.eql("Teste");
                expect(treeDomain.age).to.eql("Teste");
                expect(treeDomain.specie).to.eql("Teste");
            });
        });
        context("when we change a created Trees", () => {
            it("return Tree", () => {
                const treeDomain = new Tree("1", "Teste", "Teste", "Teste");
                treeDomain.code = "2";
                treeDomain.description = "Teste";
                expect(treeDomain.code).to.eql("2");
                expect(treeDomain.description).to.eql("Teste");
                expect(treeDomain.age).to.eql("Teste");
                expect(treeDomain.specie).to.eql("Teste");
            });
        });
    });
});
