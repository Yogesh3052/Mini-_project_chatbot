const chatbody = document.querySelector(".chat-body");

document.getElementById("collegeyes").onclick = function() {
    //location.href = "https://ioit.akronsystems.com/pLogin.aspx"
    window.open("https://ioit.akronsystems.com/pLogin.aspx")
}

document.getElementById("collegeno").onclick = function() {
    /*const chatBody = document.querySelector(".chat-body");
    const txtInput = document.querySelector("#collegeno");
    const send = document.querySelector(".button");

    button.addEventListener("click", () => renderUserMessage());

    const renderUserMessage=()=>{
        const userInput=collegeno.value;
        renderUserMessage(userInput);
    };


    const renderMessageEle = (txt)=>{
        const messageEle=document.createElement('div');
        const txtNode=document.createTextNode(txt);
        messageEle.classList.add("user-message");
        messageEle.append(txtNode);
        chatBody.append(messageEle);
    };*/

    const messageEle = document.createElement("div")
    
    let text = document.createTextNode("How can we Help you");
    messageEle.className='chats';
    
    let button1 = document.createElement("button")
    button1.className="button_js";
    button1.innerHTML = "Looking for Admission?"
    //hiding button
    const no=document.querySelector("#collegeno");
        console.log(no.style);
        no.style.display="none";
        const yes=document.querySelector("#collegeyes");
        console.log(no.style);
        yes.style.display="none";
        


    
    button1.onclick = function(){

        const message = document.createElement("div")

        let button3 = document.createElement("button")
        button3.innerHTML = "Admission Form"
        button3.className="button_js_b3";
        button3.onclick = function(){ window.open("https://aissmsioit.org/admission/admission-form/") }

        let button4 = document.createElement("button")
        button4.innerHTML = "Fee Structure"
        button4.className="button_js_b4";
        button4.onclick = function() { window.open("https://aissmsioit.org/admission/fee-structure/") }

        let button5 = document.createElement("button")
        button5.innerHTML = "Admission Procedure"
        button5.className="button_js_b5";
        button5.onclick = function() { window.open("https://aissmsioit.org/admission/procedure/") }

        let button6 = document.createElement("button")
        button6.innerHTML = "Leaflate"
        button6.className="button_js_b6";
        button6.onclick = function() { window.open("https://aissmsioit.org/wp-content/uploads/2022/10/Leaflate-2022.pdf") }

        
        button1.style.display="none";
        button2.style.display="none";

        message.append(button3)
        message.append(button4)
        message.append(button5)
        message.append(button6)

        chatbody.append(message)
    }

    let button2 = document.createElement("button")
    button2.innerHTML = "Know about the College"
    button2.className="button_js_left";
    button2.onclick = function(){
        
        const message = document.createElement("div")

        let button_dep = document.createElement("button")
        button_dep.className="button_js_dep";
        button_dep.innerHTML = "Departments"
        button_dep.onclick = function(){

            const messageElem = document.createElement("div")
            const input=document.querySelector('.input-section');
            input.style.height="230px";

            let button_fyes = document.createElement("button")
            button_fyes.innerHTML = "First Year Engineering Sciences"
            button_fyes.className="button_js_fyes";
            button_fyes.onclick = function(){ 
                window.open("https://aissmsioit.org/first-year/vision-mission-peo/")
                button_fyes.style.display="none";
                button_ee.style.display="none";
                button_aids.style.display="none";
                button_entc.style.display="none";
                button_ce.style.display="none";
                button_it.style.display="none";
                button_ie.style.display="none";
                input.style.height="0px";
            }
            messageElem.append(button_fyes)

            let button_ee = document.createElement("button")
            button_ee.innerHTML = "Electrical Engineering"
            button_ee.className="button_js_ee";
            button_ee.onclick = function(){
                 window.open("https://aissmsioit.org/electrical/")
                 button_fyes.style.display="none";
                 button_ee.style.display="none";
                 button_aids.style.display="none";
                 button_entc.style.display="none";
                 button_ce.style.display="none";
                 button_it.style.display="none";
                 button_ie.style.display="none";
                 input.style.height="0px";
                 
                }
            messageElem.append(button_ee)

            let button_entc = document.createElement("button")
            button_entc.innerHTML = "Electronics & Telecommunication"
            button_entc.className="button_js_entc";
            button_entc.onclick = function(){ 
                window.open("https://aissmsioit.org/electronics-telecommunication/")
                button_fyes.style.display="none";
                button_ee.style.display="none";
                button_aids.style.display="none";
                button_entc.style.display="none";
                button_ce.style.display="none";
                button_it.style.display="none";
                button_ie.style.display="none";
                input.style.height="0px";
            }
            messageElem.append(button_entc)

            let button_aids = document.createElement("button")
            button_aids.innerHTML = "Artificial Intelligence and Data Science"
            button_aids.className="button_js_aids";
            button_aids.onclick = function(){ 
                window.open("https://aissmsioit.org/artificial-intelligence-data-science/vision-mission-peo/")
                button_fyes.style.display="none";
                button_ee.style.display="none";
                button_aids.style.display="none";
                button_entc.style.display="none";
                button_ce.style.display="none";
                button_it.style.display="none";
                button_ie.style.display="none";
                input.style.height="0px";
            }
            messageElem.append(button_aids)

            let button_ce = document.createElement("button")
            button_ce.innerHTML = "Computer Engineering"
            button_ce.className="button_js_ce";
            button_ce.onclick = function(){
                 window.open("https://aissmsioit.org/computer/vision-mission-peo/")
                 button_fyes.style.display="none";
                 button_ee.style.display="none";
                 button_aids.style.display="none";
                 button_entc.style.display="none";
                 button_ce.style.display="none";
                 button_it.style.display="none";
                 button_ie.style.display="none";
                 input.style.height="0px";
                }
            messageElem.append(button_ce)

            let button_it = document.createElement("button")
            button_it.innerHTML = "Information Technology"
            button_it.className="button_js_it";
            button_it.onclick = function(){
                 window.open("https://aissmsioit.org/information-technology/")
                 button_fyes.style.display="none";
                 button_ee.style.display="none";
                 button_aids.style.display="none";
                 button_entc.style.display="none";
                 button_ce.style.display="none";
                 button_it.style.display="none";
                 button_ie.style.display="none";
                 input.style.height="0px";
                }
            messageElem.append(button_it)

            let button_ie = document.createElement("button")
            button_ie.innerHTML = "Instrumentation Engineering"
            button_ie.className="button_js_ie";
            button_ie.onclick = function(){ 
                window.open("https://aissmsioit.org/instrumentation/")
                button_fyes.style.display="none";
                button_ee.style.display="none";
                button_aids.style.display="none";
                button_entc.style.display="none";
                button_ce.style.display="none";
                button_it.style.display="none";
                button_ie.style.display="none";
                input.style.height="0px";
            }
            messageElem.append(button_ie)

            chatbody.append(messageElem)

            button_dep.style.display="none";
            button_pl.style.display="none";
            button_Ec.style.display="none";
            button_cl.style.display="none";
            button_a.style.display="none";

            
        }

        let button_pl = document.createElement("button")
        button_pl.className="button_js_pl";
        button_pl.innerHTML = "Placements"
        button_pl.onclick = function(){

            const Message = document.createElement("div")
            const input=document.querySelector('.input-section');
            input.style.height="100px";

            let button_tp = document.createElement("button")
            button_tp.innerHTML = "about T & P Cell"
            button_tp.className="button_js_tp";
            button_tp.onclick = function(){
                 window.open("https://aissmsioit.org/t-p-cell/about-tp-cell/")
                 button_tp.style.display="none";
                 button_pr.style.display="none";
                 input.style.height="0px";
                }
            Message.append(button_tp)

            let button_pr = document.createElement("button")
            button_pr.innerHTML = "Placement Report 2022 - 23"
            button_pr.className="button_js_pr";
            button_pr.onclick = function(){ 
                window.open("https://aissmsioit.org/t-p-cell/placement-report-2022-23/")
                button_tp.style.display="none";
                button_pr.style.display="none";
                input.style.height="0px";
            }
            Message.append(button_pr)

            chatbody.append(Message)
            
            button_dep.style.display="none";
            button_pl.style.display="none";
            button_Ec.style.display="none";
            button_cl.style.display="none";
            button_a.style.display="none";
        }

        let button_Ec = document.createElement("button")
        button_Ec.className="button_js_Ec";
        button_Ec.innerHTML = "Extra Curricular"
        button_Ec.onclick = function(){

            const Message = document.createElement("div")
            const input=document.querySelector('.input-section');
            input.style.height="100px";

            let button_ns = document.createElement("button")
            button_ns.innerHTML = "NSS"
            button_ns.className="button_js_ns";
            button_ns.onclick = function(){ 
                window.open("https://aissmsioit.org/nss/about-nss/")
                button_ns.style.display="none";
                button_tc.style.display="none";
                button_al.style.display="none";
                button_ic.style.display="none";
                button_pb.style.display="none";
                button_ia.style.display="none";
                input.style.height="0px";
            }
            Message.append(button_ns)

            let button_tc = document.createElement("button")
            button_tc.innerHTML = "Tesla Club"
            button_tc.className="button_js_tc";
            button_tc.onclick = function(){
                 window.open("https://aissmsioit.org/tesla-club/achievements/")
                 button_ns.style.display="none";
                 button_tc.style.display="none";
                 button_al.style.display="none";
                 button_ic.style.display="none";
                 button_pb.style.display="none";
                 button_ia.style.display="none";
                 input.style.height="0px";
                }
            Message.append(button_tc)

            let button_al = document.createElement("button")
            button_al.innerHTML = "Alacrity"
            button_al.className="button_js_al";
            button_al.onclick = function() { 
                window.open("https://aissmsioit.org/alacrity/about-alacrity/")
                button_ns.style.display="none";
                button_tc.style.display="none";
                button_al.style.display="none";
                button_ic.style.display="none";
                button_pb.style.display="none";
                button_ia.style.display="none";
                input.style.height="0px";
            }
            Message.append(button_al)
            
            let button_ic = document.createElement("button")
            button_ic.innerHTML = "IIED Cell"
            button_ic.className="button_js_ic";
            button_ic.onclick = function() {
                 window.open("https://aissmsioit.org/iiedc/about-iied-cell/")
                 button_ns.style.display="none";
                 button_tc.style.display="none";
                 button_al.style.display="none";
                 button_ic.style.display="none";
                 button_pb.style.display="none";
                 button_ia.style.display="none";
                 input.style.height="0px";
                }
            Message.append(button_ic)
            
            let button_pb = document.createElement("button")
            button_pb.innerHTML = "Professional Bodies"
            button_pb.className="button_js_pb";
            button_pb.onclick = function() { 
                window.open("https://aissmsioit.org/professional-body/about-professional-body/")
                button_ns.style.display="none";
                button_tc.style.display="none";
                button_al.style.display="none";
                button_ic.style.display="none";
                button_pb.style.display="none";
                button_ia.style.display="none";
                input.style.height="0px";
            }
            Message.append(button_pb)
            
            let button_ia = document.createElement("button")
            button_ia.innerHTML = "Iconnect Activity"
            button_ia.className="button_js_ia";
            button_ia.onclick = function() { 
                window.open("https://aissmsioit.org/iconnect-activity/about-iconnect-activity/")
                button_ns.style.display="none";
                button_tc.style.display="none";
                button_al.style.display="none";
                button_ic.style.display="none";
                button_pb.style.display="none";
                button_ia.style.display="none";
                input.style.height="0px";
            }
            Message.append(button_ia)

            chatbody.append(Message)
            
            button_dep.style.display="none";
            button_pl.style.display="none";
            button_Ec.style.display="none";
            button_cl.style.display="none";
            button_a.style.display="none";
        }

        let button_cl = document.createElement("button")
        button_cl.className="button_js_cl";
        button_cl.innerHTML = "Central Library"
        button_cl.onclick = function() { 
        window.open("https://aissmsioit.org/central-library/about-central-library/") 
        button_dep.style.display="none";
        button_pl.style.display="none";
        button_Ec.style.display="none";
        button_cl.style.display="none";
        button_a.style.display="none";
        }

        let button_a = document.createElement("button")
        button_a.className="button_js_a";
        button_a.innerHTML = "Achievements"
        button_a.onclick = function(){ 

            const Message1 = document.createElement("div")
            const input=document.querySelector('.input-section');
            input.style.height="100px";

            let button_fa =  document.createElement("button")
            button_fa.className="button_js_fa";
            button_fa.innerHTML = "Faculty Achievements"
            button_fa.onclick = function() { 
                window.open("https://aissmsioit.org/achievements/faculty-achievements/") 
                button_fa.style.display="none";
                button_sa.style.display="none";
                button_ntsa.style.display="none";
                input.style.height="0px";
            }
            Message1.append(button_fa)

            let button_sa =  document.createElement("button")
            button_sa.className="button_js_sa";
            button_sa.innerHTML = "Student Achievements"
            button_sa.onclick = function() { 
                window.open("https://aissmsioit.org/achievements/co-curricular-activity/") 
                button_fa.style.display="none";
                button_sa.style.display="none";
                button_ntsa.style.display="none";
                input.style.height="0px";
            }
            Message1.append(button_sa)

            let button_ntsa =  document.createElement("button")
            button_ntsa.className="button_js_ntsa";
            button_ntsa.innerHTML = "Non Teaching Staff Achievements"
            button_ntsa.onclick = function() { 
                window.open("https://aissmsioit.org/achievements/non-teaching-staff-achievements/")
                button_fa.style.display="none";
                button_sa.style.display="none";
                button_ntsa.style.display="none";
                input.style.height="0px";
            }
            Message1.append(button_ntsa)

            chatbody.append(Message1)
            
            button_dep.style.display="none";
            button_pl.style.display="none";
            button_Ec.style.display="none";
            button_cl.style.display="none";
            button_a.style.display="none";

        }
        button1.style.display="none";
        button2.style.display="none";
        message.append(button_dep)
        message.append(button_pl)
        message.append(button_Ec)
        message.append(button_cl)
        message.append(button_a)
        chatbody.append(message)
    }
    
    messageEle.append(text)
    messageEle.append(button1)
    messageEle.append(button2)
    chatbody.append(messageEle)
}