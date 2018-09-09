const getQuestions = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve([{
            id: 1,
            category: {
                id: 1,
                name: 'hospitality',
            },
            question: 'What is Deep Knowledge Network?',
            reward: {
                question: 'one',
                token: 10
            }
        },{
            id: 2,
            category: {
                id: 1,
                name: 'hospitality',
            },
            question: 'Where can Deep Knowledge Network can run?',
            reward: {
                question: 'one',
                token: 10
            }
        }, {
            id: 3,
            category: {
                id: 1,
                name: 'hospitality',
            },
            question: 'How will Deep Knowledge Network benefit you?',
            reward: {
                question: 'one',
                token: 10
            }
        }])
    }, 2000);
});
export {
    getQuestions, // eslint-disable-line
}
