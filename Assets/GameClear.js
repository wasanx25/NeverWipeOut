#pragma strict

var style2 :GUIStyle;

// objectを取得
// var obj :GameObject;
// var script :SceneScript;

// objectを探してる
// obj = GameObject.Find("SceneScript");
// script = obj.GetComponent(SceneScript);

function OnGUI () {
    GUI.Label(Rect(10,10,100,30), "Game Clear !!", style2);
}