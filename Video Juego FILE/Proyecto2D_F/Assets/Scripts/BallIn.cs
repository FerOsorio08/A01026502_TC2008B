using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallIn : MonoBehaviour
{
    [SerializeField] Scores scoreObj;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    //trigger es un colider invisible, no va a detener mov pero se va a notar
    void OnTriggerEnter2D()
    {
        scoreObj.AddPoints(1);
    }
}
