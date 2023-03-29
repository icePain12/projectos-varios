import json

Ci = float(input("Capital Inicial: "))
nt = int(input("Periodos: "))
r = int(input("Tasa de Interes por periodo: "))
periodo_actual = 1
nt_actual = nt
datos_periodos = {}
while periodo_actual <= nt:
    pago_capital = Ci/r
    Cf = Ci * ((1 + (r/100)/nt_actual)**nt_actual)
    pago_intereses = Cf / nt_actual
    pago_total = pago_capital + pago_intereses
    datos_periodos[periodo_actual] = {
    "Capital_Final": round(Cf, 2),
    "Pago_Intereses": round(pago_intereses, 2),
    "Pago_Capital": round(pago_capital, 2),
    "Pago_Total": round(pago_total, 2),
    "Capital_Final_Proximo": round(Ci, 2)
    }

with open('datos_periodos.json', 'w') as archivo:
    json.dump(datos_periodos, archivo)