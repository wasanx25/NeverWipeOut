#pragma strict

var minAngle : float = -1;
var maxAngle : float = 1;
var speed : float = 0.01;
var rotateZ : float;

function Update () {

  // デバイス（スマホ）の加速度を取得
  var turn : float = Input.acceleration.x;

  // 現在の回転角度を0～360から-180～180に変換
  if (transform.eulerAngles.z > 180) {
    rotateZ = transform.eulerAngles.z - 360;
  } else {
    rotateZ = transform.eulerAngles.z;
  }

  // 現在の回転角度に入力(turn)を加味した回転角度をMathf.Clamp()を使いminAngleからMaxAngle内に収まるようにする
  var angleZ : float = Mathf.Clamp(rotateZ + turn * speed, minAngle, maxAngle);

  // 回転角度を-180～180から0～360に変換
  if (angleZ < 0) {
    angleZ = angleZ + 360;
  } else {
    angleZ = angleZ;
  }

  // 回転角度をオブジェクトに適用
  transform.rotation = Quaternion.Euler(0, 0, angleZ);
}
