export const SIZE_SHARES = new Map([
    ['SM', 0.1], // 10% of the total
    ['M', 0.24], // 24% of the total
    ['L', 0.32], // 32% of the total
    ['XL', 0.24], // 24% of the total
    ['2XL', 0.1] // 10% of the total
]); // 100% of the total

export const SIZES = Array.from(SIZE_SHARES.keys());
