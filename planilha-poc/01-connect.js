const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require ('./credentials.json')

const doc = new GoogleSpreadsheet('13aJp9SaPkDvDwAYauTcgOI-VlakF5kuoa60ir1dloKE')

const run = async () => {
  try{
  await doc.useServiceAccountAuth(credentials)
  await doc.loadInfo()
  console.log(doc.title)

  }catch(err){
    console.log(err)
  }
}
run()