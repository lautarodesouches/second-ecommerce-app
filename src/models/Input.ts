export class Input {

    private value: string
    private error: string

    constructor(value: string = '', error: string = '') {
        this.value = value
        this.error = error
    }

    public setValue(value: string): void {
        this.value = value
    }

    public setError(error: string): void {
        this.error = error
    }

    public getValue(): string {
        return this.value
    }

    public getError(): string {
        return this.error
    }

    // -----------------------------
    public testValue(regEx: RegExp): boolean {
        return regEx.test(this.value)
    }

    public isValueEmpty(): boolean {
        return this.value === ''
    }

}