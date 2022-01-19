function showAlert() {
    alert('hello plugin yes')
}

window.showAlert = showAlert
window.test()

console.log('testing module')