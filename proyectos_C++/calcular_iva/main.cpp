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
	float iva=16,precioBruto,precioNeto=0;
	cout<<"Precio sin IVA: "<<endl;
	cin>>precioBruto;
	precioNeto = precioBruto+=precioBruto*(iva/100);
	
	cout<<"El precio total del producto es: $"<<precioNeto;
	
}

