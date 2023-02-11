export const percentage = (product) => {
    const mrp = product?.mrp;
    const selling_price = product?.selling_price;
    const percentage = Math.floor(((mrp - selling_price) * 100) / mrp);
    return percentage;
}