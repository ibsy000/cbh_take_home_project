const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
    it("Returns the literal '0' when given no input", () => {
        const trivialKey = deterministicPartitionKey();
        expect(trivialKey).toBe("0");
    });
});



describe("deterministicPartitionKey", () => {
    it("Returns the candidate for trivial key '0'", () => {
        const trivialKey = deterministicPartitionKey("0");
        expect(trivialKey).toBe("5ae8f97ede3b9ae9f4b496c125d45d34edf13ce2f9e29c1c085ae0f499820173b86d731c4ca453d2e119b4ff63d3afd3ed5fdb9753fe222ef300d4f465f522ea");
    });
});