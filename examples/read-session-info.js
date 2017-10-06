import IbtTelemetry from '../src'

const parameters = process.argv.slice(2)

if (parameters.length !== 1) {
  console.log('Expected usage:')
  console.log('  npm run read-session-info -- <iracing telemetry file>')
  process.exit()
}

const telemetryFile = parameters[0]

IbtTelemetry.fromFile(telemetryFile)
  .then(telemetry => {
    console.log(`Unique id: ${telemetry.uniqueId}`)
  })
