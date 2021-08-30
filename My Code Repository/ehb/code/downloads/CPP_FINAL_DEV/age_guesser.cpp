#include<iostream>
using namespace std;
int main(){
int guess;
// Generate random age to be guessed
int age = rand() % 101 + 7; //I am using snap scircuts age range
while(guess != age){
//usser prompt: Guess age
cout << "Guess the person's age, 8-108: ";
int guess;
cin >> guess;
if (guess == age){
cout << "Correct! the age is, "<< age;
break;
}
else if (guess != age){
if(guess<age){
    cout<<guess<<" is less then secret number"<<endl;
}
else if(guess>age){
    cout<<"secret number is less then "<<guess<<endl;
}
cout << "Incorrect, do you want to guess again?" << endl;
}
}
}