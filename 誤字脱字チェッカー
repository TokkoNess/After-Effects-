var thisFile = new File(this); //jsxのファイルを取得
var thisFolderPath = thisFile.path; //jsxのフォルダパスを取得

//~ ~~~~~~~~~~~~~~~Scriot UI ~~~~~~~~~~~~~~~

var winObj = (this instanceof Panel) ? this : new Window('palette', 'Auto Slide Show', undefined, {resizeable: true});

    var contentsGrp = winObj.add('group',undefined,'contentsGrp');
    contentsGrp.orientation = 'column';

    var tab = contentsGrp.add('tabbedpanel');
                        var compSettingPnl = tab.add('tab',undefined,'文字を書き出す');
                var compSettingGrp = compSettingPnl.add('group',undefined,'compSettingGrp');
                compSettingGrp.orientation = 'row';
                compSettingGrp.alignment = [ScriptUI.Alignment.LEFT,ScriptUI.Alignment.CENTER];
                    var compSettingGrpLeft = compSettingGrp.add('group',undefined,'compSettingGrpLeft');
                    compSettingGrpLeft.orientation = 'column';
                    compSettingGrpLeft.alignChildren = 'left';
                    
                    var compSettingGrpRight = compSettingGrp.add('group',undefined,'compSettingGrpRight');
                    compSettingGrpRight.orientation = 'column';
                    compSettingGrpRight.alignChildren = 'left';
                        var compSettingGrpRightGrp005 = compSettingGrpRight.add("button",[20,20,100,50],"実行");
                        compSettingGrpRightGrp005.orientation = 'row'; 

//~ ~~~~~~~~UI setting~~~~~~~~
//~ tab.spacing = 1;
//~ tab.margins = 1;

compSettingGrpLeft.spacing = 18;
compSettingGrpLeft.margins = 0;

//~ ~~~~~~~~UI setting~~~~~~~~

winObj.onResizing = winObj.onResize = function () {this.Layout.resize();};  

if (winObj instanceof Window) {  
winObj.center();  
winObj.show();  
} else {  
winObj.layout.layout(true);  
winObj.layout.resize();  
}  

// 全てのテキストレイヤーを出力する
compSettingGrpRightGrp005.onClick = function(){
function toHms(t) {
	var hms = "";
	var h = t / 3600 | 0;
	var m = t % 3600 / 60 | 0;
	var s = Math.floor(t % 60);

	if (h != 0) {
		hms = h + ":" + padZero(m) + ":" + padZero(s);
	} else if (m != 0) {
		hms = m + ":" + padZero(s);
	} else if (s < 10) {
		hms = "0:0" + s;
    } else { hms = "0:" + s;

	}

	return hms;

	function padZero(v) {
		if (v < 10) {
			return "0" + v;
		} else {
			return v;
		}
	}
}

var isTextLayer = function(layer){
if(!(layer && layer instanceof TextLayer)){
    return false;
    } else {
        return true;
    }
}


ItemCollection.prototype.getAllComposition = function(){
    var curItem, i, comps;
    comps = [];
    for(i=1; i<=this.length;  i+=1){
        curItem = this[i];
        if(curItem && curItem instanceof CompItem){
            comps.push(curItem);
            }
        }
    
    return comps;
    };

var myComps = app.project.items.getAllComposition();
var Lay4 = [];

function getTextLayers(comp){
for (i=1; i<=comp.layers.length; i++){
        if(isTextLayer(comp.layer(i)) == true){
        Lay4.push("");
        Lay4.push(toHms(comp.layer(i).inPoint));
        Lay4.push(comp.layer(i).property("ADBE Text Properties").property("ADBE Text Document").value);
            } else { ; //何もしない
    }
}
}


for(var iComp =0; iComp<myComps.length;  iComp++){
getTextLayers(myComps[iComp]);
 }

var reversed = Lay4.reverse();
var result = reversed.join("\n");

var projectObj = app.project.file;
var fileName = projectObj.name;
var decodeName = decodeURI(fileName);

var fileObj = File(decodeName+".txt").saveDlg("テキストを出力",["テキスト:*.txt", "All files:*.*"]);
if(fileObj){
    if(fileObj.open("w")){
        fileObj.write(result);
        fileObj.close();
        }
    }
    }
