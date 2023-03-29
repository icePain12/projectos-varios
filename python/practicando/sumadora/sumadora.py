import os
seguir=1
os.system('color a')
while seguir == 1:
    os.system('cls')
    num1=float(input("Introducir primero número: "))
    num2=float(input("Introducir segundo número: "))
    res=num1 + num2
    os.system('cls')
    print('Su resultado es: \n')
    print(f'{num1} + {num2} = {res} \n')
    while True:
        seguir=input("Desea realizar otra operacion: \n 1) Sí  \n 2) No \n")
        os.system('cls')
        try:
            seguir = int(seguir)
            if seguir ==1:
                break
            elif seguir == 2:
                print("\nGracias por utilizar el programa, vuelva pronto :)")
                seguir = 2
                break
            else:  
                print("\nEscogió una opción invalida introduzca una opción valida por favor :)\n")
        except ValueError:
            print("\nDebe introducir un número valido por favor :) \n")