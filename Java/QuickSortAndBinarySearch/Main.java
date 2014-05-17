import java.util.Random;
import java.util.Arrays;

public class Main{
    public boolean fillArrayToRandomValues(int [] array) {
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

    public void printArray(int [] array) {
        int arraySize = array.length;
        for(int i = 0; i < arraySize; ++i) {
            System.out.println(array[i]);
        }
    }

    public void testForMonoton(int [] array) {
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
    
    public void fillArrayToEqualValues(int [] array){
        int arraySize = array.length;
        for(int i = 0; i < arraySize; ++i){
            array[i] = 100;
        }
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
            program.fillArrayToRandomValues(array);
            QuickSort  quickSort = new QuickSort();
            BinarySearch binarySearch = new BinarySearch();
            quickSort.sort(array);
            System.out.println(binarySearch.recursiveSearch(array[],array[10]));
            System.out.println(binarySearch.recursiveSearch(array[],-10));
            program.testForMonoton(array);
            quickSort.sort(array);
            program.fillArrayToEqualValues(array);
            quickSort.sort(array);
        }
    }
}