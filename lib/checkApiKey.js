export default function checkApiKey(req, res){
    console.log(req.headers['x-api-key']);
    const clientKey = req.headers['x-api-key'];
    const serverKey = process.env.API_KEY

    if (!clientKey || clientKey !== serverKey) {
    res.status(401).json({ error: 'Chave de API inválida ou ausente' })
    return false
  }

  return true
}