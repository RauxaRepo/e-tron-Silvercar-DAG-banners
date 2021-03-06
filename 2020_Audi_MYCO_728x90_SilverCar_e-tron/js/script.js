var imageArray = new Array(),
    loadedImgs = 0,
    endFrame_headline,
    efPromo,
    efDate,
    efRoute,
    region,
    market,
    tactic,
    funnel,
    modelYear,
    lookupType,
    model,
    market,
    year,
    clickTagURL,
    clickOut,
    copySize = "small",
    secondFrame = false,
    thirdFrame = false,
    efSwitch = false,
    isMLP = false,
    checkTimer,
    localCopy;

var outer = document.getElementById("outer"),
    outer_background = outer.getElementsByClassName("background")[0],
    outer_backgroundOne = outer.getElementsByClassName("backgroundOne")[0],
    outer_backgroundTwo = outer.getElementsByClassName("backgroundTwo")[0],
    logo_img = document.getElementById("logo_img"),
    logo_text = document.getElementsByClassName("logo_text")[0],
    logo_holder = document.getElementsByClassName("logo")[0],
    cta = document.getElementsByClassName("cta")[0],
    replay = document.getElementsByClassName("replay")[0],
    disclaimer = document.getElementsByClassName("disclaimer")[0],
    close = document.getElementById("close"),
    overlay = document.getElementById("overlay"),
    overlay_content = document.getElementById("overlay_content"),
    clickTagHold = document.getElementsByClassName("clickTag")[0],
    inner = document.getElementById("inner"),
    inner_headline = inner.getElementsByClassName("headline")[0],
    inner_headlineText = inner.getElementsByClassName("headline")[0],
    mLock = document.getElementsByClassName("modelLockup")[0],
    endFrame_headCont = inner.getElementsByClassName("efHeadline_container")[0],
    localCopy = document.getElementById('localCopyImg');

var hoverCheck = false,
    disclaimerOne = false,
    disclaimerTwo = false,
    closeCheck      = false,
    disclaimerThree = false,
    disclaimerClick = false,
    t = 0;

//------------------------------------------*/
// PRELOAD BOOLEAN
/*------------------------------------------*/
var isWindowLoaded_bool = false;
var isIALoaded_bool = false;
var iaImagesLoaded = false;

//------------------------------------------*/
// PRELOAD SET INTERVALS
/*------------------------------------------*/
var politeLoad_intv = setInterval(politePreloader, 1);

/*------------------------------------------*/
// WINDOW PRELOADER
/*------------------------------------------*/
// Checks to see if window is loaded
window.onload = function () {
    // boolean to determine if browser window is loaded
    isWindowLoaded_bool = true;

};



window.addEventListener("load", function () {
    isIALoaded_bool = true;
    if("") {
        var getInfo = "".split("_");
            
        region = getRegion(getInfo[3].toLowerCase());
        market = getInfo[6];
        tactic = getInfo[4];
        funnel = getFunnel(getInfo[5].toLowerCase());
        // modelYear = getInfo[7];
        if(getInfo[7].indexOf("20") === -1){
            modelYear = "2020"
            if(getInfo[8].toLowerCase() != "generic"){
                model = getInfo[7].toLowerCase() + "-" + getInfo[8].toLowerCase();
            } else {
                model = getInfo[7].toLowerCase();
            }
        } else {
            modelYear = getInfo[7];
            if(getInfo[9].toLowerCase() != "generic"){
                model = getInfo[8].toLowerCase() + "-" + getInfo[9].toLowerCase();
            } else {
                model = getInfo[8].toLowerCase();
            }
        }

    }

    lookupType = "".toLowerCase().split(" ").join("").split("-").join("");

    if(lookupType == "modellandingpage"){
        lookupType = "mlp";
    }

    if ("https://www.audiusa.com/models/audi-e-tron" == "") {
        if (lookupType != "dealersite" && lookupType != "mlp") {
            loadURLs("https://cdn.flashtalking.com/117513/Audi_2020_300x250_RL/js/" + getInfo[3].toLowerCase() + "_" + lookupType + ".js");
        } else if(lookupType != "dealersite"){
            isMLP = true;
            loadURLs("https://cdn.flashtalking.com/117513/Audi_2020_300x250_RL/js/mlp.js");
        } else {
            loadURLs("https://cdn.flashtalking.com/117513/Audi_2020_300x250_RL/js/dealer_sites.js");
        }
    }
    
    preloadImage();
});

