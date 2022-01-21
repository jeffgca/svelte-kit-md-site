/*
 * Grab files from ./src/lib/samples and build the 'cookbook' JSON file in ./src/routes that displays each sample.
 */

const fs = require('fs')
const path = require('path')

let sampleDir = './src/lib/samples';

fs.readdir(sampleDir, (err, result) => {
  if (err) throw err
  // console.log(result)
  let fragments = result.map((filename) => {
    return {
      code: fs.readFileSync(path.resolve(sampleDir, filename), 'utf8'),
      filename: filename,
      type: filename.split('.').pop() // how reliable is this
    }
  })

  let json = JSON.stringify(fragments);

  fs.writeFileSync(path.resolve('./src/routes', 'cookbook.json'), json)

})
// console.log(sample_files)
