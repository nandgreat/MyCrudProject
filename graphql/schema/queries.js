module.exports = {
    currentTime: {
        type: 'Date',
        resolve: () => new Date().toISOString()
    }
}