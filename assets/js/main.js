function trinkgeld() {
    event.preventDefault()
    document.getElementById("box").style.height = "150px"
    document.getElementById("rechner").style.paddingBottom = "0px"
    let percent
    if (document.getElementById("service").value == 1) {
        percent = .02
    } else if (document.getElementById("service").value == 2) {
        percent = .1
    } else if (document.getElementById("service").value == 3) {
        percent = .2
    } else if (document.getElementById("service").value == 4) {
        percent = 0
    } else {
        percent = 10
    }
    let price = document.getElementById("amount").value
    let people = document.getElementById("people").value
    let tGeld = (price * percent).toFixed(0)
    let betrag = +price + +tGeld
    let pPerson = betrag / people
    if (percent != 10) {
        document.getElementById("trinkgeld").innerHTML = `Trinkgeld ist: ${tGeld}`
        document.getElementById("rechnung").innerHTML = `Gesamtbetrag ist: ${betrag}`
        document.getElementById("person").innerHTML = `Jeder zahlt: ${pPerson}`
    } else {
        document.getElementById("trinkgeld").innerHTML = "Bitte geben Sie die Service-qualität an!"
    }
}