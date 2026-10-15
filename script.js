// Завдання 1

const delayedPromise = (value, delay) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), delay);
    });
};

const promises = [
    delayedPromise('Apple', 2000),
    delayedPromise('Banana', 1000),
    delayedPromise('Orange', 3000),
    delayedPromise('Grape', 1500),
    delayedPromise('Mango', 2500),
];

Promise.all(promises)
    .then(results => console.log(results))
    .catch(error => console.error(error));


// Завдання 2

const randomDelay = value => {
    const delay = Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);

    return new Promise(resolve => {
        setTimeout(() => resolve(value), delay);
    });
};

const racePromises = [
    randomDelay('Apple'),
    randomDelay('Banana'),
    randomDelay('Orange'),
    randomDelay('Grape'),
    randomDelay('Mango'),
];

Promise.race(racePromises)
    .then(result => console.log(result))
    .catch(error => console.error(error));