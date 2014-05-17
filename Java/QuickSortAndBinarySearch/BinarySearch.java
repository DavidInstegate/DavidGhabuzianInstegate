public class BinarySearch{
    private int binarySearchRecursive(int [] array,int beginPoint,int endPoint,int value){
        if(beginPoint > endPoint){
            return -1;
        }
        int middle = (beginPoint + endPoint) / 2;
        if(value < array[middle]){
            return binarySearchRecursive(array,beginPoint,middle - 1,value);
        } else if(value > array[middle]) {
            return binarySearchRecursive(array,middle,endPoint,value);
        }
        return middle + 1;
    }
    private int binarySearchIterative(int [] array,int value){
        int beginPoint = 0;
        int endPoint = array.length - 1;
        while(beginPoint <= endPoint){
            int middle = (beginPoint + endPoint) / 2;
            if(value > array[middle]){
                beginPoint = middle + 1;
            }else if(value < array[middle]){
                endPoint = middle - 1;
            }else{
                return middle + 1;
            }
        }
        return -1;
    }
    public int recursiveSearch(int [] array,int value){
        return binarySearchRecursive(array,0,array.length,value);
    }
}
