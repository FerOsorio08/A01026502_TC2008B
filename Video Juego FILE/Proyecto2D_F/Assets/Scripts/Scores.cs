using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Scores : MonoBehaviour
{
    [SerializeField] TMP_Text tmpObject;
    int score;
    // Start is called before the first frame update
    void Start()
    {
        score = 0;
    }

    // Update is called once per frame
    public void AddPoints(int amount)
    {
        score += amount;
        tmpObject.text = "Score: " + score;
        Debug.Log("New score: " + score);        
    }
}
