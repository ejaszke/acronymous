import AcronymException from './acronymException'

export default class Acronym {
    static generate(fullName) {
        if (!fullName) {
            throw new AcronymException('Name should not be empty')
        }
        return fullName.toUpperCase()
    }
}