import Debug "mo:base/Debug";
import Int "mo:base/Int";

actor Dbank{
    stable var currentValue = 200; // This is the creation of a contant in motoko
    //currentValue := 400;

    let id = 5858585858585867895858; //This is a contant in motoko

    Debug.print(debug_show(currentValue)); //This is the print for the variable in motoko

    Debug.print(debug_show(id)); //This is the print for the contant in motoko

    //Creating functions for top up of the values
    public func topUp(amount: Nat){
        currentValue += amount;
        Debug.print(debug_show(currentValue));
    };

    //topUp(1000);

    //Creating functions for withdrawing the amount
    public func withDraw(amount : Nat){
        let tempValue: Int = currentValue - amount;
        if (tempValue >= 0) {
            currentValue -= amount;
            Debug.print(debug_show(currentValue));
        } else {
            Debug.print("Not enough funds");
        }
    };

    //Function for checking the balance
    public query func checkBalance() : async Nat{
        return currentValue;
    };

    //
}