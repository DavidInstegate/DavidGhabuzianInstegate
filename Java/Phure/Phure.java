public class Phure {
    private final double [] a = {1.5,2.5,3.5,4.4,5.3};
    private final double [] b = {1.2,2.3,3.4,4.6,3.3};
    private final double a0DevidedToTwo = 0.5;
    public double phure(double x) {
        final int n = a.length;
        double valueOfX = a0DevidedToTwo;
        for (int i = 0; i < n; ++i) {
            valueOfX += Math.cos(x) * a[i] + Math.sin(x) * b[i];
        }
        return valueOfX;
    }
}
