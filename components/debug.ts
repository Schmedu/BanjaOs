export function formatZodErrors(errors) {
    const res = Object.keys(errors).map((key) => ({
        key,
        message: errors[key].message
    }));

    return JSON.stringify(res, null, 2);
}
