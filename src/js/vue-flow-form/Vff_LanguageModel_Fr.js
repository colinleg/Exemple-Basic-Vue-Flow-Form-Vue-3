import { LanguageModel } from '@ditdot-dev/vue-flow-form';

const vff_model_fr = new LanguageModel({
    enterKey: 'Entrée',
    shiftKey: 'Shift',
    ok: 'Ok',
    continue: 'Continuer',
    skip: 'Passer',
    pressEnter: '( ou Entrée )',
    multipleChoiceHelpText: 'Vous pouvez choisir plusieurs réponses',
    /** Vous ne pouvez choisir qu\'une seule réponse */
    multipleChoiceHelpTextSingle: '',
    otherPrompt: 'Autre',
    placeholder: 'Tapez votre réponse ici...',
    submitText: 'Valider',
    longTextHelpText: ':shiftKey + :enterKey pour aller à la ligne',
    prev: 'Précedent',
    next: 'Suivant',
    percentCompleted: ':percent% ',
    invalidPrompt: 'Le champ est invalide',
    thankYouText: 'Merci !',
    successText: 'Le contenu a bien été envoyé !',
    ariaOk: 'Cliquer pour continuer',
    ariaRequired: 'Cette étape est nécessaire',
    ariaPrev: 'Etape précédente',
    ariaNext: 'Etape suivante',
    ariaSubmitText: 'Cliquez pour envoyer',
    ariaMultipleChoice: 'Tapez :letter pour sélectionner',
    ariaTypeAnswer: 'Tapez votre réponse ici',
    errorAllowedFileTypes: 'Type de fichier invalide. Les fichiers autorisés sont :fileTypes.',
    errorMaxFileSize: 'Fichier(s) trop lourds. La taille maximum est : :size.',
    errorMinFiles: 'Trop peu de fichiers ajoutés. Le nombre minimum de fichier est de: :min.',
    errorMaxFiles: 'Trop de fichiers ajoutés. Le nombre maximum de fichiers est de: :max.',
});

export { vff_model_fr };