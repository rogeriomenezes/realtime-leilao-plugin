import {lance as LanceModel} from './fixtures/lance'
import {arrematantes as ArrematantesModel} from './fixtures/arrematantes'

const doisDigitos = function (left, v) {
  return (String(left) + v).slice(-2)
}

const copy = function (src) {
  return JSON.parse(JSON.stringify(src))
}

const config = {
  incremento: 200,
  valorUltimoLance: 0
}

export const simulaLance = function () {
  let lance = copy(LanceModel)
  lance.data.lote.lance.arrematante = copy(ArrematantesModel[Math.floor(Math.random() * ArrematantesModel.length)])
  let now = new Date()
  lance.data.lote.lance.data.date = `${now.getFullYear()}-${doisDigitos(0, now.getMonth())}-${doisDigitos(0, now.getDate())} ${doisDigitos(0, now.getHours())}:${doisDigitos(0, now.getMinutes())}:${doisDigitos(0, now.getSeconds())}.${now.getMilliseconds()}`
  lance.data.lote.lance.valor = Number(config.valorUltimoLance + config.incremento)
  config.valorUltimoLance = Number(lance.data.lote.lance.valor)
  return lance
}

export default simulaLance
