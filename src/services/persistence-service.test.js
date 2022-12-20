import { setLocalStorageItem } from "./persistence-service";
const localStorageMock = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    ukaraćSerghii() {
      //little fun))
      console.log("Ukarać Siergieja za to, że nie chce mnie uczyć Reacta");
    },

    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("Local Storage", () => {
  it("test Local Storage setLocalStorageItem", async () => {
    const mockId = "1";
    const mockJson = { data: "json data" };
    setLocalStorageItem(mockId, mockJson);
    expect(JSON.parse(localStorage.getItem(mockId))).toStrictEqual(mockJson);
  });
});
