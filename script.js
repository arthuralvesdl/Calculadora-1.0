document.addEventListener( 'DOMContentLoaded', () => {
    let arr = [];
    let num = '';
    let numeros = document.querySelectorAll( '.numero' );
    let operadores = document.querySelectorAll( '.operador' );
    let resultado = document.querySelectorAll( '.resultado' );
    let display = document.getElementById( 'display' );
    let ponto = document.getElementById( 'ponto' );
    let limpar = document.getElementById( 'limpar' );
    let obj = {
        clear: () => {
            arr = [];
            num = '';
            displayText( '0' );
            setTimeout( () => {
                displayText( 'Clear' );
            }, 500 );
        },
        numbers: () => {
            num += event.key;
            displayText( num );
        },
        operators: () => {
            if ( arr[0] == '0.' ) {
                arr[0] = num;
            }
            if ( num != '' ) {
                arr.push( num );
                num = '';

            }
            if ( arr.length == 3 ) {
                res = eval( arr.toString().replace( /,/g, '' ) ).toFixed( 2 );
                num = '';
                arr = [];
                arr.push( res );
                displayText( res + event.key );
            }
            else if ( num != '' ) {
                arr.push( num );
                num = '';

            }
            arr[1] = event.key;
            displayText( arr.toString().replace( /,/g, ' ' ) );
        },
        result: () => {

            if ( num != '' ) {
                arr.push( num );
                num = '';
            }
            if ( arr.length == 3 ) {
                res = eval( arr.toString().replace( /,/g, '' ) );
                num = '';
                arr = [];
                arr.push( res );
                displayText( res );
            }
        },
        point: () => {
            if ( num == '' ) {
                num = '0';
            }
            if ( num.indexOf( '.' ) == 1 ) {
                return;
            }
            num = num + ponto.textContent;
            displayText( num );
        }
    };

    eventKey();
    function eventKey () {
        document.addEventListener( 'keydown', ( event ) => {
            let el = event.key;
            let x = document.getElementById( el );
            function numberColor () {
                x.style.backgroundColor = '#BAE8E8dd';
                document.addEventListener( 'keyup', () => {
                    x.style.backgroundColor = '#BAE8E8';
                } );
            }
            function operatorColor () {
                x.style.backgroundColor = '#F6C667dd';
                document.addEventListener( 'keyup', () => {
                    x.style.backgroundColor = '#F6C667';
                } );
            }

            switch ( el ) {
                case 'Escape':
                    obj.clear();

                    break;
                case '0':
                    obj.numbers();
                    numberColor();
                    break;
                case '1':
                    obj.numbers();
                    numberColor();
                    break;
                case '2':
                    obj.numbers();
                    numberColor();
                    break;
                case '3':
                    obj.numbers();
                    numberColor();
                    break;
                case '4':
                    obj.numbers();
                    numberColor();
                    break;
                case '5':
                    obj.numbers();
                    numberColor();
                    break;
                case '6':
                    obj.numbers();
                    numberColor();
                    break;
                case '7':
                    obj.numbers();
                    numberColor();
                    break;
                case '8':
                    obj.numbers();
                    numberColor();
                    break;
                case '9':
                    obj.numbers();
                    numberColor();
                    break;
                case '+':
                    obj.operators();
                    operatorColor();
                    break;
                case '-':
                    obj.operators();
                    operatorColor();
                    break;
                case '*':
                    obj.operators();
                    operatorColor();
                    break;
                case '/':
                    obj.operators();
                    operatorColor();
                    break;
                case 'Enter':
                    obj.result();
                    break;
                case ',':
                    obj.point();
                    break;
                case '.':
                    obj.point();
                    break;
                default:
                    break;
            }
        } );
    }

    limpar.addEventListener( 'click', () => {
        arr = [];
        num = '';
        displayText( '0' );
        setTimeout( () => {
            displayText( 'Clear' );
        }, 500 );

    } );

    function displayText ( el ) {
        display.innerHTML = el;
    }

    numeros.forEach( ( numero ) => {
        numero.addEventListener( 'click', () => {
            num += numero.id;
            displayText( num );
        } );

    } );

    ponto.addEventListener( 'click', () => {
        if ( num == '' ) {
            num = '0';
        }
        if ( num.indexOf( '.' ) == 1 ) {
            return;
        }
        num = num + ponto.textContent;
        displayText( num );
    } );

    operadores.forEach( ( operador ) => {
        operador.addEventListener( 'click', () => {
            if ( arr[0] == '0.' ) {
                arr[0] = num;
            }
            if ( num != '' ) {
                arr.push( num );
                num = '';

            }
            if ( arr.length == 3 ) {
                res = eval( arr.toString().replace( /,/g, '' ) ).toFixed( 2 );
                num = '';
                arr = [];
                arr.push( res );
                displayText( res + operador.id );
            }
            else if ( num != '' ) {
                arr.push( num );
                num = '';

            }
            arr[1] = operador.id;
            displayText( arr.toString().replace( /,/g, ' ' ) );
        } );
    } );

    resultado.forEach( ( res ) => {
        res.addEventListener( 'click', () => {
            if ( num != '' ) {
                arr.push( num );
                num = '';
            }
            if ( arr.length == 3 ) {
                res = eval( arr.toString().replace( /,/g, '' ) );
                num = '';
                arr = [];
                arr.push( res );
                displayText( res );
            }
        } );

    } );
} );