// primer programa en C++
#include <iostream>
#include <Windows.h>
using namespace std;
int main()
{
    // Cambiar el título de la consola
    SetConsoleTitle("Mi Primer Programa en C++");

    // Obtener el identificador de la consola
    HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE);

    // Obtener la información actual de la fuente de la consola
    CONSOLE_FONT_INFOEX fontInfo;
    fontInfo.cbSize = sizeof(fontInfo);
    GetCurrentConsoleFontEx(hConsole, FALSE, &fontInfo);

    // Establecer el nombre y tamaño de la fuente
   // wcscpy_s(fontInfo.FaceName, L"Times New Roman");
    SetConsoleTextAttribute(hConsole, FOREGROUND_GREEN);
    fontInfo.dwFontSize.X = 8;
    fontInfo.dwFontSize.Y = 16;
    SetCurrentConsoleFontEx(hConsole, FALSE, &fontInfo);

    // Imprimir "Hola Mundo :D" en la consola
    cout << "Hola Mundo :D" << endl;

    return 0;
}
