describe("isValidISBN10", function() {
    it("deve retornar true para um ISBN-10 válido", function() {
        expect(isValidISBN10("0306406152")).toBe(true);
    });

    it("deve retornar true para um ISBN-10 válido com hífens", function() {
        expect(isValidISBN10("0-306-40615-2")).toBe(true);
    });

    it("deve retornar false para um ISBN-10 inválido com tamanho incorreto", function() {
        expect(isValidISBN10("030640615")).toBe(false);
    });

    it("deve retornar false para um ISBN-10 inválido com caracteres não numéricos", function() {
        expect(isValidISBN10("03064061X2")).toBe(false);
    });

    it("deve retornar false para um ISBN-10 inválido com soma não divisível por 11", function() {
        expect(isValidISBN10("0306406151")).toBe(false);
    });
});
