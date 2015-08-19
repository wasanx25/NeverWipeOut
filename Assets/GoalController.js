#pragma strict



function Update () {
	// 自動でx軸を動く
	transform.position = Vector3(Mathf.PingPong(Time.time, 3) - 10, transform.position.y, transform.position.z);
}