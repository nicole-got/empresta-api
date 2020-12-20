const { expect } = require("chai");
const Harvest = require("../../../domain/entitities/Harvest");
describe("Domain :: Entities :: Harvest", () => {
    describe("new Harvest", () => {
        context("when we create a new harvest", () => {
            it("return harvest", () => {
                const harvestDomain = new Harvest(
                    "1",
                    "Test",
                    "Test",
                    "Test",
                    "Test"
                );
                expect(harvestDomain.code).to.eql("1");
                expect(harvestDomain.information).to.eql("Test");
                expect(harvestDomain.harvestDate).to.eql("Test");
                expect(harvestDomain.grossWeight).to.eql("Test");
                expect(harvestDomain.tree).to.eql("Test");
            });
        });
        context("when we change a created harvests", () => {
            it("return harvest", () => {
                const harvestDomain = new Harvest(
                    "1",
                    "Test",
                    "Test",
                    "Test",
                    "Test"
                );
                harvestDomain.code = "2";
                harvestDomain.information = "Teste2";
                expect(harvestDomain.code).to.eql("2");
                expect(harvestDomain.information).to.eql("Teste2");
                expect(harvestDomain.harvestDate).to.eql("Test");
                expect(harvestDomain.grossWeight).to.eql("Test");
                expect(harvestDomain.tree).to.eql("Test");
            });
        });
    });
});
