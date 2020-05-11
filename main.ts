namespace Math {

    /**
    * Truncates decimal number to decimal places, returns string
    */
    //% blockId="truncDec"
    //% block="Truncate number %num to %dec decimal places"
    export function truncate_decimal(num: number, dec: number): string {
        let floor_num = Math.floor(num)
        let str_num = num.toString().substr(0, floor_num.toString().length + 1 + dec)


        return str_num

    }

}
