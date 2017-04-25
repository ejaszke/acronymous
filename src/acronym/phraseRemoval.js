const phrasesToRemove = [
    ' ',
    'PPHU'
]

export default class PhraseRemoval {
    
    static removePhrase(name) {
        
        phrasesToRemove.forEach(
            (phrase) => name = name.replace(phrase, '')
        )
        return name.substring(0, 16)
        
    }
}