function getRegion(regKey){
    switch(regKey) {
        case "aue":
            return "eastern";
        case "acr":
            return "central";
        case "awr":
            return "western";
        case "ais":
            return "southern";
    }
}
function getFunnel (funnKey){
    switch(funnKey) {
        case "interest":
            return "interest_traffic";
        case "evaluation":
            return "evaluation_traffic";
        case "intent":
            return "intent_qualified-actions";
        case "action":
            return "action_leads";
    }
}

function loadURLs (filename){
    var fileref = document.createElement("script");
    fileref.setAttribute("type","text/javascript");
    fileref.src = filename;
    if (typeof fileref != "undefined") {
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
}

function t3Check (urlKeyCode){
    switch (urlKeyCode){
        case 'grand-rapids':
            return true;
        case 'indianapolis':
            return true;
        case 'louisville':
            return true;
        case 'toledo':
            return true;
        case 'wichita':
            return true;
        case 'baton-rouge':
            return true;
        case 'birmingham':
            return true;
        case 'cape-fear':
            return true;
        case 'charlottesville':
            return true;
        case 'columbia':
            return true;
        case 'el-paso':
            return true;
        case 'lafayette':
            return true;
        case 'little-rock':
            return true;
        case 'memphis':
            return true;
        case 'nashville':
            return true;
        case 'new-orleans':
            return true;
        case 'providence':
            return true;
        case 'richmond':
            return true;
        case 'san-juan':
            return true;
        case 'tulsa':
            return true;
        case 'albany':
            return true;
        case 'albuquerque':
            return true;
        case 'boise':
            return true;
        case 'colorado-springs':
            return true;
        case 'honolulu':
            return true;
        case 'palm-springs':
            return true;
        case 'reno':
            return true;
        case 'santa-barbara':
            return true;
        case 'spokane':
            return true;
        default:
            return false;
    }
}



function politePreloader() {
    if (isWindowLoaded_bool && isIALoaded_bool && iaImagesLoaded) {
        // clears preloader interval once parent website is loaded
        clearInterval(politeLoad_intv);

        // This function sets up our graphics once instant ads are loaded
        initializeUnit();
    }
}

function preloadImage(f) {

    var s = document.createElement("style"),
        a = [];

    if(!isRetinaDisplay()){
        var z = "" + "https://cdn.flashtalking.com/117513/instantAssets/rings-lockup.png";
    } else {
        var z = "https://cdn.flashtalking.com/117513/instantAssets/rings-lockup.png";
    }
    a = [
        "Silvercar_etron_728x90_fr1.jpg",
        z
    ];

    for (var i = 0; i < a.length; i++) {
        var o = new Image();
        o.src = a[i],
        o.onload = function(){
            imageLoaded(a.length);
        }
    }
}

function imageLoaded(a){
    loadedImgs++;
    if (a == loadedImgs) {
        iaImagesLoaded = true;
    }
}

function initializeUnit() {
    var s = document.createElement("style");

    // Set IAs/Images for the first frame;
    outer_backgroundOne.src = "Silvercar_etron_728x90_fr1.jpg";
    outer_backgroundTwo.src = "Silvercar_etron_728x90_fr2.jpg";
    if(isRetinaDisplay()){
        logo_img.src = "https://cdn.flashtalking.com/117513/instantAssets/rings-lockup.png";
    } else{
        logo_img.src = "" + "https://cdn.flashtalking.com/117513/instantAssets/rings-lockup.png";
    }
    

    rebuildHeadline("Power your ride.|");
    
    
    // if ("".split("|")[1] != "") s.innerHTML += "#inner .headline-endText { color: " + "".split("|")[1] + "; }\n\n";

    var logo_lockup = "<br>";
    logo_text.innerHTML = logo_lockup.split("<br>")[0] + "<br><span style='font-size: 1.6em'>" + logo_lockup.split("<br>")[1] + "</span>";
    cta.innerHTML = "See offer >";
    replay.innerHTML = "Replay";
    // disclaimer.innerHTML = "";



    if ("11|#fff||||638,69".split("|")[1] != "") s.innerHTML += ".cta { color: " + "11|#fff||||638,69".split("|")[1] + "; }\n\n";
    if ("11|#fff||||638,69".split("|")[5] != "") s.innerHTML += ".cta { left: " + "11|#fff||||638,69".split("|")[5].split(",")[0] + "px; top: " + "11|#fff||||638,69".split("|")[5].split(",")[1] + "px; }\n";
    if ("11|#fff||||638,69".split("|")[0] != "") s.innerHTML += ".cta { font-size: " + "11|#fff||||638,69".split("|")[0] + "px }\n"; 

    document.getElementsByTagName("head")[0].appendChild(s);
    // normalizeHeadline();

    if("" != ""){
        if (!"https://www.audiusa.com/models/audi-e-tron") {
            if(lookupType === "globalincentives"){
                if(t3Check(market.toLowerCase())){
                    clickOut = getURL(market.toLowerCase().split("-mia").join("") + "||" + model.toLowerCase() + "||" + modelYear);
                } else {
                    clickOut = getURL(market.toLowerCase().split("-mia").join("") + "||" + model.toLowerCase());
                }
            } else if(lookupType != "dealersite" && lookupType != "mlp"){
                clickOut = getURL(market.toLowerCase().split("-mia").join("") + "||" + model.toLowerCase());
            } else if(lookupType != "dealersite"){
                clickOut = getURL(model.toLowerCase());
            } else {
                clickOut = getURL(market.toLowerCase().split("-mia").join(""));
            }
        
            if(isMLP){
                if(clickOut.indexOf('?') != -1){
                    clickTagURL = clickOut + "&csref=t2_programmatic-display_PHDP_AO_" +region +"_" + market + "_x_" + funnel + "_" + modelYear + "_" + model.split('e-tron').join('etron').split('a5-sportback').join('a5') + "_PHD_x_x_2020-01-07";
                } else {
                    clickTagURL = clickOut + "?csref=t2_programmatic-display_PHDP_AO_" +region +"_" + market + "_x_" + funnel + "_" + modelYear + "_" + model.split('e-tron').join('etron').split('a5-sportback').join('a5') + "_PHD_x_x_2020-01-07";
                }
            } else{
                if(clickOut.indexOf('?') != -1){
                    clickTagURL = clickOut + "&ddcref=t2_programmatic-display_PHDP_AO_" +region +"_" + market + "_x_" + funnel + "_" + modelYear + "_" + model.split('e-tron').join('etron').split('a5-sportback').join('a5') + "_PHD_x_x_2020-01-07";
                } else {
                    clickTagURL = clickOut + "?ddcref=t2_programmatic-display_PHDP_AO_" +region +"_" + market + "_x_" + funnel + "_" + modelYear + "_" + model.split('e-tron').join('etron').split('a5-sportback').join('a5') + "_PHD_x_x_2020-01-07";
                }
            }
        } else{
            clickOut = "https://www.audiusa.com/models/audi-e-tron";

            if(clickOut.indexOf('?') != -1){
                clickTagURL = clickOut + "&ddcref=t2_programmatic-display_PHDP_AO_" +region +"_" + market + "_x_" + funnel + "_" + modelYear + "_" + model.split('e-tron').join('etron').split('a5-sportback').join('a5') + "_PHD_x_x_2020-01-07";
            } else {
                clickTagURL = clickOut + "?ddcref=t2_programmatic-display_PHDP_AO_" +region +"_" + market + "_x_" + funnel + "_" + modelYear + "_" + model.split('e-tron').join('etron').split('a5-sportback').join('a5') + "_PHD_x_x_2020-01-07";
            }
        } 
    } else{
        clickTagURL = "https://www.audiusa.com/models/audi-e-tron";
    }
    // myFT.clickTag(1, clickTagURL);

    ;

    playAd();

}

function playAd(){

    if("9|#fff|14,70" !=""){
        replay.style.fontSize = parseFloat("9|#fff|14,70".split("|")[0]) + "px";
        replay.style.left = parseFloat("9|#fff|14,70".split("|")[2].split(",")[0]) + "px";
        replay.style.top = parseFloat("9|#fff|14,70".split("|")[2].split(",")[1]) + "px";
        replay.style.color = "9|#fff|14,70".split("|")[1];
    }
    disclaimer.innerHTML = "";

    main.style.opacity = "1";

    if(""){
            disclaimerOne = true;
            disclaimer.style.display = "block";
            disclaimer.style.opacity = "1";
    }

    if("<span style='color:#aaa'><span style='font-size:105%'>View key offer details.</span></span>"){
            disclaimerThree = true;
    }

    normalizeHeadline();

    main.addEventListener("transitionend", function f(e){
        e.currentTarget.removeEventListener(e.type, f);
        if(disclaimerOne){
                overlay.classList.add("overlayIntro");
                overlay_content.innerHTML = "".split("www.iihs.org").join("<a href='https://www.iihs.org' target='_blank' style='color:white'>www.iihs.org</a>");
                disclaimer.addEventListener("click", function f(e){
                    e.currentTarget.removeEventListener(e.type, f);
                    disclaimerGo();
                    disclaimerClick = true;
                });
                clickTagHold.addEventListener("mouseenter", function(){
                    t = 2;
                });
                clickTagHold.addEventListener("mouseout", function(){
                    t = 0;
                });

                setTimeout(function(){animateHeadline(function(){
                    if(!disclaimerClick){
                        setTimeout(function(){
                            animateFrameTwo();
                        }, 2567);
                    }
                });
            },500);
        } else{
            setTimeout(function(){animateHeadline(function(){
                    setTimeout(function(){
                        animateFrameTwo();
                    }, 1950);
                });
            },500);
            
        }
    });
    
    clickTagHold.addEventListener("mouseenter", function f(e) {
        e.currentTarget.removeEventListener(e.type, f);
        hoverCheck = true;
    });
}

function disclaimerGo(){
    if (closeCheck == false) {
        close.addEventListener("click", function f(e){
            // e.currentTarget.removeEventListener(e.type, f);
            overlayClose();
            closeCheck = true;
        }); 
    }
    close.style.top = "4px";
    close.style.right = "6px";
    overlay.style.top = "53px";
    overlay.style.height = "62px";
}

function disclaimerEndGo(){
    if (closeCheck == false) {
        close.addEventListener("click", function f(e){
            // e.currentTarget.removeEventListener(e.type, f);
            overlayCloseEnd();
            closeCheck = true;
        }); 
    }
    close.style.top = "18px";
    close.style.right = "14px";
    overlay.style.top = "0px";
    overlay.style.height = "64px";
}

function overlayClose(){
    overlay.style.top = "100%";
    if(disclaimerOne){
        disclaimerClick = false;
        setTimeout(function(){animateFrameTwo();},500);
    }
}

function overlayCloseEnd(){
    overlay.style.top = "100%";
        disclaimerClick = false;
}

function animateFrameTwo(){
    inner.classList.add('innerShadow');
    if(!disclaimerClick){
        TweenMax.to(inner_headline, .63, {x:364, rotate:.01, ease:Power3.easeInOut});
        TweenMax.to(inner, .63, {x:-364, ease:Power3.easeInOut, rotate:.01,
            onStart:function(){
                disclaimer.style.opacity = "0";
            },
            onComplete:function(){
            // inner_headline.removeAttribute("style");
            TweenMax.set(inner_headline,{x:0});
            inner_headline.innerHTML = "";

            inner.classList.remove('innerShadow');
            outer_backgroundOne.src = "Silvercar_etron_728x90_fr3.jpg";
            secondFrame = true;
            disclaimer.removeAttribute("style");
            disclaimer.removeEventListener("click", disclaimerGo, false);
            overlay.classList.remove("overlayIntro");

            rebuildHeadline("Charge the road.|");

            normalizeHeadline(secondFrame);

            }
        });
    }
}

function animateFrameThree(){
    setTimeout(function(){
        animateHeadline(function(){
            },"end");
            // var mLock = document.createElement("img");
            mLock.src = "1x1.png";
            localCopy.src = "Silvercar_etron_728x90_lc.png";
            // mLock.classList.add("modelLockup");
            replay.addEventListener("click", resetAll);
            

            if(outer_backgroundOne.offsetWidth < 250){
                var j = 243;
                var p = "485px";
                // document.getElementsByClassName('headlineEnd').style.top = "100px";
            } else{
                var j = 363;
                var p = "364px";
            }
            // logo_holder.after(mLock);
            TweenMax.to(inner_headline, .25, {opacity:0, ease:Power3.easeInOut, rotate:.01});
            inner.classList.add('innerShadow');
            TweenMax.to(document.querySelector('.headlineEnd'),.63,{x:-j, rotate:.01, ease: Power3.easeInOut, onStart:function(){
                replay.style.display = "block";
                document.querySelector('.headlineEnd').style.opacity = '1';
                if(disclaimerThree){
                    disclaimerOne = false;
                // disclaimer.removeAttribute("span");
                    disclaimer.innerHTML = "<span style='color:#aaa'><span style='font-size:105%'>View key offer details.</span></span>";
                    disclaimer.style.display = "block";
                    disclaimer.style.left = parseFloat("8.5|#ccc|478,55".split("|")[2].split(",")[0]) + "px";
                    disclaimer.style.top = parseFloat("8.5|#ccc|478,55".split("|")[2].split(",")[1]) + "px";
                    overlay.classList.add("overlayEnd");
                    setTimeout(function(){
                            disclaimer.style.opacity = "1";
                        },250);
                    overlay_content.innerHTML = "<span style='font-size:9px;line-height:11px'>This is a limited time offer. Audi and Silvercar by Audi reserve the right to modify or cancel the promotional offer at any time. This offer is only available to individual purchasers or lessees of a new Audi e-tron® model, 2019 model year or newer, in the United States between March 1, 2020 and December 31, 2020. If qualified you will receive a Redemption Code via email once vehicle purchase has been completed, which may be redeemed for fifteen (15) Rental Credits with Silvercar (each credit representing a one day Silvercar rental). Purchases of certified pre-owned and used vehicles do not qualify. If there is more than one listed purchaser of an individual vehicle, only one Redemption Code will be issued for use with the Silvercar account of one of the purchasers. This promotion is not available in connection with fleet purchases. You must be a Silvercar customer in good standing in order to use the Rental Credits which may be accessed using the Redemption Code provided to you. If you are not already a Silvercar customer, you must download the Silvercar app, sign up for the Silvercar service and agree to the Silvercar Terms of Use and Silvercar Privacy Policy (available at www.silvercar.com). You must agree to Silvercar’s rental agreement and meet Silvercar’s rental requirements, including having a valid driver’s license, an eligible driving history, and minimum age requirements (as permitted by applicable law). Rental Credits expire 24 months from the delivery date and during that period must be used if available in your account (i.e., you cannot choose to pay for a rental day if a credit is available in your account). If the Rental Credit balance is not sufficient to cover the entirely of a particular booking the difference shall be paid using other Silvercar offered payment methods. Unused Rental Credits will not be refunded. Violations of the Silvercar rental agreement or Silvercar Terms of Use may result in a forfeit of any unused Rental Credits. Rental Credits are transferable by following Silvercar’s then current credit transfer policy. Rental Credits may not be sold by vehicle purchaser, lessee or any subsequent transferee for cash or other value to any party. The Rental Credits do not include, and you are responsible for paying, any taxes or additional fees associated with the rental, including without limitation driver age surcharges, tolls, violations, fuel charges, and optional fees such as Insurance, collision damage waiver, and other optional coverages. Successful redemption of the Rental Credits is subject to the availability of rental cars. The Redemption Codes and Rental Credits have no cash value. The Rental Credits cannot be combined with other promotional offers.</span>".split("www.iihs.org").join("<a href='https://www.iihs.org' target='_blank' style='color:white'>www.iihs.org</a>");
                    disclaimer.addEventListener("click", function f(e){
                        // e.currentTarget.removeEventListener(e.type, f);
                        overlay_content.style.fontSize = parseFloat("8.5|#ccc|478,55".split("|")[0]) + "px";
                        overlay_content.style.lineHeight = parseFloat("8.5|#ccc|478,55".split("|")[0]) + 1 + "px";
                        disclaimerEndGo();
                        disclaimerClick = true;
                    });
                }
            }}); 
            TweenMax.to(inner, .63, {x:0, width:p, left:j + "px", ease:Power3.easeInOut, rotate:.01, onComplete:function(){
                
                TweenMax.to(mLock, .25, {x: -350, opacity:1, rotate:.01, ease: Expo.easeOut});
                disclaimer.style.opacity = "1";
                cta.style.opacity = "1";
                replay.style.opacity = "1";
                localCopy.style.opacity = "1";

                }
            })
    },1370);

    inner_headline.addEventListener("transitionend", function f(e){
        e.currentTarget.removeEventListener(e.type, f);

        
        inner.classList.remove('innerShadow');
        secondFrame = false;
        thirdFrame = true;
        // resetElement(inner_headline, 'groundZero');
        
        if("" != "") {
            rebuildHeadline("", "end");
            normalizeHeadline(thirdFrame);

            var l = document.createElement("img");
                l.classList.add('inline_mod');
                l.src = "Silvercar_etron_728x90_ef.png";

            document.getElementsByClassName('headlineEnd')[0].appendChild(l);

            if(!isRetinaDisplay()){ 
                l.src = '' + "Silvercar_etron_728x90_ef.png";
            } else {
                l.src = "Silvercar_etron_728x90_ef.png";
            }

        } else {
            var e = document.createElement("div");
            e.classList.add("headlineEnd");
            inner.appendChild(e)

            var l = document.createElement("img");
            l.classList.add('fullframe_mod');
            // l.classList.add('fullframe_nofl');
            
            if(!isRetinaDisplay()){ 
                l.src = '' + "Silvercar_etron_728x90_ef.png";
            } else {
                l.src = "Silvercar_etron_728x90_ef.png";
            }

            e.appendChild(l);

            // main.insertBefore(l,logo_holder);
        }

    });
}

function isRetinaDisplay() {
    if (window.matchMedia) {
        var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
        return (mq && mq.matches || (window.devicePixelRatio > 1));
    }
}

function resetAll() {
    

    inner.removeChild(document.getElementsByClassName("headlineEnd")[0]);
    inner.removeChild(document.getElementsByClassName("headline")[0]);
    // main.removeChild(document.getElementsByClassName("modelLockup")[0]);
    inner_headline = document.createElement("div");
    inner_headline.classList.add("headline");
    inner.appendChild(inner_headline);

    main.style.opacity = "0";

    main.addEventListener("transitionend", function f(e){
        e.currentTarget.removeEventListener(e.type, f);
            resetElement(inner);
            resetElement(cta);
            resetElement(inner_headline);
            resetElement(replay);
            TweenMax.set(mLock, {x: 350, opacity:1});
            // resetElement(mLock);
            resetElement(disclaimer);
            thirdFrame = false;
            resetElement(localCopy);

            outer_backgroundOne.src = "Silvercar_etron_728x90_fr1.jpg";
            rebuildHeadline("Power your ride.|");

            setTimeout(playAd, 500);


    });
    // setInstantAds();
}

function resetElement(a, b, c) {
    if(b != undefined){
        TweenMax.from(a, .25, {x:0, ease:Power0.easeNone});
    } else{
        a.removeAttribute("style");
    }
}

function slideElement(a, b) {
    if (b != undefined) {
        TweenMax.to(a, .25, {x: b, rotate:.01, ease: Expo.easeOut, onStart: function(){
            for (var i = 0; i < document.getElementsByClassName("headline-text").length; i++) {
                document.getElementsByClassName("headline-text")[i].style.color="#fff";
                document.getElementsByClassName("headline-text")[i].style.textShadow = "0 0 0 transparent";
                document.getElementsByClassName("headline-text")[i].style.fontStyle = "normal"; 
                document.getElementsByClassName("headline-text")[i].style.opacity = "1"; 
            }

        }
     });
    } else {
        TweenMax.to(a, .25, {x:0, rotate:.01,  ease: Expo.easeOut, onStart: function(){
            for (var i = 0; i < document.getElementsByClassName("headline-text").length; i++) {
            document.getElementsByClassName("headline-text")[i].style.color="#fff";
            document.getElementsByClassName("headline-text")[i].style.textShadow = "0 0 0 transparent";
            document.getElementsByClassName("headline-text")[i].style.fontStyle = "normal"; 
            document.getElementsByClassName("headline-text")[i].style.opacity = "1";
            a.style.opacity = "1";
            }
        }});
    }
}

function resizeHeadline(){
    var a = "Power your ride.|";
    var b = "Charge the road.|";
    if(a.indexOf("|") != -1){
        var a_text = a.split("|");
        if(a_text[(a_text.length-1)].length >10){
            copySize = "small";
        } else if(a_text[0].length <=10){
            copySize = "large"
        } else if((a_text[(a_text.length-1)].length + a_text[(a_text.length-2)].length + 1) > 10){
            copySize = "small";
        } else if((a_text[0].length + a_text[1].length + 1) <= 10){
            copySize = "large";
        } 
    } else{
        var a_text = a.split(" ");
        if(a_text[(a_text.length-1)].length >10){
            copySize = "small";
        } else if(a_text[0].length <=10){
            copySize = "large"
        } else if((a_text[(a_text.length-1)].length + a_text[(a_text.length-2)].length + 1) > 10){
            copySize = "small";
        } else if((a_text[0].length + a_text[1].length + 1) <= 10){
            copySize = "large";
        } 
    }
    var copySizeTwo = "small";
    if(b.indexOf("|") != -1){
        var b_text = b.split("|");
        if(b_text[(b_text.length-1)].length >10){
            copySizeTwo = "small";
        } else if(b_text[0].length <=10){
            copySizeTwo = "large"
        } else if((b_text[(b_text.length-1)].length + b_text[(b_text.length-2)].length + 1) > 10){
            copySizeTwo = "small";
        } else if((b_text[0].length + b_text[1].length + 1) <= 10){
            copySizeTwo = "large";
        } 
    } else{
        var b_text = a.split(" ");
        if(b_text[(b_text.length-1)].length >10){
            copySizeTwo = "small";
        } else if(b_text[0].length <=10){
            copySizeTwo = "large"
        } else if((b_text[(b_text.length-1)].length + b_text[(b_text.length-2)].length + 1) > 10){
            copySizeTwo = "small";
        } else if((b_text[0].length + b_text[1].length + 1) <= 10){
            copySizeTwo = "large";
        } 
    }

    if(copySize == "small" || copySizeTwo == "small") {
        return "small";
    } else {
        return "large";
    }

}

function rebuildHeadline(a, c) {
        if(c != undefined){
            var e = document.createElement("div");
            e.classList.add("headlineEnd");
            inner.appendChild(e)
        } else {
            var e = inner_headline;
        }
        
        copySize = resizeHeadline();

        if(a.indexOf("|") != -1){
            var a_text = a.split("|");
            
            // console.log(a_text[0].length);
            for(var j=0;j<a_text.length;j++){

                var g = document.createElement("div");
                if(c != undefined){
                    g.classList.add("headline-endText");
                } else{
                    g.classList.add("headline-text");
                    // console.log(g.offsetWidth);
                    if(copySize != "small"){
                        g.style.fontSize = "20px";
                    } else{
                        g.style.fontSize = "18px";
                    }
                }
                
                g.classList.add("container");

                if(isOdd(j) == 0){
                    g.classList.add("headline-upper");
                } else{
                    g.classList.add("headline-lower");
                }

                g.innerHTML = a_text[j];
                e.appendChild(g);
            }
        } else{
            var a_text = a.split(" ");
            
            var numLines, outputString = "";
            // if(a_text[0].length < 8){copySize = "large"} else{copySize = "small";}
            var placeHold = document.createElement("div");
            if(c != undefined){
                placeHold.classList.add("headline-endText");
            } else{
                placeHold.classList.add("headline-text");
                if(copySize != "small"){
                     placeHold.style.fontSize = "20px";
                } else{
                    placeHold.style.fontSize = "18px";
                }
            }
            placeHold.classList.add("container");
            e.appendChild(placeHold);


            for (var j=0;j<a_text.length;j++){
                a_text[j]="<span class='word'>"+a_text[j]+"</span>"
            } 
             
            placeHold.innerHTML += a_text.join(" ");



            defineLines(placeHold);

            var upperLower;
            function defineLines(output){//Double loop through words - getting their offsetTop / Y position
                var uniqueYs=[];
                var words = output.getElementsByClassName("word");
                
                for (var i=0;i<words.length;i++) {
                    if(uniqueYs.indexOf(words[i].offsetTop)==-1) {
                        uniqueYs.push(words[i].offsetTop);
                    }
                } //add a class of line# to each word so you can know which line each word is on.
                for (var i=0;i<words.length;i++){
                    if(isOdd(uniqueYs.indexOf(words[i].offsetTop)) == 0){
                        words[i].className="word line"+uniqueYs.indexOf(words[i].offsetTop);
                    } else {
                        words[i].className="word line"+uniqueYs.indexOf(words[i].offsetTop);
                    }
                }

                numLines=uniqueYs.length;
            }

            for(var j=0;j<numLines;j++){
                var g = document.createElement("div");
                if(c != undefined){
                    g.classList.add("headline-endText");
                } else{
                    g.classList.add("headline-text");
                    if(copySize != "small"){
                        g.style.fontSize = "20px";
                    } else{
                        g.style.fontSize = "18px";
                    }
                }
                
                g.classList.add("container");
                if(isOdd(j) == 0){
                    var words = placeHold.getElementsByClassName("line" + j);
                    for (var i=0;i<words.length;i++) {
                        g.innerHTML += words[i].innerHTML + " "
                    }
                    g.classList.add("headline-upper");
                } else{
                    var words = placeHold.getElementsByClassName("line" + j);
                    for (var i=0;i<words.length;i++) {
                        g.innerHTML += words[i].innerHTML  + " ";
                        // console.log(g.offsetWidth);
                    }
                    g.classList.add("headline-lower");
                    
                }
                e.appendChild(g);

            }
            e.removeChild(placeHold);
        }
        

        // console.log(numLines);

        var p = 0,
            aIndex = 0;

        function isOdd(num) { return num % 2;}

        for (var y = 0; y < document.getElementsByClassName("headline-upper").length; y++) {
            if (document.getElementsByClassName("headline-upper")[y].classList.contains("container") == false) {
                e.removeChild(document.getElementsByClassName("headline-upper")[y]);
            }
        }

        for (var z = 0; z < document.getElementsByClassName("headline-lower").length; z++) {
            if (document.getElementsByClassName("headline-lower")[z].classList.contains("container") == false) {
                e.removeChild(document.getElementsByClassName("headline-lower")[z]);
            }
        }

}

function normalizeHeadline(f) {
    var upperMargin = 0,
        lowerMargin = 0;

    if(secondFrame){
        inner_headline.style.top = (90 - inner_headline.getBoundingClientRect().height)/2 + "px";
        inner_headline.style.left = 95 + (267 - inner_headline.getBoundingClientRect().width)/2 + "px";
        if ("|#fff|10,35".split("|")[2] != "") {
            inner_headline.style.left =  "|#fff|10,35".split("|")[2].split(",")[0] + "px";
            inner_headline.style.top =  "|#fff|10,35".split("|")[2].split(",")[1] + "px";
        }
        if("|#fff|10,35".split("|")[1]!= ""){
            inner_headline.style.color = "|#fff|10,35".split("|")[1];
        }
        setTimeout(function(){
            animateHeadline(function(){
              animateFrameThree();  
            });
            
        },500);
    } else if (thirdFrame){
        document.getElementsByClassName('headlineEnd').style.top = (90 - document.getElementsByClassName('headlineEnd')[0].getBoundingClientRect().height)/2 + "px";
        if ("".split("|")[2] != "") {
            document.getElementsByClassName('headlineEnd').style.left =  "".split("|")[2].split(",")[0] + "px";
            document.getElementsByClassName('headlineEnd').style.top =  "".split("|")[2].split(",")[1] + "px";
        }
        if("".split("|")[1]!= ""){
            document.getElementsByClassName('headlineEnd').style.color = "".split("|")[1];
        }
    } else{
        if(disclaimerOne){
            var g = 10;
        } else{
            var g = 0;
        }
        inner_headline.style.top = ((90 - inner_headline.getBoundingClientRect().height)/2 - g) + "px";
        if ("|#fff|3,35".split("|")[2] != "") {
            inner_headline.style.left =  "|#fff|3,35".split("|")[2].split(",")[0] + "px";
            inner_headline.style.top =  "|#fff|3,35".split("|")[2].split(",")[1] + "px";
        }
        if("|#fff|3,35".split("|")[1]!= ""){
            inner_headline.style.color = "|#fff|3,35".split("|")[1];
        }
    }
}



function animateHeadline(f, l) {

        
        // if ("|#fff|3,35".split("|")[2] != "") s.innerHTML += "#inner .headline { left: " + "|#fff|3,35".split("|")[2].split(",")[0] + "px; top: " + "|#fff|3,35".split("|")[2].split(",")[1] + "px; }\n";
        if(l != undefined){
            for (var i = 0; i < document.getElementsByClassName("headline-endText").length; i++) {
                slideElement(document.getElementsByClassName("headline-endText")[i]);

            }
        } else{
            for (var i = 0; i < document.getElementsByClassName("headline-text").length; i++) {
                slideElement(document.getElementsByClassName("headline-text")[i]);
            }
        }
        

    
    try {

        document.getElementsByClassName("container")[document.getElementsByClassName("container").length - 1].addEventListener("transitionend", function o(e) {
            e.currentTarget.removeEventListener(e.type, o);
            f();
        })
    } catch (error) {
        console.error("Error on animateHeadline(): " + error.message);
    }
}