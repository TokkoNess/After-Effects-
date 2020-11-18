var thisFile = new File(this); //jsxのファイルを取得
var thisFolderPath = thisFile.path; //jsxのフォルダパスを取得

//~ ~~~~~~~~~~~~~~~Scriot UI ~~~~~~~~~~~~~~~

var winObj = (this instanceof Panel) ? this : new Window('palette', 'Auto Slide Show', undefined, {resizeable: true});

    var contentsGrp = winObj.add('group',undefined,'contentsGrp');
    contentsGrp.orientation = 'column';
        try{
//~         var myBannerPath = new File (thisFolderPath+'/icon.png');
        var banner = contentsGrp.add('image',undefined,myBannerPath);
        banner.alignment = [ScriptUI.Alignment.LEFT,ScriptUI.Alignment.CENTER];
        //~     banner.alignment = [ScriptUI.Alignment.LEFT,ScriptUI.Alignment.CENTER]
        }
        catch(e){
        }

var box01 = [0,0,10,20];
var box02 = [0,0,70,20];

    var tab = contentsGrp.add('tabbedpanel');
        var tabSetting = tab.add('tab',undefined,'スクリプト');
//~         var tabEdit = tab.add('tab',undefined,'準備中');
        tabSetting.alignChildren = 'left';

            var compSettingPnl = tabSetting.add('panel',undefined,'文字色を変更');
                var compSettingGrp = compSettingPnl.add('group',undefined,'compSettingGrp');
                compSettingGrp.orientation = 'row';
                compSettingGrp.alignment = [ScriptUI.Alignment.LEFT,ScriptUI.Alignment.CENTER];
                    var compSettingGrpLeft = compSettingGrp.add('group',undefined,'compSettingGrpLeft');
                    compSettingGrpLeft.orientation = 'column';
                    compSettingGrpLeft.alignChildren = 'left';
                    
                    var compSettingGrpRight = compSettingGrp.add('group',undefined,'compSettingGrpRight');
                    compSettingGrpRight.orientation = 'row';
                    compSettingGrpRight.alignChildren = 'left';
                        var compSettingGrpRightGrp002_red = compSettingGrpRight.add("button",[20,20,50,50],"赤");
                        var compSettingGrpRightGrp002_black = compSettingGrpRight.add("button",[20,20,50,50],"黒");
                        var compSettingGrpRightGrp002_white = compSettingGrpRight.add("button",[20,20,50,50],"白");
                        compSettingGrpRightGrp002_red.orientation = 'row';            
                        compSettingGrpRightGrp002_black.orientation = 'row';                     
                        compSettingGrpRightGrp002_white.orientation = 'row';     
                        
 var compSettingPnl = tabSetting.add('panel',undefined,'枠を付ける');
                var compSettingGrp = compSettingPnl.add('group',undefined,'compSettingGrp');
                compSettingGrp.orientation = 'row';
                compSettingGrp.alignment = [ScriptUI.Alignment.LEFT,ScriptUI.Alignment.CENTER];
                    var compSettingGrpLeft = compSettingGrp.add('group',undefined,'compSettingGrpLeft');
                    compSettingGrpLeft.orientation = 'column';
                    compSettingGrpLeft.alignChildren = 'left';
                    
                    var compSettingGrpRight = compSettingGrp.add('group',undefined,'compSettingGrpRight');
                    compSettingGrpRight.orientation = 'column';
                    compSettingGrpRight.alignChildren = 'left';
                        var compSettingGrpRightGrp003_blackLine = compSettingGrpRight.add("button",[20,20,50,50],"黒");
                        compSettingGrpRightGrp003_blackLine.orientation = 'row';

                    var compSettingGrpRight = compSettingGrp.add('group',undefined,'compSettingGrpRight');
                    compSettingGrpRight.orientation = 'column';
                    compSettingGrpRight.alignChildren = 'left';
                        var compSettingGrpRightGrp003_whiteLine = compSettingGrpRight.add("button",[20,20,50,50],"白");
                        compSettingGrpRightGrp003_whiteLine.orientation = 'row';
                        
                     var compSettingGrpRight = compSettingGrp.add('group',undefined,'compSettingGrpRight');
                    compSettingGrpRight.orientation = 'column';
                    compSettingGrpRight.alignChildren = 'left';
                        var compSettingGrpRightGrp003_reset = compSettingGrpRight.add("button",[20,20,50,50],"無");
                        compSettingGrpRightGrp003_whiteLine.orientation = 'row';                       

