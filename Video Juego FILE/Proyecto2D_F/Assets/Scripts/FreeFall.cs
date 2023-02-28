using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FreeFall : MonoBehaviour
{
    [SerializeField] GameObject ball; //serialized field la hace visible en Unity
    [SerializeField] float delay;
    // Start is called before the first frame update
    void Start()
    {
        //Call the DropBall funciton after 0.5 sec
        //And then keepn calling it every set time
        InvokeRepeating("DropBall",0.5f,delay);
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    void DropBall()
    {
        Vector3 pos = new Vector3(Random.Range(-10.0f, 10.0f),6,0);
        //create a copy of the ball
        GameObject obj = Instantiate(ball,pos, Quaternion.identity );
        // doom the object to in 5 sec
        Destroy(obj, 5);
    }
}
