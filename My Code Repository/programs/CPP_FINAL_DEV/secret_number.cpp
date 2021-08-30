#include<iostream>
using namespace std;
int main(){
    int rn=4;
    while(1){
        if(rn>5){
            rn-=3;
        }else if(rn<1){
            rn+=2;
        };
        int number;
        cout<<"Instructions: Answer the question then press enter your keyboard.\n\nguess number between 1 and 5: ";
        cin>>number;
        if(number<rn){
            cout<<number<<" is less then secret number"<<endl;
        }
        else if(number>rn){
            cout<<"secret number is less then "<<number<<endl;
        }
        else{
            cout<<"correct! The answer was "<<rn<<endl;
            rn+=2;
        }
    }
}