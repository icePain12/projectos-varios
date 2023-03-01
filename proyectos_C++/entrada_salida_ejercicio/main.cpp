#include<iostream>
#include<Windows.h>

using namespace std;

int main(){
	// Titulo de la Consola
	SetConsoleTitle("Ejercicio Entrada Salida C++");
	// Codificacion UTF-8
	SetConsoleOutputCP(CP_UTF8);
	// Color de letra verde
	HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
	SetConsoleTextAttribute(hConsole, FOREGROUND_GREEN);
	
	int edad;
	char sexo[10];
	float altura;
	
	cout<<"Introducir Edad: "<<endl;
	cin>>edad;
	cout<<"Introducir Sexo M o F"<<endl;
	cin>>sexo;
	cout<<"Introducir Altura (metros)"<<endl;
	cin>>altura;
	
	cout<<"Los Datos Ingresados Fueron: "<<endl;
	cout<<"Edad: "<<edad<<" años"<<endl;
	cout<<"Sexo: "<<sexo<<endl;
	cout<<"Altura "<<altura<<"m"<<endl;
	
	
}
