public class QuickSort {
    private void quickSort(int [] array,final int  beginPoint,final int endPoint) {
        if(beginPoint >= endPoint){
            return;
        }
        int i = beginPoint;
        int j = endPoint;
        int item = array[(i + j) / 2];
        while(i <= j){
            while(array[i] < item) {
                ++i;
                if(i == endPoint) {
                    break;
                }
            }
            while(array[j] > item) {
                --j;
                if(j == beginPoint) {
                    break;
                }
            }
            if(i <= j) {
                int temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                ++i;
                --j;
            }
        }
        if(beginPoint < j){
            quickSort(array,beginPoint,j);
        }
        if(endPoint > i){
            quickSort(array,i,endPoint);
        }
    }
    public void sort(int [] array){
        quickSort(array,0,array.length - 1);
    }
}