var sizeLine = compSettingGrp.add("edittext", undefined, "10"); 
                        sizeLine.orientation = 'column';
                        sizeLine.alignChildren = 'left';
                        sizeLine.orientation = 'row';   
                        
 var compSettingPnl = tabSetting.add('panel',undefined,'1番目のレイヤーを移動');
                var compSettingGrp = compSettingPnl.add('group',undefined,'compSettingGrp');
                compSettingGrp.orientation = 'row';
                compSettingGrp.alignment = [ScriptUI.Alignment.LEFT,ScriptUI.Alignment.CENTER];
                    var compSettingGrpLeft = compSettingGrp.add('group',undefined,'compSettingGrpLeft');
                    compSettingGrpLeft.orientation = 'column';
                    compSettingGrpLeft.alignChildren = 'left';
                    
                    var compSettingGrpRight = compSettingGrp.add('group',undefined,'compSettingGrpRight');
                    compSettingGrpRight.orientation = 'column';
                    compSettingGrpRight.alignChildren = 'left';
                        var compSettingGrpRightGrp004 = compSettingGrpRight.add("button",[20,20,100,50],"実行");
                        compSettingGrpRightGrp004.orientation = 'row';
                        
                        
                        var compSettingPnl = tabSetting.add('panel',undefined,'文字を書き出す');
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
tabSetting.spacing = 2;
tabSetting.margins = 10;

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


// 文字のカラーを"D21C1D"にする
compSettingGrpRightGrp002_red.onClick = function(){
var Lay1 = app.project.activeItem.selectedLayers;
for (i=0; i<Lay1.length; i++){
var myComp = app.project.activeItem;
var myTextLayer = Lay1[i];
var mySourceText = myTextLayer.property("ADBE Text Properties").property("ADBE Text Document");
var myTextDoc = mySourceText.value;
var myColor = [210/255,28/255,29/255];

myTextDoc.fillColor = myColor; 
mySourceText.setValue(myTextDoc);
}
}


// 文字のカラーを"000000"にする
compSettingGrpRightGrp002_black.onClick = function(){
var Lay2 = app.project.activeItem.selectedLayers;
for (i=0; i<Lay2.length; i++){
var myTextLayer = Lay2[i];
var mySourceText = myTextLayer.property("ADBE Text Properties").property("ADBE Text Document");
var myTextDoc = mySourceText.value;
var myColor = [0/255,0/255,0/255];

myTextDoc.fillColor = myColor; 
mySourceText.setValue(myTextDoc);
}
}

// 文字のカラーを"FFFFFF"にする
compSettingGrpRightGrp002_white.onClick = function(){
var Lay2 = app.project.activeItem.selectedLayers;
for (i=0; i<Lay2.length; i++){
var myTextLayer = Lay2[i];
var mySourceText = myTextLayer.property("ADBE Text Properties").property("ADBE Text Document");
var myTextDoc = mySourceText.value;
var myColor = [255/255,255/255,255/255];

myTextDoc.fillColor = myColor; 
mySourceText.setValue(myTextDoc);
}
}


// 黒い枠を付ける
compSettingGrpRightGrp003_blackLine.onClick = function(){
var Lay3 = app.project.activeItem.selectedLayers;
var myColor = [0/255,0/255,0/255];
var myLay = app.executeCommand(9008);
for (i=0; i<Lay3.length; i++){
var myLay = Lay3[i];
myLay.property("Layer Styles").property("Stroke")("Color").setValue(myColor);
myLay.property("Layer Styles").property("Stroke")("Size").setValue(sizeLine.text);
}
}

// 白い枠を付ける
compSettingGrpRightGrp003_whiteLine.onClick = function(){
var Lay3 = app.project.activeItem.selectedLayers;
var myColor = [255/255,255/255,255/255];
var myLay = app.executeCommand(9008);
for (i=0; i<Lay3.length; i++){
var myLay = Lay3[i];
myLay.property("Layer Styles").property("Stroke")("Color").setValue(myColor);
myLay.property("Layer Styles").property("Stroke")("Size").setValue(sizeLine.text);
}
}

// 白い枠を付ける
compSettingGrpRightGrp003_reset.onClick = function(){
var Lay3 = app.project.activeItem.selectedLayers;
var myColor = [255/255,255/255,255/255];
var myLay = app.executeCommand(9008);
for (i=0; i<Lay3.length; i++){
var myLay = Lay3[i];
myLay.property("Layer Styles").property("Stroke")("Color").setValue(myColor);
myLay.property("Layer Styles").property("Stroke")("Size").setValue(1);
myLay.property("Layer Styles").property("Stroke")("opacity").setValue(sizeLine.text);
}
}

// 一番目のレイヤーを上に持ってくる
compSettingGrpRightGrp004.onClick = function(){
var posLay = app.project.activeItem.selectedLayers;
var myComp = app.project.activeItem;
myComp.layer(1).moveBefore(posLay[0]);
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