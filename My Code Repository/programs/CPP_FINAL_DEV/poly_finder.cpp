#include <iostream>
#include <cmath>
using namespace std;
//variables
int siden=0;
float sideln=0;
float height=0;
string units;
float polypr;
//shape discription to iniger function
int type(string xshape){
    if(xshape == "poly"){
        cout << "polygon";
        return 0;
    } else if(xshape == "poly_box_vol"){
        cout << "polygonal prism";
        return 1;
    } else if(xshape == "poly_pyr_vol"){
        cout << "polygonal pyramid";
        return 2;
    } else{
        return 3;
    }
}
//varible input function
int inputs(int x){
    if(x!=3){
        cout << "\n enter the number of sides in object:\n";
        cin >> siden;
        if(siden<3){
            cout << "invalid input! \n";
        } else{
            cout << "enter side length of the object\n";
            cin >> sideln;
        }
    } else {
        cout << "invalid input\n";
        sideln=0;
    };
    if(x!=0 and x!=3){
        cout << "enter height of the object\n";
        cin >> height;
    } else{
        height=0;
    };
    if(x==2){
        polypr=3;
    } else{
        polypr=1;
    }
}
//Polygonal Object finder: style + display are based off of IBM Basic v1.1
int main(){
while(1){
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
            cout << "enter the type of shape:\n | poly = polygon | poly_box_vol = volume of polygonal prism | poly_pyr_vol = volume of polygonal pyramid \n";
            string shape;
            cin >> shape;
            inputs(type(shape));
        };
        if(sideln <= 0){
            cout << "invalid input! \n";
        } else {
            string exp="^2";
            float poly = sideln*siden;
            float radian = ((180.0000/siden) * M_PI)/180.0000;
            poly *= sideln/(2*tan(radian));
            poly /= 2;
            if(height!=0){
            poly *= height;
            poly /= polypr;
            exp = "^3";
            };
            cout << "\n The area of the polygon is:\n" << poly << units << exp;
            bool ender;
            cout << "\n If you are finished strike any number then hit enter, otherwise strike 0 then hit enter"<< endl;
            cin >> ender;
            if (ender) return 0;
        }
    }
}