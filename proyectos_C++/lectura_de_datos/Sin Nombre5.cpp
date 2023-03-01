/* 1° Escribe un programa que lea de la entrada estándar dos números
   y muestre en la salida estandar su suma,resta,multiplicación y
   división */
#include<iostream>
#include<Windows.h>
using namespace std;
int main(){
	// Establecer el titulo de la consola.
	SetConsoleTitle("Titulo");
	// Establecer codificacion UTF-8 por defecto.
	SetConsoleOutputCP(CP_UTF8);
	// Establecer el color del codigo a verde.
	HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
	SetConsoleTextAttribute(hConsole, FOREGROUND_GREEN);
	
	return 0;
}
