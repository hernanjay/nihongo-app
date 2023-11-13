import { describe, expect, it } from "vitest";
import App from "../UI/Pages/Main/App";

describe("Tests If WebPage Runs Correctly", () => {
    it("App Render Test", () => {
        const result = App();
        expect(result).toBeVisible();
    });
});
