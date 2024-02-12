export async function json(req, res){
    const buffers = []

    for await (const chunk of req){
        buffers.push(chunk)
    }

    try {
        // transformar todas as entradas de dados em JSON
        req.body = JSON.parse(buffers.concat(buffers).toString())
    } catch {
        req.body = null
    }

    
    // todos os retornos de dados serão em JSON
    res.setHeader('content-type', 'application/json')
}