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
    
    public void fillArrayToEqualValues(int [] array, int value){
        int arraySize = array.length;
        for(int i = 0; i < arraySize; ++i){
            array[i] = value;
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
            System.out.println("Filling array for positive values.");
            program.fillArrayToRandomValues(array);
            QuickSort  quickSort = new QuickSort();
            BinarySearch binarySearch = new BinarySearch();
            System.out.println("Sorting");
            quickSort.sort(array);
            System.out.println("Recursive BinarySearch for " + array.length + "th element.");
            System.out.println(binarySearch.recursiveSearch(array,array[array.length - 1]));
            System.out.println("Recursive BinarySearch recursive for -10 value.");
            System.out.println(binarySearch.recursiveSearch(array,-10));
            System.out.println("Iterative BinarySearch for " + array.length + "th element.");
            System.out.println(binarySearch.binarySearchIterative(array,array[array.length - 1]));
            System.out.println("Iterative BinarySearch for 0th element");
            System.out.println(binarySearch.binarySearchIterative(array,array[0]));
            System.out.println("Iterative BinarySearch for -10 value");
            System.out.println(binarySearch.binarySearchIterative(array,-10));
            System.out.println("Testing did array sorted");
            program.testForMonoton(array);
            System.out.println("Resorting sorted array");
            quickSort.sort(array);
            System.out.println("Equaling array to 20");
            program.fillArrayToEqualValues(array,20);
            System.out.println("Sorting array");
            quickSort.sort(array);
        }
    }
}
