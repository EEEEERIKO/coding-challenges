import net from 'node:net'
import fs from 'node:fs' // fs => file system 
import fsp from 'node:fs/promises'
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
    else console.log(info, "EJERCICIO 1")
})


//EJERCICIO 2
//Entender como entender de como pasar de callback a promesas
export function obtenerDatosPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: 'EJERCICIO 2. datos importantes' });
        }, 2000);
    })
}

obtenerDatosPromise()
    .then(info => {
        console.log(info)
    })


//EJERCICIO 3



export function procesarArchivo(callback) {
    const handleReadFile = (error, contenido) => {
        if (error) {
            console.error('Error leyendo archivo:', error.message);
            callback(error)
        }

        const textoProcesado = contenido.toUpperCase();

        fs.writeFile('../output.txt', textoProcesado, handleWriteFile);
    }

    const handleWriteFile = error => {
        if (error) {
            console.error('Error guardando archivo:', error.message);
            callback(error)
        }

        console.log('EJERCICIO 3. Archivo procesado y guardado con éxito');
        callback(null)
    }

    fs.readFile('../input.txt', 'utf8', handleReadFile);
}

export async function procesarArchivoPromise() {
    try {
        const file = await fs.promises.readFile('../input.txt', 'utf8')
        const textoProcesado = file.toUpperCase()
        await fs.promises.writeFile('../output.txt', textoProcesado)
    } catch (error) {
        console.error('Error procesando archivo:', error.message)
        throw error
    }
}


// Ejercicio 4

export async function leerArchivos() {
    console.time('leerArchivos')

    const [archivo1, archivo2, archivo3] = await Promise.allSettled([
        fsp.readFile('../archivo1.txt', 'utf8'),
        fsp.readFile('../archivo2.txt', 'utf8'),
        fsp.readFile('../archivo3.txt', 'utf8')
    ])

    console.log(`EJERCICIO 4. ${archivo1.value} ${archivo2.value} ${archivo3.value}`)
    console.timeEnd('leerArchivos')
    return `${archivo1.value} ${archivo2.value} ${archivo3.value}`
}

leerArchivos();

// Ejercicio 5
export async function delay(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    }) 
}