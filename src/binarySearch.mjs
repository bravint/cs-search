export const binarySearch = (list, item) => {
    const t0 = performance.now();

    let left = 0;
    let right = list.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (list[mid] === item) {
            const t1 = performance.now();
            console.log('binary search took', t1 - t0, 'ms');

            return item;
        }
    
        list[mid] < item ? (left = mid + 1) : (right = mid - 1);
    }

    return -1;
};