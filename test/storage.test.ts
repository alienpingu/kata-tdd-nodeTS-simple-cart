import Storage from '../src/model/storage';

let storage = new Storage();

describe("get Product", () => {
    it("Should return Product for name know", () => expect(storage.getProduct("Iceberg 🥬")).toStrictEqual(expect.any(Object)));
    it("Should return null for name unknow", () => expect(storage.getProduct("unknow")).toStrictEqual(null));
});

describe("get Product QTY", () => {
    it("Should return Product qty for name know", () => expect(storage.getProductQuantity("Iceberg 🥬")).toStrictEqual(expect.any(Number)));
    it("Should return null for name unknow", () => expect(storage.getProductQuantity("unknow")).toStrictEqual(null));
});
