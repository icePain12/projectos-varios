// See https://aka.ms/new-console-template for more information

class Program
{
    static void Main(String[] args)
    {
        Console.Title = "Buscar Números Primos";
        Console.ForegroundColor = ConsoleColor.Green;
        Console.Write("¿Cuántos números primos hay que encontrar: ");
        UInt32 n = Convert.ToUInt32(Console.ReadLine());
        UInt32 contador_primos = 0;
        UInt32 contador_numeros = 1;
        Console.WriteLine("Estos son los primeros " + n + " números primos: ");
        while (contador_primos < n)
        {
            if (esPrimo(contador_numeros))
            { 
                contador_primos++;
                Console.WriteLine(contador_primos + ") " +
                    contador_numeros);
             }
            contador_numeros++;
        }

       
    }
    static Boolean esPrimo(UInt32 n)
    {
        if (n == 1)
            return false;
        if (n == 2)
            return true;

        for (int i = 2; i < n; i++)
            if (n % i == 0)
                return false;

        return true;
    }
}


