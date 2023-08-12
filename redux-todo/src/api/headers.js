export const PlainJsonHeader = () => {
    return {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json",
    };
};

export const authJsonHeader = (token) => {
    return {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
    };
};
