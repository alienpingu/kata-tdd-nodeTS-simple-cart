import Storage from '../src/model/storage';

let storage = new Storage();

describe("get Product", () => {
    it("Should return Product for name know", () => expect(storage.get("Iceberg 🥬")).toStrictEqual(expect.any(Object)));
    it("Should return null for name unknow", () => expect(storage.get("unknow")).toStrictEqual(null));
});

describe("get Product QTY", () => {
    it("Should return Product qty for name know", () => expect(storage.quantity("Iceberg 🥬")).toStrictEqual(expect.any(Number)));
    it("Should return null for name unknow", () => expect(storage.quantity("unknow")).toStrictEqual(null));
});
