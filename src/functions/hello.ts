


export const handle = async (event) => {
    return {
        statusCode: 201,
        body: JSON.stringify({
            message: "hello world"
        }),
        headers: {
            "Content-Type": "application/json",
        }
    };
}