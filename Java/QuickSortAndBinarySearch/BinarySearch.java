public class BinarySearch{
    private int binarySearch(int [] array,int beginPoint,int endPoint,int value){
        if(beginPoint > endPoint){
            return -1;
        }
        int middle = (beginPoint + endPoint) / 2;
        if(value < array[middle]){
            return binarySearch(array,beginPoint,middle - 1, value);
        } else if(value > array[middle]) {
            return binarySearch(array,middle, endPoint, value);
        }
        return middle;
    }
    public int recursiveSearch(int array,int value){
        return binarySearch(array, 0, array.length, value);
    }
}
