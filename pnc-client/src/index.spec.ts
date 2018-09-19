import "jasmine";
import { fetchRepos } from ".";

describe("pnc client", () => {
    it("should fetch supported github operations", async () => {
        let result = await fetchRepos();

        expect(result).toBeDefined();
        expect(result.current_user_url).toEqual("https://api.github.com/user");
    });
});