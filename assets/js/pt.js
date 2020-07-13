function trinkgeld() {
    event.preventDefault()
    document.getElementById("box").style.height = "200px"
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
    let pPerson = (betrag / people).toFixed(2)
    if (percent == 10) {
        document.getElementById("trinkgeld").innerHTML = "Por favor introduza a qualidade do serviço!"
        document.getElementById("rechnung").innerHTML = ""
        document.getElementById("person").innerHTML = ""
    } else if (people == 0) {
        document.getElementById("trinkgeld").innerHTML = "Por favor introduza o número de pessoas!"
        document.getElementById("rechnung").innerHTML = ""
        document.getElementById("person").innerHTML = ""
    } else if (price == 0) {
        document.getElementById("trinkgeld").innerHTML = "Por favor introduza o montante da conta!"
        document.getElementById("rechnung").innerHTML = ""
        document.getElementById("person").innerHTML = ""
    } else {
        document.getElementById("trinkgeld").innerHTML = `A gorgeta é: ${tGeld}€`
        document.getElementById("rechnung").innerHTML = `O total é: ${betrag}€`
        document.getElementById("person").innerHTML = `Cada pessoa paga: ${pPerson}€`
    }
}