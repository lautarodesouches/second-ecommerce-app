export const capitalize = (sentence: string) => sentence && sentence[0].toUpperCase() + sentence.slice(1)

export const currencyFormat = (num: number) => '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')