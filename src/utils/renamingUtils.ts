
export const renamingText = (type: string) => {
    const text = type.toLowerCase();
    console.log(type);
    switch (text) {
        case 'boolean':
            return 'True / False';
        case 'multiple':
            return 'Multiple Choice';
        default:
            return type;
    };
};

export const capitalize = (text: string) => {
    const lower = text.toLowerCase();
    return text.charAt(0).toUpperCase() + lower.slice(1);
};