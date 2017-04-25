import AcronymException from './acronymException'
import PhraseRemoval from './phraseRemoval'


export default class Acronym {
    
    static generate(fullName) {
        if (!fullName) {
            throw new AcronymException('Name should not be empty')
        }
        return PhraseRemoval.removePhrase(fullName.toUpperCase())
    }
    
    
}