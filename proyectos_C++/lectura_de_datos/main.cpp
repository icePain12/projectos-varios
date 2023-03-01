// Lectura o entrada de datos
#include<iostream>
#include<Windows.h>
using namespace std;

/*
   Luis David todos los derechos reservados.

*/


int main(){
	// Establecer UTF-8 como la codificación de mi programa.
	SetConsoleOutputCP(CP_UTF8);
	// Cambiar el título de la consola
    SetConsoleTitle("Entrada de Datos C++");
    // Cambiar el color de letra a verde
    HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
    SetConsoleTextAttribute(hConsole, FOREGROUND_GREEN);
    //programa
    float numero; // Definiendo la variable.
	cout<<"Digite un número"<<endl;
    cin>>numero;  // Guardando la variable.
    
    cout<<"\nEl número que digitó es: "<<numero;
	return 0;
}
    
