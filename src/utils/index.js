export function formatPrice(currency) {
    return new Intl.NumberFormat('en', {
        style: 'currency',
        minimumFractionDigits: 2,
        currency
    });
}
