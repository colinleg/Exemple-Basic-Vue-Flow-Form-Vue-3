<template>
  <div>
    <flow-form 
    ref="flowform"
    :questions="questions"
    :language="language"
    reverse="true"
  >

  </flow-form>

  </div>
</template>

<script>
import { FlowForm } from '@ditdot-dev/vue-flow-form'
import { vff_model_fr } from './js/vue-flow-form/Vff_LanguageModel_Fr'
import { QuestionModel, QuestionType, ChoiceOption } from '@ditdot-dev/vue-flow-form'

  export default {
    data(){
      return {
        language: vff_model_fr,
        questions: [
          new QuestionModel({
            id: 'test',
            title: 'Salut ça va ?',
            type: QuestionType.MultipleChoice,
            options: [
              new ChoiceOption({
                label: 'Ouais'
              }),
              new ChoiceOption({
                label: 'Bof'
               }),
              new ChoiceOption({
                label: 'Nan'
              })
            ]
          })
        ]
      }
      
    },
    components: {
      FlowForm
    },
  }
</script>

<style lang="css" scoped>
  @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css';
  @import url('./style/custom_vff_theme.css');
</style>