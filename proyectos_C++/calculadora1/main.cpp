/* 1° Escribe un programa que lea de la entrada estándar dos números
   y muestre en la salida estandar su suma,resta,multiplicación y
   división */
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
	
	cout<<"Digite un número: "; cin>>n1;
	cout<<"Digite otro número: "; cin>>n2;
	suma = n1+n2;
	resta = n1-n2;
	multiplicacion=n1*n2;
	division=n1/n2;
	cout<<"Suma: "<<suma<<endl;
	cout<<"Resta: "<<resta<<endl;
	cout<<"Multiplicación: "<<multiplicacion<<endl;
	cout<<"División: "<<division;
	return 0;
}
