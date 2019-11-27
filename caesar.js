import {ALPHABET} from './constants';

const rotation = (offset) => {
    const left = ALPHABET.slice(offset);
    const right = ALPHABET.slice(0, offset);
    return left.concat(right);
}

const caesar = (string, offset) => {
    array = string.split('')
    const library = {' ': ' ', '.':'.', ',': ',', '!': '!', '-': '-'};
    const encoded = rotation(offset);
    for (let i =0; i < ALPHABET.length; i++) {
        library[ALPHABET[i]] = encoded[i];
    }
    const result = array.map( (letter) => {
        return library[letter]
    })
    return result.join('');
}