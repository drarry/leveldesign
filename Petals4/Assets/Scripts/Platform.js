var target: Transform;
	
var speed: float;

function Start () {

}	
	
function Update () {
    var step = speed * Time.deltaTime;
		
  transform.position = Vector3.MoveTowards(transform.position, target.position, step);
}

