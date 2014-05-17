public class QuickSort {
    private void quickSort(int [] array,final int  beginPoint,final int endPoint) {
        if(beginPoint >= endPoint){
            return;
        }
        int positionI = beginPoint;
        int positionJ = endPoint;
        int middle = (positionI + positionJ) / 2;
        while(positionI < positionJ) {
            while(array[positionI] < array[middle]) {
                ++positionI;
                if(positionI == middle) {
                    break;
                }
            }
            while(array[positionJ] > array[middle]) {
                --positionJ;
                if(positionJ == middle) {
                    break;
                }
            }
            int temp = array[positionI];
            array[positionI] = array[positionJ];
            array[positionJ] = temp;
            ++positionI;
        }
        int temp = array[positionI];
        array[positionI] = array[endPoint];
        array[endPoint] = temp;
        quickSort(array,beginPoint,positionI);
        quickSort(array,positionI,endPoint);
    }
    public void sort(int [] array){
        quickSort(array,0,array.length - 1);
    }
}
