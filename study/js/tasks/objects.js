const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let result = `Мне ${plan.age} и я владею языками: `;

        for (let key in languages) {
            result += `${languages[key].toUpperCase()} `;
        }
        return result;
    }
};


function showExperience(plan) {

    return plan.skills.exp;
}

function showProgrammingLangs(plan) {
    let result = '';
    const {programmingLangs} = plan.skills;

    for (let key in programmingLangs) {
        result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return result;
}
