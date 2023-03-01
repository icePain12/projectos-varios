#include <iostream>
#include <cmath>

using namespace std;

int main() {
    double altura_inicial, tiempo, velocidad_inicial, aceleracion_gravedad = 9.81;
    double altura_final, velocidad_final;

    cout << "Ingrese la altura inicial (en metros): ";
    cin >> altura_inicial;

    cout << "Ingrese el tiempo transcurrido (en segundos): ";
    cin >> tiempo;

    cout << "Ingrese la velocidad inicial (en metros por segundo): ";
    cin >> velocidad_inicial;

    altura_final = altura_inicial - 0.5 * aceleracion_gravedad * pow(tiempo, 2);
    velocidad_final = velocidad_inicial - aceleracion_gravedad * tiempo;

    cout << "La altura final es: " << altura_final << " metros" << endl;
    cout << "La velocidad final es: " << velocidad_final << " metros por segundo" << endl;

    return 0;
}

