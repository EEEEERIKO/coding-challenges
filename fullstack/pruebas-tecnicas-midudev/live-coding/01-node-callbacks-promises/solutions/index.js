import net from 'node:net'
import fs from  'node:fs' // fs => file system 
//me fijo primero en los parámetros
//no hace falta conocer las librerias de memoria, sino enfrentar algo que no conozco

//EJERCICIO 1
export const ping = (ip, callback) => {
    const startTime = process.hrtime()

    const client = net.connect({ port: 80, host: ip }, () => {
        client.end()
        // return { time: process.hrtime(startTime), ip } 
        callback(null, { time: process.hrtime(startTime), ip })
    })

    client.on('error', (err) => {
        callback(err)
        client.end()
        //throw err // <- no funciona
    })
}

ping('midu.dev', (err, info) => {
    if (err) console.error(err)
    else console.log(info)
})


//EJERCICIO 2
//Entender como entender de como pasar de callback a promesas
export function obtenerDatosPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: 'datos importantes' });
        }, 2000);
    })

}

obtenerDatosPromise()
    .then(info => {
        console.log(info)
    })


//EJERCICIO 3


export function procesarArchivo(callback) {
    const handleWrite = error =>{
        if (error) {
                console.error('Error guardando archivo:', error.message);
                callback(error)
            }

            console.log('Archivo procesado y guardado con éxito');
            callback(null)
    }
    const handleReadFile = (error,contenido) =>{
        (error, contenido) => {
        if (error) {
            console.error('Error leyendo archivo:', error.message);
            callback(error)
        }
        const textoProcesado = contenido.toUpperCase();

        fs.writeFile('output.txt', textoProcesado, handleWrite);

    }
    }
    fs.readFile('input.txt', 'utf8', );
}

procesarArchivo(()=>{
    console.log('Esto ya funciona!')
})

