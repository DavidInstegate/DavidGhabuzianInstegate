import java.io.Console;

public class Main {
    public static void main(String [] argv) {
        Console input = System.console();
        double x = Double.parseDouble(input.readLine("Please input x: "));
        Phure phure= new Phure();
        System.out.println("Phure(" + x + ") = " + phure.phure(x));
    }
}
