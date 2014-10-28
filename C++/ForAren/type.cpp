#include<iostream>
#include<typeinfo>  

template <typename F, typename S> double Sum (F first, S second) {
    double sum = 0;
   std::cout<<typeid(first).name()<<std::endl
       <<typeid(second).name()<<std::endl;
    return sum;
}
int main() {
    Sum('5',5);
    return 0;
}
