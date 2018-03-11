export class RPGUtil {

    public static d( amount: number, sides: number ) : number {

       let output = 0;

       for ( let i = 0 ; i < amount ; i++ ) {

           output += Math.floor( Math.random() * sides ) + 1;
       }

       return output;
    }
}