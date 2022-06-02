jQuery(document).ready( function () {
    validate();
});
document.getElementById('permission-number').addEventListener("keyup", function (evt) {
    reversenumber();
}, false);
document.getElementById('permission-text').addEventListener("keyup", function (evt) {
    reversetext();
}, false);
function validate() {
    rowner = 0;
    wowner = 0;
    eowner = 0;
    rgroup = 0;
    wgroup = 0;
    egroup = 0;
    rpublic = 0;
    wpublic = 0;
    epublic = 0;
    townertotal = 0;
    tgrouptotal = 0;
    tpublictotal = 0;
    

    if (document.getElementById('rowner').checked) {
        rowner = 4;
    }
    if (document.getElementById('wowner').checked) {
        wowner = 2;
    }
    if (document.getElementById('eowner').checked) {
        eowner = 1;
    }
    let ownertotal = rowner + wowner + eowner;
    
    if (document.getElementById('rgroup').checked) {
        rgroup = 4;
    }
    if (document.getElementById('wgroup').checked) {
        wgroup = 2;
    }
    if (document.getElementById('egroup').checked) {
        egroup = 1;
    }
    let grouptotal = rgroup + wgroup + egroup;
    if (document.getElementById('rpublic').checked) {
        rpublic = 4;
    }
    if (document.getElementById('wpublic').checked) {
        wpublic = 2;
    }
    if (document.getElementById('epublic').checked) {
        epublic = 1;
    }
    let publictotal = rpublic + wpublic + epublic;
    document.getElementById("permission-number").value = "" + ownertotal + grouptotal + publictotal;
    if (ownertotal === 0) {
        townertotal = "---";
    } else if (ownertotal === 1) {
        townertotal = "--x";
    } else if (ownertotal === 2) {
        townertotal = "-w-";
    } else if (ownertotal === 3) {
        townertotal = "-wx";
    } else if (ownertotal === 4) {
        townertotal = "r--";
    } else if (ownertotal === 5) {
        townertotal = "r-x";
    } else if (ownertotal === 6) {
        townertotal = "rw-";
    } else if (ownertotal === 7) {
        townertotal = "rwx";
    }
    if (grouptotal === 0) {
        tgrouptotal = "---";
    } else if (grouptotal === 1) {
        tgrouptotal = "--x";
    } else if (grouptotal === 2) {
        tgrouptotal = "-w-";
    } else if (grouptotal === 3) {
        tgrouptotal = "-wx";
    } else if (grouptotal === 4) {
        tgrouptotal = "r--";
    } else if (grouptotal === 5) {
        tgrouptotal = "r-x";
    } else if (grouptotal === 6) {
        tgrouptotal = "rw-";
    } else if (grouptotal === 7) {
        tgrouptotal = "rwx";
    }
    if (publictotal === 0) {
        tpublictotal = "---";
    } else if (publictotal === 1) {
        tpublictotal = "--x";
    } else if (publictotal === 2) {
        tpublictotal = "-w-";
    } else if (publictotal === 3) {
        tpublictotal = "-wx";
    } else if (publictotal === 4) {
        tpublictotal = "r--";
    } else if (publictotal === 5) {
        tpublictotal = "r-x";
    } else if (publictotal === 6) {
        tpublictotal = "rw-";
    } else if (publictotal === 7) {
        tpublictotal = "rwx";
    }
    document.getElementById("permission-text").value = "" + townertotal + tgrouptotal + tpublictotal;
}
function reversenumber() {
    let number = document.getElementById("permission-number").value.trim();
    let numberlength = number.length;
    if (numberlength === 3) {
        const numberArray = number.split("");
        if (numberArray[0] == 0) {
            document.getElementById("rowner").checked = false;
            document.getElementById("wowner").checked = false;
            document.getElementById("eowner").checked = false;
            townertotal = "---";
        } else if (numberArray[0] == 1) {
            document.getElementById("rowner").checked = false;
            document.getElementById("wowner").checked = false;
            document.getElementById("eowner").checked = true;
            townertotal = "--x";
        } else if (numberArray[0] == 2) {
            document.getElementById("rowner").checked = false;
            document.getElementById("wowner").checked = true;
            document.getElementById("eowner").checked = false;
            townertotal = "-w-";
        } else if (numberArray[0] == 3) {
            document.getElementById("rowner").checked = false;
            document.getElementById("wowner").checked = true;
            document.getElementById("eowner").checked = true;
            townertotal = "-wx";
        } else if (numberArray[0] == 4) {
            document.getElementById("rowner").checked = true;
            document.getElementById("wowner").checked = false;
            document.getElementById("eowner").checked = false;
            townertotal = "r--";
        } else if (numberArray[0] == 5) {
            document.getElementById("rowner").checked = true;
            document.getElementById("wowner").checked = false;
            document.getElementById("eowner").checked = true;
            townertotal = "r-x";
        } else if (numberArray[0] == 6) {
            document.getElementById("rowner").checked = true;
            document.getElementById("wowner").checked = true;
            document.getElementById("eowner").checked = false;
            townertotal = "rw-";
        } else if (numberArray[0] == 7) {
            document.getElementById("rowner").checked = true;
            document.getElementById("wowner").checked = true;
            document.getElementById("eowner").checked = true;
            townertotal = "rwx";
        }
        if (numberArray[1] == 0) {
            document.getElementById("rgroup").checked = false;
            document.getElementById("wgroup").checked = false;
            document.getElementById("egroup").checked = false;
            tgrouptotal = "---";
        } else if (numberArray[1] == 1) {
            document.getElementById("rgroup").checked = false;
            document.getElementById("wgroup").checked = false;
            document.getElementById("egroup").checked = true;
            tgrouptotal = "--x";
        } else if (numberArray[1] == 2) {
            document.getElementById("rgroup").checked = false;
            document.getElementById("wgroup").checked = true;
            document.getElementById("egroup").checked = false;
            tgrouptotal = "-w-";
        } else if (numberArray[1] == 3) {
            document.getElementById("rgroup").checked = false;
            document.getElementById("wgroup").checked = true;
            document.getElementById("egroup").checked = true;
            tgrouptotal = "-wx";
        } else if (numberArray[1] == 4) {
            document.getElementById("rgroup").checked = true;
            document.getElementById("wgroup").checked = false;
            document.getElementById("egroup").checked = false;
            tgrouptotal = "r--";
        } else if (numberArray[1] == 5) {
            document.getElementById("rgroup").checked = true;
            document.getElementById("wgroup").checked = false;
            document.getElementById("egroup").checked = true;
            tgrouptotal = "r-x";
        } else if (numberArray[1] == 6) {
            document.getElementById("rgroup").checked = true;
            document.getElementById("wgroup").checked = true;
            document.getElementById("egroup").checked = false;
            tgrouptotal = "rw-";
        } else if (numberArray[1] == 7) {
            document.getElementById("rgroup").checked = true;
            document.getElementById("wgroup").checked = true;
            document.getElementById("egroup").checked = true;
            tgrouptotal = "rwx";
        }
        if (numberArray[2] == 0) {
            document.getElementById("rpublic").checked = false;
            document.getElementById("wpublic").checked = false;
            document.getElementById("epublic").checked = false;
            tpublictotal = "---";
        } else if (numberArray[2] == 1) {
            document.getElementById("rpublic").checked = false;
            document.getElementById("wpublic").checked = false;
            document.getElementById("epublic").checked = true;
            tpublictotal = "--x";
        } else if (numberArray[2] == 2) {
            document.getElementById("rpublic").checked = false;
            document.getElementById("wpublic").checked = true;
            document.getElementById("epublic").checked = false;
            tpublictotal = "-w-";
        } else if (numberArray[2] == 3) {
            document.getElementById("rpublic").checked = false;
            document.getElementById("wgroup").checked = true;
            document.getElementById("epublic").checked = true;
            tpublictotal = "-wx";
        } else if (numberArray[2] == 4) {
            document.getElementById("rpublic").checked = true;
            document.getElementById("wpublic").checked = false;
            document.getElementById("epublic").checked = false;
            tpublictotal = "r--";
        } else if (numberArray[2] == 5) {
            document.getElementById("rpublic").checked = true;
            document.getElementById("wpublic").checked = false;
            document.getElementById("epublic").checked = true;
            tpublictotal = "r-x";
        } else if (numberArray[2] == 6) {
            document.getElementById("rpublic").checked = true;
            document.getElementById("wpublic").checked = true;
            document.getElementById("epublic").checked = false;
            tpublictotal = "rw-";
        } else if (numberArray[2] == 7) {
            document.getElementById("rpublic").checked = true;
            document.getElementById("wpublic").checked = true;
            document.getElementById("epublic").checked = true;
            tpublictotal = "rwx";
        }
        document.getElementById("permission-text").value = "" + townertotal + tgrouptotal + tpublictotal;
    } else {
        document.getElementById("rowner").checked = false;
        document.getElementById("wowner").checked = false;
        document.getElementById("eowner").checked = false;
        document.getElementById("rgroup").checked = false;
        document.getElementById("wgroup").checked = false;
        document.getElementById("egroup").checked = false;
        document.getElementById("rpublic").checked = false;
        document.getElementById("wpublic").checked = false;
        document.getElementById("epublic").checked = false;
        document.getElementById("permission-text").value = "---------";
    }
}
function reversetext() {
    let text = document.getElementById("permission-text").value.trim();
    let textlength = text.length;
    const textArray = text.split("");
    if (textlength === 9) {
        document.getElementById("rowner").checked = textArray[0] === "r";
        if (textArray[0] === "r") {rowner = 4} else {rowner = 0}
        document.getElementById("wowner").checked = textArray[1] === "w";
        if (textArray[1] === "w") {wowner = 2} else {wowner = 0}
        document.getElementById("eowner").checked = textArray[2] === "x";
        if (textArray[2] === "x") {eowner = 1} else {eowner = 0}
        console.log(textArray[2])
        let ownertotal = rowner + wowner + eowner;
        document.getElementById("rgroup").checked = textArray[3] === "r";
        if (textArray[3] === "r") {rgroup = 4} else {rgroup = 0}
        document.getElementById("wgroup").checked = textArray[4] === "w";
        if (textArray[4] === "w") {wgroup = 2} else {wgroup = 0}
        document.getElementById("egroup").checked = textArray[5] === "x";
        if (textArray[5] === "x") {egroup = 1} else {egroup = 0}
        let grouptotal = rgroup + wgroup + egroup;
        document.getElementById("rpublic").checked = textArray[6] === "r";
        if (textArray[6] === "r") {rpublic = 4} else {rpublic = 0}
        document.getElementById("wpublic").checked = textArray[7] === "w";
        if (textArray[7] === "w") {wpublic = 2} else {wpublic = 0}
        document.getElementById("epublic").checked = textArray[8] === "x";
        if (textArray[8] === "x") {epublic = 1} else {epublic = 0}
        let publictotal = rpublic + wpublic + epublic;
        document.getElementById("permission-number").value = "" + ownertotal + grouptotal + publictotal;
    } else {
        document.getElementById("rowner").checked = false;
        document.getElementById("wowner").checked = false;
        document.getElementById("eowner").checked = false;
        document.getElementById("rgroup").checked = false;
        document.getElementById("wgroup").checked = false;
        document.getElementById("egroup").checked = false;
        document.getElementById("rpublic").checked = false;
        document.getElementById("wpublic").checked = false;
        document.getElementById("epublic").checked = false;
        document.getElementById("permission-number").value = "000";
    }
}