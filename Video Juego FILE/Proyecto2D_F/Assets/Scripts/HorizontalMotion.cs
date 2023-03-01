/*
Move a GameObject horizontally using  arro keys or AD
*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HorizontalMotion : MonoBehaviour
{
    //Variable
    [SerializeField] float speed;
    [SerializeField] float limit;
    Vector3 move;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        move.x = Input.GetAxis("Horizontal");

        if(transform.position.x < -limit && move.x <0){
            move.x = 0;
        }

        else if(transform.position.x > limit && move.x > 0){
            move.x = 0;
        }

        // Debug.Log("X motion: "+ move.x);

        transform.Translate(move * speed * Time.deltaTime);
        //La velocidad se mueve en unidades por segundo
        //Delta time, cuanto se movio,    
    }
}
