export function capitalizeWords(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

export function getPercentage(score, totalNumItems) {
    let scorePercentage;
    if (!isNaN(score) && !isNaN(totalNumItems))
        scorePercentage = Math.round((score / totalNumItems) * 100);

    return scorePercentage;
}

export function getQuestionStatus(score, totalNumItems) {
    const scorePercentage = getPercentage(score, totalNumItems);

    if (scorePercentage > 79) {
        return "Pass";
    } else if (scorePercentage < 80 && scorePercentage !== undefined) {
        return "Fail";
    } else {
        return "Pending";
    }
}
