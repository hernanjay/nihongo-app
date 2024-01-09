const token = JSON.parse(localStorage.getItem("token"));

// get the grades of this user
export async function fetchGrades(userId) {
    if (!userId) throw new Error("userId is empty");
    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/grades/user-grades`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId,
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

export async function fetchSpecificGrade(user, level, type, set) {
    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/grades/grade-by-set`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: user._id,
                questionSetId: `${level[1]}${type}${set}`,
            }),
        }
    );

    const json = await res.json();

    if (!res.ok) {
        return null;
    }

    return json;
}

export async function addScore(
    user,
    questions,
    questionIds,
    userAnswers,
    correctAnswers
) {
    const { level, type, set } = questions[0];
    // We need to sort the questionsId together with userAnswers so that it will be in synchronized
    // We need to Combine the arrays into a 2D array so that the answer and questions are the same index
    const combinedArray = questionIds.map((questionId, index) => [
        questionId,
        userAnswers[index],
    ]);

    // Sort the 2D array based on the first column (questionIds)
    // we need to sort the userAnswers together with questions because the API returns a sorted questions which is by questionId
    const sortedArray = combinedArray.sort((a, b) => a[0].localeCompare(b[0]));

    // Get back the userAnswers which are now sorted where every questions option, the userAnswers are one of them
    const sortedUserAnswers = sortedArray.map(
        ([questionId, userAnswer]) => userAnswer
    );

    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/grades/add-grades`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: user._id,
                questionSetId: `${level}${type}${set}`,
                idPerQuestion: questionIds,
                userAnswers: sortedUserAnswers,
                score: correctAnswers.length,
            }),
        }
    );

    const json = await res.json();

    if (!res.created) {
        console.log(json.error);
        return 0; // it means false
    }

    if (res.created) {
        return 1; // it means true
    }
}

export async function fetchTotalScoresAndItems(userId) {
    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/grades/scores-total`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId,
            }),
        }
    );

    const json = await res.json();

    if (!res.ok) console.log(json.error);

    if (res.ok) return json;
}

export async function deleteGradesByQuestionSetId(questionSetId) {
    if (!token) throw new Error(`Token is ${token}`);
    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/grades/delete-grades`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );

    const json = await res.json();

    if (!res.ok) {
        console.error(json.error);
        throw new Error("Failed to delete grades");
    }

    return json;
}
