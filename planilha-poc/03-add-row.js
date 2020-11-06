const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require ('./credentials.json')

const doc = new GoogleSpreadsheet('13aJp9SaPkDvDwAYauTcgOI-VlakF5kuoa60ir1dloKE')

const run = async () => {
  try{
  await doc.useServiceAccountAuth(credentials)
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[1]
  //Nome	Email	Whatsapp	Cupom	Promo																					
    await sheet.addRow({
      Nome: 'Walace Filiciano',
      Email: 'walace_feliciano@hotmail.com',
      Whatsapp:'(35) 988717256',
      Cupom: 'aaa111',
      Promo: 'asdsdf'
    })
  }catch(err){
    console.log(err)
  }
}
run()