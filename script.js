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
    result.innerHTML = "คุณต้องเองจ่ายทั้งหมด " + pay + " บาท | รัฐจ่ายให้ " + (govNormal > 200 ? 200 : govNormal) + " บาท"
    result.style.display = "block"
}

function calc5() {
    const price = Number(document.getElementById("price5").value)
    const people = Number(document.getElementById("people5").value)

    let remaining = price
    let output = ""

    for (let i = 1; i <= people; i++) {
        const rights = Number(document.getElementById("person" + i).value)

        if (remaining <= 0) {
            output += "คนที่ " + i + " → ไม่ต้องจ่าย<br>"
        } else {
            const govCanPay = Math.min(rights, Math.round(remaining * 0.6))
            const total = Math.round(govCanPay / 0.6)
            const pay = total - govCanPay
            remaining -= total
            if (remaining < 0) remaining = 0
            output += "คนที่ " + i + " → รัฐจ่าย " + govCanPay + " บาท | จ่ายเอง " + pay + " บาท<br>"
        }
    }

    if (remaining > 0) {
        output += "<br>⚠️ สิทธิ์รัฐไม่พอ ต้องออกเองเพิ่ม " + remaining + " บาท"
    }

    const result = document.getElementById("result5")
    result.style.display = "block"
    result.innerHTML = output
}

function generateInputs() {
    const people = document.getElementById("people5").value
    const container = document.getElementById("people-inputs")
    container.innerHTML = ""

    for (let i = 1; i <= people; i++) {
        container.innerHTML += `
            <label>คนที่ ${i} สิทธิ์คงเหลือ (บาท)</label>
            <input type="number" id="person${i}" placeholder="เช่น 200" min="0">
        `
    }
}