/* 1� Escribe un programa que lea de la entrada est�ndar dos n�meros
   y muestre en la salida estandar su suma,resta,multiplicaci�n y
   divisi�n */
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
	//
	int n1,n2, suma = 0,resta = 0, multiplicacion = 0, division = 0;
	
	cout<<"Digite un n�mero: "; cin>>n1;
	cout<<"Digite otro n�mero: "; cin>>n2;
	suma = n1+n2;
	resta = n1-n2;
	multiplicacion=n1*n2;
	division=n1/n2;
	cout<<"Suma: "<<suma<<endl;
	cout<<"Resta: "<<resta<<endl;
	cout<<"Multiplicaci�n: "<<multiplicacion<<endl;
	cout<<"Divisi�n: "<<division;
	return 0;
}
