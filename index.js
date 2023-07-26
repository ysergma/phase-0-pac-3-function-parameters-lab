
const introduction= function(name){
    return `Hi, my name is ${name}.`
}

const introductionWithLanguage= function(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

const introductionWithLanguageOptional= function(name, language="JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}