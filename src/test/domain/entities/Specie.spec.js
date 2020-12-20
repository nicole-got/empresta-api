const { expect } = require("chai");
const Specie = require("../../../domain/entitities/Specie");
describe("Domain :: Entities :: Specie", () => {
    describe("new Specie", () => {
        context("when we create a new specie", () => {
            it("return specie", () => {
                const specieDomain = new Specie("1", "Teste");
                expect(specieDomain.code).to.eql("1");
                expect(specieDomain.description).to.eql("Teste");
            });
        });
        context("when we change a created species", () => {
            it("return specie", () => {
                const specieDomain = new Specie("1", "Teste");
                specieDomain.code = "2";
                specieDomain.description = "Teste";
                expect(specieDomain.code).to.eql("2");
                expect(specieDomain.description).to.eql("Teste");
            });
        });
    });
});
