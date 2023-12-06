export async function fetchQuestions(level, type, set) {
    const res = await fetch(
        `${
            import.meta.env.VITE_LOCALHOST_API
        }/api/questions/${level}-${type}-exercise-${set}`
    );

    const json = await res.json();

    if (!res.ok) {
        console.log(json.error);
        return null;
    }

    return json;
}

export async function fetchQuestionsByIds(idPerQuestion) {
    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/questions/find-qn-by-ids`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                idPerQuestion,
            }),
        }
    );

    const json = await res.json();

    if (!res.ok) {
        console.log(json.error);
        return null;
    }

    return json;
}

export async function fetchCountQuestionsByLevelTypeSet() {
    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/questions/count-by-sets`
    );

    const json = await res.json();

    if (!res.ok) {
        console.log(json.error);
        return null;
    }

    return json;
}

export async function addQuestions(questions) {
    const token = JSON.parse(localStorage.getItem("token"));

    if (!token) {
        return {
            status: 0,
            json: { error: "Authentication failed! Please login first!" },
        };
    }

    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/questions/create`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                questions,
            }),
        }
    );

    const json = await res.json();

    if (!res.ok) {
        console.error(json.error);
        return { status: 0, json };
    }

    if (res.ok) return { status: 1, json };
}
