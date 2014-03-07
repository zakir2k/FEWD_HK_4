 function highlightWin(roll){
        roll = roll.sort();
        var nRoll = "n"+roll[0]+roll[1]+roll[2];
        tempObject = highlightArray[nRoll];
        processCSS(tempObject);
        return tempObject;
    }

    function processCSS(array){
        for (var i in array){
            $(array[i]).addClass("highlight");
        }
    }

    function resetHighlight(){
        $("*").removeClass("highlight");
    }

        highlightArray = {
            n111 : ["#anyTriple", "#triple1", "#double1", "#single1"],
            n222 : ["#anyTriple", "#triple2", "#double2", "#single2", "#total6"],
            n333 : ["#anyTriple", "#triple3", "#double3", "#single3", "#total9"],
            n444 : ["#anyTriple", "#triple4", "#double4", "#single4", "#total12"],
            n555 : ["#anyTriple", "#triple5", "#double5", "#single5", "#total15"],
            n666 : ["#anyTriple", "#triple6", "#double6", "#single6"],
            n112 : ["#single1", "#single2", "#double1", "#twodice12", "#total4",  "#even", "#small"],
            n113 : ["#single1", "#single3", "#double1", "#twodice13", "#total5",  "#odd", "#small"],
            n114 : ["#single1", "#single4", "#double1", "#twodice14", "#total6",  "#even", "#small"],
            n115 : ["#single1", "#single5", "#double1", "#twodice15", "#total7",  "#odd", "#small"],
            n116 : ["#single1", "#single6", "#double1", "#twodice16", "#total8",  "#even", "#small"],
            n122 : ["#single1", "#single2", "#double2", "#twodice12", "#total5",  "#odd", "#small"],
            n223 : ["#single2", "#single3", "#double2", "#twodice23", "#total7",  "#odd", "#small"],
            n224 : ["#single2", "#single4", "#double2", "#twodice24", "#total8",  "#even", "#small"],
            n225 : ["#single2", "#single5", "#double2", "#twodice25", "#total9",  "#odd", "#small"],
            n226 : ["#single2", "#single6", "#double2", "#twodice26", "#total10", "#even", "#small"],
            n133 : ["#single1", "#single3", "#double3", "#twodice13", "#total7",  "#odd", "#small"],
            n233 : ["#single2", "#single3", "#double3", "#twodice23", "#total8",  "#even", "#small"],
            n334 : ["#single3", "#single4", "#double3", "#twodice34", "#total10", "#even", "#small"],
            n335 : ["#single3", "#single5", "#double3", "#twodice35", "#total11", "#odd", "#big"],
            n336 : ["#single3", "#single6", "#double3", "#twodice36", "#total12", "#even", "#big"],
            n144 : ["#single1", "#single4", "#double4", "#twodice14", "#total9",  "#odd", "#small"],
            n244 : ["#single2", "#single4", "#double4", "#twodice24", "#total10", "#even", "#small"],
            n344 : ["#single3", "#single4", "#double4", "#twodice34", "#total11", "#odd", "#big"],
            n445 : ["#single4", "#single5", "#double4", "#twodice45", "#total13", "#odd", "#big"],
            n446 : ["#single4", "#single6", "#double4", "#twodice46", "#total14", "#even", "#big"],
            n155 : ["#single1", "#single5", "#double5", "#twodice15", "#total11", "#odd", "#big"],
            n255 : ["#single2", "#single5", "#double5", "#twodice25", "#total12", "#even", "#big"],
            n355 : ["#single3", "#single5", "#double5", "#twodice35", "#total13", "#odd", "#big"],
            n455 : ["#single4", "#single5", "#double5", "#twodice45", "#total14", "#even", "#big"],
            n556 : ["#single5", "#single6", "#double5", "#twodice56", "#total16", "#even", "#big"],
            n166 : ["#single1", "#single6", "#double6", "#twodice16", "#total13", "#odd", "#big"],
            n266 : ["#single2", "#single6", "#double6", "#twodice26", "#total14", "#even", "#big"],
            n366 : ["#single3", "#single6", "#double6", "#twodice36", "#total15", "#odd", "#big"],
            n466 : ["#single4", "#single6", "#double6", "#twodice46", "#total14", "#even", "#big"],
            n566 : ["#single5", "#single6", "#double6", "#twodice56", "#total17", "#odd", "#big"],
            n126 : ["#single1", "#single2", "#single6", "#twodice12", "#twodice16", "#twodice26", "#total9", "#odd", "#small"],
            n123 : ["#single1", "#single2", "#single3", "#twodice12", "#twodice13", "#twodice23", "#total6", "#even", "#small", "#n4321"],
            n124 : ["#single1", "#single2", "#single4", "#twodice12", "#twodice14", "#twodice24", "#total7", "#odd", "#small", "#n4321"],
            n125 : ["#single1", "#single2", "#single5", "#twodice12", "#twodice15", "#twodice25", "#total8", "#even", "#small"],
            n135 : ["#single1", "#single3", "#single5", "#twodice13", "#twodice15", "#twodice35", "#total9", "#odd", "#small"],
            n136 : ["#single1", "#single3", "#single6", "#twodice13", "#twodice16", "#twodice36", "#total10", "#even", "#small"],
            n146 : ["#single1", "#single4", "#single6", "#twodice14", "#twodice16", "#twodice46", "#total11", "#odd", "#big"],
            n134 : ["#single1", "#single3", "#single4", "#twodice13", "#twodice14", "#twodice34", "#total8", "#even", "#small", "#n4321"],
            n234 : ["#single2", "#single3", "#single4", "#twodice23", "#twodice24", "#twodice34", "#total9", "#odd", "#small", "#n4321", "#n5432"],
            n145 : ["#single1", "#single4", "#single5", "#twodice14", "#twodice15", "#twodice45", "#total10", "#even", "#small"],
            n236 : ["#single2", "#single3", "#single6", "#twodice23", "#twodice26", "#twodice36", "#total11", "#odd", "#big", "#n6532"],
            n156 : ["#single1", "#single5", "#single6", "#twodice15", "#twodice16", "#twodice56", "#total12", "#even", "#big"],
            n256 : ["#single2", "#single5", "#single6", "#twodice25", "#twodice26", "#twodice56", "#total13", "#odd", "#big", "#n6532"],
            n235 : ["#single2", "#single3", "#single5", "#twodice23", "#twodice25", "#twodice35", "#total10", "#even", "#small", "#n5432", "#n6532"],
            n245 : ["#single2", "#single4", "#single5", "#twodice24", "#twodice25", "#twodice45", "#total11", "#odd", "#big", "#n5432"],
            n246 : ["#single2", "#single4", "#single6", "#twodice24", "#twodice26", "#twodice46", "#total12", "#even", "#big"],
            n346 : ["#single3", "#single4", "#single6", "#twodice34", "#twodice36", "#twodice46", "#total13", "#odd", "#big", "#n6543"],
            n356 : ["#single3", "#single5", "#single6", "#twodice35", "#twodice36", "#twodice56", "#total14", "#even", "#big", "#n6532", "#n6543"],
            n456 : ["#single4", "#single5", "#single6", "#twodice45", "#twodice46", "#twodice56", "#total15", "#odd", "#big", "#n6543"],
            n345 : ["#single3", "#single4", "#single5", "#twodice34", "#twodice35", "#twodice45", "#total12", "#even", "#big", "#n5432", "#n6543"],
            }