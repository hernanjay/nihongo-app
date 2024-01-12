const token = JSON.parse(localStorage.getItem("token"));

export async function fetchAllQuestions() {
    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/questions/all`
    );

    const json = await res.json();

    if (!res.ok) {
        console.error(json.error);
        throw new Error("Fetching questions failed");
    }

    return json;
}

export async function fetchQuestions(level, type, set) {
    const res = await fetch(
        `${
            import.meta.env.VITE_LOCALHOST_API
        }/api/questions/${level}-${type}-exercise-${set}`
    );

    const json = await res.json();

    if (!res.ok) {
        console.error(json.error);
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
        console.error(json.error);
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
        console.error(json.error);
        throw new Error(`${json.error}`);
    }

    return json;
}

export async function addQuestionsAPI(questions) {
    if (!token) {
        throw new Error("Authentication failed! Please login first!");
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
        throw new Error(`${json.error}`);
    }

    return json;
}

export async function fetchQuestionsType(type) {
    if (!type) throw new Error("Type is empty");
    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/questions/get-by-type`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                type,
            }),
        }
    );

    const json = await res.json();

    if (!res.ok) {
        console.error(json.error);
        return { status: 0, json };
    }

    return { status: 1, json };
}

export async function deleteQuestionAPI(questionId) {
    if (!token) {
        throw new Error("Authentication failed! Please login first!");
    }

    if (!questionId) {
        throw new Error("Question ID not found");
    }

    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/questions/delete`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                questionId,
            }),
        }
    );

    const json = await res.json();

    if (!res.ok) {
        console.error(json.error);
        throw new Error(`${json.error}`);
    }

    return json;
}

export async function deleteQuestionWithGradesAPI(questionId) {
    if (!token) {
        throw new Error("Authentication failed! Please login first!");
    }

    if (!questionId) {
        throw new Error("Question ID not found");
    }

    const res = await fetch(
        `${
            import.meta.env.VITE_LOCALHOST_API
        }/api/questions/delete-question-grades`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                questionId,
            }),
        }
    );

    const json = await res.json();

    if (!res.ok) {
        console.error(json.error);
        throw new Error(`${json.error}`);
    }

    return json;
}

export async function deleteQuestionBySetAPI(level, type, set) {
    if (!token) {
        throw new Error("Authentication failed! Please login first!");
    }

    if (!level) throw new Error(`level is ${level}`);
    if (!type) throw new Error(`type is ${type}`);
    if (!set) throw new Error(`set is ${set}`);

    const res = await fetch(
        `${
            import.meta.env.VITE_LOCALHOST_API_3000
        }/api/questions/delete-by-set`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                level,
                type,
                set,
            }),
        }
    );

    const json = await res.json();

    if (!res.ok) {
        console.error(json.error);
        throw new Error(json.error);
    }

    return json;
}

export async function updateQuestionAPI(question) {
    const {
        _id: questionId,
        question: qn,
        options,
        type,
        level,
        set,
        answer,
        optionsTranslate,
        questionTranslate,
    } = question;

    if (!token) {
        throw new Error("Authentication failed! Please login first!");
    }

    if (!question) {
        throw new Error("Question not found");
    }

    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API_3000}/api/questions/update`,
        {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                questionId,
                question: qn,
                options,
                type,
                level,
                set,
                answer,
                optionsTranslate,
                questionTranslate,
            }),
        }
    );

    const json = await res.json();

    if (!res.ok) {
        console.error(json.error);
        throw new Error(`${json.error}`);
    }

    return json;
}
