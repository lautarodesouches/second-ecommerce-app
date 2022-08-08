export class Input {

    value: string
    error: string

    constructor(value: string = '', error: string = '') {
        this.value = value
        this.error = error
    }

    setValue(value: string) {
        this.value = value
    }

    setError(error: string) {
        this.error = error
    }

}