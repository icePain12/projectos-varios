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
	int escoger, seguir=1;
	char flag;
	float n1,n2,res = 0;
	while(seguir != 2) // empezamos el bucle del programa
	{
		system("cls"); // sirve para limpiar la consola.
		cout<<"¿Que desea hacer?"<<endl; 
		cout<<"1) Sumar"<<endl;
		cout<<"2) Restar"<<endl;
		cout<<"3) Multiplicar"<<endl;
		cout<<"4) Dividir"<<endl;
		cin>>escoger;
		system("cls");
		if(escoger >=1 && escoger <=4) /*Valida que se haya escogido una opción correctamente */
		{
			cout<<"Introducir primer numero: ";
				cin>>n1;
				cout<<"\n";
				cout<<"Introducir segundo numero: ";
				cin>>n2;
				cout<<"\n";
		}
		else // Manda un mensaje de error si no se escogio una opcion valida
		{
			cout<<"Error: Opcion invalida, verifique sus datos"<<endl;
			system("pause"); // espera a que el usuario presione una tecla antes de seguir con el programa.
		}
		system("cls");
		switch(escoger) // Dependiendo de la opcion del usuario realizaremos la operacion correspondiente.
		{
			case 1: // Sumar
				res = n1 + n2;
				cout<<n1<<" + "<<n2<<" = "<<res;
				break;
			case 2: // Restar
				res = n1 - n2;
				cout<<n1<<" - "<<n2<<" = "<<res;
			break;	
			case 3: //Multiplicar
				res = n1 * n2;
				cout<<n1<<" x "<<n2<<" = "<<res;
			break;
			case 4: // Dividir
				if(n2==0){ // validamos que el Denominador no sea cero, pues entonces no se podria dividir.
					cout<<"Error: No es posible dividir entre cero.";
				}
				else{
					res = n1 / n2;
					cout<<n1<<" / "<<n2<<" = "<<res;
				}
			break;	
			default: // el código en esta linea se ejecutara cuando la variable no cuadre con alguna opcion esperada
			break;		   	
	}	 
	    cout<<"\n";
	    system("pause");
		cin.get(flag);
		system("cls");
		cout<<"Desea seguir haciendo operaciones?"<<endl; // validamos si el usuario desea continuar haciendo operaciones
		cout<<"1)Si"<<endl;
		cout<<"2)No"<<endl;
		cin>>seguir;
  }
  return 0;
}  	
