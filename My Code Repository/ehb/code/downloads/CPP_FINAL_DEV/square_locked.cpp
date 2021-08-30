#include <iostream>
#include <cmath>
using namespace std;
int main()
{
while(1){
    const int siden=4;
    float sideln;
    string units;
    cout << "\n enter the length measurement unit: \n | c = centimeters | i = inches | m = meters | y = yards | f = feet | d = decimeters | ";

    cin >> units;

    if(units == "c"){
        units="cm";
    } else if(units == "i"){
        units="in";
    } else if(units == "m"){
        units="m";
    } else if(units == "y"){
        units="yd";
    } else if(units == "f"){
        units="ft";
    } else if(units == "d"){
        units="dm";
    } else {
        units="#404";
    };
    if(units == "#404"){
        cout << "invalid input! \n";
    } else {
        cout << "enter the number of sides in a square:\n";
        int answ;
        cin >> answ;
        if (answ == 4){
            cout << "correct\n";
        } else cout << "incorect: the correct answer is 4.\n";
    };
    if(siden!=4){
        cout << "invalid input! \n";
    } else {
        cout << "enter side length of the polygon:\n";
        cin >> sideln;
    };
    if(sideln <= 0 and siden !=4){
        cout << "invalid input! \n";
    } else {
        float poly = sideln*siden;
        float radian = ((180/siden) * M_PI)/180;
        poly *= sideln/(2*tan(radian));
        poly /= 2;
        cout << "\n The area of the polygon is:\n" << poly << units << "^2";
        bool ender;
        cout << "\n If you are finished strike any number then hit enter, otherwise strike 0 then hit enter"<< endl;
        cin >> ender;
        if (ender) return 0;
    }
  }
}