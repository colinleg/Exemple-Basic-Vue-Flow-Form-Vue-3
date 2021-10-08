import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form';

let generateVffQuestion = function(_uuid, _title, _codeType, _help, _arrayChoices) {
    /** multiple : signifie qu'il y a plusieurs bonnes réponses possibles */
    let question = new QuestionModel({
        id: _uuid,
        title: _title,
        helpText: _help,
        // active ou désactive le texte en dessous de la question
        helpTextShow: false,
        multiple: true,
        required: true,
        options: []
            // ce que l'user répond : probleme -> la valeur du label ou de value ? 
            // answer : []

    });

    // Définition du type grâce à un mot-clé

    switch (_codeType) {
        case 'ChoiceMultiple':
            question.type = QuestionType.MultipleChoice
            break;

        case 'break':
            question.type = QuestionType.SectionBreak
            break;

    }

    // Définition des choix 

    for (let i = 0; i < _arrayChoices.length; i++) {

        let choice = new ChoiceOption({
            label: _arrayChoices[i].label,
            value: _arrayChoices[i].value
        })

        question.options.push(choice);

    }

    return question;
}

export { generateVffQuestion };