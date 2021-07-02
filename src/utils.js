// check if objects have same key: value pairs
export const compareObjects = (o1, o2) => {
    if (o1 === o2) return true;
    if (o1 === null || o2 === null) return false;
    if (Object.keys(o1).length !== Object.keys(o2).length) return false;

    if (typeof o1 === 'object' && typeof o1 === 'object') {
        for (let key in o1) {
            if (!(key in o2)) return false;
            if (!compareObjects(o1[key], o2[key])) return false;
        }
    }

    return true;
}

// id generator for cart items
export const genID = () => Date.now().toString() + Math.random().toString(36).substr(2, 5);