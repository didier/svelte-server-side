require('svelte/register')

const express = require('express')
const app = express()
const port = 3000

const App = require('./src/Component.svelte').default

function getDocument({ html, css, head }) {
	return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      ${head}
      <style>${css.code}</style>
    </head>
    <body>
      ${html}
    </body>
    </html>
  `
}

app.get('/:name?', function (req, res) {
	const { name } = req.params

	const component = App.render({ name })
	const document = getDocument(component)

	res.send(document)
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
