#include <iostream>
using namespace std;
int main(){
    while(1){
//variables
        int item_A;
        int item_B;
//compare input + display
        cout << "enter a number to compare number:\nNumber 1:";
        cin >> item_A;
        cout << "Number 2:";
        cin >> item_B;
//compare logic
	item_A=int(item_A);
	item_B=int(item_B);
        if (item_A<item_B){
            cout << item_A << " is less than " << item_B << endl;
        } else if (item_A>item_B){
            cout << item_B << " is greater than " << item_A << endl;
        } else {
            cout << item_A << " is the same as " << item_B << endl;
        }
    }
}