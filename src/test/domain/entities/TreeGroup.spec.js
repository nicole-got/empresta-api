const { expect } = require("chai");
const TreeGroup = require("../../../domain/entitities/TreeGroup");
describe("Domain :: Entities :: TreeGroup", () => {
    describe("new TreeGroup", () => {
        context("when we create a new TreeGroup", () => {
            it("return TreeGroup", () => {
                const treeGroupDomain = new TreeGroup(
                    "1",
                    "Teste",
                    "Teste",
                    "Teste"
                );
                expect(treeGroupDomain.code).to.eql("1");
                expect(treeGroupDomain.name).to.eql("Teste");
                expect(treeGroupDomain.description).to.eql("Teste");
                expect(treeGroupDomain.tress).to.eql("Teste");
            });
        });
        context("when we change a created TreeGroups", () => {
            it("return TreeGroup", () => {
                const treeGroupDomain = new TreeGroup(
                    "1",
                    "Teste",
                    "Teste",
                    "Teste"
                );
                treeGroupDomain.code = "2";
                treeGroupDomain.description = "Teste";
                expect(treeGroupDomain.code).to.eql("2");
                expect(treeGroupDomain.description).to.eql("Teste");
                expect(treeGroupDomain.description).to.eql("Teste");
                expect(treeGroupDomain.tress).to.eql("Teste");
            });
        });
    });
});
