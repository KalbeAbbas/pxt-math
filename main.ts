namespace Math {

    //% blockId="truncDec"
    //% block="Truncate number %num to %dec decimal places"
    export function truncate_decimal(num: number, dec: number):number {
        let floor_num = Math.floor(num)
        let str_num = num.toString().substr(0, floor_num.toString().length + 1 + dec)
        let final_num = parseFloat(str_num)

        return final_num

    }
}
