import { describe,it,expect } from "vitest";

const signup = async (username, email, password, confirmPassword) => {
    // setIsLoading(true);
    const response = await fetch(
      `${import.meta.env.VITE_LOCALHOST_API}/api/users/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword,
        }),
      }
    );

    // const json = await response.json();

    if (!response.ok) {
        return response.status;
    }

    if (response.ok) {
        return 200;
    }
  };

describe("User Registration UT/IT v1", () => {
    it("UT2-001 - Empty one or more user's credentials (username: null,email: null, password: null, and/or verify password: null)", async () => {
        const user = await signup("junrel",null,null,null);
        expect(user).toBe(400);
    },500)
    it("UT2-002 - Invalid server provider (not @awsys-i.com) (email: _______@gmail.com / ______@yahoo.com)", async () => {
        const user = await signup("junrel","junrel@yahoo.com","Iam@1234","Iam@1234");
        expect(user).toBe(400);
    },500)
    it("UT2-003 - Not reached password's required length (password < required length)", async () => {
        const user = await signup("junrel","junrel@awsys-i.com","Iam@123","Iam@123");
        expect(user).toBe(400);
    },500)
    it("UT2-004 - Not contain at least one uppercase (password = alje@999)", async () => {
        const user = await signup("junrel","junrel@awsys-i.com","alje@999","alje@999");
        expect(user).toBe(400);
    },500)
    it("UT2-005 - Not contain at least one lowercade (password = ALJE@999)", async () => {
        const user = await signup("junrel","junrel@awsys-i.com","ALJE@999","ALJE@999");
        expect(user).toBe(400);
    },500)
    it("UT2-006 - Not contain at least one numerical figure (password = Alje@cera)", async () => {
        const user = await signup("junrel","junrel@awsys-i.com","Alje@cera","Alje@cera");
        expect(user).toBe(400);
    },500)
    it("UT2-007 - Not contain at least one special character (password = Alje9999)", async () => {
        const user = await signup("junrel","junrel@awsys-i.com","Alje9999","Alje9999");
        expect(user).toBe(400);
    },500)
    it("UT2-008 - Contains Japanese characters (e.g , ひらがな、カタカナ、漢字)", async () => {
        const user = await signup("junrel","junrel@awsys-i.com","大変だった@19","大変だった@19");
        expect(user).toBe(400);
    },500)
    it("UT2-009 - Password and Verify password did not match (password != verify password)", async () => {
        const user = await signup("junrel","junrel@awsys-i.com","Alje9999","alje@999");
        expect(user).toBe(400);
    },500)
    // it("UT2-0010 - User's registered successfully", async () => {
    //     const user = await signup("junrel","jun@awsys-i.com","June@123","Jun@123");
    //     expect(user).toBe(200);
    // })
    it("UT2-011 - User's record already exist", async () => {
        const user = await signup("james.alwin","james.aljecera@awsys-i.com","Alje@999","Alje@999");
        expect(user).toBe(400);
    },1000)
})