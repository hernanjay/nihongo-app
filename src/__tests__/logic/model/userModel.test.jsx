import { describe, expect, it } from "vitest";
import User from "../../../logic/model/userModel";

const user = new User("1", "admin", "admin", "admin@awsys-i.com");

describe("Tests For User Model", () => {
  it("User Model Username Getter/Setter Tests", () => {
    expect(user.getUserName()).toBe("admin");
    expect(user.setUserName("John")).toBe("John");
  });
  it("User Model Username Getter/Setter Validation Tests", () => {
    expect(user.getUserName()).not.toBeNull();
    expect(user.getUserName()).not.toBeUndefined();
    expect(user.setUserName(true)).toBe(400);
    expect(user.setUserName(1234)).toBe(400);
  });
});
