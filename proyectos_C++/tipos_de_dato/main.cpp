// Tipos de datos C++
#include<iostream>
#include<Windows.h>
using namespace std;
int main(){
	// Cambiar el título de la consola
    SetConsoleTitle("Tipos de Datos C++");
    // Cambiar el color de letra a verde
    HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
    SetConsoleTextAttribute(hConsole, FOREGROUND_GREEN);
	
	//Programa
	int entero = 15;
	float flotante = 10.45;
	double mayor = 16.3456;
	char letra = 'a';
	cout<<letra<<endl;
	
	
	return 0;
}
