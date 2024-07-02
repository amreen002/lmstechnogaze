const ValidationaddQuestion =(formData)=>{

    let error={}
    if(!formData.Questions){
        error.Questions="Question is require"
    }
    if(!formData.Type){
        error.Type="Type is require"
    }
    if(!formData.Options1){
        error.Options1="Options 1 is require"
    }
    if(!formData.Options2){
        error.Options2="Options 2 is require"
    }
    if(!formData.Options3){
        error.Options3="Options 3 is require"
    }
    if(!formData.Options4){
        error.Options4="Options4 is require"
    }
    if(!formData.Answer){
        error.Answer="Answer is require"
    }
    if(!formData.QuizzeId){
        error.QuizzeId="Quizze is require"
    }
    if(!formData.CategoryId){
        error.CategoryId="Category is require"
    }

    return error

}
export default ValidationaddQuestion