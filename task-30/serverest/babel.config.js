module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                //defining current node version in the executing machine
                node: 'current'
            }
        }]
    ]
}