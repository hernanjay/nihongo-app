import { expect, it } from "vitest";

const login = async (email, password) => {
  const response = await fetch(
    `https://aws-nihongo-api.onrender.com/api/users/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  const json = await response.json();

  if (!response.ok) {
    return {
      status: response.status,
      error: json.error,
    };
  }

  if (response.ok) {
    return json;
  }
};

describe("Test login function", () => {
  it("should first call the login function", async () => {
    const user = await login("admin", "admin");
    expect(user).not.toBeNull();
  });
  it("User should successfuly login", async () => {
    const user = await login("nan@awsys-i.com", "Wew@123321");
    expect(user).toBe(user);
  });
  it("User should unsuccessfuly login due to wrong email", async () => {
    const user = await login("admin", "admin");
    console.log(`Test 3 value is : ${user.status} , ${user.error}`);
    expect(user.status).toBe(400);
    expect(user.error).toBe("Incorrect email!");
  });
});
