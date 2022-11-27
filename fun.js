const chatbody = document.querySelector(".chat-body");

document.getElementById("collegeyes").onclick = function() {
    //location.href = "https://ioit.akronsystems.com/pLogin.aspx"
    window.open("https://ioit.akronsystems.com/pLogin.aspx")
}

document.getElementById("collegeno").onclick = function() {
    const messageEle = document.createElement("div")
    let text = document.createTextNode("How can we Help you")
    
    let button1 = document.createElement("button")
    button1.innerHTML = "Looking for Admission?"
    button1.onclick = function(){

        const message = document.createElement("div")

        let button3 = document.createElement("button")
        button3.innerHTML = "Admission Form"
        button3.onclick = function(){ window.open("https://aissmsioit.org/admission/admission-form/") }

        let button4 = document.createElement("button")
        button4.innerHTML = "Fee Structure"
        button4.onclick = function() { window.open("https://aissmsioit.org/admission/fee-structure/") }

        let button5 = document.createElement("button")
        button5.innerHTML = "Admission Procedure"
        button5.onclick = function() { window.open("https://aissmsioit.org/admission/procedure/") }

        let button6 = document.createElement("button")
        button6.innerHTML = "Leaflate"
        button6.onclick = function() { window.open("https://aissmsioit.org/wp-content/uploads/2022/10/Leaflate-2022.pdf") }

        message.append(button3)
        message.append(button4)
        message.append(button5)
        message.append(button6)

        chatbody.append(message)
    }

    let button2 = document.createElement("button")
    button2.innerHTML = "Know about the College"
    button2.onclick = function(){
        const message = document.createElement("div")

        let button1 = document.createElement("button")
        button1.innerHTML = "Departments"
        button1.onclick = function(){

            const messageElem = document.createElement("div")

            let button10 = document.createElement("button")
            button10.innerHTML = "First Year Engineering Sciences"
            button10.onclick = function(){ window.open("https://aissmsioit.org/first-year/vision-mission-peo/")}
            messageElem.append(button10)

            let button11 = document.createElement("button")
            button11.innerHTML = "Electrical Engineering"
            button11.onclick = function(){ window.open("https://aissmsioit.org/electrical/")}
            messageElem.append(button11)

            let button3 = document.createElement("button")
            button3.innerHTML = "Electronics & Telecommunication"
            button3.onclick = function(){ window.open("https://aissmsioit.org/electronics-telecommunication/")}
            messageElem.append(button3)

            let button4 = document.createElement("button")
            button4.innerHTML = "Artificial Intelligence and Data Science"
            button4.onclick = function(){ window.open("https://aissmsioit.org/artificial-intelligence-data-science/vision-mission-peo/")}
            messageElem.append(button4)

            let button5 = document.createElement("button")
            button5.innerHTML = "Computer Engineering"
            button5.onclick = function(){ window.open("https://aissmsioit.org/computer/vision-mission-peo/")}
            messageElem.append(button5)

            let button6 = document.createElement("button")
            button6.innerHTML = "Information Technology"
            button6.onclick = function(){ window.open("https://aissmsioit.org/information-technology/")}
            messageElem.append(button6)

            let button7 = document.createElement("button")
            button7.innerHTML = "Instrumentation Engineering"
            button7.onclick = function(){ window.open("https://aissmsioit.org/instrumentation/")}
            messageElem.append(button7)

            chatbody.append(messageElem)
        }

        let button2 = document.createElement("button")
        button2.innerHTML = "Placements"
        button2.onclick = function(){

            const Message = document.createElement("div")

            let button01 = document.createElement("button")
            button01.innerHTML = "about T & P Cell"
            button01.onclick = function(){ window.open("https://aissmsioit.org/t-p-cell/about-tp-cell/")}
            Message.append(button01)

            let button02 = document.createElement("button")
            button02.innerHTML = "Placement Report 2022 - 23"
            button02.onclick = function(){ window.open("https://aissmsioit.org/t-p-cell/placement-report-2022-23/")}
            Message.append(button02)

            chatbody.append(Message)
        }

        let button3 = document.createElement("button")
        button3.innerHTML = "Extra Curricular"
        button3.onclick = function(){

            const Message = document.createElement("div")

            let button1 = document.createElement("button")
            button1.innerHTML = "NSS"
            button1.onclick = function(){ window.open("https://aissmsioit.org/nss/about-nss/") }
            Message.append(button1)

            let button2 = document.createElement("button")
            button2.innerHTML = "Tesla Club"
            button2.onclick = function(){ window.open("https://aissmsioit.org/tesla-club/achievements/") }
            Message.append(button2)

            let button3 = document.createElement("button")
            button3.innerHTML = "Alacrity"
            button3.onclick = function() { window.open("https://aissmsioit.org/alacrity/about-alacrity/")}
            Message.append(button3)
            
            let button4 = document.createElement("button")
            button4.innerHTML = "IIED Cell"
            button4.onclick = function() { window.open("https://aissmsioit.org/iiedc/about-iied-cell/")}
            Message.append(button4)
            
            let button5 = document.createElement("button")
            button5.innerHTML = "Professional Bodies"
            button5.onclick = function() { window.open("https://aissmsioit.org/professional-body/about-professional-body/")}
            Message.append(button5)
            
            let button6 = document.createElement("button")
            button6.innerHTML = "Iconnect Activity"
            button6.onclick = function() { window.open("https://aissmsioit.org/iconnect-activity/about-iconnect-activity/")}
            Message.append(button6)

            chatbody.append(Message)
        }

        let button4 = document.createElement("button")
        button4.innerHTML = "Central Library"
        button4.onclick = function() { window.open("https://aissmsioit.org/central-library/about-central-library/") }

        let button5 = document.createElement("button")
        button5.innerHTML = "Achievements"
        button5.onclick = function(){ 

            const Message1 = document.createElement("div")

            let button1 =  document.createElement("button")
            button1.innerHTML = "Faculty Achievements"
            button1.onclick = function() { window.open("https://aissmsioit.org/achievements/faculty-achievements/") }
            Message1.append(button1)

            let button02 =  document.createElement("button")
            button02.innerHTML = "Student Achievements"
            button02.onclick = function() { window.open("https://aissmsioit.org/achievements/co-curricular-activity/") }
            Message1.append(button02)

            let button03 =  document.createElement("button")
            button03.innerHTML = "Non Teaching Staff Achievements"
            button03.onclick = function() { window.open("https://aissmsioit.org/achievements/non-teaching-staff-achievements/") }
            Message1.append(button03)

            chatbody.append(Message1)

        }

        message.append(button1)
        message.append(button2)
        message.append(button3)
        message.append(button4)
        message.append(button5)
        chatbody.append(message)
    }
    
    messageEle.append(text)
    messageEle.append(button1)
    messageEle.append(button2)
    chatbody.append(messageEle)
}