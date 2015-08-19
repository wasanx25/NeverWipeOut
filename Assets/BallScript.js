#pragma strict

function Start () {
	// 一度0に設定する
	Physics.gravity = new Vector3(0, 0, 0);
}

function Update () {

	for (var touch : Touch in Input.touches) {
		if (touch.phase == TouchPhase.Began) {
			Physics.gravity = new Vector3(0, -9.8f, 0);
		}
	}


	if (transform.position.x > 13 || transform.position.x < -13 || transform.position.y < -17) {
		Application.LoadLevel("GameOver");
	}
}

function OnCollisionEnter (obj: Collision) {
	if (obj.gameObject.name == "Goal") {
		// 5秒後にゴール判定
		Invoke("GoalDecision", 5);
	}
}

function GoalDecision() {
	Application.LoadLevel("GameClear");
}
