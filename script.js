function calc1() {
    const price = document.getElementById("price1").value

    const pay = Math.round(price * 0.4)  
    const gov = Math.round(price * 0.6) 

    const result = document.getElementById("result1")
    result.innerHTML =  "จ่ายเอง: " + pay + " บาท | รัฐจ่าย: " + gov + " บาท"
    result.style.display = "block"
}

function calc2() {
    const gov = document.getElementById("price2").value
    const pay = Math.round(gov/0.6*0.4)

    const result = document.getElementById("result2")
    result.innerHTML = "คุณต้องเติมเพิ่ม " + pay + " บาท"
    result.style.display = "block"
}

function calc3() {
    const gov = document.getElementById("price3").value
    const total = Math.round(gov/0.6) 
    const pay = total - gov

    const result = document.getElementById("result3")
    result.innerHTML ="คุณสามารถใช้ได้ " + total + " บาท | คุณต้องเติมเพ่ิ่ม: " + pay + " บาท" 
    result.style.display = "block"
}

function calc4() {
    const price = document.getElementById("price4").value
    const govNormal = Math.round(price * 0.6)
    const extraGov = govNormal > 200 ? govNormal - 200 : 0
    const pay = Math.round(price * 0.4) + extraGov

    const result = document.getElementById("result4")
    result.innerHTML = "คุณต้องจ่ายทั้งหมด " + pay + " บาท | รัฐจ่ายให้ " + (govNormal > 200 ? 200 : govNormal) + " บาท"
    result.style.display = "block"
}