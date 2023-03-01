#include<iostream>
#include<Windows.h>
using namespace std;
int main(){

	// Establecer el titulo de la consola.
     	SetConsoleTitle("Calculadora C++");
	// Establecer codificacion UTF-8 por defecto.
	    SetConsoleOutputCP(CP_UTF8);
	// Establecer el color del codigo a verde.
	    HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
	    SetConsoleTextAttribute(hConsole, FOREGROUND_GREEN);
	//  Inicia Programa.
	// Variables
	int escoger;
	float n1,n2,res = 0;
 	   	cout<<"¿Que desea hacer?"<<endl;
		cout<<"1) Sumar"<<endl;
		cout<<"2) Restar"<<endl;
		cout<<"3) Multiplicar"<<endl;
		cout<<"4) Dividir"<<endl;
		cin>>escoger;
		cout<<"Introducir primer numero: ";
				cin>>n1;
				cout<<"\n";
				cout<<"Introducir segundo numero: ";
				cin>>n2;
				cout<<"\n";
		switch(escoger){
			case 1:
				res = n1 + n2;
				cout<<n1<<" + "<<n2<<" = "<<res;
				break;
			case 2:
				res = n1 - n2;
				cout<<n1<<" - "<<n2<<" = "<<res;
			break;	
			case 3:
				res = n1 * n2;
				cout<<n1<<" x "<<n2<<" = "<<res;
			break;
			case 4:
				if(n2==0){
					cout<<"Error: No es posible dividir entre cero.";
				}
				else{
					res = n1 / n2;
					cout<<n1<<" / "<<n2<<" = "<<res;
				}
			break;
		}	
	return 0;
}
