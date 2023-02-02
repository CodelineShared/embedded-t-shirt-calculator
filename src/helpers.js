export function formatNumber(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'decimal',
    }).format(value);
}
