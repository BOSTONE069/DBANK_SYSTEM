import Debug "mo:base/Debug";
import Int "mo:base/Int";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor Dbank{
    stable var currentValue:Float = 200; // This is the creation of a contant in motoko with stable to enhance persistance
    //currentValue := 400;

    stable var startTime = Time.now();
    Debug.print(debug_show(startTime));

    let id = 5858585858585867895858; //This is a contant in motoko

    Debug.print(debug_show(currentValue)); //This is the print for the variable in motoko

    Debug.print(debug_show(id)); //This is the print for the contant in motoko

    //Creating functions for top up of the values
    public func topUp(amount: Float){
        currentValue += amount;
        Debug.print(debug_show(currentValue));
    };

    //topUp(1000);

    //Creating functions for withdrawing the amount
    public func withDraw(amount : Float){
        let tempValue: Float = currentValue - amount;
        if (tempValue >= 0) {
            currentValue -= amount;
            Debug.print(debug_show(currentValue));
        } else {
            Debug.print("Not enough funds");
        }
    };

    //Function for checking the balance using the query keyword
    public query func checkBalance() : async Float{
        return currentValue;
    };

    //function for caculating compound interest
    public func compoundInterest(){
        let currentTime = Time.now(); // current time is in seconds
        let timeElapsedNS = currentTime - startTime; // elapsed time is in seconds
        let timeElapsedS = timeElapsedNS / 1000000000; // convert to seconds

        currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS)); // compound interest value calculation

        startTime := currentTime;

    }


}