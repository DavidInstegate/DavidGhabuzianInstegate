import java.util.Random;
import java.util.Arrays;

public class Main{
    public boolean FillArrayToRandomValues(int [] array) {
        if(array != null) {
            Random random = new Random();
            int arraySize = array.length;
            for(int i = 0; i < arraySize; ++i) {
                array[i] = random.nextInt(arraySize);
            }
            return true;
        }
        return false;
    }

    public void PrintArray(int [] array) {
        int arraySize = array.length;
        for(int i = 0; i < arraySize; ++i) {
            System.out.println(array[i]);
        }
    }

    public void TestForMonoton(int [] array) {
        int arraySize = array.length - 1;
        for(int i = 0; i < arraySize; ++i) {
            if(array[i] <= array[i + 1]) {
                continue;
            } else {
                System.out.println("feild");
                System.out.println(i);
                return;
            }
        }
        System.out.println("Yes");
    }

    public static void main(String [] argv) {
        int [] array = null;
        if(argv.length > 0) {
            int arraySize = Integer.parseInt(argv[0]);
            if (arraySize > 0)
                array = new int [arraySize];
        }
        Main program = new Main();
        if (array != null) {
            program.FillArrayToRandomValues(array);
            program.PrintArray(array);
        }
    }
}
