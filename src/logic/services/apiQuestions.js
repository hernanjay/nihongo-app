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
